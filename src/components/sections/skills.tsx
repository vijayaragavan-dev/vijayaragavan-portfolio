'use client';

import { useRef, MouseEvent } from 'react';
import { AnimateInView } from '../animate-in-view';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Braces, Server, Database, Code } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Terminal className="h-8 w-8 text-primary" />,
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: <Braces className="h-8 w-8 text-primary" />,
    skills: ['HTML', 'CSS', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ['Spring Boot', 'Node.js', 'Firebase'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Other Tools',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['Git', 'GitHub', 'Linux'],
  },
];

function SkillCard({ category, delay }: { category: typeof skillCategories[0], delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -15; // Softer rotation
    const rotateY = (x / width - 0.5) * 15;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <AnimateInView delay={delay}>
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-card border-2 border-border h-full group hover:border-primary transition-all duration-300 rounded-md hover:shadow-lg hover:shadow-primary/20"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}
      >
        <CardHeader className="flex flex-col items-center text-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/30 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            {category.icon}
          </div>
          <CardTitle className="text-xl font-bold transition-all duration-300 group-hover:text-glow group-hover:scale-105">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill, skillIndex) => (
              <AnimateInView
                  key={skill}
                  delay={delay + 100 * (skillIndex + 1)}
                  animationClass="opacity-0 scale-50"
              >
                <Badge className="text-sm px-3 py-1 bg-background border-border border text-foreground shadow-sm hover:bg-primary/80 hover:text-primary-foreground cursor-pointer transition-all duration-200">
                  {skill}
                </Badge>
              </AnimateInView>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  );
}


export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            The tools and technologies I use to build things.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} delay={200 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

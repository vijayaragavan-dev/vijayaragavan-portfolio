import { AnimateInView } from '../animate-in-view';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Braces, Globe, Server, Bot, Terminal } from 'lucide-react';

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
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Other Tools',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['Git', 'GitHub'],
  },
];


export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            The tools and technologies I use to build things.
          </p>
        </AnimateInView>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimateInView key={category.title} delay={200 * (index + 1)}>
              <Card className="bg-card border-2 border-border h-full group hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/30 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimateInView
                          key={skill}
                          delay={300 * (index + 1) + 100 * skillIndex}
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
          ))}
        </div>
      </div>
    </section>
  );
}

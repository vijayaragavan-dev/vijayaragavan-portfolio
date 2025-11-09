'use client';
import { useRef, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateInView } from '../animate-in-view';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { TypewriterEffect } from '../typewriter';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A sleek, animated personal portfolio to showcase my skills and projects, built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    image: PlaceHolderImages.find(img => img.id === 'project-portfolio'),
    demoUrl: '#',
    sourceUrl: 'https://github.com/vijayaragavan11/portfolio'
  },
  {
    title: 'College Portal',
    description: 'A comprehensive portal for students and faculty, featuring course registration, grade tracking, and announcements.',
    techStack: ['Spring Boot', 'React', 'MySQL', 'JWT'],
    image: PlaceHolderImages.find(img => img.id === 'project-college-portal'),
    demoUrl: '#',
    sourceUrl: 'https://github.com/vijayaragavan-dev/acad-flow-system?tab=readme-ov-file'
  },
  {
    title: 'AI Mood-Based Destination Finder',
    description: 'An innovative application that recommends travel destinations based on your current mood, powered by AI.',
    techStack: ['Next.js', 'React', 'Genkit', 'Tailwind CSS'],
    image: PlaceHolderImages.find(img => img.id === 'project-mood-destination'),
    demoUrl: 'https://triptell.vercel.app/',
    sourceUrl: 'https://github.com/vijayaragavan-dev/nextjs-boilerplate'
  }
];

function ProjectCard({ project, delay }: { project: typeof projects[0], delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -25;
    const rotateY = (x / width - 0.5) * 25;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  };

  return (
    <AnimateInView delay={delay} className="h-full">
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-xl border-2 border-border bg-card transition-all duration-200 ease-out hover:border-primary hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out' }}
      >
        <CardContent className="p-0 relative flex-grow">
          {project.image && (
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={project.image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 transform translate-y-1/4 group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {project.techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
            </div>
            <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
              <Button asChild size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                <Link href={project.demoUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Demo
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                <Link href={project.sourceUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> View Source
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimateInView>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            My Projects
          </h2>
          <TypewriterEffect words={["A selection of my work. Hover over the cards for a little magic."]} runOnce />
        </AnimateInView>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={200 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

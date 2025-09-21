import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimateInView } from '../animate-in-view';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TypewriterEffect } from '../typewriter';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimateInView>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Hello, I&apos;m <span className="text-primary text-glow">Vijayaragavan</span>
          </h1>
        </AnimateInView>
        <AnimateInView delay={200}>
          <TypewriterEffect />
        </AnimateInView>
        <AnimateInView delay={400} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group transition-transform duration-300 ease-in-out hover:scale-105">
            <a href="#contact">
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-accent-foreground">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </Link>
          </Button>
        </AnimateInView>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce hover:text-primary transition-colors" />
      </a>
    </section>
  );
}

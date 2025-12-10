import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimateInView } from '../animate-in-view';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TypewriterEffect } from '../typewriter';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const words = ['A Developer', 'A Programmer', 'A Tech Enthusiast'];

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimateInView>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Hello, I&apos;m <span className="text-primary text-glow">Vijayaragavan</span>
          </h1>
        </AnimateInView>
        <AnimateInView delay={200}>
          <TypewriterEffect words={words} staticText="I am" runOnce />
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

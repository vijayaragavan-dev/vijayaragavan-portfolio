'use client';

import Link from 'next/link';
import { ArrowRight, Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { AnimateInView } from '../animate-in-view';
import { Button } from '@/components/ui/button';
import { TypewriterEffect } from '../typewriter';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vijaya-ragavan-17a344370/', name: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/vijayaragavan-dev', name: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/v_ragavan_og/', name: 'Instagram' },
  { icon: Phone, href: 'tel:+919361093738', name: 'Mobile' },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative noise-bg">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            Get In Touch
          </h2>
          <TypewriterEffect words={["Have a project in mind or just want to say hi? Feel free to reach out."]} runOnce />
        </AnimateInView>

        <div className="grid grid-cols-1 justify-items-center">
          <AnimateInView delay={400} className="space-y-8 text-center">
            <div>
              <TypewriterEffect words={["Connect with me"]} as="h3" className="text-2xl font-semibold mb-4 font-headline text-center" runOnce />
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map(({ icon: Icon, href, name }, index) => (
                  <AnimateInView key={href} delay={500 + index * 100} animationClass="opacity-0 scale-50">
                    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                      <div className="group rounded-full p-3 bg-secondary border-2 border-transparent transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110">
                        <Icon className="h-7 w-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:icon-glow animate-float" />
                      </div>
                    </Link>
                  </AnimateInView>
                ))}
              </div>
            </div>
             <div>
              <TypewriterEffect words={["Email"]} as="h3" className="text-2xl font-semibold mb-2 font-headline text-center" runOnce />
              <a href="mailto:vijayaragavanvk10@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300">
                vijayaragavanvk10@gmail.com
              </a>
            </div>
            <div>
              <TypewriterEffect words={["My Resume"]} as="h3" className="text-2xl font-semibold mb-4 font-headline text-center" runOnce />
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}

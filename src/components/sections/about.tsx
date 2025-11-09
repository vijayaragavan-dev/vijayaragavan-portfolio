'use client';

import { AnimateInView } from '@/components/animate-in-view';
import { TypewriterEffect } from '@/components/typewriter';

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            About Me
          </h2>
          <TypewriterEffect words={["Hello, I am Vijay Ragavan"]} as="p" className="text-lg" runOnce />
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN (previously image section) - now kept empty to preserve layout */}
          <AnimateInView
            delay={200}
            className="group relative w-full max-w-sm mx-auto"
            animationClass="opacity-0 scale-90"
          >
            {/* Image removed as per request */}
          </AnimateInView>

          {/* RIGHT COLUMN - unchanged */}
          <AnimateInView delay={400} className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold font-headline">A Passionate Developer on a Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am an enthusiastic and dedicated Computer Science Engineering student with a strong passion for developing innovative and efficient solutions. My journey in tech is driven by a constant curiosity and a desire to learn new technologies. I thrive on turning complex problems into beautiful, functional, and user-centric applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy exploring the latest advancements in AI, contributing to open-source projects, and tackling challenges on platforms like LeetCode.
            </p>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}

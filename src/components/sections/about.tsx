'use client';

import Image from 'next/image';
import { AnimateInView } from '@/components/animate-in-view';
import { TypewriterEffect } from '@/components/typewriter';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-image');

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateInView className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            About Me
          </h2>
          <TypewriterEffect words={["Hello, I am Vijayaragavan"]} as="p" className="text-lg" runOnce />
        </AnimateInView>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* LEFT COLUMN: Image */}
          <AnimateInView delay={200} className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              {profileImage && (
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20 transform-gpu transition-transform duration-[10000ms] group-hover:rotate-[360deg] animate-float">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={profileImage.imageHint}
                  />
                </div>
              )}
               <div className="absolute inset-0 border-4 border-primary/50 rounded-full animate-pulse"></div>
            </div>
          </AnimateInView>

          {/* RIGHT COLUMN: Text */}
          <AnimateInView delay={400} className="md:col-span-3 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold font-headline text-glow">A Passionate Developer on a Mission</h3>
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

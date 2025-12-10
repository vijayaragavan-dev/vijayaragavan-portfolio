'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimateInView } from '@/components/animate-in-view';
import { TypewriterEffect } from '@/components/typewriter';
import { ScrollArea } from '../ui/scroll-area';
import placeholderData from '@/lib/placeholder-images.json';

export function AboutSection() {
  // find the profile image entry by ID
  const profileImage = placeholderData.placeholderImages.find(
    (img: { id: string }) => img.id === 'profile-image'
  );

  // src state so we can fallback to /profile.jpg if the image fails to load
  const [imgSrc, setImgSrc] = useState<string>(profileImage?.imageUrl ?? '/profile.jpg');

  // keep src in sync if profileImage changes (important when editing placeholder JSON)
  useEffect(() => {
    setImgSrc(profileImage?.imageUrl ?? '/profile.jpg');
  }, [profileImage?.imageUrl]);

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* subtle background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <AnimateInView className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            About Me
          </h2>
          <TypewriterEffect
            words={['Hello, I am Vijayaragavan']}
            as="p"
            className="text-lg"
            runOnce
          />
        </AnimateInView>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* LEFT IMAGE */}
          <AnimateInView delay={200} className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* soft glow behind the circle */}
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/*
                Render the profile image with a safe fallback.
                imgSrc is controlled by state so we can set it to /profile.jpg on error.
              */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20 transform-gpu transition-transform duration-[10000ms] group-hover:rotate-[360deg] animate-float">
                <Image
                  src={imgSrc}
                  alt={(profileImage && profileImage.description) || 'Vijayaragavan profile picture'}
                  width={400}
                  height={400}
                  // keep the face centered and fill the circle
                  className="object-cover object-center w-full h-full"
                  // when the image fails to load (Firebase Studio preview or other), fallback to /profile.jpg
                  onError={() => {
                    if (imgSrc !== '/profile.jpg') setImgSrc('/profile.jpg');
                  }}
                  // data hint (keeps existing behavior)
                  data-ai-hint={profileImage?.imageHint ?? 'Round profile image'}
                />
              </div>

              {/* thin border ring */}
              <div className="absolute inset-0 border-4 border-primary/50 rounded-full animate-pulse" />
            </div>
          </AnimateInView>

          {/* RIGHT TEXT */}
          <AnimateInView delay={400} className="md:col-span-3">
            <ScrollArea className="h-[250px] w-full pr-4">
              <div className="space-y-6 text-center md:text-left p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-card/50">
                <h3 className="text-2xl font-semibold font-headline text-glow">
                  A Passionate Developer on a Mission
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  I am an enthusiastic and dedicated Computer Science Engineering student with a strong passion for developing innovative and efficient solutions. My journey in tech is driven by curiosity and a desire to learn new technologies. I enjoy building user-centric applications and solving complex problems through clean design.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, I explore the latest advancements in AI, contribute to open-source projects, and solve challenges on platforms like LeetCode.
                </p>
              </div>
            </ScrollArea>
          </AnimateInView>

        </div>
      </div>
    </section>
  );
}
export default AboutSection;

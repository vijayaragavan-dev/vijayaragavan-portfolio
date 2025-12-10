'use client';

import Image from 'next/image';
import { AnimateInView } from '@/components/animate-in-view';
import { TypewriterEffect } from '@/components/typewriter';
import { ScrollArea } from '../ui/scroll-area';

export function AboutSection() {
  const profileImage = {
    id: "profile-image",
    description: "Vijayaragavan's profile picture",
    imageUrl: "https://images.unsplash.com/photo-1623854182493-9c41743a6c17?q=80&w=400&h=400&fit=crop",
    imageHint: "portrait man"
  };

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
            words={["Hello, I am Vijayaragavan"]}
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

              {profileImage ? (
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20 transform-gpu transition-transform duration-[10000ms] group-hover:rotate-[360deg] animate-float">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={400}
                    height={400}
                    // object-cover keeps the circle filled, object-center centers the face
                    className="object-cover object-center w-full h-full"
                    data-ai-hint={profileImage.imageHint}
                  />
                </div>
              ) : (
                // fallback: empty circle if profileImage not found
                <div className="w-full h-full rounded-full bg-card/40 flex items-center justify-center text-sm text-muted-foreground">
                  No profile image found
                </div>
              )}

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

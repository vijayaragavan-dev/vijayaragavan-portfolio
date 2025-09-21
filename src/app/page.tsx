import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

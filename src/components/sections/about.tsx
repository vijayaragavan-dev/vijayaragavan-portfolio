import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateInView } from '../animate-in-view';
import { Card, CardContent } from '@/components/ui/card';

const timeline = [
  {
    date: '2021 - 2025',
    title: 'B.Tech in Information Technology',
    institution: 'University College of Engineering, Pattukkottai',
    description: 'Pursuing a comprehensive curriculum in IT with a focus on software development, data structures, and algorithms.',
  },
  {
    date: '2020 - 2021',
    title: 'HSC (Higher Secondary Certificate)',
    institution: 'St. Antony\'s Higher Secondary School, Thanjavur',
    description: 'Completed my higher secondary education with a focus on computer science and mathematics.',
  },
];

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-image');

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A glimpse into my journey and background.
          </p>
        </AnimateInView>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <AnimateInView className="md:col-span-1 flex justify-center" delay={200}>
            <div className="relative group">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={250}
                  height={250}
                  className="rounded-full object-cover border-4 border-primary/50 animate-spin-slow group-hover:animate-none"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse" />
            </div>
          </AnimateInView>
          <div className="md:col-span-2 space-y-8">
            <AnimateInView delay={400}>
              <h3 className="text-2xl font-semibold font-headline">Who I Am</h3>
              <p className="mt-2 text-muted-foreground">
                I am a dedicated and results-oriented Information Technology student with a strong passion for developing innovative software solutions. I thrive on challenges and am constantly seeking opportunities to expand my knowledge and skills in the ever-evolving world of technology. My goal is to leverage my technical expertise to build meaningful products that solve real-world problems.
              </p>
            </AnimateInView>
            <AnimateInView delay={600}>
              <h3 className="text-2xl font-semibold font-headline">Education & Experience</h3>
              <div className="relative mt-4 space-y-8 pl-6 before:absolute before:inset-y-0 before:w-px before:bg-border before:left-0">
                {timeline.map((item, index) => (
                   <AnimateInView key={index} delay={700 + index * 100} className="relative">
                     <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm font-medium text-primary">{item.institution}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                   </AnimateInView>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateInView } from '../animate-in-view';
import { Card, CardContent } from '@/components/ui/card';

const timeline = [
  {
    date: '2024 - 2028 (Expected)',
    title: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
    institution: 'Saranathan College of Engineering, Panjappur, Trichy',
    description: 'Core focus on Computer Science fundamentals, Data Structures & Algorithms, Object-Oriented Programming, Web Development, and Software Engineering. Actively involved in academic projects, coding practices, and technical workshops to strengthen problem-solving and development skills. Gained proficiency in C, C++, Java, Python, HTML, CSS, JavaScript, and modern web technologies. Exploring advanced topics including cloud computing, database management, system design, and AI concepts.',
  },
];

export function AboutSection() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-image');
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            About Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            A glimpse into my journey, skills, and passion for creating digital experiences.
          </p>
        </AnimateInView>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Image */}
          <AnimateInView delay={200} className="lg:col-span-1">
            {profileImage && (
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
                <Image
                  src={profileImage.imageUrl}
                  alt="Vijayaragavan"
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto"
                  data-ai-hint={profileImage.imageHint}
                />
            </Card>
            )}
          </AnimateInView>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <AnimateInView delay={400}>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold font-headline transition-all duration-300 hover:text-glow hover:scale-105 mb-4">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am <span className="text-primary font-semibold">Vijay Ragavan</span>, an enthusiastic <span className="text-primary font-semibold">Computer Science and Engineering student</span> with a strong passion for transforming ideas into reality. With a solid foundation in <span className="text-primary font-semibold">C, C++, Python, and Java</span>, I am continuously expanding my expertise in <span className="text-primary font-semibold">full-stack web development</span>.
                    <br/><br/>
                    My journey in technology is fueled by a desire to build innovative, user-centric, and performant applications. I am deeply interested in <span className="text-primary font-semibold">software engineering, scalable system design, and AI</span>, constantly seeking to learn and apply modern web frameworks and cloud technologies to solve real-world problems.
                  </p>
                </CardContent>
              </Card>
            </AnimateInView>

            <AnimateInView delay={600}>
                <h3 className="text-2xl font-semibold font-headline transition-all duration-300 hover:text-glow hover:scale-105 mb-4">Education</h3>
                <div className="relative space-y-8 pl-6 before:absolute before:inset-y-0 before:w-px before:bg-border before:left-0">
                  {timeline.map((item, index) => (
                    <AnimateInView key={index} delay={700 + index * 100} className="relative">
                      <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-primary animate-pulse" />
                        <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                            <CardContent className="p-6">
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                <h4 className="font-semibold text-lg transition-all duration-300 hover:font-bold hover:text-glow hover:scale-105 mt-1">{item.title}</h4>
                                <p className="text-sm font-medium text-primary mt-1">{item.institution}</p>
                                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
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

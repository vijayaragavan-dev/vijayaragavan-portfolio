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

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A glimpse into my journey and background.
          </p>
        </AnimateInView>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <AnimateInView className="md:col-span-1 flex justify-center" delay={200}>
            <div className="relative group">
              <Image
                src="/pfp.jpg"
                alt="Vijayaragavan's profile picture"
                width={250}
                height={250}
                className="rounded-full object-cover border-4 border-primary/50 transition-transform duration-500 ease-in-out group-hover:rotate-6"
                data-ai-hint="portrait man"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse" />
            </div>
          </AnimateInView>
          <div className="md:col-span-2 space-y-8">
            <AnimateInView delay={400}>
              <h3 className="text-2xl font-semibold font-headline transition-all duration-300 hover:text-glow hover:scale-105">Who I Am</h3>
              <p className="mt-2 text-muted-foreground">
                I am <span className="text-primary font-semibold">Vijay Ragavan</span>, an enthusiastic <span className="text-primary font-semibold">Computer Science and Engineering student</span> with strong foundations in <span className="text-primary font-semibold">C, C++, Python, and Java</span>, and growing expertise in <span className="text-primary font-semibold">full-stack web development</span>.
                <br/><br/>
                My journey in technology began with building impactful projects such as a <span className="text-primary font-semibold">weather application, e-commerce website, interactive quiz platform, responsive UI components, and matrix-based calculators</span>. These projects have sharpened my skills in <span className="text-primary font-semibold">frontend and backend development, algorithms, data structures, and problem-solving techniques</span>.
                <br/><br/>
                I am deeply passionate about <span className="text-primary font-semibold">software engineering, web technologies, and scalable application design</span>. Currently, I am exploring <span className="text-primary font-semibold">data structures & algorithms (DSA)</span> for efficient coding, and diving into <span className="text-primary font-semibold">Java multithreading, OOPs concepts, and system design</span>.
                <br/><br/>
                With a keen interest in <span className="text-primary font-semibold">AI, cloud technologies, and modern web frameworks</span>, I strive to build solutions that are <span className="text-primary font-semibold">innovative, user-centric, and performance-driven</span>.
                <br/><br/>
                ⚡ Outside academics, I actively participate in <span className="text-primary font-semibold">tech events and debates</span>, showcasing communication and teamwork skills alongside technical expertise. My ultimate goal is to evolve into a <span className="text-primary font-semibold">proficient full-stack developer</span> and contribute to <span className="text-primary font-semibold">real-world problem solving</span> through <span className="text-primary font-semibold">modern software solutions</span>.
              </p>
            </AnimateInView>
            <AnimateInView delay={600}>
              <h3 className="text-2xl font-semibold font-headline transition-all duration-300 hover:text-glow hover:scale-105">Education</h3>
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

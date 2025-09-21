import { AnimateInView } from '../animate-in-view';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Tailwind CSS',
  'React', 'Next.js', 'Spring Boot', 'Node.js',
  'MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'Java'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            The tools and technologies I use to build things.
          </p>
        </AnimateInView>
        
        <AnimateInView delay={200}>
            <Card className="max-w-4xl mx-auto bg-card border-2 border-border">
                <CardContent className="p-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <AnimateInView
                                key={skill}
                                delay={100 * index}
                                className="transition-transform duration-300 hover:scale-110"
                                animationClass='opacity-0 scale-50'
                            >
                                <Badge className="text-base md:text-lg px-4 py-2 bg-background border-border border-2 text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground cursor-pointer">
                                    {skill}
                                </Badge>
                            </AnimateInView>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </AnimateInView>
      </div>
    </section>
  );
}

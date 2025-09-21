'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, Github, Instagram, Linkedin, Loader2, Mail, Phone } from 'lucide-react';
import { ContactFormState, submitContactForm } from '@/app/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { AnimateInView } from '../animate-in-view';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TypewriterEffect } from '../typewriter';
import { Label } from '../ui/label';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vijaya-ragavan-17a344370/', name: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/vijayaragavan-dev', name: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/v_ragavan_og/', name: 'Instagram' },
  { icon: Phone, href: 'tel:+919361093738', name: 'Mobile' },
  { icon: Mail, href: 'mailto:vijayaragavanvk10@gmail.com', name: 'Email' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="group w-full transition-all duration-300 ease-in-out hover:button-glow hover:scale-105 active:scale-95">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { success: false, message: '', errors: null };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  // To prevent showing stale errors
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [messageError, setMessageError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
        setNameError(undefined);
        setEmailError(undefined);
        setMessageError(undefined);
      } else {
        setNameError(state.errors?.name?.[0]);
        setEmailError(state.errors?.email?.[0]);
        setMessageError(state.errors?.message?.[0]);
        // Only show toast if there are no field-specific errors
        if (!state.errors) {
            toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
            });
        }
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline transition-all duration-300 hover:text-glow hover:scale-105">
            Get In Touch
          </h2>
          <TypewriterEffect words={["Have a project in mind or just want to say hi? Feel free to reach out."]} />
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateInView delay={200}>
            <h3 className="text-2xl font-semibold mb-6 font-headline transition-all duration-300 hover:text-glow hover:scale-105">Contact Me</h3>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required className="bg-secondary h-12 text-base"/>
                {nameError && <p className="text-sm text-destructive">{nameError}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your Email" required className="bg-secondary h-12 text-base"/>
                {emailError && <p className="text-sm text-destructive">{emailError}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Your Message" rows={5} required className="bg-secondary text-base"/>
                {messageError && <p className="text-sm text-destructive">{messageError}</p>}
              </div>
              <SubmitButton />
            </form>
          </AnimateInView>
          <AnimateInView delay={400} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-headline transition-all duration-300 hover:text-glow hover:scale-105">Connect with me</h3>
              <div className="flex flex-wrap gap-4">
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
              <h3 className="text-2xl font-semibold mb-2 font-headline transition-all duration-300 hover:text-glow hover:scale-105">Email</h3>
              <a href="mailto:vijayaragavanvk10@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300">
                vijayaragavanvk10@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-headline transition-all duration-300 hover:text-glow hover:scale-105">My Resume</h3>
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

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import { Logo } from '../logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vijaya-ragavan-17a344370/', name: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vijayaragavan-dev', name: 'GitHub' },
    { icon: Code, href: '#', name: 'LeetCode' }, // Replace with actual LeetCode URL
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-secondary border-t border-border py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Transforming ideas into scalable digital solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 shrink-0 text-primary"/>
                <a href="mailto:harinivishal5@gmail.com" className="hover:text-primary transition-colors duration-300">harinivishal5@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 shrink-0 text-primary"/>
                <a href="tel:+918667834495" className="hover:text-primary transition-colors duration-300">+91 86678 34495</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary"/>
                <span>Trichy, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <div className="group rounded-full p-3 bg-background border-2 border-border transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Vijay Ragavan | All Rights Reserved
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group text-muted-foreground hover:text-primary"
          >
            Back to Top
            <ArrowUp className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

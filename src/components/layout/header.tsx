'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume', external: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLink = ({ href, label, external }: { href: string; label: string; external?: boolean }) => (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-base font-medium text-muted-foreground transition-all duration-300 ease-in-out px-3 py-2 rounded-md hover:text-primary hover:bg-accent/50 hover:font-bold hover:scale-105"
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/90 border-b border-border/20 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className={cn('opacity-0', isMounted && 'fade-in-down')}>
          <Logo />
        </div>
        <p className={cn('hidden md:block text-sm font-semibold text-primary animate-pulse opacity-0', isMounted && 'fade-in-down')} style={{animationDelay: '200ms'}}>Portfolio</p>
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link, index) => (
            <div key={link.href} className={cn('opacity-0', isMounted && 'fade-in-down')} style={{animationDelay: `${400 + index * 100}ms`}}>
              <NavLink {...link} />
            </div>
          ))}
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Logo />
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

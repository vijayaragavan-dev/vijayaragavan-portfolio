'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollIndicator() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // A slight delay to prevent the button from appearing immediately on load
    const timer = setTimeout(() => setIsVisible(true), 500);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isScrolled) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the next section (assumes first section is 'projects')
      const nextSection = document.getElementById('projects');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      )}
    >
      <Button
        size="icon"
        onClick={handleClick}
        className="rounded-full w-14 h-14 shadow-lg button-glow transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
        aria-label={isScrolled ? 'Scroll to top' : 'Scroll to next section'}
      >
        <div className="relative w-6 h-6">
          <ArrowUp
            className={cn(
              'absolute inset-0 transition-all duration-300 ease-in-out',
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            )}
          />
          <ArrowDown
            className={cn(
              'absolute inset-0 transition-all duration-300 ease-in-out',
              isScrolled ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
            )}
          />
        </div>
      </Button>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sections = ['home', 'projects', 'skills', 'contact'];

export function ScrollIndicator() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((id) => id === entry.target.id);
            if (index !== -1) {
              setCurrentSectionIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      clearTimeout(timer);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  const isAtBottom = currentSectionIndex === sections.length - 1;

  const handleClick = () => {
    const nextIndex = isAtBottom ? 0 : currentSectionIndex + 1;
    const nextSectionId = sections[nextIndex];
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
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
        aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to next section'}
      >
        <div className="relative w-6 h-6 overflow-hidden">
          <ArrowUp
            className={cn(
              'absolute inset-0 transition-all duration-300 ease-in-out',
              isAtBottom ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
            )}
          />
          <ArrowDown
            className={cn(
              'absolute inset-0 transition-all duration-300 ease-in-out',
              isAtBottom ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
            )}
          />
        </div>
      </Button>
    </div>
  );
}

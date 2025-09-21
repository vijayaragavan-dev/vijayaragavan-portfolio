'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const typingSpeed = 100;
const deletingSpeed = 50;
const delay = 2000;

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  staticText?: string;
}

export function TypewriterEffect({ words, className, staticText }: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl", className)}>
      {staticText && <span>{staticText} </span>}
      <span className="text-primary text-glow">{text}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
}

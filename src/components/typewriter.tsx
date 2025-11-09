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
  as?: keyof JSX.IntrinsicElements;
  runOnce?: boolean;
}

export function TypewriterEffect({ words, className, staticText, as: Tag = 'p', runOnce = false }: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentWord = words[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        const nextWordIndex = (wordIndex + 1);
        if (runOnce && nextWordIndex >= words.length) {
            setIsFinished(true);
        } else {
            setWordIndex(nextWordIndex % words.length);
        }
      }
    } else {
      if (text.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
          if(runOnce && (wordIndex + 1) >= words.length) {
              setIsFinished(true);
          } else {
            timeoutId = setTimeout(() => {
                setIsDeleting(true);
            }, delay);
          }
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, runOnce, isFinished]);

  return (
    <Tag className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl", className)}>
      {staticText && <span>{staticText} </span>}
      <span className="text-primary text-glow">{isFinished ? words[words.length-1] : text}</span>
      {!isFinished && <span className="animate-pulse">|</span>}
    </Tag>
  );
}

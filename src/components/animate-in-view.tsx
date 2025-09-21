'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  start?: 'visible' | 'hidden';
  as?: keyof JSX.IntrinsicElements;
  animationClass?: string;
  threshold?: number;
}

export function AnimateInView({
  children,
  className,
  delay = 0,
  start = 'hidden',
  as: Tag = 'div',
  animationClass = 'opacity-0 translate-y-8',
  threshold = 0.1,
  ...props
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(start === 'visible');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isInView ? 'opacity-100 translate-y-0' : animationClass,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

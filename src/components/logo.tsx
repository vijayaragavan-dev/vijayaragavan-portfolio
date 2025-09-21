import { AnimateInView } from './animate-in-view';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <AnimateInView start="visible" animationClass="opacity-0 -translate-y-8">
        <Link href="/" className="group">
        <h1 className={cn('text-2xl font-bold tracking-tighter text-foreground transition-all duration-300 ease-in-out group-hover:text-glow')}>
            Vijayaragavan
        </h1>
        </Link>
    </AnimateInView>
  );
}

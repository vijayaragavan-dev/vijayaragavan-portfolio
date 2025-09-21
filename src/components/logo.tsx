import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <Link href="/" className="group">
      <h1 className={cn('text-2xl font-bold tracking-tighter text-foreground transition-all duration-300 ease-in-out group-hover:text-glow')}>
        Vijayaragavan
      </h1>
    </Link>
  );
}

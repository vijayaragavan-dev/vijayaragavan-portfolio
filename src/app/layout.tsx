// app/layout.tsx  (or src/app/layout.tsx)
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollIndicator } from '@/components/scroll-indicator';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Vijayaragavan | Portfolio',
  description: 'Professional portfolio of Vijayaragavan, a passionate developer.',
  // explicit icon metadata (app router supports this)
  icons: {
    icon: '/favicon.ico',               // default /favicon.ico
    shortcut: '/favicon-32x32.png',     // pinned / 32x32
    apple: '/apple-touch-icon.png',     // apple touch icon (optional)
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* extra fallback link tags (safe to add) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className={cn(
          'min-h-screen font-body text-foreground antialiased',
          spaceGrotesk.variable
        )}
      >
        <div className='bg-background'>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            <ScrollIndicator />
        </div>
      </body>
    </html>
  );
}

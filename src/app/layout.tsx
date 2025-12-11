// app/layout.tsx  (or src/app/layout.tsx)
// Combined version with metadata.icons + fallback <link> tags to ensure favicon works reliably.

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
  // Official Next.js App Router icon metadata (preferred)
  icons: {
    icon: '/favicon.ico',               // default browser favicon
    shortcut: '/favicon-32x32.png',     // pinned/tab icon
    apple: '/apple-touch-icon.png',     // apple touch icon (optional)
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      // add more sizes if you need them, e.g. 16x16, 48x48...
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* fallback <head> tags — safe to include as an extra guarantee for browsers/CDNs */}
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Optional cache-busting example:
            <link rel="icon" href="/favicon-v2.ico?v=2" />
            Use only if you rename files for cache-busting */}
      </head>

      <body
        className={cn(
          'min-h-screen font-body text-foreground antialiased',
          spaceGrotesk.variable
        )}
      >
        <div className="bg-background">
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

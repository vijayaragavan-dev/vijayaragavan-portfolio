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

// 🔥 New cache-busting favicon setup
export const metadata: Metadata = {
  title: 'Vijayaragavan | Portfolio',
  description: 'Professional portfolio of Vijayaragavan, a passionate developer.',
  icons: {
    icon: '/v-favicon.ico',                 // main favicon
    shortcut: '/v-favicon-32.png',          // pinned/tab icon
    apple: '/v-apple-touch.png',            // iOS/apple devices
    other: [
      { rel: 'icon', url: '/v-favicon-32.png', sizes: '32x32' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Double guarantee: manual <link> tags (high priority) */}
        <link rel="icon" href="/v-favicon.ico" />
        <link rel="shortcut icon" href="/v-favicon-32.png" />
        <link rel="apple-touch-icon" href="/v-apple-touch.png" />
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

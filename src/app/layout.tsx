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
  icons: {
    icon: '/favicon.ico',                   // primary favicon
    shortcut: '/favicon-32x32.png',         // modern shortcut/icon
    apple: '/apple-touch-icon.png',         // iOS home screen icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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

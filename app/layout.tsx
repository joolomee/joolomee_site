import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { LocaleProvider } from '@/components/LocaleProvider';
import YarnStoryline from '@/components/YarnStoryline';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const script = Caveat({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-script', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#FAF5F2',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://joolomee.com'),
  title: {
    default: 'Joolomee — Full Stack Designer & Creative Director | Remember me.',
    template: '%s — Joolomee',
  },
  description:
    'Joana Lopes Mesquita — Full Stack Designer & Creative Director based in Portimão, Portugal. Building brands from the ground up. Every brand deserves a (re)start. 7+ years, 10+ brands.',
  keywords: [
    'full stack designer portugal', 'creative director portugal', 'branding algarve',
    'web designer portimão', 'brand identity designer', 'webflow developer portugal',
    'joolomee', 'joana lopes mesquita', 'remember me joolomee',
  ],
  authors: [{ name: 'Joana Lopes Mesquita' }],
  creator: 'Joana Lopes Mesquita',
  openGraph: {
    title: 'Joolomee — Remember me. Every brand deserves a (re)start.',
    description: 'Full Stack Designer & Creative Director. Building brands from the ground up.',
    url: 'https://joolomee.com', siteName: 'Joolomee', locale: 'en_US', type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Joolomee — Joana Lopes Mesquita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joolomee — Remember me.',
    description: 'Every brand deserves a (re)start.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://joolomee.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} ${mono.variable}`}>
      <body className="grain bg-bg text-text-primary">
        <JsonLd />
        <LocaleProvider>
          <SmoothScroll />
          <Cursor />
          <YarnStoryline />
          <Nav />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}

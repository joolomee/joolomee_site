import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://joolomee.com'),
  title: {
    default: 'Joolomee — Full Stack Designer & Creative Director | Branding, Web Design & Development',
    template: '%s — Joolomee',
  },
  description:
    'Joana Lopes Mesquita is a full stack designer and creative director based in Portugal. Building brands from the ground up and developing digital experiences for ambitious brands worldwide. 7+ years, 10+ brands.',
  keywords: [
    'full stack designer portugal',
    'creative director portugal',
    'branding freelancer algarve',
    'web designer portugal',
    'brand identity designer',
    'webflow developer portugal',
    'joolomee',
    'joana lopes mesquita',
  ],
  authors: [{ name: 'Joana Lopes Mesquita' }],
  creator: 'Joana Lopes Mesquita',
  openGraph: {
    title: 'Joolomee — Full Stack Designer & Creative Director',
    description: 'Building brands from the ground up. Every brand deserves a (re)start.',
    url: 'https://joolomee.com',
    siteName: 'Joolomee',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Joolomee — Joana Lopes Mesquita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joolomee — Full Stack Designer & Creative Director',
    description: 'Every brand deserves a (re)start.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://joolomee.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="noise bg-bg text-text-primary">
        <JsonLd />
        <SmoothScroll />
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

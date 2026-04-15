import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { LocaleProvider } from '@/components/LocaleProvider';

const display = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://joolomee.com'),
  title: {
    default: 'Joolomee — Full Stack Designer & Creative Director',
    template: '%s — Joolomee',
  },
  description:
    'Joana Lopes Mesquita — Full Stack Designer & Creative Director based in Portimão, Portugal. Brand identity, web, UI/UX and creative direction. Every brand deserves a (re)start.',
  keywords: [
    'full stack designer portugal', 'creative director portugal', 'branding algarve',
    'web designer portimão', 'brand identity designer', 'webflow developer portugal',
    'joolomee', 'joana lopes mesquita',
  ],
  authors: [{ name: 'Joana Lopes Mesquita' }],
  creator: 'Joana Lopes Mesquita',
  openGraph: {
    title: 'Joolomee — Remember me.',
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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-text-primary">
        <JsonLd />
        <LocaleProvider>
          <SmoothScroll />
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}

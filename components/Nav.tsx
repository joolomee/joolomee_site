'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'}`}>
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" aria-label="Joolomee — Home" className="font-display text-sm md:text-base font-bold tracking-[0.22em]">
          JOOLOMEE
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline mono text-xs uppercase tracking-[0.2em] text-text-primary/80 hover:text-text-primary">
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={`mailto:${SITE.email}`} className="hidden md:inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.2em] border border-line hover:border-accent hover:text-accent px-4 py-2 transition-colors duration-300">
          Let's Talk <span aria-hidden>↗</span>
        </a>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden mono text-xs uppercase tracking-[0.2em]">
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <div className="container-site py-8 flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="display text-5xl">
                {l.label}
              </Link>
            ))}
            <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] text-accent">
              {SITE.email} ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

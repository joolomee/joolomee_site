'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/data';
import { useLocale } from './LocaleProvider';
import LangSwitcher from './LangSwitcher';

export default function Nav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const navLabel = (key: string) =>
    key === 'work' ? t('navWork') : key === 'services' ? t('navServices') : key === 'about' ? t('navAbout') : t('navContact');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-bg/75 backdrop-blur-2xl border-b border-line' : 'bg-transparent'}`}>
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" aria-label="Joolomee — Home" className="flex items-center gap-2.5 group">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="font-display text-sm md:text-[15px] font-bold tracking-[0.18em] text-text-primary">JOOLOMEE</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-[13.5px] font-medium text-text-primary/80 hover:text-text-primary transition-colors"
            >
              {navLabel(l.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher />
          <a href={`mailto:${SITE.email}`} className="btn-primary text-[13px] py-2.5 px-5">
            {t('navCta')} <span aria-hidden>↗</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden mono text-[11px] uppercase tracking-[0.2em]"
        >
          {open ? '✕' : '≡'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <div className="container-site py-10 flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="display text-5xl text-text-primary">
                {navLabel(l.key)}
              </Link>
            ))}
            <div className="pt-4 border-t border-line flex items-center justify-between gap-4">
              <LangSwitcher />
              <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] text-accent">
                {SITE.email} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

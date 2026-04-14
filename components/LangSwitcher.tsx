'use client';
import { useState, useRef, useEffect } from 'react';
import { LOCALES, LOCALE_META } from '@/lib/data';
import { useLocale } from './LocaleProvider';

export default function LangSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const meta = LOCALE_META[locale];
  const dark = variant === 'dark';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        aria-expanded={open}
        className={`inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.18em] px-3 py-2 rounded-full border transition-colors
          ${dark
            ? 'border-white/20 text-white/90 hover:border-white/50'
            : 'border-line text-text-primary hover:border-accent hover:text-accent'}`}
      >
        <span aria-hidden>{meta.flag}</span>
        <span>{locale.toUpperCase()}</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>⌄</span>
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute right-0 mt-2 min-w-[180px] rounded-xl border shadow-elevated p-1.5 z-50
            ${dark ? 'bg-bg-contrast border-white/10' : 'bg-white border-line'}`}
        >
          {LOCALES.map((l) => (
            <button
              key={l}
              role="menuitem"
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                ${locale === l
                  ? (dark ? 'bg-white/10 text-white' : 'bg-accent-cream text-accent-deep')
                  : (dark ? 'hover:bg-white/5 text-white/80' : 'hover:bg-bg-secondary text-text-primary')}`}
            >
              <span aria-hidden>{LOCALE_META[l].flag}</span>
              <span className="flex-1">{LOCALE_META[l].native}</span>
              <span className="mono text-[10px] opacity-60">{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

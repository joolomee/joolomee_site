'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { LOCALES, LOCALE_META, COPY, type Locale } from '@/lib/data';

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string };
const LocaleCtx = createContext<Ctx>({ locale: 'en', setLocale: () => {}, t: (k) => k });

function detectFromCountry(cc: string): Locale {
  const code = cc.toUpperCase();
  for (const l of LOCALES) if (LOCALE_META[l].countries.includes(code)) return l;
  return 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('joolomee-locale') as Locale | null) : null;
    if (saved && LOCALES.includes(saved)) { setLocaleState(saved); return; }

    // Browser lang first (fast, offline)
    const nav = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language.slice(0, 2).toLowerCase() : 'en';
    if (LOCALES.includes(nav as Locale)) setLocaleState(nav as Locale);

    // Geo refine (best-effort, non-blocking)
    fetch('https://ipapi.co/country/', { cache: 'force-cache' })
      .then((r) => (r.ok ? r.text() : null))
      .then((cc) => {
        if (!cc) return;
        const l = detectFromCountry(cc.trim());
        setLocaleState(l);
      })
      .catch(() => {});
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') localStorage.setItem('joolomee-locale', l);
  };
  const t = (k: string) => COPY[locale]?.[k] ?? COPY.en[k] ?? k;

  return <LocaleCtx.Provider value={{ locale, setLocale, t }}>{children}</LocaleCtx.Provider>;
}

export const useLocale = () => useContext(LocaleCtx);

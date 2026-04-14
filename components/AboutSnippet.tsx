'use client';
import { STATS } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function AboutSnippet() {
  const { t } = useLocale();
  return (
    <section className="py-28 md:py-40 bg-bg">
      <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-7">
          <p className="mono text-[11px] uppercase tracking-[0.28em] text-text-muted mb-6">— {t('aboutLabel')}</p>
          <Reveal>
            <p className="display text-[8vw] md:text-[4.2vw] leading-[1.05] tracking-[-0.03em] text-text-primary">
              {t('aboutLead')}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-secondary text-[17px] md:text-lg mt-10 max-w-xl leading-relaxed">
              {t('aboutBody')}
            </p>
          </Reveal>
          <Link href="/about" className="mono text-[11px] uppercase tracking-[0.22em] link-underline mt-10 inline-flex">
            {t('aboutCta')} →
          </Link>
        </div>

        <div className="md:col-span-5 flex flex-col gap-10">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft bg-accent-cream">
            <Image
              src="/logos/joolomee-full.jpg"
              alt="Joolomee — Remember me."
              fill
              sizes="(min-width:768px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
            {STATS.map((s) => (
              <li key={s.labelKey} className="border-t border-line pt-5">
                <span className="display text-4xl md:text-5xl block text-text-primary">{s.n}</span>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted mt-2 block">{t(s.labelKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

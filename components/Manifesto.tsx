'use client';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function Manifesto() {
  const { t } = useLocale();
  return (
    <section className="relative py-32 md:py-44 bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grad-aurora opacity-70 pointer-events-none" aria-hidden />
      <div className="container-site relative">
        <p className="mono text-[11px] uppercase tracking-[0.28em] text-text-muted mb-10">— {t('manifestoLabel')}</p>
        <Reveal>
          <p className="display text-[9vw] md:text-[5.4vw] leading-[1.02] tracking-[-0.035em] text-text-primary max-w-[22ch]">
            {t('manifesto1')}{' '}
            <span className="script italic font-normal text-accent">{t('manifesto2')}</span>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 md:mt-14 text-lg md:text-xl text-text-secondary max-w-xl">
            {t('manifesto3')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

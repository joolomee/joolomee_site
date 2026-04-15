'use client';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function Manifesto() {
  const { t } = useLocale();
  return (
    <section className="relative py-32 md:py-44 bg-bg-secondary">
      <div className="container-site relative">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-10">{t('manifestoLabel')}</p>
        <Reveal>
          <p className="display text-[9vw] md:text-[5.4vw] leading-[1.02] tracking-[-0.04em] text-text-primary max-w-[24ch]">
            {t('manifesto1')}{' '}
            <span className="italic text-text-secondary font-normal">{t('manifesto2')}</span>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 md:mt-14 text-[17px] md:text-[19px] text-text-secondary max-w-xl leading-[1.55]">
            {t('manifesto3')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

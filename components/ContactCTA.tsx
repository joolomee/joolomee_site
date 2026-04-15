'use client';
import { SITE } from '@/lib/data';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function ContactCTA() {
  const { t } = useLocale();
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-bg">
      <div className="container-site">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-10">{t('contactLabel')}</p>
        <Reveal>
          <h2 className="display text-[12vw] md:text-[7.2vw] leading-[0.94] tracking-[-0.045em] text-text-primary max-w-[20ch]">
            {t('contactTitle1')}<br />
            {t('contactTitle2')}{' '}
            <span className="italic text-text-secondary font-normal">{t('contactTitle3')}</span>
          </h2>
        </Reveal>
        <p className="text-text-secondary text-[17px] md:text-[19px] mt-10 max-w-xl leading-[1.55]">
          {t('contactSub')}
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl">
          <a
            href={`mailto:${SITE.email}`}
            className="group border border-line hover:border-text-primary rounded-2xl transition-colors p-7 flex items-start justify-between gap-4 bg-bg-secondary"
          >
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted block mb-3">Email</span>
              <span className="display text-xl md:text-2xl text-text-primary">{SITE.email}</span>
            </div>
            <span className="mono text-lg text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all">↗</span>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-line hover:border-text-primary rounded-2xl transition-colors p-7 flex items-start justify-between gap-4 bg-bg-secondary"
          >
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted block mb-3">{t('contactWhatsLabel')}</span>
              <span className="display text-xl md:text-2xl text-text-primary">{t('contactWhatsCta')}</span>
            </div>
            <span className="mono text-lg text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

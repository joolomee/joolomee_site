'use client';
import { SITE } from '@/lib/data';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function ContactCTA() {
  const { t } = useLocale();
  return (
    <section id="contact" className="relative py-28 md:py-44 bg-bg-contrast text-text-inverse overflow-hidden">
      <div className="absolute inset-0 bg-grad-dusk opacity-60 pointer-events-none" aria-hidden />
      <div className="container-site relative">
        <p className="mono text-[11px] uppercase tracking-[0.28em] text-white/50 mb-10">— {t('contactLabel')}</p>
        <Reveal>
          <h2 className="display text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-ultra-tight">
            {t('contactTitle1')}<br />
            {t('contactTitle2')}{' '}
            <span className="script italic font-normal text-accent-soft">{t('contactTitle3')}</span>
          </h2>
        </Reveal>
        <p className="text-white/70 text-lg md:text-xl mt-10 max-w-xl leading-relaxed">
          {t('contactSub')}
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-3xl">
          <a
            href={`mailto:${SITE.email}`}
            className="group bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 rounded-2xl transition-all p-7 flex items-start justify-between gap-4 backdrop-blur-sm"
          >
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 block mb-3">Email</span>
              <span className="display text-xl md:text-2xl">{SITE.email}</span>
            </div>
            <span className="mono text-lg group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 rounded-2xl transition-all p-7 flex items-start justify-between gap-4 backdrop-blur-sm"
          >
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 block mb-3">WhatsApp</span>
              <span className="display text-xl md:text-2xl">{SITE.phone}</span>
            </div>
            <span className="mono text-lg group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

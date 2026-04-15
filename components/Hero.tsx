'use client';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/data';
import { useLocale } from './LocaleProvider';

export default function Hero() {
  const { t } = useLocale();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between pt-32 md:pt-40 pb-12 bg-bg">
      <div className="container-site flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
          className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-10"
        >
          {t('status')}
        </motion.p>

        <h1 className="display text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.92] tracking-[-0.045em] text-text-primary">
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-text-secondary font-normal"
              initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.1 }}
            >
              {t('heroLine1')}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.22 }}
            >
              {t('heroLine2')}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12 items-end"
        >
          <p className="md:col-span-6 text-[17px] md:text-[19px] text-text-secondary max-w-xl leading-[1.55]">
            {t('heroSub')}
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-col gap-6 md:items-end">
            <div className="flex items-center gap-3 flex-wrap md:justify-end">
              <a href="#contact" className="btn-primary">
                {t('ctaStart')} <span aria-hidden>→</span>
              </a>
              <a href="#work" className="btn-ghost">
                {t('ctaWork')}
              </a>
            </div>
            <div className="flex gap-5 md:justify-end">
              <a href={`mailto:${SITE.email}`} className="link-underline mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
                {SITE.email}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="link-underline mono text-[11px] uppercase tracking-[0.18em] text-text-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-site flex justify-between items-end pb-2 mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
        <span>Portimão · Algarve · PT</span>
        <span className="hidden md:block">Available 2026</span>
      </div>
    </section>
  );
}

'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { SITE } from '@/lib/data';
import { useLocale } from './LocaleProvider';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yarnY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yarnRot = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-between pt-28 md:pt-32 pb-10 overflow-hidden bg-grad-aurora">
      {/* Floating yarn ball */}
      <motion.div
        style={{ y: yarnY, rotate: yarnRot }}
        className="absolute right-[-6vw] top-[18vh] w-[48vw] md:w-[32vw] lg:w-[28vw] aspect-square pointer-events-none z-0 animate-float"
        aria-hidden
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-grad-pink blur-3xl opacity-40" />
          <Image
            src="/logos/joolomee-mark.png"
            alt=""
            fill
            priority
            className="object-contain drop-shadow-[0_20px_60px_rgba(255,77,143,0.35)]"
          />
        </div>
      </motion.div>

      <div className="container-site flex-1 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
          className="chip mb-10 text-text-secondary"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="mono">{t('status')}</span>
        </motion.div>

        <h1 className="display text-[16vw] md:text-[11vw] lg:text-[9.2vw] leading-[0.88] text-text-primary">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.1 }}
            >
              <span className="script text-[0.9em] text-accent italic font-normal">{t('heroLine1')}</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.22 }}
            >
              <span className="tracking-ultra-tight">{t('heroLine2')}</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-6 text-[17px] md:text-xl text-text-secondary max-w-xl leading-relaxed">
            {t('heroSub')}
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-col gap-5 md:items-end">
            <div className="flex flex-col gap-1 md:items-end">
              <a href={`mailto:${SITE.email}`} className="link-underline mono text-[12px] uppercase tracking-[0.18em] text-text-primary">
                {SITE.email} ↗
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="link-underline mono text-[12px] uppercase tracking-[0.18em] text-text-secondary">
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#contact" className="btn-primary">
                {t('ctaStart')} <span aria-hidden>→</span>
              </a>
              <a href="#work" className="btn-ghost">
                {t('ctaWork')} <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-site flex justify-between items-end pb-2 mono text-[10px] uppercase tracking-[0.25em] text-text-muted relative z-10">
        <span>N 37.1356° · W 8.5379°</span>
        <span className="hidden md:inline-flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-text-muted" /> Scroll
        </span>
        <span className="hidden md:block">Awwwards · 2026 ✦</span>
      </div>
    </section>
  );
}

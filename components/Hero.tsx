'use client';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      <div className="container-site flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mono text-xs uppercase tracking-[0.25em] text-text-secondary mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for new projects — 2026
        </motion.p>

        <h1 className="display uppercase text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85]">
          <motion.span
            className="block"
            initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="block overflow-hidden"><span className="block">I Build</span></span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <span className="block overflow-hidden"><span className="block">Brands<span className="text-accent">.</span></span></span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-6 text-lg md:text-xl text-text-secondary max-w-xl">
            Full Stack Designer & Creative Director based in {SITE.location.split(',')[0]}. I create brands from the ground up — and rebuild them to be unforgettable.
          </p>

          <div className="md:col-span-6 md:justify-self-end flex flex-col gap-4 md:items-end">
            <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-primary">
              {SITE.email} ↗
            </a>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-3 bg-accent text-text-inverse mono text-xs uppercase tracking-[0.2em] px-6 py-4 hover:bg-accent-hover transition-colors">
                Start a Project <span aria-hidden>→</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.2em] border border-line hover:border-accent hover:text-accent px-6 py-4 transition-colors">
                View Work ↓
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-site flex justify-between items-end pb-4 mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
        <span>N 37.1356° · W 8.5379°</span>
        <span className="hidden md:block">Awwwards · Nominee 2026 ✦</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}

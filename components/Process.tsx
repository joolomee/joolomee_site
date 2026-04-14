'use client';
import { PROCESS } from '@/lib/data';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function Process() {
  const { t } = useLocale();
  return (
    <section id="process" className="py-28 md:py-40 bg-bg">
      <div className="container-site">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="mono text-[11px] uppercase tracking-[0.28em] text-text-muted mb-5">— {t('processLabel')}</p>
          <Reveal>
            <h2 className="display text-[11vw] md:text-[6.6vw] leading-[0.92] tracking-ultra-tight text-text-primary">
              {t('processTitle')}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-secondary text-[17px] md:text-lg mt-8 max-w-xl leading-relaxed">
              {t('processSub')}
            </p>
          </Reveal>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-t border-line pt-6 md:pt-7"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="mono text-[11px] tracking-[0.22em] text-accent">{p.n}</span>
                <span className="flex-1 h-px bg-line" />
              </div>
              <h3 className="display text-2xl md:text-[1.7rem] leading-[1.05] tracking-[-0.02em] text-text-primary mb-3">
                {t(p.key)}
              </h3>
              <p className="text-text-secondary text-[14px] md:text-[15px] leading-relaxed">
                {t(`${p.key}d`)}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

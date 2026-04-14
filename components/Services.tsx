'use client';
import { SERVICES } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

export default function Services() {
  const { t } = useLocale();
  return (
    <section id="services" className="py-28 md:py-40 bg-bg">
      <div className="container-site">
        <div className="flex items-end justify-between mb-14 md:mb-20 gap-8">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.28em] text-text-muted mb-5">— {t('servicesLabel')}</p>
            <Reveal>
              <h2 className="display text-[11vw] md:text-[6.6vw] leading-[0.92] tracking-ultra-tight text-text-primary">
                {t('servicesTitle')}
              </h2>
            </Reveal>
          </div>
          <Link href="/services" className="hidden md:inline-flex link-underline mono text-[11px] uppercase tracking-[0.22em] text-text-primary">
            {t('servicesCta')} →
          </Link>
        </div>

        <ul className="border-t border-line">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-line"
            >
              <Link href="/services" className="grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 px-2 -mx-2 hover:bg-bg-secondary rounded-lg transition-colors">
                <span className="col-span-2 md:col-span-1 mono text-sm text-accent font-medium">{s.n}</span>
                <h3 className="col-span-10 md:col-span-5 display text-3xl md:text-[2.8rem] leading-[1.05] tracking-[-0.03em] text-text-primary group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-5 text-text-secondary text-[15px] md:text-[17px] leading-relaxed">
                  {s.desc}
                </p>
                <span className="col-span-12 md:col-span-1 md:justify-self-end mono text-base text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link href="/services" className="md:hidden mt-10 inline-flex link-underline mono text-[11px] uppercase tracking-[0.22em]">
          {t('servicesCta')} →
        </Link>
      </div>
    </section>
  );
}

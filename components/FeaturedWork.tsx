'use client';
import { WORK } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

/* Only projects with real, delivered imagery appear on the homepage.
   Everything else lives in /work as a typographic index. */
const REAL: Record<string, { src: string; alt: string }> = {
  'cognifit-longevity': {
    src: '/work/cognifit-mindfit-hero.png',
    alt: 'CogniFit MindFit — cognitive health platform landing page',
  },
  'dalma-farmliving': {
    src: '/work/dalma-mel-full.png',
    alt: "D'ALMA FarmLiving — bio honey brand system",
  },
};

export default function FeaturedWork() {
  const { t } = useLocale();
  const featured = WORK.filter((p) => REAL[p.slug]);

  return (
    <section id="work" className="py-32 md:py-48 bg-bg">
      <div className="container-site">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-6">{t('workLabel')}</p>
          <Reveal>
            <h2 className="display text-[10vw] md:text-[5.4vw] leading-[0.98] tracking-[-0.045em] text-text-primary">
              {t('workTitle')}
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {featured.map((p, i) => {
            const img = REAL[p.slug];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/work/${p.slug}`} className="block group">
                  <div className="relative aspect-[16/10] md:aspect-[16/9] bg-bg-secondary rounded-[20px] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width:1024px) 1280px, 100vw"
                      priority={i === 0}
                      className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-8 md:mt-10 grid grid-cols-12 gap-4 md:gap-8 items-end">
                    <div className="col-span-12 md:col-span-7">
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted mb-3">
                        {String(i + 1).padStart(2, '0')} · {t(p.categoryKey)} · {p.year}
                      </p>
                      <h3 className="display text-[2.2rem] md:text-[3.6rem] leading-[1.02] tracking-[-0.035em] text-text-primary">
                        {p.client}
                      </h3>
                      <p className="text-text-secondary text-[16px] md:text-[18px] mt-4 max-w-2xl leading-[1.5]">
                        {t(p.titleKey)}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex md:justify-end">
                      <span className="inline-flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-text-primary link-underline">
                        {t('workCta').replace('View ', 'Read ').replace('Ver ', 'Ver ')} →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 pt-10 border-t border-line flex items-center justify-between">
          <p className="text-text-secondary text-[15px] max-w-md">
            {WORK.length - featured.length}+ more projects in the archive.
          </p>
          <Link href="/work" className="btn-ghost">
            {t('workCta')} →
          </Link>
        </div>
      </div>
    </section>
  );
}

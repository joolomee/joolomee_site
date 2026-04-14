'use client';
import { WORK } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

const COVER: Record<string, string> = {
  'cognifit-longevity': '/work/cognifit-mindfit-hero.png',
  'dalma-farmliving': '/work/dalma-mel-full.png',
  'tcpi-international': '/work/joolomee-yarn-banner.png',
  'dualclinic-saldanha': '/work/cognifit-holidays.jpg',
  'carlagoncalves': '/work/cognifit-halloween-full.png',
  'agencia-modal': '/work/cognifit-womens-day.jpg',
  'albinet': '/work/cognifit-mindfit-app.png',
};

export default function FeaturedWork() {
  const { t } = useLocale();
  return (
    <section id="work" className="py-28 md:py-40 bg-bg-secondary">
      <div className="container-site">
        <div className="flex items-end justify-between mb-14 md:mb-20 gap-8">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.28em] text-text-muted mb-5">— {t('workLabel')}</p>
            <Reveal>
              <h2 className="display text-[11vw] md:text-[6.6vw] leading-[0.92] tracking-ultra-tight text-text-primary">
                {t('workTitle')}
              </h2>
            </Reveal>
          </div>
          <Link href="/work" className="hidden md:inline-flex link-underline mono text-[11px] uppercase tracking-[0.22em] text-text-primary">
            {t('workCta')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20 md:gap-y-28">
          {WORK.map((p, i) => {
            const cover = COVER[p.slug] ?? p.hero;
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`md:col-span-6 ${i % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <Link href={`/work/${p.slug}`} className="block group" data-cursor="hover">
                  <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={`${p.client} — ${p.title}`}
                        fill
                        sizes="(min-width:768px) 42vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute top-5 left-5 chip !bg-white/80 !border-white/60 text-text-primary">
                      <span className="mono text-[10px] tracking-[0.2em]">{p.year}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                      <span className="mono text-[11px] uppercase tracking-[0.22em]">{p.category}</span>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-text-primary group-hover:bg-accent group-hover:text-white transition-colors">↗</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="display text-[1.7rem] md:text-[2rem] leading-[1.05] tracking-[-0.03em] text-text-primary">
                        {p.client}
                      </h3>
                      <p className="text-text-secondary mt-1.5 text-[15px]">{p.title}</p>
                    </div>
                    <ul className="hidden md:flex flex-wrap justify-end gap-1.5 max-w-[55%]">
                      {p.tags.slice(0, 3).map((t) => (
                        <li key={t} className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted border border-line px-2 py-1 rounded-full">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <Link href="/work" className="md:hidden mt-16 inline-flex link-underline mono text-[11px] uppercase tracking-[0.22em]">
          {t('workCta')} →
        </Link>
      </div>
    </section>
  );
}

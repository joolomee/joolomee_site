'use client';
import { WORK } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLocale } from './LocaleProvider';

/** Real imagery only for projects with delivered visuals. */
const REAL_COVERS: Record<string, { src: string; alt: string }> = {
  'cognifit-longevity': { src: '/work/cognifit-mindfit-hero.png', alt: 'CogniFit MindFit cognitive health platform — hero landing page' },
  'dalma-farmliving': { src: '/work/dalma-mel-full.png', alt: "D'ALMA FarmLiving — bio honey brand packaging" },
};

/** Branded placeholder for projects without delivered public imagery. */
function PlaceholderCover({ client, category, tags, grad }: { client: string; category: string; tags: string[]; grad: string }) {
  const initials = client
    .replace(/[^A-Za-zÀ-ÿ ]/g, '')
    .split(/\s+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0]).join('')
    .toUpperCase();
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${grad} flex flex-col justify-between p-6 md:p-8`}>
      <div className="flex items-start justify-between">
        <span className="chip !bg-white/80 !border-white/60 text-text-primary mono text-[10px] tracking-[0.2em]">{category}</span>
        <span className="text-white/70 mono text-[10px] tracking-[0.22em]">{tags[0]}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="display text-white font-bold tracking-[-0.04em] text-[22vw] md:text-[9vw] leading-[0.85] opacity-90">{initials}</span>
        <span className="text-white/80 mono text-[10px] tracking-[0.22em] uppercase text-right max-w-[45%] leading-tight">{client}</span>
      </div>
    </div>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
          {WORK.map((p, i) => {
            const real = REAL_COVERS[p.slug];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`md:col-span-6 ${i % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <Link href={`/work/${p.slug}`} className="block group" data-cursor="hover">
                  <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
                    {real ? (
                      <>
                        <Image
                          src={real.src}
                          alt={real.alt}
                          fill
                          sizes="(min-width:768px) 42vw, 100vw"
                          loading={i < 2 ? 'eager' : 'lazy'}
                          className="object-cover transition-transform duration-[1000ms] ease-editorial group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        <div className="absolute top-5 left-5 chip !bg-white/85 !border-white/60 text-text-primary">
                          <span className="mono text-[10px] tracking-[0.2em]">{p.year}</span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                          <span className="mono text-[11px] uppercase tracking-[0.22em]">{t(p.categoryKey)}</span>
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-text-primary group-hover:bg-accent group-hover:text-white transition-colors">↗</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <PlaceholderCover client={p.client} category={t(p.categoryKey)} tags={p.tags} grad={p.accent} />
                        <div className="absolute top-5 right-5 chip !bg-white/85 !border-white/60 text-text-primary">
                          <span className="mono text-[10px] tracking-[0.2em]">{p.year}</span>
                        </div>
                        <div className="absolute bottom-5 right-5">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-text-primary group-hover:bg-accent group-hover:text-white transition-colors">↗</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h3 className="display text-[1.65rem] md:text-[2rem] leading-[1.05] tracking-[-0.03em] text-text-primary truncate">
                        {p.client}
                      </h3>
                      <p className="text-text-secondary mt-1.5 text-[15px]">{t(p.titleKey)}</p>
                    </div>
                    <ul className="hidden md:flex flex-wrap justify-end gap-1.5 max-w-[50%]">
                      {p.tags.slice(0, 2).map((tag) => (
                        <li key={tag} className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted border border-line px-2 py-1 rounded-full whitespace-nowrap">
                          {tag}
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

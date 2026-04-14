'use client';
import { WORK } from '@/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 md:py-48 border-t border-line">
      <div className="container-site">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Selected Work</p>
            <Reveal>
              <h2 className="display text-[11vw] md:text-[7vw] leading-[0.9]">Featured<br />Projects.</h2>
            </Reveal>
          </div>
          <Link href="/work" className="hidden md:inline-flex mono text-xs uppercase tracking-[0.2em] link-underline">View all work →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
          {WORK.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`md:col-span-6 ${i % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <Link href={`/work/${p.slug}`} className="block group" data-cursor="hover">
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="display text-white/20 text-[18vw] md:text-[9vw] leading-none">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 mono text-xs uppercase tracking-[0.2em] text-white/80">{p.year}</div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <span className="mono text-xs uppercase tracking-[0.2em] text-white">{p.category}</span>
                    <span className="mono text-white text-lg translate-x-0 group-hover:translate-x-2 transition-transform">↗</span>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="display text-3xl md:text-4xl leading-[1.05] tracking-[-0.03em]">{p.client}</h3>
                    <p className="text-text-secondary mt-1">{p.title}</p>
                  </div>
                  <ul className="hidden md:flex flex-wrap justify-end gap-2 max-w-[50%]">
                    {p.tags.map((t) => (
                      <li key={t} className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted border border-line px-2 py-1">{t}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <Link href="/work" className="md:hidden mt-16 inline-flex mono text-xs uppercase tracking-[0.2em] link-underline">View all work →</Link>
      </div>
    </section>
  );
}

'use client';
import { SERVICES } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48">
      <div className="container-site">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Services</p>
            <Reveal>
              <h2 className="display text-[11vw] md:text-[7vw] leading-[0.9]">What<br />I Do.</h2>
            </Reveal>
          </div>
          <Link href="/services" className="hidden md:inline-flex mono text-xs uppercase tracking-[0.2em] link-underline">Explore all services →</Link>
        </div>

        <ul className="border-t border-line">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-line"
            >
              <Link href="/services" className="grid grid-cols-12 gap-4 md:gap-8 items-start py-8 md:py-10 hover:bg-bg-elevated transition-colors px-2">
                <span className="col-span-2 md:col-span-1 mono text-sm text-accent">{s.n}</span>
                <h3 className="col-span-10 md:col-span-5 display text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-5 text-text-secondary text-base md:text-lg leading-relaxed">
                  {s.desc}
                </p>
                <span className="col-span-12 md:col-span-1 md:justify-self-end mono text-sm text-text-muted group-hover:text-accent transition-colors">↗</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link href="/services" className="md:hidden mt-10 inline-flex mono text-xs uppercase tracking-[0.2em] link-underline">Explore all services →</Link>
      </div>
    </section>
  );
}

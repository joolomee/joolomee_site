import Link from 'next/link';
import { WORK, COPY, SITE } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Selected Projects',
  description: 'Selected work by Joana Lopes Mesquita — brand identity, web design & development, UI/UX, creative direction for CogniFit, D\'ALMA FarmLiving, TCPI International and more.',
  alternates: { canonical: 'https://joolomee.com/work' },
};

export default function WorkPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Archive</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Work<span className="text-accent">.</span></h1>
        <p className="text-text-secondary text-xl max-w-2xl mt-10">
          A selection of brands, platforms and campaigns built between 2019 and 2026.
        </p>

        {/* Contact visible */}
        <div className="mt-6 flex flex-wrap gap-5 items-center">
          <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">{SITE.email}</a>
          <span className="text-text-muted">·</span>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">WhatsApp</a>
        </div>

        <ul className="mt-24 border-t border-line">
          {WORK.map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <Link href={`/work/${p.slug}`} className="grid grid-cols-12 gap-4 py-10 items-center hover:bg-bg-elevated transition-colors px-2 group">
                <span className="col-span-2 md:col-span-1 mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="col-span-10 md:col-span-5 display text-3xl md:text-5xl tracking-[-0.03em] group-hover:translate-x-2 transition-transform">{p.client}</span>
                <span className="col-span-6 md:col-span-3 mono text-xs uppercase tracking-[0.2em] text-text-secondary">{COPY.en[p.categoryKey] ?? ''}</span>
                <span className="col-span-5 md:col-span-2 mono text-xs uppercase tracking-[0.2em] text-text-muted">{p.year}</span>
                <span className="col-span-1 md:col-span-1 justify-self-end mono text-lg group-hover:text-accent transition-colors">↗</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-text-secondary text-lg">Have a project in mind?</p>
          <a href={`mailto:${SITE.email}`} className="display text-3xl md:text-4xl link-underline text-accent mt-4 inline-block">Let&apos;s talk →</a>
        </div>
      </div>
    </section>
  );
}

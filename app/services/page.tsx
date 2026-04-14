import { SERVICES, SITE } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Branding, Web Design & Development',
  description: 'Brand Strategy, Rebrand, Web Design & Development, UI/UX, Social Media, Creative Direction, Presentation & Motion. Services by Joana Lopes Mesquita.',
  alternates: { canonical: 'https://joolomee.com/services' },
};

export default function ServicesPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Services</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Services<span className="text-accent">.</span></h1>
        <p className="text-text-secondary text-xl max-w-2xl mt-10">
          End-to-end — from first sketch to last deploy. Seven disciplines, one vision.
        </p>

        <div className="mt-24 grid gap-16 md:gap-20">
          {SERVICES.map((s) => (
            <article key={s.n} className="grid grid-cols-12 gap-4 md:gap-8 border-t border-line pt-10">
              <span className="col-span-12 md:col-span-1 mono text-sm text-accent">{s.n}</span>
              <div className="col-span-12 md:col-span-6">
                <h2 className="display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.05]">{s.title}</h2>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-lg text-text-secondary leading-relaxed">{s.desc}</p>
                <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(s.title + ' inquiry')}`} className="mono text-xs uppercase tracking-[0.2em] link-underline mt-6 inline-flex">
                  Inquire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

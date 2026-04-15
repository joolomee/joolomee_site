import { STATS, SITE, COPY } from '@/lib/data';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Joana Lopes Mesquita',
  description: 'Full Stack Designer & Creative Director based in Portimão, Portugal. Seven years building brands for CogniFit, D\'ALMA FarmLiving, TCPI International and more. Available worldwide.',
  alternates: { canonical: 'https://joolomee.com/about' },
};

const TOOLS = ['Figma', 'Adobe CC', 'VS Code', 'Next.js', 'Tailwind CSS', 'Webflow', 'Blender', 'After Effects', 'Python', 'Procreate'];
const TIMELINE = [
  { y: '2026', t: 'Joolomee — Independent creative studio, serving clients remote worldwide.' },
  { y: '2025', t: 'Branding Manager · D\'ALMA® FarmLiving — Luxury hotel + bio commerce brand system.' },
  { y: '2025', t: 'Freelance · TCPI International — 21-slide deck + corporate motion video.' },
  { y: '2024', t: 'Designer · Agência Modal — Event identity & materials, Porto.' },
  { y: '2022', t: 'Full Stack Designer → Senior Visual → Marketing Designer · CogniFit.' },
  { y: '2022', t: 'Head of Design · DualClinic Saldanha — Campaigns, B2C ads, creative direction.' },
  { y: '2021', t: 'Designer & Web Designer · Albinet — UX/UI, landing pages, 3D, HTML/CSS.' },
  { y: '2019 →', t: 'Branding Manager · CarlaGonçalves — Concept, logo, visual identity (ongoing).' },
];

export default function AboutPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— About</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Joana<span className="text-accent">.</span></h1>

        {/* Contact visible */}
        <div className="mt-6 flex flex-wrap gap-5 items-center">
          <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">{SITE.email}</a>
          <span className="text-text-muted">·</span>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">WhatsApp</a>
          <span className="text-text-muted">·</span>
          <span className="mono text-xs tracking-[0.1em] text-text-muted">{SITE.location}</span>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="display text-3xl md:text-4xl leading-[1.2] tracking-[-0.02em]">
              &ldquo;A brand can be wonderful, but it needs to be seen by the right people. That&apos;s where I come in. I build brands from the ground up — and rebuild them to be unforgettable.&rdquo;
            </p>
            <p className="text-text-secondary text-lg mt-10 leading-relaxed max-w-2xl">
              Full Stack Designer & Creative Director based in {SITE.location}. Over 7 years working across brand identity, web design & development, UI/UX, creative direction and motion. Clients across Portugal, Spain and worldwide — from global cognitive-health platforms to boutique farm hotels.
            </p>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bg-secondary mb-8">
              <Image src="/logos/joolomee-full.jpg" alt="Joolomee — Joana Lopes Mesquita" fill className="object-cover" sizes="(min-width:768px) 35vw, 100vw" />
            </div>
            <ul className="grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <li key={s.labelKey} className="border-t border-line pt-5">
                  <span className="display text-4xl block">{s.n}</span>
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2 block">{COPY.en[s.labelKey]}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Process */}
        <div className="mt-32 grid md:grid-cols-12 gap-10 border-t border-line pt-16">
          <h2 className="md:col-span-4 mono text-xs uppercase tracking-[0.25em] text-text-muted">Process</h2>
          <ol className="md:col-span-8 grid gap-4">
            {[
              { n: '01', t: 'Listen', d: 'Free 30-min discovery call. I want to understand the story before I design the shape.' },
              { n: '02', t: 'Map', d: 'Strategy — objectives, audience, competitors, positioning. Nothing moves without it.' },
              { n: '03', t: 'Explore', d: 'Two to three visual directions. You react, we refine. No ego, no fluff.' },
              { n: '04', t: 'Craft', d: 'Full design system or build — every pixel, every interaction, intentional.' },
              { n: '05', t: 'Launch', d: 'Delivery, handoff, and 30 days of care. Always one message away.' },
            ].map((p) => (
              <li key={p.n} className="flex items-baseline gap-6 border-b border-line pb-4">
                <span className="mono text-xs text-accent">{p.n}</span>
                <div>
                  <span className="display text-3xl md:text-5xl tracking-[-0.03em]">{p.t}</span>
                  <p className="text-text-secondary text-sm mt-2 max-w-lg">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Toolkit */}
        <div className="mt-32 grid md:grid-cols-12 gap-10 border-t border-line pt-16">
          <h2 className="md:col-span-4 mono text-xs uppercase tracking-[0.25em] text-text-muted">Toolkit</h2>
          <ul className="md:col-span-8 flex flex-wrap gap-3">
            {TOOLS.map((t) => (
              <li key={t} className="mono text-xs uppercase tracking-[0.2em] border border-line px-4 py-2 hover:border-accent hover:text-accent transition-colors">{t}</li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="mt-32 grid md:grid-cols-12 gap-10 border-t border-line pt-16">
          <h2 className="md:col-span-4 mono text-xs uppercase tracking-[0.25em] text-text-muted">Timeline</h2>
          <ol className="md:col-span-8 grid gap-6">
            {TIMELINE.map((t, i) => (
              <li key={i} className="grid grid-cols-12 gap-4 border-b border-line pb-4">
                <span className="col-span-3 md:col-span-2 mono text-xs text-accent">{t.y}</span>
                <span className="col-span-9 md:col-span-10 text-text-primary">{t.t}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-32 border-t border-line pt-20 text-center">
          <p className="display text-4xl md:text-6xl tracking-[-0.03em]">
            Let&apos;s build something <span className="italic text-text-secondary font-normal">extraordinary</span><span className="text-accent">.</span>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 bg-accent text-text-inverse mono text-xs uppercase tracking-[0.2em] px-8 py-5 hover:bg-accent-hover transition-colors">
              {SITE.email} ↗
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-line text-text-primary mono text-xs uppercase tracking-[0.2em] px-8 py-5 hover:border-accent hover:text-accent transition-colors">
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

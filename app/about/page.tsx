import { STATS, SITE, COPY } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Joana Lopes Mesquita',
  description: 'Full Stack Designer & Creative Director based in Portimão, Portugal. Seven years building brands for CogniFit, D\'ALMA FarmLiving, and more.',
  alternates: { canonical: 'https://joolomee.com/about' },
};

const TOOLS = ['Figma', 'Adobe CC', 'VS Code', 'Next.js', 'Webflow', 'Blender', 'Python', 'Procreate'];
const TIMELINE = [
  { y: '2019 →', t: 'Branding Manager · CarlaGonçalves — Concept, logo, visual identity (ongoing).' },
  { y: '2021', t: 'Designer & Web Designer · Albinet — UX/UI, landing pages, 3D, HTML/CSS.' },
  { y: '2022', t: 'CogniFit — Full Stack → Senior Visual → Marketing Designer.' },
  { y: '2022', t: 'Head of Design · DualClinic Saldanha — Campaigns, B2C ads, direction.' },
  { y: '2024', t: 'Designer · Agência Modal — Event identity & materials, Porto.' },
  { y: '2025', t: 'Branding Manager · D\'ALMA® FarmLiving — Hotel + bio commerce system.' },
  { y: '2025', t: 'Freelance · TCPI International — 21-slide deck + corporate video.' },
  { y: '2026', t: 'Joolomee — Independent creative studio, remote worldwide.' },
];

export default function AboutPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— About</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Joana<span className="text-accent">.</span></h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="display text-3xl md:text-4xl leading-[1.2] tracking-[-0.02em]">
              "A brand can be wonderful, but it needs to be seen by the right people. That's where I come in. I build brands from the ground up — and rebuild them to be unforgettable."
            </p>
            <p className="text-text-secondary text-lg mt-10 leading-relaxed max-w-2xl">
              Full Stack Designer & Creative Director based in {SITE.location}. Over 7 years working across brand identity, web design &amp; development, UI/UX, creative direction and motion. Clients across Portugal, Spain and worldwide — from global cognitive-health platforms to boutique hotels.
            </p>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
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

        <div className="mt-32 grid md:grid-cols-12 gap-10 border-t border-line pt-16">
          <h2 className="md:col-span-4 mono text-xs uppercase tracking-[0.25em] text-text-muted">Process</h2>
          <ol className="md:col-span-8 grid gap-4">
            {['Discovery','Strategy','Design','Development','Launch'].map((p, i) => (
              <li key={p} className="flex items-baseline gap-6 border-b border-line pb-4">
                <span className="mono text-xs text-accent">0{i+1}</span>
                <span className="display text-3xl md:text-5xl tracking-[-0.03em]">{p}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-32 grid md:grid-cols-12 gap-10 border-t border-line pt-16">
          <h2 className="md:col-span-4 mono text-xs uppercase tracking-[0.25em] text-text-muted">Toolkit</h2>
          <ul className="md:col-span-8 flex flex-wrap gap-3">
            {TOOLS.map((t) => (
              <li key={t} className="mono text-xs uppercase tracking-[0.2em] border border-line px-4 py-2">{t}</li>
            ))}
          </ul>
        </div>

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
      </div>
    </section>
  );
}

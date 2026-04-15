import { SERVICES, SITE, COPY } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Branding, Web Design & Development',
  description: 'Brand Strategy, Rebrand, Web Design & Development, UI/UX, Social Media, Creative Direction, Presentation & Motion. Full stack design services by Joana Lopes Mesquita, based in Portugal.',
  alternates: { canonical: 'https://joolomee.com/services' },
};

const DELIVERABLES: Record<string, string[]> = {
  '01': ['Brand Strategy Document', 'Logo Design (primary + variations)', 'Colour & Typography System', 'Brand Guidelines / Brand Book', 'Stationery & Applications'],
  '02': ['Brand Audit Report', 'Redesigned Identity System', 'Updated Brand Guidelines', 'Migration Strategy'],
  '03': ['UI Design (Figma)', 'Responsive Development', 'SEO Setup & Optimization', 'CMS Integration', 'Performance Optimization'],
  '04': ['User Research & Personas', 'Wireframes & User Flows', 'High-Fidelity Prototypes', 'Design System & Components', 'Developer Handoff'],
  '05': ['Content Templates (Stories, Posts, Reels)', 'Campaign Visual Systems', 'Ad Creatives (Meta, Google)', 'Email Marketing Design'],
  '06': ['Creative Brief & Concept Development', 'Moodboards & Visual Direction', 'Campaign Art Direction', 'Production Oversight'],
  '07': ['Pitch Decks & Corporate Presentations', 'Motion Graphics & Animation', 'Video Editing & Post-Production', 'Animated Social Media Content'],
};

const FAQ = [
  { q: "What's your typical project timeline?", a: "It depends on the scope. A brand identity usually takes 4–6 weeks. A website can range from 3–8 weeks. I'll give you a clear timeline during our first conversation." },
  { q: 'Do you work with international clients?', a: "Absolutely. I work remotely with clients worldwide. Currently based in Portugal, I've worked with teams in Spain, Israel, the US, and across Europe." },
  { q: "What's the investment for a branding project?", a: "Every project is unique. After our discovery call, I provide a detailed proposal with transparent pricing. I work with fixed project fees — no hourly surprises." },
  { q: 'Can you handle both design and development?', a: "Yes — that's the full stack advantage. From brand strategy to Figma design to Next.js or Webflow development, I handle the entire process. One point of contact, consistent quality." },
  { q: 'Do you offer ongoing support after launch?', a: "Yes. I offer maintenance retainers for websites and ongoing creative support packages for brands that need consistent design output." },
];

export default function ServicesPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Services</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Services<span className="text-accent">.</span></h1>
        <p className="text-text-secondary text-xl max-w-2xl mt-10">
          End-to-end — from first sketch to last deploy. Seven disciplines, one vision.
        </p>

        {/* Contact visible */}
        <div className="mt-6 flex flex-wrap gap-5 items-center">
          <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">{SITE.email}</a>
          <span className="text-text-muted">·</span>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">WhatsApp</a>
        </div>

        {/* Services with deliverables */}
        <div className="mt-24 grid gap-16 md:gap-20">
          {SERVICES.map((s) => {
            const title = COPY.en[s.key] ?? '';
            const desc = COPY.en[`${s.key}d`] ?? '';
            const deliverables = DELIVERABLES[s.n] ?? [];
            return (
              <article key={s.n} className="grid grid-cols-12 gap-4 md:gap-8 border-t border-line pt-10">
                <span className="col-span-12 md:col-span-1 mono text-sm text-accent">{s.n}</span>
                <div className="col-span-12 md:col-span-5">
                  <h2 className="display text-4xl md:text-6xl tracking-[-0.03em] leading-[1.05]">{title}</h2>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-lg text-text-secondary leading-relaxed">{desc}</p>
                  {deliverables.length > 0 && (
                    <div className="mt-6">
                      <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-3">Deliverables</p>
                      <ul className="grid gap-2">
                        {deliverables.map((d) => (
                          <li key={d} className="text-sm text-text-secondary flex items-start gap-3">
                            <span className="text-accent text-[8px] mt-1.5">●</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(title + ' inquiry')}`} className="mono text-xs uppercase tracking-[0.2em] link-underline mt-6 inline-flex">
                    Inquire →
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* FAQ for SEO */}
        <div className="mt-40 border-t border-line pt-16">
          <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— FAQ</p>
          <h2 className="display text-[10vw] md:text-[6vw] leading-[0.92] tracking-[-0.04em]">
            Frequently Asked<span className="text-accent">.</span>
          </h2>

          <div className="mt-16">
            {FAQ.map((item, i) => (
              <details key={i} className="border-t border-line group">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-medium pr-8">{item.q}</span>
                  <span className="mono text-accent text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-text-secondary leading-relaxed pb-6 max-w-2xl">{item.a}</p>
              </details>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <p className="display text-4xl md:text-6xl tracking-[-0.03em]">
            Ready to start? <a href={`mailto:${SITE.email}`} className="text-accent link-underline">Let&apos;s talk</a>.
          </p>
        </div>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />
    </section>
  );
}

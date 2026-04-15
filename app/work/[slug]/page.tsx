import { WORK, COPY } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = WORK.find((w) => w.slug === params.slug);
  if (!p) return {};
  const title = COPY.en[p.titleKey] ?? p.client;
  const category = COPY.en[p.categoryKey] ?? '';
  return {
    title: `${p.client} — ${title}`,
    description: `${category} case study — ${p.client}. ${title}. By Joana Lopes Mesquita (Joolomee).`,
    alternates: { canonical: `https://joolomee.com/work/${p.slug}` },
  };
}

/* Gallery images per project */
const GALLERIES: Record<string, { label?: string; images: { src: string; alt: string }[] }[]> = {
  'cognifit': [
    { label: 'Web & App Design', images: [
      { src: '/work/cognifit-mindfit-hero.png', alt: 'CogniFit MindFit — landing page design' },
      { src: '/work/cognifit-mindfit-app.png', alt: 'CogniFit MindFit — app interface design' },
    ]},
    { label: 'Game UI Design', images: [
      { src: '/work/cognifit-game-mahjong.png', alt: 'CogniFit — Mahjong brain game UI' },
      { src: '/work/cognifit-game-solitaire.png', alt: 'CogniFit — Solitaire brain game UI' },
      { src: '/work/cognifit-game-antescape.png', alt: 'CogniFit — Antescape brain game UI' },
    ]},
    { label: 'Email Campaigns', images: [
      { src: '/work/cognifit-onboarding.png', alt: 'CogniFit — onboarding email flow' },
      { src: '/work/cognifit-email-halloween.png', alt: 'CogniFit — Halloween email campaign' },
      { src: '/work/cognifit-halloween-2.png', alt: 'CogniFit — Halloween campaign variant' },
      { src: '/work/cognifit-christmas.png', alt: 'CogniFit — Christmas B2C campaign' },
      { src: '/work/cognifit-newyear.png', alt: 'CogniFit — New Year campaign' },
      { src: '/work/cognifit-womensday.png', alt: "CogniFit — Women's Day B2C campaign" },
    ]},
    { label: 'Seasonal & Sales Campaigns', images: [
      { src: '/work/cognifit-blackfriday.png', alt: 'CogniFit — Black Friday campaign' },
      { src: '/work/cognifit-cybermonday.png', alt: 'CogniFit — Cyber Monday campaign' },
      { src: '/work/cognifit-spring-sales.png', alt: 'CogniFit — Spring sales campaign' },
      { src: '/work/cognifit-family-sales.png', alt: 'CogniFit — Family sales campaign' },
      { src: '/work/cognifit-benefits.png', alt: 'CogniFit — Five Benefits infographic' },
    ]},
  ],
  'dalma-farmliving': [
    { label: 'Brand Identity & Packaging', images: [
      { src: '/work/dalma-mel-full.png', alt: "D'ALMA — complete honey brand system" },
      { src: '/work/dalma-mel-label.png', alt: "D'ALMA — honey label design" },
      { src: '/work/dalma-logo-system.png', alt: "D'ALMA — logo system" },
    ]},
  ],
};

/* Project descriptions */
const DESCRIPTIONS: Record<string, { context: string; challenge: string; solution: string }> = {
  'cognifit': {
    context: 'CogniFit is a global leader in cognitive health and brain training, serving millions of users worldwide. As Full Stack Designer, I led the design of web pages, game interfaces, email marketing campaigns, and digital marketing materials across multiple languages and markets.',
    challenge: 'The brand needed a consistent, high-quality visual presence across landing pages, game UIs, seasonal email campaigns, onboarding flows, and paid advertising — all while maintaining brand coherence across dozens of markets and languages.',
    solution: 'Designed responsive landing pages and app interfaces, created brain game UIs (Mahjong, Solitaire, Antescape), built comprehensive email campaign systems (onboarding, seasonal promotions, retention), and produced marketing materials for Black Friday, Cyber Monday, Christmas, Halloween and more — all crafted for conversion while staying true to the brand.',
  },
  'dalma-farmliving': {
    context: "D'ALMA Farm Living is a luxury farm hotel and organic commerce project in the Algarve, Portugal. The brand needed a complete identity that would convey both the luxury of the hospitality experience and the authenticity of their organic products.",
    challenge: 'Creating a brand system versatile enough to work across hospitality, organic food packaging, and digital — while maintaining a premium, nature-rooted feel.',
    solution: "Developed the complete brand identity from the ground up — naming, logo system, colour palette, typography, honey label packaging design, and all brand applications. The visual language balances organic warmth with refined luxury, reflecting D'ALMA's dual nature as both a farm retreat and artisanal producer.",
  },
};

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = WORK.find((w) => w.slug === params.slug);
  if (!project) return notFound();
  const idx = WORK.findIndex((w) => w.slug === project.slug);
  const next = WORK[(idx + 1) % WORK.length];
  const title = COPY.en[project.titleKey] ?? project.client;
  const category = COPY.en[project.categoryKey] ?? '';
  const gallery = GALLERIES[project.slug] ?? [];
  const desc = DESCRIPTIONS[project.slug];

  return (
    <article className="pt-32 pb-32">
      <div className="container-site">
        <Link href="/work" className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">← Back to work</Link>
        <header className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-4">{category} · {project.year}</p>
            <h1 className="display text-[14vw] md:text-[8vw] leading-[0.9] tracking-[-0.04em]">{project.client}</h1>
            <p className="display text-3xl md:text-4xl mt-6 text-text-secondary">{title}</p>
          </div>
          <ul className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((tag) => (
              <li key={tag} className="mono text-[10px] uppercase tracking-[0.2em] border border-line px-3 py-1.5">{tag}</li>
            ))}
          </ul>
        </header>

        {/* Hero image or gradient fallback */}
        {project.hero ? (
          <div className="mt-16 relative aspect-[16/9] rounded-2xl overflow-hidden bg-bg-secondary shadow-soft">
            <Image src={project.hero} alt={`${project.client} — hero`} fill sizes="(min-width:1024px) 1280px, 100vw" priority className="object-cover" />
          </div>
        ) : (
          <div className={`mt-16 aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-soft`}>
            <span className="display text-white/30 text-[20vw] md:text-[10vw]">{project.client.split(' ')[0]}</span>
          </div>
        )}

        {/* Case study content */}
        {desc ? (
          <div className="mt-24 space-y-20">
            {[
              { label: 'Context', text: desc.context },
              { label: 'Challenge', text: desc.challenge },
              { label: 'Solution', text: desc.solution },
            ].map(({ label, text }) => (
              <div key={label} className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-3">
                  <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted">{label}</p>
                </div>
                <p className="md:col-span-9 text-xl md:text-2xl leading-[1.5] tracking-[-0.01em] max-w-3xl text-text-secondary">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-24 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Context</p>
            </div>
            <p className="md:col-span-9 text-2xl md:text-3xl leading-[1.4] tracking-[-0.01em] max-w-3xl">
              Case study content coming soon. Every project deserves its own narrative.
            </p>
          </div>
        )}

        {/* Image gallery */}
        {gallery.length > 0 && (
          <div className="mt-24">
            <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted mb-12">Gallery</p>
            {gallery.map((section) => (
              <div key={section.label ?? 'default'} className="mb-16 last:mb-0">
                {section.label && (
                  <h3 className="display text-xl md:text-2xl tracking-[-0.02em] text-text-primary mb-6">{section.label}</h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.images.map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-bg-secondary">
                      <Image src={img.src} alt={img.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <nav className="mt-32 flex items-center justify-between border-t border-line pt-10">
          <Link href="/work" className="mono text-xs uppercase tracking-[0.2em] link-underline">Index</Link>
          <Link href={`/work/${next.slug}`} className="group inline-flex items-center gap-4 mono text-xs uppercase tracking-[0.2em]">
            Next: <span className="display text-3xl md:text-4xl tracking-[-0.03em] group-hover:text-accent transition-colors">{next.client}</span> →
          </Link>
        </nav>
      </div>
    </article>
  );
}

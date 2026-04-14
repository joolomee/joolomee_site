import { WORK } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = WORK.find((w) => w.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.client} — ${p.title}`,
    description: `${p.category} case study — ${p.client}. ${p.title}. By Joana Lopes Mesquita (Joolomee).`,
    alternates: { canonical: `https://joolomee.com/work/${p.slug}` },
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = WORK.find((w) => w.slug === params.slug);
  if (!project) return notFound();
  const idx = WORK.findIndex((w) => w.slug === project.slug);
  const next = WORK[(idx + 1) % WORK.length];

  return (
    <article className="pt-32 pb-32">
      <div className="container-site">
        <Link href="/work" className="mono text-xs uppercase tracking-[0.2em] link-underline text-text-secondary">← Back to work</Link>
        <header className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-4">{project.category} · {project.year}</p>
            <h1 className="display text-[14vw] md:text-[8vw] leading-[0.9] tracking-[-0.04em]">{project.client}</h1>
            <p className="display text-3xl md:text-4xl mt-6 text-text-secondary">{project.title}</p>
          </div>
          <ul className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((t) => (
              <li key={t} className="mono text-[10px] uppercase tracking-[0.2em] border border-line px-3 py-1.5">{t}</li>
            ))}
          </ul>
        </header>

        <div className={`mt-16 aspect-[16/9] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
          <span className="display text-white/30 text-[20vw] md:text-[10vw]">{project.client.split(' ')[0]}</span>
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Context</p>
          </div>
          <p className="md:col-span-9 text-2xl md:text-3xl leading-[1.4] tracking-[-0.01em] max-w-3xl">
            Case study content coming soon. Every project deserves its own narrative — discovery, challenge, solution, results.
          </p>
        </div>

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

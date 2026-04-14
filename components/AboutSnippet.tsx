import { STATS } from '@/lib/data';
import Link from 'next/link';
import Reveal from './Reveal';

export default function AboutSnippet() {
  return (
    <section className="py-32 md:py-48 border-t border-line">
      <div className="container-site grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— About</p>
          <Reveal>
            <p className="display text-[8vw] md:text-[4.5vw] leading-[1.05] tracking-[-0.03em]">
              I'm Joana — a full stack designer &amp; creative director working at the intersection of brand, code, and craft.
            </p>
          </Reveal>
          <p className="text-text-secondary text-lg mt-10 max-w-xl">
            Seven years building visual systems for brands that want to matter. From cognitive health platforms translated to 22 languages, to luxury farm hotels, to corporate decks — every project is treated as a portfolio piece.
          </p>
          <Link href="/about" className="mono text-xs uppercase tracking-[0.2em] link-underline mt-10 inline-flex">
            More about me →
          </Link>
        </div>

        <div className="md:col-span-5 md:border-l border-line md:pl-10 flex flex-col justify-end">
          <ul className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <li key={s.label} className="border-t border-line pt-6">
                <span className="display text-5xl md:text-6xl block">{s.n}</span>
                <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted mt-3 block">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

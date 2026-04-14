import { CLIENTS } from '@/lib/data';

export default function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Trusted by" className="border-y border-line py-8 overflow-hidden">
      <div className="marquee-track">
        {items.map((c, i) => (
          <span key={i} className="display text-3xl md:text-5xl text-text-secondary whitespace-nowrap flex items-center gap-16">
            {c}
            <span className="text-accent text-2xl">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

import { SITE } from '@/lib/data';
import Reveal from './Reveal';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 border-t border-line">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-10">— Contact</p>
        <Reveal>
          <h2 className="display text-[12vw] md:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Let's build<br />
            something <span className="text-accent italic font-normal">extraordinary.</span>
          </h2>
        </Reveal>
        <p className="text-text-secondary text-xl mt-10 max-w-xl">
          Available for new projects — remote worldwide. Full stack from concept to launch.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl">
          <a href={`mailto:${SITE.email}`} className="group border border-line hover:border-accent transition-colors p-8 flex items-start justify-between gap-4">
            <div>
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-3">Email</span>
              <span className="display text-2xl md:text-3xl">{SITE.email}</span>
            </div>
            <span className="mono text-lg group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
          </a>
          <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="group border border-line hover:border-accent transition-colors p-8 flex items-start justify-between gap-4">
            <div>
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted block mb-3">WhatsApp</span>
              <span className="display text-2xl md:text-3xl">Direct message →</span>
            </div>
            <span className="mono text-lg group-hover:text-accent group-hover:translate-x-1 transition-all">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

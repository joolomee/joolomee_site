import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="display text-5xl md:text-7xl leading-[0.9]">
            Let's build<br />something<br /><span className="text-accent">extraordinary.</span>
          </p>
          <a href={`mailto:${SITE.email}`} className="mono text-xs uppercase tracking-[0.2em] mt-8 inline-flex items-center gap-2 link-underline">
            {SITE.email} ↗
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">Navigate</p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="link-underline">{l.label}</Link></li>
            ))}
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">Social</p>
          <ul className="flex flex-col gap-2">
            <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn ↗</a></li>
            <li><a href="#" className="link-underline">Behance ↗</a></li>
            <li><a href="#" className="link-underline">Instagram ↗</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">Based</p>
          <p>{SITE.location}</p>
          <p className="text-text-secondary mt-1">Available worldwide</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site py-6 flex flex-col md:flex-row justify-between gap-3 mono text-xs uppercase tracking-[0.2em] text-text-muted">
          <p>© {new Date().getFullYear()} Joolomee — Joana Lopes Mesquita</p>
          <p>Designed & developed in Portimão, Portugal</p>
        </div>
      </div>
    </footer>
  );
}

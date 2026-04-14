import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line">
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="font-display text-sm font-bold tracking-[0.18em] text-text-primary">JOOLOMEE</span>
          </div>
          <p className="display text-4xl md:text-5xl leading-[1] tracking-[-0.035em] text-text-primary">
            Remember me,<br />
            <span className="script italic font-normal text-accent">Joolomee.</span>
          </p>
          <a href={`mailto:${SITE.email}`} className="mono text-[11px] uppercase tracking-[0.22em] mt-7 inline-flex items-center gap-2 link-underline text-text-primary">
            {SITE.email} ↗
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-4">Navigate</p>
          <ul className="flex flex-col gap-2 text-text-primary">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href} className="link-underline capitalize">{l.key}</Link></li>
            ))}
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-4">Social</p>
          <ul className="flex flex-col gap-2 text-text-primary">
            <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn ↗</a></li>
            <li><a href={SITE.behance} target="_blank" rel="noopener noreferrer" className="link-underline">Behance ↗</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">Instagram ↗</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-text-muted mb-4">Based</p>
          <p className="text-text-primary">{SITE.location}</p>
          <p className="text-text-secondary mt-1">Available worldwide</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site py-6 flex flex-col md:flex-row justify-between gap-3 mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
          <p>© {new Date().getFullYear()} Joolomee — Joana Lopes Mesquita</p>
          <p>Designed & developed in Portimão · PT</p>
        </div>
      </div>
    </footer>
  );
}

import { SITE } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description: 'Start a project with Joolomee. Available for branding, web design & development, creative direction worldwide.',
  alternates: { canonical: 'https://joolomee.com/contact' },
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Contact</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Start<br/>a Project<span className="text-accent">.</span></h1>

        <div className="mt-20 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <a href={`mailto:${SITE.email}`} className="display text-3xl md:text-4xl link-underline block">{SITE.email} ↗</a>
            <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`} className="display text-3xl md:text-4xl link-underline mt-6 block" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            <p className="text-text-secondary mt-10 max-w-sm">Based in {SITE.location}. Available remote worldwide. Typical response within 24h.</p>
          </div>

          <form
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
            className="md:col-span-7 grid gap-8"
          >
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Name</span>
              <input required name="name" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl" />
            </label>
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Email</span>
              <input required type="email" name="email" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl" />
            </label>
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Project Type</span>
              <select name="type" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl appearance-none">
                <option className="bg-bg">Branding</option>
                <option className="bg-bg">Rebrand</option>
                <option className="bg-bg">Web Design &amp; Development</option>
                <option className="bg-bg">UI/UX</option>
                <option className="bg-bg">Social Media &amp; Marketing</option>
                <option className="bg-bg">Creative Direction</option>
                <option className="bg-bg">Presentation &amp; Motion</option>
                <option className="bg-bg">Other</option>
              </select>
            </label>
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Budget</span>
              <select name="budget" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl appearance-none">
                <option className="bg-bg">&lt; 5k €</option>
                <option className="bg-bg">5–15k €</option>
                <option className="bg-bg">15–40k €</option>
                <option className="bg-bg">40k+ €</option>
              </select>
            </label>
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Message</span>
              <textarea required name="message" rows={5} className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl resize-none" />
            </label>
            <button type="submit" className="justify-self-start inline-flex items-center gap-3 bg-accent text-text-inverse mono text-xs uppercase tracking-[0.2em] px-8 py-5 hover:bg-accent-hover transition-colors">
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

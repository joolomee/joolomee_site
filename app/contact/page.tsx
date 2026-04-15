import { SITE } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description: 'Start a project with Joolomee. Brand strategy, web design & development, creative direction. Based in Portimão, Portugal — available worldwide. Response within 24h.',
  alternates: { canonical: 'https://joolomee.com/contact' },
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-32">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— Contact</p>
        <h1 className="display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Start<br/>a Project<span className="text-accent">.</span></h1>

        {/* Availability badge */}
        <div className="mt-8 inline-flex items-center gap-3 border border-line rounded-full px-5 py-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="mono text-xs uppercase tracking-[0.18em] text-text-primary">Available for projects — 2026</span>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-16">
          {/* Left — direct contact */}
          <div className="md:col-span-5">
            <div className="space-y-6">
              <a href={`mailto:${SITE.email}`} className="group flex items-start gap-4 border border-line hover:border-text-primary rounded-2xl p-6 transition-colors">
                <div>
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-2">Email</span>
                  <span className="display text-2xl md:text-3xl">{SITE.email}</span>
                </div>
                <span className="mono text-lg text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all ml-auto">↗</span>
              </a>

              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 border border-line hover:border-text-primary rounded-2xl p-6 transition-colors">
                <div>
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-2">WhatsApp</span>
                  <span className="display text-2xl md:text-3xl">Direct message</span>
                </div>
                <span className="mono text-lg text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all ml-auto">↗</span>
              </a>

              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 border border-line hover:border-text-primary rounded-2xl p-6 transition-colors">
                <div>
                  <span className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-2">LinkedIn</span>
                  <span className="display text-2xl md:text-3xl">Connect</span>
                </div>
                <span className="mono text-lg text-text-muted group-hover:text-text-primary group-hover:translate-x-1 transition-all ml-auto">↗</span>
              </a>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-3">Location</p>
              <p className="text-text-primary">Based in {SITE.location}</p>
              <p className="mono text-xs text-accent tracking-wide mt-2">Available Worldwide — Remote</p>
              <p className="text-text-secondary text-sm mt-4">Typical response within 24 hours.</p>
            </div>
          </div>

          {/* Right — form */}
          <form
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
            className="md:col-span-7 grid gap-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <label className="grid gap-3">
                <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Name *</span>
                <input required name="name" placeholder="Your name" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl placeholder:text-text-muted/40 transition-colors" />
              </label>
              <label className="grid gap-3">
                <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Email *</span>
                <input required type="email" name="email" placeholder="your@email.com" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl placeholder:text-text-muted/40 transition-colors" />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <label className="grid gap-3">
                <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Project Type</span>
                <select name="type" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl appearance-none transition-colors">
                  <option className="bg-bg">Select a service</option>
                  <option className="bg-bg">Brand Strategy & Identity</option>
                  <option className="bg-bg">Brand Refresh / Rebrand</option>
                  <option className="bg-bg">Web Design & Development</option>
                  <option className="bg-bg">UI/UX Design</option>
                  <option className="bg-bg">Social Media & Marketing</option>
                  <option className="bg-bg">Creative Direction</option>
                  <option className="bg-bg">Presentation & Motion</option>
                  <option className="bg-bg">Other</option>
                </select>
              </label>
              <label className="grid gap-3">
                <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Budget</span>
                <select name="budget" className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl appearance-none transition-colors">
                  <option className="bg-bg">Select range</option>
                  <option className="bg-bg">&lt; €2,000</option>
                  <option className="bg-bg">€2,000 — €5,000</option>
                  <option className="bg-bg">€5,000 — €10,000</option>
                  <option className="bg-bg">€10,000 — €25,000</option>
                  <option className="bg-bg">&gt; €25,000</option>
                  <option className="bg-bg">Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="grid gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-text-muted">Tell me about your project *</span>
              <textarea required name="message" rows={5} placeholder="Goals, timeline, anything relevant..." className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-xl resize-none placeholder:text-text-muted/40 transition-colors" />
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

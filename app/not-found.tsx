import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-muted mb-6">— 404</p>
        <h1 className="display text-[22vw] md:text-[14vw] leading-[0.85] tracking-[-0.04em]">Lost<br/>in space<span className="text-accent">.</span></h1>
        <Link href="/" className="mono text-xs uppercase tracking-[0.2em] link-underline mt-10 inline-flex">← Back home</Link>
      </div>
    </section>
  );
}

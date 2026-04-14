import Reveal from './Reveal';

export default function Manifesto() {
  return (
    <section className="bg-bg-contrast text-text-inverse py-32 md:py-48">
      <div className="container-site">
        <p className="mono text-xs uppercase tracking-[0.25em] text-text-inverse/60 mb-10">— Manifesto</p>
        <Reveal>
          <p className="display text-[9vw] md:text-[5.5vw] leading-[1] tracking-[-0.03em]">
            Every brand deserves <br />
            a <span className="italic font-normal">(re)start</span>.
            I create brands <br />from the ground up —<br />
            and <span className="underline decoration-1 underline-offset-[0.12em]">rebuild them</span> to be<br />
            unforgettable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import IntelligenceVisual from "./IntelligenceVisual";
import EarlyAccessButton from "./EarlyAccessButton";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-page relative grid gap-14 md:grid-cols-2 md:items-center md:gap-10">
        <div>
          <p className="text-sm text-graphite">Business intelligence</p>

          <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.1] text-paper sm:text-5xl md:text-[3.3rem]">
            See what matters before it becomes obvious.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-graphite md:text-[1.05rem]">
            LENSING is a persistent intelligence system that helps your business understand what
            is changing, why it matters, and where the next opportunity may be.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <EarlyAccessButton />
            <a
              href="#how-it-works"
              className="rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-graphite"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-ink/60 p-5 sm:p-7">
          <IntelligenceVisual />
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import EarlyAccessButton from "./EarlyAccessButton";

export default function CTA() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page text-center">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            Your business is changing every day.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed">
            LENSING is being built to help you understand what changed, why it matters, and what
            could come next.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <EarlyAccessButton />
            <a
              href="#product"
              className="rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-graphite"
            >
              Explore LENSING
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

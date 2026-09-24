import Reveal from "./Reveal";

const STAGES = ["Baseline", "Signals", "Insights", "Opportunities", "Actions", "History"];

export default function AuditToContinuous() {
  return (
    <section id="for-businesses" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            Your business audit shouldn&apos;t end after one report.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed">
            LENSING starts by building a baseline understanding of your business. From there, the
            system is designed to continuously build on that understanding.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line p-6">
            <p className="text-xs text-graphite">One-time audit</p>
            <p className="font-display mt-2 text-paper">Understand where you are today.</p>
          </div>
          <div className="rounded-2xl border border-accent bg-accent-dim p-6">
            <p className="text-xs text-accent">Continuous intelligence</p>
            <p className="font-display mt-2 text-paper">Keep understanding what changes tomorrow.</p>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 overflow-x-auto">
          <ol className="flex min-w-max items-center gap-0">
            {STAGES.map((stage, i) => (
              <li key={stage} className="flex items-center">
                <span className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-paper">
                  {stage}
                </span>
                {i < STAGES.length - 1 && (
                  <span className="mx-3 h-px w-8 bg-line" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

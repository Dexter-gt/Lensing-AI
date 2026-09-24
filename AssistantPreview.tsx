import Reveal from "./Reveal";

const CONTEXT_SOURCES = ["Business", "Signals", "History", "Goals", "Opportunities"];

const QUESTIONS = [
  "Why did you flag this?",
  "What changed this month?",
  "Compare our positioning with our competitors.",
  "What are our biggest growth opportunities?",
  "What should my marketing team focus on this week?",
];

export default function AssistantPreview() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <h2 className="font-display max-w-md text-3xl leading-tight text-paper md:text-4xl">
            Ask your business intelligence layer.
          </h2>
          <p className="mt-6 max-w-sm text-graphite leading-relaxed">
            LENSING answers using the context it has already built about your business — not a
            generic model with no memory of who you are.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {CONTEXT_SOURCES.map((s) => (
              <span key={s} className="flex items-center gap-1.5 text-xs text-graphite">
                <span className="signal-dot" aria-hidden />
                {s}
              </span>
            ))}
          </div>

          <ul className="flex flex-col divide-y divide-line border-t border-line">
            {QUESTIONS.map((q) => (
              <li key={q} className="py-3 text-sm text-paper">
                {q}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

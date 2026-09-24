import Reveal from "./Reveal";

const ROWS = [
  {
    label: "Signal",
    body: "A competitor changes its enterprise positioning.",
  },
  {
    label: "What changed?",
    body: "The competitor's messaging begins emphasizing enterprise teams and larger organizations.",
  },
  {
    label: "Why it matters",
    body: "This may indicate a shift toward a customer segment that overlaps with your target audience.",
  },
  {
    label: "LENSING context",
    body: "Your current positioning and target audience are also oriented toward growing businesses.",
  },
  {
    label: "Potential opportunity",
    body: "Review whether your positioning clearly communicates your differentiation for this segment.",
    accent: true,
  },
  {
    label: "Next step",
    body: "Compare your enterprise positioning against the competitor and identify messaging gaps.",
  },
];

export default function IntelligenceExample() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="font-display max-w-md text-3xl leading-tight text-paper md:text-4xl">
            Not just what changed. Why it matters.
          </h2>
          <p className="mt-6 max-w-sm text-graphite leading-relaxed">
            LENSING connects a new signal to what it already knows about your business, so the
            output is context — not just a notification.
          </p>
        </Reveal>

        <div>
          <p className="mb-5 text-xs text-graphite">Example LENSING intelligence</p>
          <dl className="relative flex flex-col before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-px before:bg-line">
            {ROWS.map((row, i) => (
              <Reveal key={row.label} delay={i * 90}>
                <div className="relative border-t border-line py-4 pl-6 first:border-t-0 first:pt-0">
                  <span
                    className={`absolute left-0 top-6 h-1.5 w-1.5 rounded-full first:top-1.5 ${
                      row.accent ? "bg-accent" : "bg-graphite-dark"
                    }`}
                    aria-hidden
                  />
                  <dt className={`text-xs ${row.accent ? "text-accent" : "text-graphite"}`}>
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-paper">{row.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const FLOW = ["Signal", "Investigation", "Opportunity", "Action"];

const OPPORTUNITIES = [
  {
    title: "Differentiate enterprise messaging",
    type: "Positioning opportunity",
    dimensions: [
      { label: "Impact", value: "High" },
      { label: "Urgency", value: "Medium" },
      { label: "Effort", value: "Low" },
      { label: "Confidence", value: "Moderate" },
    ],
  },
  {
    title: "Expand into an underserved segment",
    type: "Growth opportunity",
    dimensions: [
      { label: "Impact", value: "High" },
      { label: "Urgency", value: "Low" },
      { label: "Effort", value: "High" },
      { label: "Confidence", value: "Moderate" },
    ],
  },
  {
    title: "Refresh conversion messaging on site",
    type: "Marketing opportunity",
    dimensions: [
      { label: "Impact", value: "Medium" },
      { label: "Urgency", value: "Medium" },
      { label: "Effort", value: "Low" },
      { label: "Confidence", value: "High" },
    ],
  },
];

export default function OpportunitySection() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            Turn signals into opportunities.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed">
            Information alone isn&apos;t enough. LENSING is designed to help identify growth,
            positioning, marketing, competitive and product opportunities — and to show the
            dimensions behind each one, not rank them for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-graphite">
            {FLOW.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className={i === FLOW.length - 1 ? "text-accent" : undefined}>{step}</span>
                {i < FLOW.length - 1 && <span aria-hidden>→</span>}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-14 border-t border-line">
          <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {OPPORTUNITIES.map((opp) => (
              <div key={opp.title} className="py-6 md:px-6 md:py-8 md:first:pl-0">
                <p className="text-xs text-graphite">{opp.type}</p>
                <h3 className="font-display mt-2 text-paper leading-snug">{opp.title}</h3>
                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                  {opp.dimensions.map((d) => (
                    <div key={d.label}>
                      <dt className="text-[11px] text-graphite">{d.label}</dt>
                      <dd className="mt-0.5 text-sm text-paper">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

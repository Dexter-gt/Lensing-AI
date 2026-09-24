import Reveal from "./Reveal";

const FORCES = [
  "Competitors",
  "Customers",
  "Markets",
  "Technology",
  "Pricing",
  "Culture",
  "Content",
  "New entrants",
];

// Percent-based positions around the center so the diagram scales cleanly
// down to small screens without becoming unreadable.
const POSITIONS = [
  { x: 18, y: 12 },
  { x: 50, y: 6 },
  { x: 82, y: 12 },
  { x: 10, y: 50 },
  { x: 90, y: 50 },
  { x: 18, y: 88 },
  { x: 50, y: 94 },
  { x: 82, y: 88 },
];

export default function ProblemSection() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page grid gap-16 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="font-display max-w-md text-3xl leading-tight text-paper md:text-4xl">
            Your business doesn&apos;t operate in isolation.
          </h2>
          <p className="font-display mt-8 max-w-sm text-xl leading-snug text-paper md:text-2xl">
            The problem isn&apos;t a lack of information. It&apos;s knowing which information
            actually matters.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {POSITIONS.map((p, i) => (
                <line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2={50}
                  y2={50}
                  stroke="var(--line)"
                  strokeWidth={0.4}
                />
              ))}
            </svg>

            <div
              className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-accent/50 bg-charcoal text-center"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            >
              <span className="font-display text-sm text-paper">
                Your
                <br />
                business
              </span>
            </div>

            {FORCES.map((force, i) => (
              <span
                key={force}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] text-graphite"
                style={{ left: `${POSITIONS[i].x}%`, top: `${POSITIONS[i].y}%` }}
              >
                {force}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

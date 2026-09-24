import Reveal from "./Reveal";

const YOUR_BUSINESS = ["Company", "Brand", "Audience", "Goals", "Products", "Marketing"];
const EXTERNAL_SIGNALS = ["Competitors", "Market", "Customers", "Technology", "Content"];
const INTELLIGENCE = ["What changed", "Why it matters", "What to consider next"];

function TagRow({ items, muted = true }: { items: string[]; muted?: boolean }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {items.map((item) => (
        <span
          key={item}
          className={`flex items-center gap-1.5 text-xs ${muted ? "text-graphite" : "text-accent"}`}
        >
          <span className={`h-1 w-1 rounded-full ${muted ? "bg-graphite-dark" : "bg-accent"}`} aria-hidden />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function LensingBrain() {
  return (
    <section id="product" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            Meet your business intelligence layer.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed">
            LENSING builds a living understanding of your business — then uses that context to
            make sense of what is happening around you.
          </p>
        </Reveal>

        <Reveal delay={100} className="spine mt-16">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-8">
            <div className="w-full text-center">
              <p className="mb-4 text-xs text-graphite">Your business</p>
              <TagRow items={YOUR_BUSINESS} />
            </div>

            <div
              className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-charcoal"
              style={{ boxShadow: "0 0 0 8px var(--accent-dim)" }}
            >
              <span className="font-display text-sm text-paper">LENSING</span>
            </div>

            <div className="w-full text-center">
              <p className="mb-4 text-xs text-graphite">External signals</p>
              <TagRow items={EXTERNAL_SIGNALS} />
            </div>

            <div className="h-6 w-px bg-line" aria-hidden />

            <div className="w-full text-center">
              <p className="mb-4 text-xs text-graphite">Intelligence</p>
              <TagRow items={INTELLIGENCE} muted={false} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

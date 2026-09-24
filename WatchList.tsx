import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "Competitors",
    items: ["Positioning", "Products", "Pricing", "Messaging", "Major changes"],
  },
  {
    title: "Market",
    items: ["Industry developments", "Emerging opportunities", "Changing expectations", "New entrants"],
  },
  {
    title: "Brand",
    items: ["Messaging", "Positioning", "Digital presence", "Consistency"],
  },
  {
    title: "Customers",
    items: ["Audience", "Needs", "Behavior", "Expectations"],
  },
  {
    title: "Digital presence",
    items: ["Website", "Content", "Campaigns", "Conversion experience"],
  },
];

export default function WatchList() {
  return (
    <section id="intelligence" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-lg">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            One view of the forces shaping your business.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 border-t border-line">
          <div className="grid divide-y divide-line md:grid-cols-5 md:divide-x md:divide-y-0">
            {GROUPS.map((group) => (
              <div key={group.title} className="py-6 md:px-5 md:py-0 md:pt-6">
                <div className="flex items-center gap-1.5">
                  <span className="signal-dot" aria-hidden />
                  <h3 className="font-display text-sm text-paper">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-graphite">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-xs text-graphite">
          Designed to monitor — coming into the LENSING intelligence layer.
        </p>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "LENSING learns your business, goals, positioning, audience and competitive landscape.",
  },
  {
    n: "02",
    title: "Monitor",
    body: "It watches for meaningful changes across the areas that matter.",
  },
  {
    n: "03",
    title: "Investigate",
    body: "AI connects new signals with what LENSING already knows about your business.",
  },
  {
    n: "04",
    title: "Discover",
    body: "LENSING surfaces opportunities, risks and strategic areas worth attention.",
  },
  {
    n: "05",
    title: "Act",
    body: "Turn intelligence into actions your team can actually execute.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-md">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            How LENSING works.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div className="grid grid-cols-[3rem_1fr] gap-6 border-t border-line py-7 md:grid-cols-[4rem_10rem_1fr] md:items-baseline">
                <span className="font-display text-graphite-dark">{step.n}</span>
                <h3 className="font-display text-lg text-paper">{step.title}</h3>
                <p className="max-w-md text-graphite leading-relaxed">{step.body}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" aria-hidden />
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const AUDIENCES = [
  { title: "Founders", body: "Know what deserves your attention." },
  { title: "Marketing teams", body: "Turn market signals into actionable intelligence." },
  { title: "Brand & strategy teams", body: "Understand positioning and competitive movement." },
  { title: "Growing businesses", body: "Build the intelligence capability without building a large strategy team." },
];

export default function AudienceSection() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-md">
          <h2 className="font-display text-3xl leading-tight text-paper md:text-4xl">
            Who LENSING is for.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
          {AUDIENCES.map((a) => (
            <div key={a.title}>
              <h3 className="font-display text-paper">{a.title}</h3>
              <p className="mt-2 text-graphite leading-relaxed">{a.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

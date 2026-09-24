"use client";

import { useEffect, useState } from "react";

const SIGNALS = ["Competitors", "Market", "Customers", "Brand", "Digital"];

const SEQUENCE = [
  {
    label: "Why it matters",
    detail: "Overlaps with the customer segment you currently target.",
  },
  {
    label: "Potential opportunity",
    detail: "Differentiate around implementation speed and support.",
  },
  {
    label: "Recommended next step",
    detail: "Review enterprise messaging against the competitor's.",
  },
];

export default function IntelligenceVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-1 text-xs text-graphite">
        <span>Conceptual flow</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          example signal
        </span>
      </div>

      {/* Signal sources converging into the LENSING layer */}
      <div className="relative mt-6">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {SIGNALS.map((s, i) => (
            <span
              key={s}
              className="flex items-center gap-1.5 text-xs text-graphite"
              style={{
                opacity: mounted ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 90}ms`,
              }}
            >
              <span className="signal-dot" aria-hidden />
              {s}
            </span>
          ))}
        </div>

        <svg
          viewBox="0 0 200 46"
          preserveAspectRatio="none"
          className="mx-auto mt-2 block h-8 w-full max-w-[220px]"
          aria-hidden
        >
          {[10, 55, 100, 145, 190].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1={0}
              x2={100}
              y2={46}
              stroke="var(--line)"
              strokeWidth={1}
              style={{
                opacity: mounted ? 1 : 0,
                transition: `opacity 0.5s ease ${200 + i * 70}ms`,
              }}
            />
          ))}
        </svg>

        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent/10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.5s ease 520ms, transform 0.5s ease 520ms",
          }}
        >
          <span className="font-display text-xs text-paper">LENSING</span>
        </div>

        <p
          className="mt-3 text-center text-xs text-graphite"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease 640ms" }}
        >
          Signal: competitor changed enterprise positioning
        </p>
      </div>

      {/* What LENSING does with the signal */}
      <ol className="spine mt-7 flex flex-col gap-5 pl-0">
        {SEQUENCE.map((step, i) => (
          <li
            key={step.label}
            className="relative flex justify-center"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.5s ease ${760 + i * 180}ms, transform 0.5s ease ${760 + i * 180}ms`,
            }}
          >
            <div className="w-full max-w-[15rem] pl-5 text-center">
              <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" aria-hidden />
              <p className="text-xs text-accent">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-paper">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

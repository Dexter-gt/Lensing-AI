"use client";

import { useState } from "react";
import EarlyAccessButton from "./EarlyAccessButton";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#intelligence", label: "Intelligence" },
  { href: "#for-businesses", label: "For Businesses" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-charcoal/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="font-display text-lg text-paper">
          LENSING
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-graphite transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <span
            className="flex cursor-not-allowed items-center gap-1.5 text-sm text-graphite-dark"
            title="Log in isn't available yet"
          >
            Log in
            <span className="rounded-full border border-line px-1.5 py-0.5 text-[10px] text-graphite">
              soon
            </span>
          </span>
          <EarlyAccessButton className="px-4 py-2" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-paper transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-paper transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-charcoal md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between gap-4 border-t border-line pt-4">
              <span className="flex items-center gap-1.5 text-sm text-graphite-dark">
                Log in
                <span className="rounded-full border border-line px-1.5 py-0.5 text-[10px] text-graphite">
                  soon
                </span>
              </span>
              <EarlyAccessButton className="px-4 py-2" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useEarlyAccess } from "@/lib/early-access-context";

export default function EarlyAccessModal() {
  const { isOpen, close } = useEarlyAccess();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    close();
    // Reset after the close transition would run, so the next open starts fresh.
    setSubmitted(false);
    setEmail("");
  };

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/70 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="early-access-title"
        className="w-full max-w-sm rounded-2xl border border-line bg-ink p-6 sm:p-7"
      >
        {!submitted ? (
          <>
            <div className="mb-5 flex items-start justify-between">
              <h2 id="early-access-title" className="font-display text-lg text-paper">
                Request early access
              </h2>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full text-graphite hover:text-paper"
              >
                ✕
              </button>
            </div>

            <p className="text-sm leading-relaxed text-graphite">
              LENSING is being built. Leave your email and we&apos;ll reach out as early access
              opens up.
            </p>

            <form
              className="mt-5 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setSubmitted(true);
              }}
            >
              <label htmlFor="early-access-email" className="text-xs text-graphite">
                Email address
              </label>
              <input
                ref={inputRef}
                id="early-access-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-paper placeholder:text-graphite-dark focus-visible:border-accent"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02]"
              >
                Request Early Access
              </button>
            </form>

            <p className="mt-4 text-xs text-graphite">
              This is a frontend demo only — nothing is sent or stored yet.
            </p>
          </>
        ) : (
          <>
            <div className="mb-4 flex items-start justify-between">
              <h2 id="early-access-title" className="font-display text-lg text-paper">
                You&apos;re on the list
              </h2>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="-mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full text-graphite hover:text-paper"
              >
                ✕
              </button>
            </div>
            <p className="text-sm leading-relaxed text-graphite">
              You&apos;re on the early-access list for <span className="text-paper">{email}</span>.
              This is a demo confirmation — no email was actually sent or stored.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-full border border-line px-5 py-3 text-sm text-paper hover:border-graphite"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

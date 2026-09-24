"use client";

import { useEarlyAccess } from "@/lib/early-access-context";

export default function EarlyAccessButton({
  variant = "primary",
  className = "",
  children = "Get Early Access",
}: {
  variant?: "primary" | "ghost";
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useEarlyAccess();

  const base = "rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]";
  const styles =
    variant === "primary"
      ? "bg-accent text-charcoal"
      : "border border-line text-paper hover:border-graphite";

  return (
    <button type="button" onClick={open} className={`${base} ${styles} ${className}`.trim()}>
      {children}
    </button>
  );
}

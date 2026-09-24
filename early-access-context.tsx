"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type EarlyAccessContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const EarlyAccessContext = createContext<EarlyAccessContextValue | null>(null);

export function EarlyAccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return <EarlyAccessContext.Provider value={value}>{children}</EarlyAccessContext.Provider>;
}

export function useEarlyAccess() {
  const ctx = useContext(EarlyAccessContext);
  if (!ctx) {
    throw new Error("useEarlyAccess must be used within an EarlyAccessProvider");
  }
  return ctx;
}

import type { Metadata } from "next";
import "./globals.css";
import { EarlyAccessProvider } from "@/lib/early-access-context";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export const metadata: Metadata = {
  title: "LENSING — Persistent intelligence for modern businesses",
  description:
    "LENSING is a persistent intelligence system that helps your business understand what is changing, why it matters, and where the next opportunity may be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EarlyAccessProvider>
          {children}
          <EarlyAccessModal />
        </EarlyAccessProvider>
      </body>
    </html>
  );
}

"use client";

import { useEarlyAccess } from "@/lib/early-access-context";

export default function Footer() {
  const { open } = useEarlyAccess();

  return (
    <footer className="border-t border-line py-14">
      <div className="container-page flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-paper">LENSING</p>
          <p className="mt-2 text-sm text-graphite">Persistent intelligence for modern businesses.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-graphite sm:grid-cols-3">
            <li><a href="#product" className="hover:text-paper">Product</a></li>
            <li><a href="#how-it-works" className="hover:text-paper">How It Works</a></li>
            <li><a href="#for-businesses" className="hover:text-paper">For Businesses</a></li>
            <li>
              <button type="button" onClick={open} className="text-left hover:text-paper">
                Early Access
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-line pt-6">
        <p className="text-xs text-graphite">© {new Date().getFullYear()} LENSING. All rights reserved.</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";

interface NavProps {
  variant?: "default" | "sales";
  price?: string;
}

export function Nav({ variant = "default", price }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-16 py-4 md:py-6 flex justify-between items-center bg-gradient-to-b from-cream/95 to-transparent backdrop-blur-sm animate-fade-down">
      <Link
        href="/"
        className="font-[var(--font-dm-serif)] text-xl md:text-2xl text-jungle flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white text-sm">
          M
        </div>
        Medellín Insider
      </Link>

      {variant === "sales" ? (
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <span className="text-charcoal-light text-sm">Special Price:</span>
            <strong className="text-terracotta text-xl">{price}</strong>
          </div>
          <Link
            href="#buy"
            className="bg-terracotta text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm transition-all hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30"
          >
            Get Instant Access
          </Link>
        </div>
      ) : (
        <Link
          href="#optin"
          className="bg-jungle text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm transition-all hover:bg-jungle-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-jungle/30"
        >
          Get Free Guide
        </Link>
      )}
    </nav>
  );
}

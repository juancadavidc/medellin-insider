"use client";

import Link from "next/link";

interface NavProps {
  variant?: "default" | "sales";
  price?: string;
}

export function Nav({ variant = "default", price }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-16 py-4 md:py-6 flex justify-between items-center bg-gradient-to-b from-cream/95 via-cream/80 to-transparent backdrop-blur-sm animate-fade-down">
      <Link
        href="/"
        className="font-[var(--font-dm-serif)] text-xl md:text-2xl text-jungle flex items-center gap-3 group"
      >
        {/* Stylized mountain logo */}
        <div className="w-10 h-10 bg-gradient-to-br from-jungle to-jungle-light rounded-xl flex items-center justify-center text-white relative overflow-hidden shadow-lg shadow-jungle/20 group-hover:shadow-xl group-hover:shadow-jungle/30 transition-shadow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
            <path d="M4 18L12 6L20 18H4Z" fill="white" opacity="0.3" />
            <path d="M8 18L12 10L16 18H8Z" fill="white" />
          </svg>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-terracotta/30" />
        </div>
        <span className="hidden sm:inline">
          Medellín <span className="text-terracotta">Insider</span>
        </span>
      </Link>

      {variant === "sales" ? (
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cream-dark">
            <span className="text-charcoal-light text-sm">Precio especial:</span>
            <strong className="text-terracotta text-xl font-bold">{price}</strong>
          </div>
          <Link
            href="#buy"
            className="group bg-gradient-to-r from-terracotta to-sunset text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30 flex items-center gap-2"
          >
            Obtener Acceso
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-charcoal-light text-sm">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>5,000+ descargas</span>
          </div>
          <Link
            href="#optin"
            className="group bg-jungle text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full font-semibold text-sm transition-all hover:bg-jungle-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-jungle/30 flex items-center gap-2"
          >
            Guía Gratis
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
}

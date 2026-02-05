"use client";

import Link from "next/link";
import { products, calculateSavings } from "@/config/products";

export function Products() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#2D6A4F" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="#2D6A4F" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="#2D6A4F" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta/10 to-terracotta/5 text-terracotta px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          Guías Especializadas
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Profundiza en lo que{" "}
          <span className="text-terracotta">Más te Interesa</span>
        </h2>
        <p className="text-lg text-charcoal-light">
          Guías temáticas con información detallada para cada tipo de experiencia en Medellín
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            className="group block bg-cream rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-charcoal/10 relative overflow-hidden border border-transparent hover:border-terracotta/20"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-terracotta to-sunset text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg shadow-terracotta/20">
                {product.badge}
              </span>
            )}

            {/* Icon */}
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg shadow-charcoal/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative">
              {product.icon}
            </div>

            {/* Content */}
            <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-2 group-hover:text-jungle transition-colors relative">
              {product.name}
            </h3>
            <p className="text-sm text-charcoal-light mb-5 line-clamp-2 relative">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-5 relative">
              <span className="text-2xl font-bold text-charcoal">
                ${product.price}
              </span>
              <span className="text-sm text-charcoal-light line-through">
                ${product.originalPrice}
              </span>
              <span className="text-xs bg-success/10 text-success px-2.5 py-1 rounded-full font-semibold">
                -{calculateSavings(product)}%
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center text-terracotta font-semibold text-sm group-hover:text-terracotta-dark transition-colors relative">
              Ver detalles
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom decorative mountain */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-5"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 100V60L120 50L240 70L360 40L480 60L600 30L720 50L840 20L960 40L1080 10L1200 30L1320 0L1440 20V100H0Z"
          fill="#2D6A4F"
        />
      </svg>
    </section>
  );
}

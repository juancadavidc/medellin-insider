"use client";

import Link from "next/link";
import { products, calculateSavings } from "@/config/products";

export function Products() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="inline-block bg-cream text-terracotta px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          Guías Especializadas
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Profundiza en lo que te interesa
        </h2>
        <p className="text-lg text-charcoal-light">
          Guías temáticas con información detallada para cada tipo de experiencia
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            className="group block bg-cream rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 right-4 bg-terracotta text-white text-xs px-2 py-1 rounded-full font-semibold">
                {product.badge}
              </span>
            )}

            {/* Icon */}
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
              {product.icon}
            </div>

            {/* Content */}
            <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-charcoal-light mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-charcoal">
                ${product.price}
              </span>
              <span className="text-sm text-charcoal-light line-through">
                ${product.originalPrice}
              </span>
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-semibold">
                -{calculateSavings(product)}%
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center text-terracotta font-semibold text-sm">
              Ver detalles
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

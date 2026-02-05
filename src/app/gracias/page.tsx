"use client";

import Link from "next/link";
import { Footer } from "@/components/shared/Footer";
import { products, leadMagnet, calculateSavings } from "@/config/products";

const steps = [
  {
    number: 1,
    title: "Revisa tu Email",
    description:
      "Te enviamos el PDF a tu correo — revisa spam si no lo ves.",
  },
  {
    number: 2,
    title: "Descarga y Explora",
    description:
      "Tu itinerario está listo. Planea tu primer día como un local.",
  },
  {
    number: 3,
    title: "Recibe Tips Exclusivos",
    description:
      "Te enviaremos consejos de locales durante los próximos días.",
  },
];

export default function ThankYouOptinPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in animate-pulse-ring">
          <svg
            className="w-12 h-12 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-[var(--font-dm-serif)] text-4xl md:text-5xl text-charcoal mb-4 animate-fade-up delay-200">
            ¡Tu guía está <span className="text-terracotta">lista</span>!
          </h1>
          <p className="text-lg text-charcoal-light animate-fade-up delay-300">
            Descarga tu {leadMagnet.title} y empieza a planear tu viaje.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 max-w-xl mx-auto animate-slide-up delay-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-jungle rounded-2xl flex items-center justify-center text-3xl">
              📍
            </div>
            <div>
              <h2 className="font-[var(--font-dm-serif)] text-xl text-charcoal">
                {leadMagnet.title}
              </h2>
              <p className="text-charcoal-light text-sm">
                PDF • {leadMagnet.fileSize}
              </p>
            </div>
          </div>

          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-jungle text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-jungle-light hover:-translate-y-1 hover:shadow-xl hover:shadow-jungle/30 mb-4"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <path d="M7 10l5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            Descargar PDF Gratis
          </a>

          <div className="flex items-center justify-center gap-2 text-sm text-charcoal-light">
            <span>📧</span>
            También lo enviamos a tu correo
          </div>
        </div>

        {/* Upsells Section */}
        <div className="mb-12 animate-slide-up delay-400">
          <div className="text-center mb-8">
            <span className="inline-block bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Guías Especializadas
            </span>
            <h2 className="font-[var(--font-dm-serif)] text-2xl md:text-3xl text-charcoal mb-2">
              ¿Quieres profundizar más?
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Nuestras guías temáticas tienen todo lo que necesitas para
              experiencias específicas en Medellín.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/producto/${product.slug}`}
                className="block group bg-white rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl relative overflow-hidden cursor-pointer"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-terracotta text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {product.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-dm-serif)] text-lg text-charcoal mb-2">
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
                <div className="flex items-center text-terracotta font-semibold text-sm group-hover:gap-2 transition-all">
                  Ver guía
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-2xl mx-auto animate-slide-up delay-600">
          <h3 className="font-[var(--font-dm-serif)] text-2xl text-charcoal text-center mb-8">
            ¿Qué sigue?
          </h3>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center font-semibold text-terracotta flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-[var(--font-dm-serif)] text-lg text-charcoal mb-1">
                    {step.title}
                  </h4>
                  <p className="text-charcoal-light text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer variant="simple" />
    </>
  );
}

"use client";

import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import {
  products,
  getProductBySlug,
  calculateSavings,
  type Product,
} from "@/config/products";

function PricingBox({
  product,
  onBuy,
}: {
  product: Product;
  onBuy: () => void;
}) {
  const savings = calculateSavings(product);

  return (
    <div className="bg-white max-w-md mx-auto p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta to-purple" />

      <div className="text-center">
        <div className="text-xl text-charcoal-light line-through mb-2">
          Precio regular: ${product.originalPrice}
        </div>

        <div className="flex items-baseline justify-center gap-1 mb-2">
          <span className="text-2xl text-charcoal">$</span>
          <span className="text-6xl font-bold text-charcoal">
            {product.price}
          </span>
          <span className="text-charcoal-light">USD</span>
        </div>

        <div className="inline-block bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-8">
          Ahorras ${product.originalPrice - product.price} ({savings}% OFF)
        </div>

        <button
          onClick={onBuy}
          className="w-full bg-terracotta text-white py-4 rounded-xl text-lg font-semibold transition-all hover:bg-terracotta-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/40 mb-4"
        >
          {product.cta} — ${product.price}
        </button>

        <div className="flex items-center justify-center gap-2 text-charcoal-light text-sm">
          <span>🔒</span>
          Pago Seguro · Descarga Inmediata
        </div>
      </div>
    </div>
  );
}

function OtherProducts({ currentSlug }: { currentSlug: string }) {
  const otherProducts = products.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-16 bg-cream">
      <div className="text-center mb-10">
        <h2 className="font-[var(--font-dm-serif)] text-2xl md:text-3xl text-charcoal mb-2">
          También te puede interesar
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {otherProducts.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            className="group bg-white rounded-2xl p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              {product.icon}
            </div>
            <h3 className="font-[var(--font-dm-serif)] text-charcoal mb-1">
              {product.shortName}
            </h3>
            <div className="flex items-center gap-2">
              <span className="font-bold text-charcoal">${product.price}</span>
              <span className="text-xs text-charcoal-light line-through">
                ${product.originalPrice}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const handleBuy = () => {
    // In production, this would redirect to LemonSqueezy checkout
    // window.location.href = `https://lemonsqueezy.com/checkout/${product.lemonSqueezyId}`;
    router.push(`/compra-exitosa?producto=${product.slug}`);
  };

  const savings = calculateSavings(product);

  return (
    <>
      <Nav variant="sales" price={`$${product.price}`} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 md:px-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-purple/5 to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            {/* Badge */}
            {product.badge && (
              <div className="inline-flex items-center gap-2 bg-terracotta text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {product.badge}
              </div>
            )}

            {/* Icon */}
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 shadow-lg">
              {product.icon}
            </div>

            <h1 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              {product.name}
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10">
              {product.description}
            </p>

            {/* Quick price */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-3xl font-bold text-charcoal">
                ${product.price}
              </span>
              <span className="text-lg text-charcoal-light line-through">
                ${product.originalPrice}
              </span>
              <span className="bg-success text-white px-3 py-1 rounded-lg text-sm font-semibold">
                -{savings}%
              </span>
            </div>

            <button
              onClick={handleBuy}
              className="bg-terracotta text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all hover:bg-terracotta-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/40"
            >
              {product.cta} — ${product.price}
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-cream text-terracotta px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                Qué incluye
              </span>
              <h2 className="font-[var(--font-dm-serif)] text-2xl md:text-3xl text-charcoal">
                Todo lo que necesitas saber
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features list */}
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-cream p-4 rounded-xl"
                  >
                    <span className="text-success text-xl">✓</span>
                    <span className="text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="bg-cream p-5 rounded-xl">
                    <h4 className="font-[var(--font-dm-serif)] text-lg text-charcoal mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-charcoal-light text-sm">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4 md:px-16 bg-jungle">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center flex-shrink-0 shadow-xl">
              <span className="text-3xl font-bold text-terracotta">30</span>
              <span className="text-xs text-charcoal font-medium">
                DÍAS GARANTÍA
              </span>
            </div>
            <div>
              <h3 className="font-[var(--font-dm-serif)] text-2xl text-white mb-3">
                Garantía de satisfacción
              </h3>
              <p className="text-white/90">
                Si no te sirve la guía, te devolvemos el dinero. Sin preguntas,
                sin complicaciones. El riesgo es nuestro.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 md:px-16 bg-cream">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-dm-serif)] text-2xl md:text-3xl text-charcoal mb-2">
              ¿Listo para explorar?
            </h2>
            <p className="text-charcoal-light">
              Descarga inmediata después de tu compra
            </p>
          </div>
          <PricingBox product={product} onBuy={handleBuy} />
        </section>

        {/* Other Products */}
        <OtherProducts currentSlug={slug} />
      </main>

      <Footer variant="dark" />
    </>
  );
}

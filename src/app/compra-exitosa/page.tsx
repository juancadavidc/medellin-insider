"use client";

import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/config/products";

const timeline = [
  {
    title: "Revisa tu email",
    description: "Te enviamos el recibo y enlaces de descarga a tu correo.",
  },
  {
    title: "Descarga y explora",
    description: "Tu guía está lista. ¡Empieza a planear tu viaje!",
  },
  {
    title: "Recibe actualizaciones",
    description:
      "Te notificaremos cuando actualicemos la guía — acceso de por vida incluido.",
  },
  {
    title: "Contáctanos cuando quieras",
    description: "¿Preguntas sobre Medellín? Responde a cualquiera de nuestros correos.",
  },
];

function PurchaseContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("producto");
  const product = productSlug ? getProductBySlug(productSlug) : null;
  const confettiRef = useRef<HTMLDivElement>(null);

  // Get other products for cross-sell
  const otherProducts = products
    .filter((p) => p.slug !== productSlug)
    .slice(0, 3);

  useEffect(() => {
    const container = confettiRef.current;
    if (!container) return;

    const colors = ["#E07A5F", "#3D5A47", "#8B5CF6", "#F59E0B", "#22C55E"];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: absolute;
        width: ${Math.random() > 0.5 ? "10px" : "8px"};
        height: ${Math.random() > 0.5 ? "10px" : "16px"};
        top: -20px;
        left: ${Math.random() * 100}%;
        background-color: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
        animation: confetti-fall ${Math.random() * 2 + 3}s ease-in-out forwards;
        animation-delay: ${Math.random() * 2}s;
      `;
      container.appendChild(confetti);
    }

    const timeout = setTimeout(() => {
      if (container) container.innerHTML = "";
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Confetti */}
      <div
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none overflow-hidden z-50"
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center pb-12 pt-8 rounded-b-3xl"
          style={{
            background:
              "linear-gradient(180deg, var(--color-jungle) 0%, var(--color-jungle-light) 60%, transparent 100%)",
            margin: "-4rem -1rem 0",
            padding: "4rem 1rem 4rem",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm text-white mb-6 animate-fade-down">
            <span>✨</span> ¡Pago exitoso!
          </div>

          <h1 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-white mb-4 animate-fade-up delay-100">
            ¡Gracias por tu compra!
          </h1>

          <p className="text-lg text-white/90 animate-fade-up delay-200">
            Tu guía está lista para descargar.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl -mt-8 mb-8 animate-slide-up delay-300">
          {product ? (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-4xl">
                  {product.icon}
                </div>
                <div>
                  <h2 className="font-[var(--font-dm-serif)] text-xl text-charcoal">
                    {product.name}
                  </h2>
                  <p className="text-charcoal-light text-sm">PDF descargable</p>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center justify-center gap-3 w-full bg-terracotta text-white py-4 rounded-xl font-semibold text-lg transition-all hover:bg-terracotta-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/40 mb-4"
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
                Descargar {product.shortName}
              </a>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">📦</div>
              <h2 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-2">
                Tu descarga está lista
              </h2>
              <p className="text-charcoal-light mb-6">
                Revisa tu correo para acceder a tu compra.
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-charcoal-light">
            <span>📧</span>
            También enviamos el enlace a tu correo
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-3xl p-8 mb-8 animate-slide-up delay-400">
          <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-6 flex items-center gap-2">
            🧾 Detalles del pedido
          </h3>

          <div className="space-y-4">
            {[
              { label: "Número de orden", value: `#MED-${Date.now().toString().slice(-6)}` },
              { label: "Producto", value: product?.name || "Guía Medellín" },
              {
                label: "Fecha",
                value: new Date().toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
              },
              { label: "Método de pago", value: "Tarjeta •••• 4242" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-3 border-b border-cream last:border-0"
              >
                <span className="text-charcoal-light">{row.label}</span>
                <span className="text-charcoal">{row.value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-4 font-semibold">
              <span className="text-charcoal-light">Total pagado</span>
              <span className="text-success text-xl">
                ${product?.price || "0"}.00 USD
              </span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-3xl p-8 mb-8 animate-slide-up delay-500">
          <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal text-center mb-8">
            ¿Qué sigue?
          </h3>

          <div className="relative pl-8">
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-cream" />

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-terracotta rounded-full border-[3px] border-white shadow-sm" />
                  <h4 className="font-[var(--font-dm-serif)] text-charcoal mb-1">
                    {item.title}
                  </h4>
                  <p className="text-charcoal-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-sell */}
        {otherProducts.length > 0 && (
          <div className="bg-cream rounded-3xl p-8 mb-8 animate-slide-up delay-600">
            <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal text-center mb-6">
              Completa tu experiencia
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/producto/${p.slug}`}
                  className="group bg-white rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h4 className="font-[var(--font-dm-serif)] text-sm text-charcoal mb-1">
                    {p.shortName}
                  </h4>
                  <span className="text-terracotta font-semibold">
                    ${p.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Support */}
        <div className="bg-jungle rounded-3xl p-8 text-center text-white animate-slide-up delay-700">
          <h3 className="font-[var(--font-dm-serif)] text-2xl mb-3">
            ¿Necesitas ayuda?
          </h3>
          <p className="text-white/80 mb-6">
            Respondemos en menos de 24 horas
          </p>
          <a
            href="mailto:hola@medellininsider.com"
            className="inline-flex items-center gap-2 bg-white/15 px-6 py-3 rounded-xl transition-all hover:bg-white/25"
          >
            <span>📧</span>
            hola@medellininsider.com
          </a>
        </div>

        {/* Back to home */}
        <div className="text-center py-10">
          <Link
            href="/"
            className="text-charcoal-light hover:text-terracotta transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>

      <footer className="text-center py-12 px-8">
        <p className="text-charcoal-light">
          ¡Gracias por tu compra! Esperamos que disfrutes tu viaje. 🇨🇴
        </p>
        <p className="text-charcoal-light/60 text-sm mt-2">
          © 2024 Medellín Insider ·{" "}
          <a href="#" className="text-terracotta hover:underline">
            Términos
          </a>
          {" · "}
          <a href="#" className="text-terracotta hover:underline">
            Privacidad
          </a>
        </p>
      </footer>
    </>
  );
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-terracotta border-t-transparent rounded-full" />
        </div>
      }
    >
      <PurchaseContent />
    </Suspense>
  );
}

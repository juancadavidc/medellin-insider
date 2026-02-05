"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/gracias");
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-gradient-to-br from-terracotta via-sunset to-terracotta-dark text-center relative overflow-hidden">
      {/* Mountain silhouette at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-20"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 200V120L100 100L200 140L300 80L400 120L500 60L600 100L700 40L800 80L900 20L1000 60L1100 0L1200 40L1300 -20L1440 20V200H0Z"
          fill="white"
        />
      </svg>

      {/* Flower patterns */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="10" r="10" fill="white" />
          <circle cx="50" cy="30" r="10" fill="white" />
          <circle cx="30" cy="50" r="10" fill="white" />
          <circle cx="10" cy="30" r="10" fill="white" />
          <circle cx="30" cy="30" r="8" fill="#FFBA08" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="10" r="12" fill="white" />
          <circle cx="70" cy="40" r="12" fill="white" />
          <circle cx="40" cy="70" r="12" fill="white" />
          <circle cx="10" cy="40" r="12" fill="white" />
          <circle cx="40" cy="40" r="10" fill="#FFBA08" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20">
          <span>🌸</span>
          <span>100% Gratis</span>
          <span className="w-1 h-1 bg-white/50 rounded-full" />
          <span>Sin spam</span>
        </div>

        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          ¿Listo para Descubrir la Magia de{" "}
          <span className="relative inline-block">
            Medellín
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 150 6" fill="none">
              <path d="M0 3 Q37 0, 75 3 T150 3" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          ?
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-lg mx-auto">
          Obtén acceso instantáneo a nuestra guía insider gratuita y comienza a planear tu aventura en el Valle de Aburrá hoy.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded-2xl text-base bg-white text-charcoal focus:outline-none focus:ring-4 focus:ring-white/30 placeholder:text-charcoal-light/50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="group bg-jungle text-white px-8 py-4 rounded-2xl text-base font-bold transition-all hover:bg-jungle-light hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
          >
            {isLoading ? (
              "Enviando..."
            ) : (
              <>
                Envíame la Guía
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Descarga inmediata
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            45+ páginas de contenido
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Actualizada 2024
          </div>
        </div>
      </div>
    </section>
  );
}

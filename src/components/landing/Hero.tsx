"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { leadMagnet } from "@/config/products";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/gracias");
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-16 pt-32 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-1/2 -right-1/5 w-4/5 h-[150%] bg-radial-gradient from-terracotta/15 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="flex flex-col justify-center z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-jungle w-fit shadow-md mb-8 mx-auto lg:mx-0 animate-fade-up delay-200">
          <span>🇨🇴</span>
          100% Gratis — PDF Descargable
        </div>

        <h1 className="font-[var(--font-dm-serif)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-charcoal mb-6 animate-fade-up delay-400">
          Tu Primer Día en{" "}
          <span className="text-terracotta italic">Medellín</span>, Resuelto
        </h1>

        <p className="text-lg md:text-xl text-charcoal-light max-w-lg mb-10 mx-auto lg:mx-0 animate-fade-up delay-600">
          {leadMagnet.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-800"
          id="optin"
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 max-w-xs lg:max-w-sm px-6 py-4 border-2 border-cream-dark rounded-xl text-base bg-white transition-all focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/10"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-terracotta text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-terracotta-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-terracotta/40 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? "Enviando..." : "Descargar Gratis"}
          </button>
        </form>

        <p className="text-sm text-charcoal-light/70 mt-4 animate-fade-up delay-1000">
          🔒 Sin spam. Cancela cuando quieras.{" "}
          <a href="#" className="text-jungle hover:underline">
            Política de Privacidad
          </a>
        </p>
      </div>

      {/* Visual */}
      <div className="relative flex items-center justify-center order-first lg:order-last">
        <div className="relative w-full max-w-md lg:max-w-lg animate-float-in">
          {/* Main card */}
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-jungle to-jungle-light rounded-3xl shadow-2xl shadow-jungle/30 relative overflow-hidden">
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='white'/%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="font-[var(--font-dm-serif)] text-2xl mb-2">
                {leadMagnet.title}
              </h3>
              <p className="opacity-80 text-lg">{leadMagnet.subtitle}</p>
              <div className="mt-6 bg-white/20 px-4 py-2 rounded-full text-sm">
                PDF • {leadMagnet.fileSize}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-[10%] -right-4 md:right-[-20px] bg-white rounded-2xl p-4 shadow-xl animate-float hidden md:block">
            <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center text-white text-xl mb-3">
              ☀️
            </div>
            <h4 className="font-[var(--font-dm-serif)] text-base text-charcoal">
              Itinerario Completo
            </h4>
            <p className="text-sm text-charcoal-light">Mañana, tarde y noche</p>
          </div>

          <div className="absolute bottom-[15%] -left-4 md:left-[-30px] bg-white rounded-2xl p-4 shadow-xl animate-float float-delay-2 hidden md:block">
            <div className="w-12 h-12 bg-purple rounded-xl flex items-center justify-center text-white text-xl mb-3">
              ⭐
            </div>
            <h4 className="font-[var(--font-dm-serif)] text-base text-charcoal">
              5,000+ Descargas
            </h4>
            <p className="text-sm text-charcoal-light">Viajeros satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

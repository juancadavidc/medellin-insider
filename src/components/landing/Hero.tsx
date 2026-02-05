"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { leadMagnet } from "@/config/products";

// SVG Components for Medellín elements
function MountainSilhouette() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-auto"
      viewBox="0 0 1440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Back mountains - lighter */}
      <path
        d="M0 400V280L120 220L240 260L360 180L480 240L600 160L720 220L840 140L960 200L1080 120L1200 180L1320 100L1440 160V400H0Z"
        fill="url(#mountain-gradient-back)"
        opacity="0.3"
      />
      {/* Middle mountains */}
      <path
        d="M0 400V320L100 280L200 300L350 220L500 280L650 200L800 260L950 180L1100 240L1250 160L1400 220L1440 200V400H0Z"
        fill="url(#mountain-gradient-mid)"
        opacity="0.5"
      />
      {/* Front mountains - darkest */}
      <path
        d="M0 400V340L80 320L180 350L300 290L450 340L600 280L750 330L900 270L1050 320L1200 260L1350 300L1440 280V400H0Z"
        fill="url(#mountain-gradient-front)"
      />
      {/* City silhouette */}
      <g opacity="0.6">
        <rect x="200" y="340" width="20" height="60" fill="#1B4332" />
        <rect x="230" y="320" width="30" height="80" fill="#1B4332" />
        <rect x="270" y="350" width="15" height="50" fill="#1B4332" />
        <rect x="900" y="330" width="25" height="70" fill="#1B4332" />
        <rect x="935" y="350" width="20" height="50" fill="#1B4332" />
        <rect x="1100" y="340" width="30" height="60" fill="#1B4332" />
        <rect x="1140" y="320" width="20" height="80" fill="#1B4332" />
      </g>
      <defs>
        <linearGradient id="mountain-gradient-back" x1="720" y1="100" x2="720" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52796F" />
          <stop offset="1" stopColor="#2D6A4F" />
        </linearGradient>
        <linearGradient id="mountain-gradient-mid" x1="720" y1="160" x2="720" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40916C" />
          <stop offset="1" stopColor="#2D6A4F" />
        </linearGradient>
        <linearGradient id="mountain-gradient-front" x1="720" y1="260" x2="720" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2D6A4F" />
          <stop offset="1" stopColor="#1B4332" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MetroCable() {
  return (
    <div className="absolute top-20 right-0 w-full overflow-hidden pointer-events-none opacity-20">
      <svg
        className="w-full h-32"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cable line */}
        <path
          d="M0 80 Q300 20, 600 60 T1200 40"
          stroke="#2D6A4F"
          strokeWidth="2"
          fill="none"
        />
        {/* Cable cars */}
        <g className="cable-animation">
          <rect x="150" y="55" width="20" height="15" rx="2" fill="#E85D04" />
          <line x1="160" y1="55" x2="160" y2="45" stroke="#2D6A4F" strokeWidth="1" />
          <rect x="450" y="45" width="20" height="15" rx="2" fill="#E85D04" />
          <line x1="460" y1="45" x2="460" y2="35" stroke="#2D6A4F" strokeWidth="1" />
          <rect x="750" y="50" width="20" height="15" rx="2" fill="#E85D04" />
          <line x1="760" y1="50" x2="760" y2="40" stroke="#2D6A4F" strokeWidth="1" />
          <rect x="1050" y="35" width="20" height="15" rx="2" fill="#E85D04" />
          <line x1="1060" y1="35" x2="1060" y2="25" stroke="#2D6A4F" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function Orchid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="80"
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="30" cy="20" rx="15" ry="18" fill="#9D4EDD" opacity="0.8" />
      <ellipse cx="15" cy="30" rx="12" ry="15" fill="#C77DFF" opacity="0.7" />
      <ellipse cx="45" cy="30" rx="12" ry="15" fill="#C77DFF" opacity="0.7" />
      <ellipse cx="20" cy="45" rx="10" ry="12" fill="#9D4EDD" opacity="0.6" />
      <ellipse cx="40" cy="45" rx="10" ry="12" fill="#9D4EDD" opacity="0.6" />
      <circle cx="30" cy="35" r="6" fill="#FFBA08" />
      <path d="M30 50 Q28 65, 30 80" stroke="#2D6A4F" strokeWidth="3" fill="none" />
    </svg>
  );
}

// Pre-calculated sunburst line endpoints (12 lines at 30° intervals)
const sunburstLines = [
  { x2: 380, y2: 200 },    // 0°
  { x2: 356, y2: 290 },    // 30°
  { x2: 290, y2: 356 },    // 60°
  { x2: 200, y2: 380 },    // 90°
  { x2: 110, y2: 356 },    // 120°
  { x2: 44, y2: 290 },     // 150°
  { x2: 20, y2: 200 },     // 180°
  { x2: 44, y2: 110 },     // 210°
  { x2: 110, y2: 44 },     // 240°
  { x2: 200, y2: 20 },     // 270°
  { x2: 290, y2: 44 },     // 300°
  { x2: 356, y2: 110 },    // 330°
];

function SunburstPattern() {
  return (
    <div className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="150" fill="url(#sunburst-gradient)" opacity="0.5" />
        {sunburstLines.map((line, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={line.x2}
            y2={line.y2}
            stroke="#FFBA08"
            strokeWidth="2"
            opacity="0.3"
          />
        ))}
        <defs>
          <radialGradient id="sunburst-gradient" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#FFBA08" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
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
    <section className="min-h-screen relative overflow-hidden medellin-gradient noise-overlay">
      {/* Decorative elements */}
      <SunburstPattern />
      <MetroCable />

      {/* Floating orchids */}
      <div className="absolute top-32 left-8 orchid-sway hidden lg:block">
        <Orchid className="w-12 h-16 opacity-60" />
      </div>
      <div className="absolute top-48 right-16 orchid-sway hidden lg:block" style={{ animationDelay: '1s' }}>
        <Orchid className="w-10 h-14 opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-16 pt-32 pb-48">
        {/* Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-jungle-dark w-fit shadow-lg shadow-jungle/10 mb-8 mx-auto lg:mx-0 animate-fade-up delay-200 border border-jungle/10">
            <span className="text-lg">🌸</span>
            <span>La Ciudad de la Eterna Primavera</span>
            <span className="text-lg">🇨🇴</span>
          </div>

          <h1 className="font-[var(--font-dm-serif)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-charcoal mb-6 animate-fade-up delay-400">
            Descubre{" "}
            <span className="relative inline-block">
              <span className="text-terracotta">Medellín</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4 Q50 0, 100 4 T200 4" stroke="url(#underline-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#E85D04" />
                    <stop offset="0.5" stopColor="#FFBA08" />
                    <stop offset="1" stopColor="#2D6A4F" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            Como un Local
          </h1>

          <p className="text-lg md:text-xl text-charcoal-light max-w-lg mb-10 mx-auto lg:mx-0 animate-fade-up delay-600 leading-relaxed">
            {leadMagnet.description}
            <span className="block mt-2 text-jungle font-medium">
              Desde El Poblado hasta las Comunas — todo lo que necesitas saber.
            </span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-800"
            id="optin"
          >
            <input
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 max-w-xs lg:max-w-sm px-6 py-4 border-2 border-jungle/20 rounded-2xl text-base bg-white/90 backdrop-blur-sm transition-all focus:outline-none focus:border-terracotta focus:ring-4 focus:ring-terracotta/10 placeholder:text-charcoal-light/50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="group bg-gradient-to-r from-terracotta to-sunset text-white px-8 py-4 rounded-2xl text-base font-bold transition-all hover:shadow-2xl hover:shadow-terracotta/40 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Descargar Gratis
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sunset to-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>

          <p className="text-sm text-charcoal-light/70 mt-6 animate-fade-up delay-1000 flex items-center gap-2 justify-center lg:justify-start">
            <svg className="w-4 h-4 text-jungle" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            100% gratis · Sin spam · Cancela cuando quieras
          </p>
        </div>

        {/* Visual Card */}
        <div className="relative flex items-center justify-center order-first lg:order-last">
          <div className="relative w-full max-w-md lg:max-w-lg animate-float-in">
            {/* Main card with Medellín illustration */}
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-jungle to-jungle-dark rounded-3xl shadow-2xl shadow-jungle/40 relative overflow-hidden">
              {/* Mountain illustration inside card */}
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 400 200"
                fill="none"
                preserveAspectRatio="xMidYMax slice"
              >
                <path
                  d="M0 200V120L50 100L100 130L150 80L200 120L250 60L300 100L350 50L400 90V200H0Z"
                  fill="rgba(255,255,255,0.1)"
                />
                <path
                  d="M0 200V150L80 130L160 160L240 110L320 150L400 120V200H0Z"
                  fill="rgba(255,255,255,0.15)"
                />
              </svg>

              {/* Sunset glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-radial from-gold/30 to-transparent rounded-full blur-3xl" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/30">
                  <span className="text-4xl">🏔️</span>
                </div>
                <h3 className="font-[var(--font-dm-serif)] text-2xl md:text-3xl mb-3">
                  {leadMagnet.title}
                </h3>
                <p className="opacity-90 text-lg mb-4">{leadMagnet.subtitle}</p>
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm border border-white/20">
                  <span>📄 PDF</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span>{leadMagnet.fileSize}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span>Gratis</span>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute top-[8%] -right-4 md:right-[-24px] bg-white rounded-2xl p-4 shadow-xl shadow-charcoal/10 animate-float hidden md:block border border-cream-dark">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-terracotta-light rounded-xl flex items-center justify-center text-white text-2xl mb-3">
                🚡
              </div>
              <h4 className="font-[var(--font-dm-serif)] text-base text-charcoal">
                Metrocable Tours
              </h4>
              <p className="text-sm text-charcoal-light">Vista panorámica</p>
            </div>

            <div className="absolute bottom-[12%] -left-4 md:left-[-32px] bg-white rounded-2xl p-4 shadow-xl shadow-charcoal/10 animate-float float-delay-2 hidden md:block border border-cream-dark">
              <div className="w-14 h-14 bg-gradient-to-br from-orchid to-orchid-light rounded-xl flex items-center justify-center text-white text-2xl mb-3">
                🌺
              </div>
              <h4 className="font-[var(--font-dm-serif)] text-base text-charcoal">
                Feria de las Flores
              </h4>
              <p className="text-sm text-charcoal-light">Cultura paisa</p>
            </div>

            {/* Stats badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg shadow-charcoal/10 flex items-center gap-4 border border-cream-dark">
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span className="font-bold text-charcoal">5,000+</span>
                <span className="text-charcoal-light text-sm">descargas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain silhouette at bottom */}
      <MountainSilhouette />
    </section>
  );
}

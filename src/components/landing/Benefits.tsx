"use client";

const benefits = [
  {
    icon: "🚡",
    title: "Metro & Metrocable",
    description:
      "Domina el sistema de transporte más innovador de Latinoamérica. Rutas, horarios y tips locales.",
    gradient: "from-jungle to-jungle-light",
  },
  {
    icon: "🌺",
    title: "Cultura Paisa",
    description:
      "Descubre la Feria de las Flores, la bandeja paisa perfecta, y las tradiciones que hacen única a Medellín.",
    gradient: "from-orchid to-orchid-light",
  },
  {
    icon: "🏔️",
    title: "Miradores Secretos",
    description:
      "Los mejores spots para ver el Valle de Aburrá — desde los famosos hasta los que solo conocen los paisas.",
    gradient: "from-sky-dark to-sky",
  },
];

function MountainPattern() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full opacity-5"
      viewBox="0 0 1440 200"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
    >
      <path
        d="M0 200V140L120 100L240 130L360 80L480 120L600 60L720 100L840 40L960 80L1080 20L1200 60L1320 0L1440 40V200H0Z"
        fill="#2D6A4F"
      />
    </svg>
  );
}

export function Benefits() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-white relative overflow-hidden">
      {/* Top gradient from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-jungle/5 to-transparent" />

      {/* Decorative flower */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="40" fill="#9D4EDD" />
          <circle cx="60" cy="20" r="25" fill="#C77DFF" />
          <circle cx="100" cy="60" r="25" fill="#C77DFF" />
          <circle cx="60" cy="100" r="25" fill="#C77DFF" />
          <circle cx="20" cy="60" r="25" fill="#C77DFF" />
          <circle cx="60" cy="60" r="15" fill="#FFBA08" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-jungle/10 to-jungle/5 text-jungle px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg>
          Lo Que Vas a Descubrir
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Tu Guía Completa del{" "}
          <span className="text-jungle">Valle de Aburrá</span>
        </h2>
        <p className="text-lg text-charcoal-light">
          Todo lo que necesitas para experimentar Medellín de forma segura y auténtica
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group bg-cream rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-default"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`} />

            {/* Icon container with gradient background */}
            <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              {benefit.icon}
            </div>

            <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-3 group-hover:text-jungle transition-colors">
              {benefit.title}
            </h3>

            <p className="text-charcoal-light leading-relaxed">
              {benefit.description}
            </p>

            {/* Hover arrow */}
            <div className="mt-4 flex items-center text-terracotta font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Incluido en la guía
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative element - stylized metro line */}
      <div className="max-w-4xl mx-auto mt-16 relative">
        <div className="h-1 bg-gradient-to-r from-transparent via-jungle/20 to-transparent rounded-full" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4">
          <div className="flex items-center gap-2 text-charcoal-light text-sm">
            <span className="w-2 h-2 bg-terracotta rounded-full" />
            <span>Línea A</span>
            <span className="w-8 h-0.5 bg-charcoal-light/30" />
            <span className="w-2 h-2 bg-jungle rounded-full" />
            <span>Línea B</span>
            <span className="w-8 h-0.5 bg-charcoal-light/30" />
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span>Metrocable</span>
          </div>
        </div>
      </div>

      <MountainPattern />
    </section>
  );
}

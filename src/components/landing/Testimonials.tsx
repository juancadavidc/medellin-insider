"use client";

const testimonials = [
  {
    quote:
      "Esta guía me salvó de muchas trampas turísticas. El desglose de barrios por sí solo valió la pena — terminé en Laureles y tuve el mejor mes de mi vida.",
    author: "Sarah Mitchell",
    location: "Nueva York, USA",
    initials: "SM",
    highlight: "Laureles",
  },
  {
    quote:
      "Estaba nervioso por la seguridad como viajero solo. Los tips prácticos de esta guía me dieron confianza y me sentí preparado desde el día uno.",
    author: "James Davidson",
    location: "Londres, UK",
    initials: "JD",
    highlight: "Seguridad",
  },
  {
    quote:
      "Las recomendaciones de comida fueron increíbles. Encontré un lugar de bandeja paisa que se convirtió en mi segunda casa. Gracias por la info de insider!",
    author: "Emma Chen",
    location: "Sydney, Australia",
    initials: "EC",
    highlight: "Gastronomía",
  },
];

function SilleteroDecoration() {
  return (
    <svg
      className="absolute -right-20 bottom-0 w-64 h-64 opacity-10"
      viewBox="0 0 200 200"
      fill="none"
    >
      {/* Stylized silleta (flower arrangement) */}
      <ellipse cx="100" cy="40" rx="60" ry="35" fill="#C77DFF" />
      <ellipse cx="70" cy="60" rx="30" ry="25" fill="#9D4EDD" />
      <ellipse cx="130" cy="60" rx="30" ry="25" fill="#9D4EDD" />
      <ellipse cx="100" cy="70" rx="40" ry="30" fill="#FFBA08" />
      <ellipse cx="60" cy="80" rx="25" ry="20" fill="#E85D04" />
      <ellipse cx="140" cy="80" rx="25" ry="20" fill="#E85D04" />
      <rect x="90" y="90" width="20" height="80" fill="#52796F" />
      <rect x="85" y="170" width="30" height="10" rx="2" fill="#2D6A4F" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-gradient-to-br from-jungle-dark via-jungle to-jungle-light relative overflow-hidden">
      {/* Mountain silhouette background */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 300V200L100 180L200 220L300 160L400 200L500 140L600 180L700 120L800 160L900 100L1000 140L1100 80L1200 120L1300 60L1440 100V300H0Z"
          fill="white"
        />
      </svg>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#FFBA08" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="40" cy="40" r="25" stroke="#FFBA08" strokeWidth="1" />
        </svg>
      </div>

      <SilleteroDecoration />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-gold px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 border border-white/10">
          <span>🌸</span>
          Historias de Viajeros
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Experiencias en la{" "}
          <span className="text-gold">Ciudad de la Eterna Primavera</span>
        </h2>
        <p className="text-lg text-white/70">
          Únete a miles de viajeros que descubrieron el verdadero Medellín
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.author}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 relative overflow-hidden"
          >
            {/* Highlight badge */}
            <div className="absolute top-4 right-4 bg-gold/20 text-gold text-xs px-3 py-1 rounded-full font-semibold">
              {testimonial.highlight}
            </div>

            {/* Quote mark */}
            <div className="font-[var(--font-dm-serif)] text-6xl text-terracotta/50 leading-none mb-2">
              &ldquo;
            </div>

            <blockquote className="text-white text-lg leading-relaxed mb-8">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-sunset rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                <p className="text-white/60 text-sm flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {testimonial.location}
                </p>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="font-[var(--font-dm-serif)] text-3xl md:text-4xl text-white mb-1">5,000+</div>
            <div className="text-white/60 text-sm">Guías Descargadas</div>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-dm-serif)] text-3xl md:text-4xl text-white mb-1">4.9</div>
            <div className="text-white/60 text-sm flex items-center justify-center gap-1">
              <span className="text-gold">★★★★★</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-dm-serif)] text-3xl md:text-4xl text-white mb-1">45+</div>
            <div className="text-white/60 text-sm">Países Representados</div>
          </div>
        </div>
      </div>
    </section>
  );
}

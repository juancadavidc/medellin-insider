import Link from "next/link";

interface FooterProps {
  variant?: "default" | "dark" | "simple";
}

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="text-center py-12 px-8 text-charcoal-light text-sm bg-cream">
        <p>¿Preguntas? Responde a cualquiera de nuestros emails — los leemos todos.</p>
        <p className="mt-2">
          © 2024 Medellín Insider ·{" "}
          <Link href="#" className="text-terracotta hover:underline">
            Cancelar suscripción
          </Link>
        </p>
      </footer>
    );
  }

  return (
    <footer className={`py-16 px-8 relative overflow-hidden ${variant === "dark" ? "bg-charcoal text-white" : "bg-cream text-charcoal"}`}>
      {/* Mountain silhouette decoration */}
      {variant === "dark" && (
        <svg
          className="absolute bottom-0 left-0 w-full opacity-5"
          viewBox="0 0 1440 150"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0 150V100L120 80L240 100L360 60L480 90L600 50L720 80L840 40L960 70L1080 30L1200 60L1320 20L1440 50V150H0Z"
            fill="white"
          />
        </svg>
      )}

      <div className="max-w-4xl mx-auto relative">
        {/* Logo and tagline */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-[var(--font-dm-serif)] text-xl"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden ${variant === "dark" ? "bg-gradient-to-br from-jungle to-jungle-light" : "bg-gradient-to-br from-jungle to-jungle-light"}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L12 6L20 18H4Z" fill="white" opacity="0.3" />
                <path d="M8 18L12 10L16 18H8Z" fill="white" />
              </svg>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-terracotta/30" />
            </div>
            <span>
              Medellín <span className="text-terracotta">Insider</span>
            </span>
          </Link>
          <p className={`mt-3 text-sm ${variant === "dark" ? "text-white/60" : "text-charcoal-light"}`}>
            Tu guía local para descubrir la Ciudad de la Eterna Primavera
          </p>
        </div>

        {/* Divider with metro line style */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`flex-1 h-px ${variant === "dark" ? "bg-white/10" : "bg-charcoal/10"}`} />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-terracotta rounded-full" />
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="w-2 h-2 bg-jungle rounded-full" />
          </div>
          <div className={`flex-1 h-px ${variant === "dark" ? "bg-white/10" : "bg-charcoal/10"}`} />
        </div>

        {/* Links and copyright */}
        <div className="text-center">
          <div className={`flex flex-wrap justify-center gap-6 mb-4 text-sm ${variant === "dark" ? "text-white/60" : "text-charcoal-light"}`}>
            <Link href="#" className="hover:text-terracotta transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-terracotta transition-colors">
              Términos de Uso
            </Link>
            <Link href="#" className="hover:text-terracotta transition-colors">
              Contacto
            </Link>
          </div>
          <p className={`text-sm ${variant === "dark" ? "text-white/40" : "text-charcoal-light/70"}`}>
            © 2024 Medellín Insider. Hecho con 🧡 desde Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}

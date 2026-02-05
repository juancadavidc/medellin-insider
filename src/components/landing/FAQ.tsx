"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Es seguro Medellín para turistas?",
    answer:
      "Sí, Medellín se ha transformado dramáticamente y ahora se considera una de las ciudades más seguras de Colombia. Como cualquier gran ciudad, requiere sentido común. Nuestra guía cubre barrios específicos, horarios y consejos prácticos para mantenerte seguro durante tu visita.",
  },
  {
    question: "¿Qué incluye la guía gratuita?",
    answer:
      "La guía incluye 45+ páginas cubriendo: desglose de barrios con pros/contras, tips de seguridad de expats de largo plazo, recomendaciones de restaurantes y vida nocturna, ideas de excursiones de un día, tips de transporte, frases en español que realmente usarás, y secretos insider que nos tomó años descubrir.",
  },
  {
    question: "¿Cuánto tiempo debería quedarme en Medellín?",
    answer:
      "Recomendamos al menos 5-7 días para experimentar verdaderamente la ciudad. Esto te da tiempo para explorar diferentes barrios, hacer excursiones a Guatapé o fincas cafeteras cercanas, y adaptarte al ritmo relajado colombiano. ¡Muchos visitantes terminan extendiendo su estadía!",
  },
  {
    question: "¿Necesito hablar español?",
    answer:
      "Aunque saber algo de español definitivamente mejora tu experiencia, puedes arreglártelas en áreas turísticas con inglés. Nuestra guía incluye frases esenciales en español y tips para comunicarte efectivamente. ¡La mayoría de los locales aprecian cualquier esfuerzo por hablar su idioma!",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-cream relative overflow-hidden">
      {/* Decorative mountain pattern */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-5"
        viewBox="0 0 1440 150"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 150V100L120 80L240 110L360 70L480 100L600 60L720 90L840 50L960 80L1080 40L1200 70L1320 30L1440 60V150H0Z"
          fill="#2D6A4F"
        />
      </svg>

      {/* Decorative flower */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="15" r="12" fill="#9D4EDD" />
          <circle cx="65" cy="40" r="12" fill="#9D4EDD" />
          <circle cx="40" cy="65" r="12" fill="#9D4EDD" />
          <circle cx="15" cy="40" r="12" fill="#9D4EDD" />
          <circle cx="40" cy="40" r="10" fill="#FFBA08" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-flex items-center gap-2 bg-white text-jungle px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 shadow-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          Preguntas Frecuentes
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Todo lo que Necesitas{" "}
          <span className="text-jungle">Saber</span>
        </h2>
        <p className="text-lg text-charcoal-light">
          Resolvemos tus dudas antes de que empieces tu aventura paisa
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4 relative">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg border-2 ${
              activeIndex === index ? "border-jungle/20" : "border-transparent"
            }`}
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full px-8 py-6 flex justify-between items-center text-left font-[var(--font-dm-serif)] text-lg text-charcoal transition-colors hover:text-jungle group"
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all flex-shrink-0 ${
                  activeIndex === index
                    ? "bg-gradient-to-br from-jungle to-jungle-light text-white rotate-45"
                    : "bg-cream text-charcoal-light group-hover:bg-jungle/10"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-8 pb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-terracotta to-gold mb-4" />
                <p className="text-charcoal-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact prompt */}
      <div className="max-w-xl mx-auto mt-12 text-center relative">
        <p className="text-charcoal-light">
          ¿Tienes otra pregunta?{" "}
          <a href="mailto:hola@medellininsider.com" className="text-terracotta font-semibold hover:underline">
            Escríbenos
          </a>
          {" "}y te respondemos en menos de 24 horas.
        </p>
      </div>
    </section>
  );
}

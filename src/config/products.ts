export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  price: number;
  originalPrice: number;
  currency: string;
  features: string[];
  highlights: {
    title: string;
    description: string;
  }[];
  cta: string;
  badge?: string;
  popular?: boolean;
  // LemonSqueezy product ID (for production)
  lemonSqueezyId?: string;
}

export interface LeadMagnet {
  title: string;
  subtitle: string;
  description: string;
  fileName: string;
  fileSize: string;
}

// Lead Magnet Configuration
export const leadMagnet: LeadMagnet = {
  title: "Plan de 1 Día en Medellín",
  subtitle: "Guía gratuita para tu primer día",
  description:
    "El itinerario perfecto para tu primer día: qué hacer, dónde comer, y cómo moverte como un local.",
  fileName: "medellin-1-day-plan.pdf",
  fileSize: "2.1 MB",
};

// Products Configuration - Easy to expand!
export const products: Product[] = [
  {
    id: "restaurantes",
    slug: "restaurantes",
    name: "Guía de Restaurantes",
    shortName: "Restaurantes",
    description:
      "50+ restaurantes con recomendaciones de platos específicos, rangos de precios y tips para ordenar.",
    icon: "🍽️",
    price: 9,
    originalPrice: 19,
    currency: "USD",
    badge: "Más Popular",
    popular: true,
    features: [
      "50+ restaurantes curados",
      "Platos recomendados en cada uno",
      "Rangos de precio claros",
      "Mapas de Google incluidos",
      "Tips para ordenar como local",
    ],
    highlights: [
      {
        title: "Bandeja Paisa Auténtica",
        description: "Los 5 mejores lugares para probar el plato típico",
      },
      {
        title: "Comida de Calle",
        description: "Dónde comer seguro y delicioso por menos de $3",
      },
      {
        title: "Fine Dining",
        description: "Restaurantes para ocasiones especiales",
      },
    ],
    cta: "Descargar Guía",
  },
  {
    id: "miradores",
    slug: "miradores",
    name: "Guía de Miradores",
    shortName: "Miradores",
    description:
      "Los mejores puntos panorámicos de la ciudad, desde los famosos hasta los secretos locales.",
    icon: "🏔️",
    price: 7,
    originalPrice: 14,
    currency: "USD",
    features: [
      "15+ miradores con fotos",
      "Mejores horas para visitar",
      "Cómo llegar a cada uno",
      "Tips de seguridad",
      "Spots secretos de locales",
    ],
    highlights: [
      {
        title: "Atardeceres Épicos",
        description: "Los 3 mejores lugares para ver el sunset",
      },
      {
        title: "Miradores Secretos",
        description: "Spots que solo conocen los paisas",
      },
      {
        title: "Fotografía",
        description: "Mejores ángulos para tus fotos",
      },
    ],
    cta: "Descargar Guía",
  },
  {
    id: "actividades",
    slug: "actividades",
    name: "Guía de Actividades",
    shortName: "Actividades",
    description:
      "Tours, experiencias y actividades únicas que van más allá de lo turístico típico.",
    icon: "🎯",
    price: 12,
    originalPrice: 24,
    currency: "USD",
    features: [
      "30+ actividades curadas",
      "Desde gratis hasta premium",
      "Tours con locales",
      "Experiencias únicas",
      "Day trips recomendados",
    ],
    highlights: [
      {
        title: "Graffiti Tours",
        description: "Tours de arte urbano con artistas locales",
      },
      {
        title: "Parapente",
        description: "Dónde volar seguro sobre la ciudad",
      },
      {
        title: "Coffee Tours",
        description: "Fincas cafeteras cerca de la ciudad",
      },
    ],
    cta: "Descargar Guía",
  },
  {
    id: "wellness",
    slug: "wellness",
    name: "Guía de Wellness",
    shortName: "Wellness",
    description:
      "Spas, yoga, meditación y bienestar. Todo lo que necesitas para relajarte en Medellín.",
    icon: "🧘",
    price: 9,
    originalPrice: 18,
    currency: "USD",
    features: [
      "20+ spas y centros",
      "Clases de yoga y meditación",
      "Retiros cerca de la ciudad",
      "Precios y reservas",
      "Tratamientos recomendados",
    ],
    highlights: [
      {
        title: "Spas Premium",
        description: "Los mejores spas de Poblado y Laureles",
      },
      {
        title: "Yoga al Aire Libre",
        description: "Clases gratuitas en parques",
      },
      {
        title: "Retiros",
        description: "Escapes de fin de semana cerca",
      },
    ],
    cta: "Descargar Guía",
  },
  {
    id: "lugares",
    slug: "lugares",
    name: "Lugares Imperdibles",
    shortName: "Lugares",
    description:
      "Los sitios que realmente valen la pena visitar, sin las trampas turísticas.",
    icon: "📍",
    price: 9,
    originalPrice: 18,
    currency: "USD",
    features: [
      "40+ lugares curados",
      "Tiempo recomendado en cada uno",
      "Costo de entrada",
      "Tips de cada lugar",
      "Mapa interactivo",
    ],
    highlights: [
      {
        title: "Comunas Transformadas",
        description: "La historia de la transformación urbana",
      },
      {
        title: "Museos Gratis",
        description: "Cultura sin gastar un peso",
      },
      {
        title: "Parques Escondidos",
        description: "Oasis verdes fuera del radar",
      },
    ],
    cta: "Descargar Guía",
  },
  {
    id: "nightlife",
    slug: "nightlife",
    name: "Guía de Nightlife",
    shortName: "Nightlife",
    description:
      "Bares, clubs, rooftops y la vida nocturna real de Medellín — no las trampas turísticas.",
    icon: "🌙",
    price: 12,
    originalPrice: 24,
    currency: "USD",
    badge: "18+",
    features: [
      "40+ bares y clubs",
      "Por zona y estilo musical",
      "Tips de seguridad nocturna",
      "Dress codes y precios",
      "Mejores noches para salir",
    ],
    highlights: [
      {
        title: "Rooftops",
        description: "Los mejores bares con vista",
      },
      {
        title: "Salsa & Reggaeton",
        description: "Dónde bailar según tu estilo",
      },
      {
        title: "Zona Segura",
        description: "Cómo disfrutar sin riesgos",
      },
    ],
    cta: "Descargar Guía",
  },
];

// Bundle Configuration (optional - for future use)
export const bundles = [
  {
    id: "complete-bundle",
    name: "Pack Completo",
    description: "Todas las guías con 60% de descuento",
    products: products.map((p) => p.id),
    price: 29,
    originalPrice: 74,
    icon: "📦",
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((p) => p.popular);
}

export function calculateSavings(product: Product): number {
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
}

"use client";

const benefits = [
  {
    icon: "🏘️",
    title: "Best Neighborhoods",
    description:
      "Know exactly where to stay based on your vibe — from trendy Poblado to authentic Laureles.",
  },
  {
    icon: "🛡️",
    title: "Safety Tips",
    description:
      "Real, practical safety advice from expats who've lived here for years. Stay smart, stay safe.",
  },
  {
    icon: "🍽️",
    title: "Hidden Gems",
    description:
      "Secret restaurants, rooftop bars, and local spots that tourists never find on their own.",
  },
  {
    icon: "💡",
    title: "Insider Tips",
    description:
      "From negotiating taxi fares to ordering like a local — small tricks that make a big difference.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-white relative">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-cream to-white" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-block bg-cream text-terracotta px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          What You&apos;ll Discover
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Everything You Need to Know
        </h2>
        <p className="text-lg text-charcoal-light">
          Your complete insider&apos;s guide to experiencing Medellín safely and
          authentically
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group bg-cream rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-terracotta transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md">
              {benefit.icon}
            </div>

            <h3 className="font-[var(--font-dm-serif)] text-xl text-charcoal mb-3">
              {benefit.title}
            </h3>

            <p className="text-charcoal-light leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

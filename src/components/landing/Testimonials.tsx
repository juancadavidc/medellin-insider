"use client";

const testimonials = [
  {
    quote:
      "This guide saved me from so many tourist traps. The neighborhood breakdown alone was worth it — ended up in Laureles and had the best month of my life.",
    author: "Sarah Mitchell",
    location: "New York, USA",
    initials: "SM",
  },
  {
    quote:
      "I was nervous about safety as a solo traveler. The practical tips in this guide gave me confidence and I felt prepared from day one.",
    author: "James Davidson",
    location: "London, UK",
    initials: "JD",
  },
  {
    quote:
      "The food recommendations were incredible. Found this tiny bandeja paisa spot that became my second home. Thank you for the real insider info!",
    author: "Emma Chen",
    location: "Sydney, Australia",
    initials: "EC",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-jungle relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-1/2 -left-1/5 w-3/5 h-[200%] bg-radial-gradient from-white/5 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="inline-block bg-white/10 text-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
          Traveler Stories
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          What Other Travelers Say
        </h2>
        <p className="text-lg text-white/70">
          Join thousands of travelers who discovered the real Medellín
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            <div className="font-[var(--font-dm-serif)] text-5xl text-terracotta leading-none mb-4">
              &ldquo;
            </div>

            <blockquote className="text-white text-lg leading-relaxed mb-6 italic">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-white font-medium">{testimonial.author}</h4>
                <p className="text-white/60 text-sm">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

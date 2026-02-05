"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Medellín safe for tourists?",
    answer:
      "Yes, Medellín has transformed dramatically and is now considered one of the safest major cities in Colombia. Like any big city, it requires street smarts. Our guide covers specific neighborhoods, times, and practical tips to help you stay safe throughout your visit.",
  },
  {
    question: "What's included in the free guide?",
    answer:
      "The guide includes 45+ pages covering: neighborhood breakdowns with pros/cons, safety tips from long-term expats, restaurant and nightlife recommendations, day trip ideas, transportation tips, Spanish phrases you'll actually use, and insider secrets that took us years to discover.",
  },
  {
    question: "How long should I stay in Medellín?",
    answer:
      "We recommend at least 5-7 days to truly experience the city. This gives you time to explore different neighborhoods, take day trips to Guatapé or nearby coffee farms, and settle into the relaxed Colombian pace. Many visitors end up extending their stay!",
  },
  {
    question: "Do I need to speak Spanish?",
    answer:
      "While knowing some Spanish definitely enhances your experience, you can get by in tourist areas with English. Our guide includes essential Spanish phrases and tips for communicating effectively. Most locals appreciate any effort to speak their language!",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-4 md:px-16 bg-cream">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="inline-block bg-white text-terracotta px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 shadow-sm">
          Common Questions
        </span>
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-charcoal-light">
          Everything you need to know before downloading
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full px-8 py-6 flex justify-between items-center text-left font-[var(--font-dm-serif)] text-lg text-charcoal transition-colors hover:text-terracotta"
            >
              {faq.question}
              <span
                className={`w-8 h-8 bg-cream rounded-full flex items-center justify-center text-xl transition-all flex-shrink-0 ml-4 ${
                  activeIndex === index
                    ? "bg-terracotta text-white rotate-45"
                    : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-8 pb-6 text-charcoal-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

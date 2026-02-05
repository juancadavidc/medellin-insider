"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CTA() {
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
    <section className="py-24 md:py-32 px-4 md:px-16 bg-gradient-to-br from-terracotta to-terracotta-dark text-center relative overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        <h2 className="font-[var(--font-dm-serif)] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          Ready to Discover the Real Medellín?
        </h2>

        <p className="text-xl text-white/90 mb-10">
          Get instant access to our free insider guide and start planning your
          adventure today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-80 px-6 py-4 rounded-xl text-base bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-jungle text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-jungle-light hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? "Sending..." : "Send Me the Guide"}
          </button>
        </form>
      </div>
    </section>
  );
}

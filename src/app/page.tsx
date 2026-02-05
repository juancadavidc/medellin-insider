import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Products } from "@/components/landing/Products";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer variant="dark" />
    </>
  );
}

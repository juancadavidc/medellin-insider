import Link from "next/link";

interface FooterProps {
  variant?: "default" | "dark" | "simple";
}

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "simple") {
    return (
      <footer className="text-center py-12 px-8 text-charcoal-light text-sm">
        <p>Questions? Reply to any of our emails — we actually read them!</p>
        <p className="mt-2">
          © 2024 Medellín Insider ·{" "}
          <Link href="#" className="text-terracotta hover:underline">
            Unsubscribe
          </Link>
        </p>
      </footer>
    );
  }

  return (
    <footer className={`py-16 px-8 text-center ${variant === "dark" ? "bg-charcoal text-white" : "bg-cream"}`}>
      <Link
        href="/"
        className="font-[var(--font-dm-serif)] text-xl text-white flex items-center justify-center gap-2 mb-4"
      >
        <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white text-sm">
          M
        </div>
        Medellín Insider
      </Link>
      <p className={variant === "dark" ? "text-white/60" : "text-charcoal-light"}>
        © 2024 Medellín Insider. All rights reserved.{" "}
        <Link href="#" className="text-terracotta hover:underline">
          Privacy Policy
        </Link>
        {" · "}
        <Link href="#" className="text-terracotta hover:underline">
          Terms
        </Link>
      </p>
    </footer>
  );
}

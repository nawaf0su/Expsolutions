import { WHATSAPP_URL } from "@/content";
import type { content } from "@/content";
import { useEffect, useRef } from "react";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Hero({ t }: { t: T }) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = shapesRef.current?.querySelectorAll(".geo-shape");
    if (!shapes) return;
    const animate = () => {
      shapes.forEach((shape, i) => {
        const el = shape as HTMLElement;
        const t2 = Date.now() / 1000;
        const speed = 0.3 + i * 0.1;
        const amp = 8 + i * 3;
        el.style.transform = `translateY(${Math.sin(t2 * speed) * amp}px) rotate(${Math.cos(t2 * speed * 0.7) * 5}deg)`;
      });
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[--color-navy]"
    >
      {/* Background geometric shapes */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="geo-shape absolute top-[15%] right-[8%] w-64 h-64 rounded-full border-2 border-[--color-teal]/20 opacity-40" />
        <div className="geo-shape absolute top-[30%] left-[5%] w-40 h-40 rounded-2xl border border-[--color-teal]/15 opacity-30 rotate-12" />
        <div className="geo-shape absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-[--color-teal]/5 border border-[--color-teal]/20" />
        <div className="geo-shape absolute top-[60%] left-[10%] w-24 h-24 border-2 border-[--color-teal]/10 rotate-45" />
        <div className="geo-shape absolute top-[10%] left-[30%] w-16 h-16 rounded-full bg-[--color-teal]/8 border border-[--color-teal]/20" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-navy]/0 via-[--color-navy]/20 to-[--color-navy]" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[--color-teal]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[--color-teal]/30 bg-[--color-teal]/10 text-[--color-teal-light] text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[--color-teal] animate-pulse" />
          {t.companyName}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up-delay">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 bg-[--color-teal] hover:bg-[--color-teal-dark] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[--color-teal]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            {t.hero.cta1}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-[--color-teal]/50 text-[--color-teal-light] hover:border-[--color-teal] hover:bg-[--color-teal]/10 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.cta2}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce-slow">
            <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-[--color-teal] rounded-full animate-scroll-down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

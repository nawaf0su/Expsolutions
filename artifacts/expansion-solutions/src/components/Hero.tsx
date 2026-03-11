import { useLocation } from "wouter";
import type { content } from "@/content";
import { WHATSAPP_URL } from "@/content";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Hero({ t }: { t: T }) {
  const scrollToContact = () => {
    const target = document.querySelector("#contact") as HTMLElement | null;
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #071C2A 0%, var(--secondary) 50%, #0a3348 100%)",
      }}
    >
      <div
        className="absolute top-0 end-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(0,168,200,0.10) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 start-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(46,208,232,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo with premium animated frame */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="relative inline-block">
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "28px",
                background:
                  "radial-gradient(ellipse at center, rgba(0,168,200,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="logo-border-animated"
              style={{
                padding: "2px",
                borderRadius: "22px",
                boxShadow:
                  "0 0 30px rgba(0,168,200,0.35), 0 0 60px rgba(46,208,232,0.15), 0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  background:
                    "linear-gradient(145deg, rgba(8,32,46,0.82) 0%, rgba(11,44,61,0.92) 100%)",
                  backdropFilter: "blur(18px)",
                  padding: "12px 20px",
                }}
              >
                <img
                  src="/logo.png"
                  alt={t.companyName}
                  className="w-auto object-contain block"
                  style={{
                    height: "240px",
                    maxWidth: "380px",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            </div>
            <div
              className="logo-corner-accent"
              style={{
                position: "absolute",
                top: -8,
                left: -8,
                width: 28,
                height: 28,
                borderTop: "2.5px solid var(--accent)",
                borderLeft: "2.5px solid var(--accent)",
                borderRadius: "6px 0 0 0",
              }}
            />
            <div
              className="logo-corner-accent"
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                width: 28,
                height: 28,
                borderTop: "2.5px solid var(--accent)",
                borderRight: "2.5px solid var(--accent)",
                borderRadius: "0 6px 0 0",
                animationDelay: "0.75s",
              }}
            />
            <div
              className="logo-corner-accent"
              style={{
                position: "absolute",
                bottom: -8,
                left: -8,
                width: 28,
                height: 28,
                borderBottom: "2.5px solid var(--accent)",
                borderLeft: "2.5px solid var(--accent)",
                borderRadius: "0 0 0 6px",
                animationDelay: "1.5s",
              }}
            />
            <div
              className="logo-corner-accent"
              style={{
                position: "absolute",
                bottom: -8,
                right: -8,
                width: 28,
                height: 28,
                borderBottom: "2.5px solid var(--accent)",
                borderRight: "2.5px solid var(--accent)",
                borderRadius: "0 0 6px 0",
                animationDelay: "2.25s",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 animate-slide-up">
          {t.hero.headline}
        </h1>

        {/* Sub-headline */}
        <div
          className="max-w-2xl mx-auto mb-10 animate-slide-up-delay rounded-xl px-6 py-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(4px)",
          }}
        >
          <p
            className="text-base sm:text-lg"
            style={{ color: "rgba(255,255,255,0.82)", lineHeight: "1.8" }}
          >
            {t.hero.subheadline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-9 py-3.5 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
            style={{
              backgroundColor: "var(--primary)",
              boxShadow: "0 4px 18px rgba(0,168,200,0.30)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--primary-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--primary)";
            }}
          >
            {t.hero.cta1}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-3.5 font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 text-base"
            style={{
              border: "2px solid rgba(0,168,200,0.45)",
              color: "var(--accent)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--primary)";
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(0,168,200,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,168,200,0.45)";
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.cta2}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div
            className="flex flex-col items-center gap-2 animate-bounce-slow"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <div
              className="w-6 h-10 rounded-full flex justify-center pt-2"
              style={{ border: "2px solid rgba(255,255,255,0.18)" }}
            >
              <div
                className="w-1.5 h-3 rounded-full animate-scroll-down"
                style={{ backgroundColor: "var(--primary)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

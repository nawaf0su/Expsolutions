import type { content } from "@/content";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Closing({ t }: { t: T }) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="closing"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      {/* Two clean radial glows — no busy shapes */}
      <div
        className="absolute top-0 start-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(0,168,200,0.08) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 end-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(46,208,232,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: "rgba(0,168,200,0.14)", border: "1px solid rgba(0,168,200,0.20)" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight">
          {t.closing.title}
        </h2>

        <p
          className="text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.85" }}
        >
          {t.closing.body}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-10 py-4 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          style={{ backgroundColor: "var(--primary)", boxShadow: "0 4px 18px rgba(0,168,200,0.30)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary)"; }}
        >
          {t.closing.cta}
        </button>
      </div>
    </section>
  );
}

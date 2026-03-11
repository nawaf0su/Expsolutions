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
      style={{ background: "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-lt) 100%)" }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 start-0 w-72 h-72 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ backgroundColor: "rgba(0,168,200,0.06)" }} />
      <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" style={{ backgroundColor: "rgba(46,208,232,0.05)" }} />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,168,200,0.06), transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: "rgba(0,168,200,0.15)" }}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {t.closing.title}
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          {t.closing.body}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-10 py-4 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          style={{ backgroundColor: "var(--primary)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary)"; }}
        >
          {t.closing.cta}
        </button>
      </div>
    </section>
  );
}

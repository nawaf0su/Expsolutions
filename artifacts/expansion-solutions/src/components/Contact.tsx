import type { CSSProperties } from "react";
import type { content } from "@/content";
import { PHONE, EMAIL } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Contact({ t }: { t: T }) {
  const scrollToIdeaForm = () => {
    const target = document.querySelector("#idea-form") as HTMLElement | null;
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper id="contact" style={{ backgroundColor: "var(--section-alt)" } as CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}>
            {t.contact.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {t.contact.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
          <p className="mt-5 text-base" style={{ color: "var(--text-muted)" }}>{t.contact.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">

          {/* Phone */}
          <a href={`tel:${PHONE}`}
            className="flex items-center gap-5 bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,168,200,0.09)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--text-muted)" }}>
                {t.contact.phone}
              </p>
              <p className="font-bold text-lg" style={{ color: "var(--text-heading)" }} dir="ltr">{PHONE}</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${EMAIL}`}
            className="flex items-center gap-5 bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(11,44,61,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--text-muted)" }}>
                {t.contact.email}
              </p>
              <p className="font-bold text-sm break-all" style={{ color: "var(--text-heading)" }} dir="ltr">{EMAIL}</p>
            </div>
          </a>

          {/* Idea CTA card */}
          <button onClick={scrollToIdeaForm}
            className="flex items-center gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 text-white w-full"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", boxShadow: "0 6px 24px rgba(0,168,200,0.25)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,168,200,0.35)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,168,200,0.25)"; }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-start">
              <p className="font-bold text-base leading-snug">{t.contact.ideaCta}</p>
              <p className="text-xs opacity-80 mt-0.5">{t.ideaForm.title}</p>
            </div>
          </button>

        </div>
      </div>
    </SectionWrapper>
  );
}

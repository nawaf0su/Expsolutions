import type { CSSProperties } from "react";
import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Services({ t }: { t: T }) {
  return (
    <SectionWrapper id="services" style={{ backgroundColor: "var(--section-alt)" } as CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}
          >
            {t.services.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {t.services.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,168,200,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}
            >
              {/* Card header */}
              <div
                className="px-7 py-5 flex items-center gap-4"
                style={{ borderBottom: "1px solid var(--card-border)", backgroundColor: "rgba(0,168,200,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))", boxShadow: "0 4px 12px rgba(11,44,61,0.20)" }}
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-base leading-snug" style={{ color: "var(--text-heading)" }}>
                  {service.title}
                </h3>
              </div>

              {/* Points */}
              <div className="p-7 space-y-3.5">
                {service.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,168,200,0.10)" }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--primary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-[1.85]" style={{ color: "var(--text-body)" }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

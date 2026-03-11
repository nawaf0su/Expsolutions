import type { CSSProperties } from "react";
import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Services({ t }: { t: T }) {
  return (
    <SectionWrapper id="services" style={{ backgroundColor: "var(--bg-light)" } as CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            {t.services.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--secondary)" }}>{t.services.title}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid var(--border-light)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,168,200,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; }}
            >
              {/* Header */}
              <div
                className="p-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))" }}
              >
                <div className="absolute -top-6 -end-6 w-24 h-24 rounded-full" style={{ backgroundColor: "rgba(0,168,200,0.1)" }} />
                <div className="absolute -bottom-4 start-12 w-16 h-16 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: "rgba(0,168,200,0.2)" }}>
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">{service.title}</h3>
                </div>
              </div>

              {/* Points */}
              <div className="p-6 space-y-3">
                {service.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0,168,200,0.1)" }}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--primary)" }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{point}</p>
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



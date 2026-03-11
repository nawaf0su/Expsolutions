import type { CSSProperties } from "react";
import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function VisionMission({ t }: { t: T }) {
  return (
    <SectionWrapper id="vision" style={{ backgroundColor: "var(--section-alt)" } as CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <div
            id="vision-card"
            className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,168,200,0.10)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="w-10 h-0.5 mb-5 rounded-full" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-heading)" }}>
              {t.vision.title}
            </h2>
            <p className="leading-[1.9] text-base" style={{ color: "var(--text-body)" }}>
              {t.vision.body}
            </p>
          </div>

          {/* Mission */}
          <div
            id="mission"
            className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(11,44,61,0.09)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm"
              style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))" }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="w-10 h-0.5 mb-5 rounded-full" style={{ background: "linear-gradient(to right, var(--secondary), var(--secondary-lt))" }} />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-heading)" }}>
              {t.mission.title}
            </h2>
            <p className="leading-[1.9] text-base" style={{ color: "var(--text-body)" }}>
              {t.mission.body}
            </p>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

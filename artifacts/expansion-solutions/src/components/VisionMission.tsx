import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function VisionMission({ t }: { t: T }) {
  return (
    <SectionWrapper id="vision" className="bg-brand-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div id="vision" className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 start-0 w-1.5 h-full bg-gradient-to-b from-brand-teal to-brand-teal-dark rounded-s-2xl" />
            <div className="absolute -top-8 -end-8 w-32 h-32 rounded-full bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-colors duration-300" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">{t.vision.title}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.vision.body}</p>
            </div>
          </div>

          {/* Mission */}
          <div id="mission" className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 start-0 w-1.5 h-full bg-gradient-to-b from-brand-navy to-brand-navy-light rounded-s-2xl" />
            <div className="absolute -top-8 -end-8 w-32 h-32 rounded-full bg-brand-navy/5 group-hover:bg-brand-navy/8 transition-colors duration-300" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center mb-6 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">{t.mission.title}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.mission.body}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

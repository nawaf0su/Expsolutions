import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Services({ t }: { t: T }) {
  return (
    <SectionWrapper id="services" className="bg-[--color-bg-light]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[--color-teal] text-sm font-semibold tracking-widest uppercase mb-3">
            {t.services.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-navy]">{t.services.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[--color-navy] to-[--color-navy-light] p-6 relative overflow-hidden">
                <div className="absolute -top-6 -end-6 w-24 h-24 rounded-full bg-[--color-teal]/10" />
                <div className="absolute -bottom-4 start-12 w-16 h-16 rounded-full bg-white/5" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[--color-teal]/20 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">{service.title}</h3>
                </div>
              </div>

              {/* Points */}
              <div className="p-6 space-y-3">
                {service.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[--color-teal]/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[--color-teal]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
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

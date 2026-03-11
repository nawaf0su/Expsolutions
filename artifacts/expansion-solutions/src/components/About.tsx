import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function About({ t }: { t: T }) {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-[--color-teal] text-sm font-semibold tracking-widest uppercase mb-3">
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[--color-navy] mb-6 leading-tight">
              {t.about.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] rounded-full mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">{t.about.body}</p>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[--color-navy] to-[--color-navy-light] rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[--color-teal]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[--color-teal]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 space-y-6">
                {[
                  { label: t.values.items[0].title, icon: "💡" },
                  { label: t.values.items[1].title, icon: "⭐" },
                  { label: t.values.items[3].title, icon: "🤝" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[--color-teal]/15 flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.label}</p>
                      <div className="mt-1.5 h-1 rounded-full bg-white/10 w-32 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[--color-teal] to-[--color-teal-light]"
                          style={{ width: `${75 + i * 8}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -end-4 w-24 h-24 rounded-2xl bg-[--color-teal]/20 -z-10 rotate-12" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

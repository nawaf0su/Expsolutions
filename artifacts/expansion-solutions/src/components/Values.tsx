import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Values({ t }: { t: T }) {
  return (
    <SectionWrapper id="values" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[--color-teal] text-sm font-semibold tracking-widest uppercase mb-3">
            {t.values.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-navy]">{t.values.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.values.items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-teal]/0 to-[--color-teal]/5 group-hover:from-[--color-teal]/5 group-hover:to-[--color-teal]/10 transition-all duration-300 rounded-2xl" />

              {/* Top accent line */}
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[--color-teal]/10 group-hover:bg-[--color-teal]/20 flex items-center justify-center text-2xl mb-5 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[--color-navy] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>

              {/* Number watermark */}
              <div className="absolute bottom-3 end-5 text-7xl font-black text-gray-50 select-none leading-none">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

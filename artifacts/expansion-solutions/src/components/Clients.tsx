import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Clients({ t }: { t: T }) {
  return (
    <SectionWrapper id="clients" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[--color-teal] text-sm font-semibold tracking-widest uppercase mb-3">
            {t.clients.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-navy]">{t.clients.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.clients.items.map((client, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[--color-navy]/0 to-[--color-navy]/0 group-hover:from-[--color-navy]/0 group-hover:to-[--color-navy]/3 transition-all duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[--color-teal]/10 to-[--color-teal]/20 group-hover:from-[--color-teal]/20 group-hover:to-[--color-teal]/30 flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-300">
                  {client.icon}
                </div>
                <h3 className="text-[--color-navy] font-bold text-base mb-3 leading-snug">{client.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{client.desc}</p>
              </div>
              {/* Bottom border accent */}
              <div className="absolute bottom-0 start-0 end-0 h-0.5 bg-gradient-to-r from-[--color-teal] to-[--color-teal-dark] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

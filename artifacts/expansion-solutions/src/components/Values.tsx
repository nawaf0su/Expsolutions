import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Values({ t }: { t: T }) {
  return (
    <SectionWrapper id="values" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            {t.values.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--secondary)" }}>{t.values.title}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.values.items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ border: "1px solid var(--border-light)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,168,200,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,200,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 start-0 end-0 h-0.5 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start"
                style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }}
              />

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300" style={{ backgroundColor: "rgba(0,168,200,0.08)" }}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--secondary)" }}>{item.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>

              {/* Number watermark */}
              <div className="absolute bottom-2 end-4 text-7xl font-black leading-none select-none" style={{ color: "rgba(0,0,0,0.03)" }}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

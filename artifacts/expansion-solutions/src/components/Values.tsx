import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Values({ t }: { t: T }) {
  return (
    <SectionWrapper id="values" style={{ backgroundColor: "var(--page-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}
          >
            {t.values.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {t.values.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.values.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,168,200,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,200,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
              }}
            >
              {/* Top accent bar on hover */}
              <div
                className="absolute top-0 start-0 end-0 h-0.5 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start"
                style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ backgroundColor: "rgba(0,168,200,0.08)" }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-heading)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-[1.85]" style={{ color: "var(--text-body)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

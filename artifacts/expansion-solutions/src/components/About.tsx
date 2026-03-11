import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function About({ t }: { t: T }) {
  return (
    <SectionWrapper id="about" style={{ backgroundColor: "var(--page-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}
            >
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight" style={{ color: "var(--text-heading)" }}>
              {t.about.title}
            </h2>
            <div className="w-14 h-1 rounded-full mb-6" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
            <p className="text-base leading-[1.9]" style={{ color: "var(--text-body)" }}>
              {t.about.body}
            </p>
          </div>

          {/* Visual card — stays dark for contrast */}
          <div className="relative">
            <div
              className="rounded-2xl p-8 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--secondary), var(--secondary-lt))",
                boxShadow: "0 20px 50px rgba(11,44,61,0.18)",
              }}
            >
              <div className="space-y-6">
                {[
                  { label: t.values.items[0].title, icon: "💡", pct: 90 },
                  { label: t.values.items[1].title, icon: "⭐", pct: 95 },
                  { label: t.values.items[3].title, icon: "🤝", pct: 88 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ backgroundColor: "rgba(0,168,200,0.18)" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-2 text-sm">{item.label}</p>
                      <div
                        className="h-1.5 rounded-full w-full overflow-hidden"
                        style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.pct}%`,
                            background: "linear-gradient(to right, var(--primary), var(--accent))",
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: "var(--accent)", minWidth: "2.5rem", textAlign: "end" }}>
                      {item.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

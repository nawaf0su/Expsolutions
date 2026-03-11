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
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ color: "var(--secondary)" }}>
              {t.about.title}
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>{t.about.body}</p>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div
              className="relative rounded-2xl p-8 shadow-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: "rgba(0,168,200,0.08)" }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: "rgba(46,208,232,0.05)" }} />

              <div className="relative z-10 space-y-6">
                {[
                  { label: t.values.items[0].title, icon: "💡", pct: 90 },
                  { label: t.values.items[1].title, icon: "⭐", pct: 95 },
                  { label: t.values.items[3].title, icon: "🤝", pct: 88 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: "rgba(0,168,200,0.15)" }}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-1.5">{item.label}</p>
                      <div className="h-1 rounded-full w-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${item.pct}%`, background: "linear-gradient(to right, var(--primary), var(--accent))" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -end-4 w-24 h-24 rounded-2xl -z-10 rotate-12" style={{ backgroundColor: "rgba(0,168,200,0.12)" }} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

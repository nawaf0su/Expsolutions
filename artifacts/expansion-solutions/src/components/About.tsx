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
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--secondary), var(--secondary-lt))",
                boxShadow: "0 20px 50px rgba(11,44,61,0.18)",
              }}
            >
              {[
                { icon: t.values.items[0].icon, title: t.values.items[0].title, desc: t.values.items[0].desc },
                { icon: t.values.items[1].icon, title: t.values.items[1].title, desc: t.values.items[1].desc },
                { icon: t.values.items[3].icon, title: t.values.items[3].title, desc: t.values.items[3].desc },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className="flex items-start gap-5 px-8 py-7"
                  style={{
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  {/* Icon badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(0,168,200,0.15)", border: "1px solid rgba(0,168,200,0.20)" }}
                  >
                    {item.icon}
                  </div>

                  {/* Text + accent */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base mb-1">{item.title}</p>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.desc}
                    </p>
                    {/* Decorative brand accent bar — no numbers, purely visual */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-0.5 w-10 rounded-full" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
                      <div className="h-0.5 w-4 rounded-full" style={{ backgroundColor: "rgba(0,168,200,0.25)" }} />
                      <div className="h-0.5 w-2 rounded-full" style={{ backgroundColor: "rgba(0,168,200,0.12)" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

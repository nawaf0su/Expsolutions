import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Clients({ t }: { t: T }) {
  return (
    <SectionWrapper id="clients" style={{ backgroundColor: "var(--page-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}
          >
            {t.clients.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {t.clients.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.clients.items.map((client, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,168,200,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,200,0.20)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
              }}
            >
              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 start-0 end-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: "rgba(0,168,200,0.07)", border: "1px solid rgba(0,168,200,0.12)" }}
              >
                {client.icon}
              </div>
              <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--text-heading)" }}>
                {client.title}
              </h3>
              <p className="text-sm leading-[1.85]" style={{ color: "var(--text-body)" }}>
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import type { content } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Clients({ t }: { t: T }) {
  return (
    <SectionWrapper id="clients" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            {t.clients.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--secondary)" }}>{t.clients.title}</h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.clients.items.map((client, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid var(--border-light)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,168,200,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,200,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, rgba(0,168,200,0.08), rgba(46,208,232,0.12))" }}
              >
                {client.icon}
              </div>
              <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--secondary)" }}>{client.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{client.desc}</p>
              {/* Bottom border accent */}
              <div
                className="absolute bottom-0 start-0 end-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

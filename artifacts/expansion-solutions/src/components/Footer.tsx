import type { content } from "@/content";
import { PHONE, EMAIL } from "@/content";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Footer({ t }: { t: T }) {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/logo.png" alt={t.companyName} className="w-auto object-contain"
                style={{ height: "100px", maxWidth: "260px", mixBlendMode: "screen" }} />
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t.about.body.substring(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {[
                { key: "about",    href: "#about" },
                { key: "vision",   href: "#vision" },
                { key: "services", href: "#services" },
                { key: "clients",  href: "#clients" },
                { key: "contact",  href: "#contact" },
              ].map((item) => (
                <li key={item.key}>
                  <button onClick={() => scrollTo(item.href)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                    {t.nav[item.key as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{t.contact.title}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE}`}
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span dir="ltr">{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span dir="ltr">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            {t.footer.copy.replace("{year}", String(year))}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

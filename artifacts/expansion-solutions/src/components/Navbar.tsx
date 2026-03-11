import { useState, useEffect } from "react";
import type { content } from "@/content";

type T = (typeof content)["ar"] | (typeof content)["en"];

interface NavbarProps {
  t: T;
  lang: string;
  onToggleLang: () => void;
}

const navItems = [
  { key: "about",    href: "#about" },
  { key: "vision",   href: "#vision" },
  { key: "services", href: "#services" },
  { key: "clients",  href: "#clients" },
  { key: "contact",  href: "#contact" },
] as const;

export function Navbar({ t, lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToIdeaForm = () => {
    scrollTo("#idea-form");
  };

  return (
    <header
      style={{
        backgroundColor: scrolled ? "var(--secondary)" : "rgba(11,44,61,0.97)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img src="/logo.png" alt={t.companyName} className="w-auto object-contain"
              style={{ height: "90px", maxWidth: "260px", mixBlendMode: "screen" }} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const label = t.nav[item.key as keyof typeof t.nav];
              const isActive = activeSection === item.href.slice(1);
              return (
                <button key={item.key} onClick={() => scrollTo(item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  style={{ color: isActive ? "var(--accent)" : "rgba(255,255,255,0.8)", backgroundColor: isActive ? "rgba(0,168,200,0.12)" : "transparent" }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}>
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <button onClick={onToggleLang}
              className="px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid rgba(0,168,200,0.4)", color: "var(--accent)", backgroundColor: "transparent" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,168,200,0.12)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            {/* Submit Your Idea CTA */}
            <button onClick={scrollToIdeaForm}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-white text-sm font-semibold rounded-md transition-all duration-200 shadow-sm"
              style={{ backgroundColor: "var(--primary)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary)"; }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t.nav.ideaForm}
            </button>

            {/* Hamburger */}
            <button className="lg:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-3 space-y-0.5">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.href)}
                className="block w-full text-start px-4 py-2.5 text-sm font-medium rounded-md transition-colors"
                style={{ color: "rgba(255,255,255,0.8)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button onClick={scrollToIdeaForm}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-white text-sm font-semibold rounded-md"
                style={{ backgroundColor: "var(--primary)" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.nav.ideaForm}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

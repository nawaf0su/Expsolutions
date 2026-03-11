import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Values } from "@/components/Values";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Closing } from "@/components/Closing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div dir={t.dir} lang={t.lang} className="min-h-screen">
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} onMainPage={true} />
      <Hero t={t} />
      <About t={t} />
      <VisionMission t={t} />
      <Values t={t} />
      <Services t={t} />
      <Clients t={t} />
      <Closing t={t} />
      <Contact t={t} lang={lang} />
      <Footer t={t} />
    </div>
  );
}

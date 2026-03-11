import { useState, useEffect } from "react";
import { content, type Lang } from "@/content";

export function useLanguage() {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = content[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
  }, [lang, t.dir, t.lang]);

  return { lang, toggleLang, t };
}

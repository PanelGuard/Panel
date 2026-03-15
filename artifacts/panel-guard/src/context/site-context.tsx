import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "ar" | "en";
type Theme = "cyber-navy" | "ai-purple" | "neon-dark" | "crimson-dark" | "midnight-gold";

interface SiteContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("site-lang") as Language) || "ar";
    }
    return "ar";
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("site-theme") as Theme) || "cyber-navy";
    }
    return "cyber-navy";
  });

  useEffect(() => {
    localStorage.setItem("site-lang", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem("site-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <SiteContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
}

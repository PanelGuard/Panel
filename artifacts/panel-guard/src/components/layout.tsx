import { ReactNode, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronLeft, ChevronRight, Palette, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSite } from "@/context/site-context";

interface LayoutProps {
  children: ReactNode;
}

const NAV_LINKS = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/services", ar: "خدماتنا", en: "Services" },
  { href: "/web-design", ar: "تصميم المواقع", en: "Web Design" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact" },
];

const THEMES = [
  { id: "cyber-navy", color: "#3b82f6" },
  { id: "ai-purple", color: "#8b5cf6" },
  { id: "neon-dark", color: "#10b981" },
  { id: "crimson-dark", color: "#dc2626" },
  { id: "midnight-gold", color: "#d97706" },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { language, setLanguage, theme, setTheme } = useSite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAr = language === "ar";
  const toggleLanguage = () => setLanguage(isAr ? "en" : "ar");

  return (
    <div className={cn("min-h-screen flex flex-col transition-colors duration-500")} dir={isAr ? "rtl" : "ltr"}>
      {/* Top Bar - Contact Info */}
      <div className="hidden md:flex bg-background border-b border-border/50 text-foreground/80 py-2 px-4 text-sm justify-between items-center z-50 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@panelguardits.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="mt-1">info@panelguardits.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="mt-1" dir="ltr">+20 100 296 1539</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="mt-1">{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "glass shadow-md py-2 border-b border-white/10 glow" : "bg-background py-4 border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-105"
                style={{ boxShadow: "0 0 16px hsl(var(--primary) / 0.5), 0 0 32px hsl(var(--primary) / 0.2)" }}>
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Panel Guard Logo" 
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-xl text-primary leading-none" style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.7)" }}>
                  {isAr ? "بانيل جارد" : "Panel Guard"}
                </h1>
                <p className="text-xs text-muted-foreground mt-1">
                  {isAr ? "لحلول تكنولوجيا المعلومات" : "for IT Solutions"}
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={cn(
                      "font-semibold text-base transition-colors hover:text-accent relative py-2",
                      isActive ? "text-accent" : "text-foreground/80"
                    )}
                  >
                    {isAr ? link.ar : link.en}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full glow"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <div className="flex items-center gap-2 border-x border-border/50 px-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/20 text-foreground transition-colors"
                  title={isAr ? "Switch to English" : "التبديل للعربية"}
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-xs font-bold ml-1">{isAr ? "EN" : "AR"}</span>
                </button>
                
                <div className="relative" ref={themeRef}>
                  <button 
                    onClick={() => setIsThemeOpen(!isThemeOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/20 text-foreground transition-colors"
                  >
                    <Palette className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {isThemeOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={cn(
                          "absolute top-full mt-2 glass rounded-xl p-2 flex flex-col gap-2 z-50",
                          isAr ? "left-0" : "right-0"
                        )}
                      >
                        {THEMES.map(t => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setTheme(t.id as any);
                              setIsThemeOpen(false);
                            }}
                            className={cn(
                              "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                              theme === t.id ? "border-white" : "border-transparent"
                            )}
                            style={{ backgroundColor: t.color }}
                            title={t.id}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <Link 
                href="/contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 glow"
              >
                {isAr ? "طلب استشارة" : "Consultation"}
              </Link>
            </nav>

            {/* Mobile Menu Toggle & Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleLanguage} className="p-2 text-foreground">
                <Globe className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 shadow-lg overflow-hidden fixed top-[72px] left-0 right-0 z-30"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "font-medium text-lg px-4 py-3 rounded-lg transition-colors flex items-center justify-between",
                    location === link.href ? "bg-primary/20 text-primary" : "text-foreground hover:bg-primary/10"
                  )}
                >
                  {isAr ? link.ar : link.en}
                  {isAr ? <ChevronLeft className="w-4 h-4 opacity-50" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
                </Link>
              ))}
              
              <div className="mt-2 py-4 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-3 px-4">{isAr ? "اختر المظهر:" : "Choose Theme:"}</p>
                <div className="flex gap-4 px-4">
                  {THEMES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id as any)}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                        theme === t.id ? "border-white" : "border-transparent"
                      )}
                      style={{ backgroundColor: t.color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a href="tel:+201002961539" className="flex items-center gap-3 text-muted-foreground p-2">
                  <Phone className="w-5 h-5 text-primary glow" />
                  <span dir="ltr">+20 100 296 1539</span>
                </a>
                <a href="mailto:info@panelguardits.com" className="flex items-center gap-3 text-muted-foreground p-2">
                  <Mail className="w-5 h-5 text-primary glow" />
                  <span>info@panelguardits.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Col */}
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white transition-all duration-300 group-hover:scale-105"
                  style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Panel Guard Logo"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h1 className="font-display font-bold text-2xl text-primary leading-none" style={{ textShadow: "0 0 12px hsl(var(--primary) / 0.7)" }}>
                  {isAr ? "بانيل جارد" : "Panel Guard"}
                </h1>
              </Link>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {isAr 
                  ? "بانيل جارد هي خيارك الأول لحلول تكنولوجيا المعلومات والتدريب. نقدم خدمات متكاملة تضمن أمان واستقرار بنيتك التحتية الرقمية." 
                  : "Panel Guard is your first choice for IT solutions and training. We offer comprehensive services to ensure the security and stability of your digital infrastructure."}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-foreground relative inline-block">
                {isAr ? "روابط سريعة" : "Quick Links"}
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full glow"></span>
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group">
                      {isAr ? (
                        <ChevronLeft className="w-4 h-4 text-accent transition-transform group-hover:-translate-x-1" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
                      )}
                      {isAr ? link.ar : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-foreground relative inline-block">
                {isAr ? "أهم خدماتنا" : "Key Services"}
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full glow"></span>
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">{isAr ? "البنية التحتية للشبكات" : "Network Infrastructure"}</Link></li>
                <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">{isAr ? "حلول الأمن السيبراني" : "Cybersecurity Solutions"}</Link></li>
                <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">{isAr ? "إدارة الخوادم" : "Server Management"}</Link></li>
                <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">{isAr ? "كاميرات المراقبة (CCTV)" : "CCTV Systems"}</Link></li>
                <li><Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">{isAr ? "التدريب والشهادات" : "Training & Certifications"}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-foreground relative inline-block">
                {isAr ? "تواصل معنا" : "Contact Us"}
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full glow"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground/80">{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="flex flex-col" dir="ltr">
                    <span className={cn("text-foreground/80", isAr ? "text-right" : "text-left")}>+20 100 296 1539</span>
                    <span className={cn("text-foreground/80", isAr ? "text-right" : "text-left")}>+20 155 551 0411</span>
                    <span className={cn("text-foreground/80", isAr ? "text-right" : "text-left")}>+966 535 684 330</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:info@panelguardits.com" className="text-foreground/80 hover:text-primary transition-colors">
                    info@panelguardits.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} {isAr ? "شركة بانيل جارد لحلول تكنولوجيا المعلومات. جميع الحقوق محفوظة." : "Panel Guard IT Solutions. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 px-4 text-sm justify-between items-center z-50 relative">
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
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="w-4 h-4" />
            <span className="mt-1">محافظة الشرقية، مصر</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "glass-panel shadow-md py-2" : "bg-white py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Panel Guard Logo" 
                className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if logo fails to load
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x50?text=Panel+Guard';
                }}
              />
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-xl text-primary leading-none">بانل جارد</h1>
                <p className="text-xs text-muted-foreground mt-1">لحلول تكنولوجيا المعلومات</p>
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
                    {link.label}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link 
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                طلب استشارة
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className="md:hidden bg-white border-b border-border shadow-lg overflow-hidden fixed top-[72px] left-0 right-0 z-30"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "font-medium text-lg px-4 py-3 rounded-lg transition-colors flex items-center justify-between",
                    location === link.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-gray-50"
                  )}
                >
                  {link.label}
                  <ChevronLeft className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+201002961539" className="flex items-center gap-3 text-muted-foreground p-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span dir="ltr">+20 100 296 1539</span>
                </a>
                <a href="mailto:info@panelguardits.com" className="flex items-center gap-3 text-muted-foreground p-2">
                  <Mail className="w-5 h-5 text-primary" />
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
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Col */}
            <div className="col-span-1 lg:col-span-1">
              <div className="bg-white inline-block p-2 rounded-xl mb-6">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.jpg`} 
                  alt="Panel Guard Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x50?text=Panel+Guard'; }}
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                بانل جارد هي خيارك الأول لحلول تكنولوجيا المعلومات والتدريب. نقدم خدمات متكاملة تضمن أمان واستقرار بنيتك التحتية الرقمية.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-white relative inline-block">
                روابط سريعة
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronLeft className="w-4 h-4 text-accent transition-transform group-hover:-translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-white relative inline-block">
                أهم خدماتنا
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">البنية التحتية للشبكات</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">حلول الأمن السيبراني</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">إدارة الخوادم</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">كاميرات المراقبة (CCTV)</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-white transition-colors">التدريب والشهادات</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-display font-bold mb-6 text-white relative inline-block">
                تواصل معنا
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-primary-foreground/80">محافظة الشرقية، مصر</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="flex flex-col" dir="ltr">
                    <span className="text-primary-foreground/80 text-right">+20 100 296 1539</span>
                    <span className="text-primary-foreground/80 text-right">+20 155 551 0411</span>
                    <span className="text-primary-foreground/80 text-right">+966 535 684 330</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:info@panelguardits.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                    info@panelguardits.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} شركة بانل جارد لحلول تكنولوجيا المعلومات. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

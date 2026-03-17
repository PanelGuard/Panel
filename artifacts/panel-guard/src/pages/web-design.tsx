import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Globe, Palette, ShoppingCart, Smartphone, Search, Zap,
  Code2, LayoutDashboard, ArrowLeft, ArrowRight, CheckCircle2,
  Star, Layers, RefreshCw, Headset
} from "lucide-react";
import { useSite } from "@/context/site-context";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function WebDesign() {
  const { language } = useSite();
  const isAr = language === "ar";

  const SERVICES = [
    {
      icon: Globe,
      title: isAr ? "المواقع المؤسسية" : "Corporate Websites",
      desc: isAr
        ? "تصميم مواقع احترافية تعكس هوية شركتك وتقدم خدماتها بأسلوب جذاب ومنظم."
        : "Professional websites that reflect your brand and present your services in an attractive, organized way.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: ShoppingCart,
      title: isAr ? "المتاجر الإلكترونية" : "E-Commerce Stores",
      desc: isAr
        ? "متاجر متكاملة بواجهات سهلة الاستخدام، بوابات دفع آمنة، وإدارة المنتجات."
        : "Full-featured stores with easy-to-use interfaces, secure payment gateways, and product management.",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: Smartphone,
      title: isAr ? "التصميم المتجاوب" : "Responsive Design",
      desc: isAr
        ? "مواقع تعمل بشكل مثالي على جميع الأجهزة: الكمبيوتر، الأجهزة اللوحية، والهواتف."
        : "Websites that work perfectly on all devices: desktop, tablets, and mobile phones.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      icon: LayoutDashboard,
      title: isAr ? "لوحات تحكم مخصصة" : "Custom Dashboards",
      desc: isAr
        ? "أنظمة إدارة محتوى مخصصة ولوحات تحكم تساعدك على إدارة موقعك بسهولة تامة."
        : "Custom CMS and admin dashboards that help you manage your site with complete ease.",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
    {
      icon: Search,
      title: isAr ? "تحسين محركات البحث (SEO)" : "SEO Optimization",
      desc: isAr
        ? "تحسين شامل لموقعك ليظهر في صدارة نتائج جوجل وزيادة الزيارات العضوية."
        : "Comprehensive optimization for your site to rank at the top of Google results and increase organic traffic.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      icon: Zap,
      title: isAr ? "الأداء والسرعة" : "Performance & Speed",
      desc: isAr
        ? "تحسين سرعة تحميل المواقع، ضغط الصور، والكود لضمان تجربة مستخدم ممتازة."
        : "Optimizing page load speed, image compression, and code for an excellent user experience.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
  ];

  const PROCESS = [
    { num: "01", title: isAr ? "التحليل والتخطيط" : "Analysis & Planning", desc: isAr ? "نفهم احتياجاتك وأهداف عملك لنضع خطة واضحة." : "We understand your needs and business goals to create a clear plan." },
    { num: "02", title: isAr ? "التصميم" : "Design", desc: isAr ? "نقدم تصاميم أولية للموافقة قبل البدء بالتطوير." : "We present initial mockups for approval before development begins." },
    { num: "03", title: isAr ? "التطوير" : "Development", desc: isAr ? "برمجة الموقع بأحدث التقنيات مع ضمان الجودة." : "Coding the site with the latest technologies with quality assurance." },
    { num: "04", title: isAr ? "الاختبار والإطلاق" : "Testing & Launch", desc: isAr ? "اختبار شامل على كافة الأجهزة ثم إطلاق الموقع بنجاح." : "Comprehensive testing on all devices, then a successful site launch." },
  ];

  const PACKAGES = [
    {
      name: isAr ? "الباقة الأساسية" : "Basic",
      price: isAr ? "يبدأ من $299" : "Starting at $299",
      features: isAr
        ? ["موقع 5 صفحات", "تصميم متجاوب", "نموذج تواصل", "دمج وسائل التواصل الاجتماعي", "تسليم خلال 7 أيام"]
        : ["5-page website", "Responsive design", "Contact form", "Social media integration", "Delivered in 7 days"],
      highlight: false,
    },
    {
      name: isAr ? "الباقة الاحترافية" : "Professional",
      price: isAr ? "يبدأ من $699" : "Starting at $699",
      features: isAr
        ? ["موقع حتى 15 صفحة", "تصميم UI/UX مخصص", "لوحة تحكم CMS", "تحسين SEO أساسي", "تكامل نظام الدفع", "دعم فني لمدة شهر"]
        : ["Up to 15 pages", "Custom UI/UX design", "CMS dashboard", "Basic SEO optimization", "Payment integration", "1-month support"],
      highlight: true,
    },
    {
      name: isAr ? "باقة المتجر" : "E-Commerce",
      price: isAr ? "يبدأ من $1,199" : "Starting at $1,199",
      features: isAr
        ? ["متجر إلكتروني متكامل", "إدارة المنتجات والمخزون", "بوابات دفع آمنة", "تتبع الطلبات", "تحسين SEO متقدم", "دعم فني لمدة 3 أشهر"]
        : ["Full e-commerce store", "Product & inventory management", "Secure payment gateways", "Order tracking", "Advanced SEO", "3-month support"],
      highlight: false,
    },
  ];

  const TECH = ["React", "Next.js", "WordPress", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "MongoDB"];

  return (
    <div className="overflow-hidden bg-background">

      {/* Hero */}
      <section className="relative py-28 gradient-bg overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{isAr ? "خدمات تصميم المواقع" : "Web Design Services"}</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-6">
              {isAr ? "نصمم مواقع " : "We Design "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {isAr ? "تُحقق أهدافك" : "Websites That Achieve Your Goals"}
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
              {isAr
                ? "من الفكرة إلى الإطلاق — نقدم حلول تصميم وتطوير مواقع إلكترونية احترافية تناسب كل نوع من الأعمال."
                : "From concept to launch — we deliver professional web design and development solutions for every type of business."}
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 glow">
                {isAr ? "ابدأ مشروعك الآن" : "Start Your Project"}
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
              <Link href="/services"
                className="px-8 py-4 glass text-foreground rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                {isAr ? "كل خدماتنا" : "All Services"}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isAr ? "ما الذي نقدمه؟" : "What We Offer"}
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              {isAr ? "خدمات متكاملة لتصميم وتطوير المواقع الإلكترونية لكل نوع من الأعمال" : "Comprehensive web design and development services for every type of business"}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-xl ${svc.bg} flex items-center justify-center mb-5`}>
                  <svc.icon className={`w-7 h-7 ${svc.color}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{svc.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isAr ? "كيف نعمل؟" : "How We Work"}
              </h2>
              <p className="text-foreground/60">
                {isAr ? "عملية واضحة من 4 خطوات تضمن تسليم موقعك بأعلى جودة" : "A clear 4-step process that guarantees delivering your site with the highest quality"}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="relative glass rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="text-5xl font-black text-primary/20 mb-4">{step.num}</div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/60 text-sm">{step.desc}</p>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -end-3 z-10 text-primary/40">
                      {isAr ? <ChevronLeft /> : <ChevronRight />}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isAr ? "الباقات والأسعار" : "Packages & Pricing"}
            </h2>
            <p className="text-foreground/60">
              {isAr ? "باقات مرنة تناسب احتياجاتك وميزانيتك" : "Flexible packages to suit your needs and budget"}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.highlight
                    ? "bg-primary/10 border-primary/50 shadow-xl shadow-primary/20"
                    : "glass border-white/10 hover:border-primary/30"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    <Star className="w-3 h-3" />
                    {isAr ? "الأكثر طلباً" : "Most Popular"}
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-2xl font-black text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow"
                      : "glass border border-white/20 hover:bg-white/10 text-foreground"
                  }`}
                >
                  {isAr ? "تواصل معنا" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-3">{isAr ? "التقنيات التي نستخدمها" : "Technologies We Use"}</h2>
              <p className="text-foreground/60 mb-10">{isAr ? "أحدث التقنيات لبناء مواقع سريعة وآمنة وقابلة للتوسع" : "Latest technologies to build fast, secure, and scalable websites"}</p>
            </motion.div>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
              {TECH.map((tech, i) => (
                <motion.span
                  key={i}
                  variants={fadeIn}
                  className="px-5 py-2.5 glass rounded-full border border-white/10 text-foreground/80 font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="glass rounded-3xl p-10 md:p-16 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative z-10">
            <Headset className="w-14 h-14 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isAr ? "هل أنت مستعد لبناء موقعك؟" : "Ready to Build Your Website?"}
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              {isAr
                ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك."
                : "Contact us today for a free consultation and a custom quote for your project."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/30 glow"
            >
              {isAr ? "احصل على استشارة مجانية" : "Get a Free Consultation"}
              {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

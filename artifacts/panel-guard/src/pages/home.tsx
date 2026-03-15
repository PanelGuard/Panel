import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Shield, Server, Network, MonitorPlay, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSite } from "@/context/site-context";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { language } = useSite();
  const isAr = language === "ar";

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 gradient-bg">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-foreground"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse glow" />
                <span className="text-sm font-medium">
                  {isAr ? "التميز في تقنية المعلومات" : "Excellence in Information Technology"}
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {isAr ? "نحمي وندير " : "Securing & Managing "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow">
                  {isAr ? "مستقبلك الرقمي" : "Your Digital Future"}
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
                {isAr 
                  ? "بانيل جارد تقدم حلول تقنية متكاملة من البنية التحتية إلى الأمن السيبراني لضمان نمو واستقرار أعمالك في العصر الرقمي." 
                  : "Panel Guard provides integrated technical solutions from infrastructure to cybersecurity to ensure the growth and stability of your business in the digital age."}
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 glow"
                >
                  {isAr ? "استكشف خدماتنا" : "Explore Services"}
                  {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 glass text-foreground rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  {isAr ? "تواصل معنا" : "Contact Us"}
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual — Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center relative h-[500px]"
            >
              {/* Outer glow rings */}
              <div className="absolute w-80 h-80 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute w-96 h-96 rounded-full border border-accent/10 animate-ping" style={{ animationDuration: "4.5s", animationDelay: "1s" }} />
              <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              <div className="absolute w-60 h-60 rounded-full bg-accent/10 blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />

              {/* Logo image — prominent with light circular backdrop */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* White circular backdrop to make logo pop */}
                <div className="absolute w-72 h-72 rounded-full bg-white/95 shadow-2xl"
                  style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3), 0 0 120px hsl(var(--accent) / 0.2)" }}
                />
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Panel Guard Logo"
                  className="relative z-10 w-64 h-64 object-contain"
                />
              </motion.div>

              {/* Floating badge */}
              <div className="absolute bottom-10 left-0 glass p-5 rounded-2xl max-w-xs shadow-xl border border-white/20 z-20"
                style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">{isAr ? "حماية مستمرة" : "Continuous Protection"}</h4>
                    <p className="text-foreground/60 text-sm">{isAr ? "أمان سيبراني 24/7" : "24/7 Cybersecurity"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 md:px-6">
        <div className="glass rounded-2xl shadow-xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-border/50">
            {[
              { label: isAr ? "عميل سعيد" : "Happy Clients", value: "+150" },
              { label: isAr ? "مشروع منجز" : "Projects Done", value: "+300" },
              { label: isAr ? "سنوات الخبرة" : "Years Exp", value: "+10" },
              { label: isAr ? "دعم فني" : "Support", value: "24/7" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 glow" dir="ltr">{stat.value}</h3>
                <p className="text-foreground/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block glow">
              {isAr ? "ماذا نقدم" : "What We Offer"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              {isAr ? "حلول تقنية متكاملة لنجاحك" : "Integrated Tech Solutions For Your Success"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isAr 
                ? "نقدم مجموعة شاملة من الخدمات التقنية المصممة خصيصاً لتلبية احتياجات عملك وتحسين كفاءته التشغيلية." 
                : "We offer a comprehensive range of technical services tailored to meet your business needs and improve operational efficiency."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: isAr ? "البنية التحتية للشبكات" : "Network Infrastructure",
                desc: isAr ? "تصميم وتنفيذ وصيانة شبكات كمبيوتر قوية وموثوقة تضمن اتصالاً سريعاً وآمناً لجميع أجزاء مؤسستك." : "Design, implement and maintain reliable computer networks ensuring fast and secure connectivity."
              },
              {
                icon: Shield,
                title: isAr ? "حلول الأمن السيبراني" : "Cybersecurity Solutions",
                desc: isAr ? "حماية بياناتك الحساسة وأنظمتك من التهديدات والاختراقات باستخدام أحدث تقنيات الأمان المتقدمة." : "Protect your sensitive data and systems from threats using the latest advanced security technologies."
              },
              {
                icon: Server,
                title: isAr ? "إدارة الخوادم" : "Server Management",
                desc: isAr ? "تجهيز وإدارة خوادم المؤسسات لضمان أداء عالي وتوافر مستمر لخدماتك وتطبيقاتك الحيوية." : "Setup and manage enterprise servers to ensure high performance and continuous availability."
              },
              {
                icon: MonitorPlay,
                title: isAr ? "أنظمة المراقبة (CCTV)" : "CCTV Systems",
                desc: isAr ? "توفير أحدث كاميرات وأنظمة المراقبة الذكية لضمان أمن منشآتك ومتابعتها على مدار الساعة." : "Provide the latest smart surveillance cameras and systems to secure your facilities 24/7."
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:bg-white/5 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <Link href="/services" className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
                  {isAr ? "المزيد من التفاصيل" : "More Details"}
                  {isAr ? <ChevronLeft className="w-5 h-5 ml-1" /> : <ChevronRight className="w-5 h-5 ml-1" />}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow hover:shadow-primary/50"
            >
              {isAr ? "عرض جميع الخدمات" : "View All Services"}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" 
                alt="IT Team" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px] border border-white/10 opacity-90"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl max-w-[250px] hidden md:block glow">
                <h4 className="font-display font-bold text-2xl mb-2">{isAr ? "خبرة احترافية" : "Pro Expertise"}</h4>
                <p className="text-accent-foreground/80">{isAr ? "فريقنا مكون من مهندسين معتمدين دولياً." : "Our team consists of internationally certified engineers."}</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block glow">
                {isAr ? "لماذا بانيل جارد؟" : "Why Panel Guard?"}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                {isAr ? "شريكك التقني الموثوق لنمو مستدام" : "Your Reliable Tech Partner for Sustainable Growth"}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {isAr 
                  ? "نحن لا نقدم مجرد خدمات تقنية، بل نبني شراكات استراتيجية. ندرك أن التكنولوجيا هي المحرك الأساسي لنجاح أي مؤسسة حديثة." 
                  : "We don't just provide technical services; we build strategic partnerships. We understand technology is the core driver for any modern organization."}
              </p>

              <div className="space-y-6">
                {[
                  { title: isAr ? "دعم فني سريع واستجابة فورية" : "Fast Tech Support", desc: isAr ? "نحن متواجدون دائماً لحل أي مشكلة تقنية قبل أن تؤثر على سير عملك." : "We are always available to solve any technical issue before it impacts workflow." },
                  { title: isAr ? "حلول مخصصة" : "Custom Solutions", desc: isAr ? "ندرس احتياجاتك بدقة ونقدم حلولاً تناسب حجم وطبيعة عملك وميزانيتك." : "We study your needs and provide tailored solutions for your scale and budget." },
                  { title: isAr ? "أعلى معايير الجودة العالمية" : "Highest Global Standards", desc: isAr ? "نلتزم بأفضل الممارسات (Best Practices) في تنفيذ جميع مشاريعنا." : "We commit to best practices in implementing all our projects." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 glow">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-0" />
        <div className="absolute inset-0 opacity-30 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            {isAr ? "هل أنت مستعد لتطوير البنية التقنية لمؤسستك؟" : "Ready to Upgrade Your Enterprise Tech Infrastructure?"}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            {isAr 
              ? "تواصل مع خبرائنا اليوم للحصول على استشارة مجانية وتقييم شامل لاحتياجاتك التقنية." 
              : "Contact our experts today for a free consultation and comprehensive assessment of your tech needs."}
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 glow"
          >
            {isAr ? "ابدأ معنا الآن" : "Start With Us Now"}
          </Link>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Shield, Server, Network, MonitorPlay, CheckCircle2, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="IT Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">التميز في تقنية المعلومات</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                نحمي وندير <span className="text-accent">مستقبلك الرقمي</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                بانل جارد تقدم حلول تقنية متكاملة من البنية التحتية إلى الأمن السيبراني لضمان نمو واستقرار أعمالك في العصر الرقمي.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 shadow-lg shadow-accent/25 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  استكشف خدماتنا
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative h-[500px]"
            >
              {/* Using Unsplash for a high quality tech corporate image */}
              {/* modern server room datacenter glowing lights */}
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1000&fit=crop" 
                alt="Server Infrastructure" 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[80%] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute left-0 bottom-10 glass-panel-dark p-6 rounded-2xl max-w-xs shadow-xl border border-white/20 animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">حماية مستمرة</h4>
                    <p className="text-white/60 text-sm">أمان سيبراني 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-border p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-border">
            {[
              { label: "عميل سعيد", value: "+150" },
              { label: "مشروع منجز", value: "+300" },
              { label: "سنوات الخبرة", value: "+10" },
              { label: "دعم فني", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2" dir="ltr">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">ماذا نقدم</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              حلول تقنية متكاملة لنجاحك
            </h2>
            <p className="text-muted-foreground text-lg">
              نقدم مجموعة شاملة من الخدمات التقنية المصممة خصيصاً لتلبية احتياجات عملك وتحسين كفاءته التشغيلية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "البنية التحتية للشبكات",
                desc: "تصميم وتنفيذ وصيانة شبكات كمبيوتر قوية وموثوقة تضمن اتصالاً سريعاً وآمناً لجميع أجزاء مؤسستك."
              },
              {
                icon: Shield,
                title: "حلول الأمن السيبراني",
                desc: "حماية بياناتك الحساسة وأنظمتك من التهديدات والاختراقات باستخدام أحدث تقنيات الأمان المتقدمة."
              },
              {
                icon: Server,
                title: "إدارة الخوادم (Servers)",
                desc: "تجهيز وإدارة خوادم المؤسسات لضمان أداء عالي وتوافر مستمر لخدماتك وتطبيقاتك الحيوية."
              },
              {
                icon: MonitorPlay,
                title: "أنظمة المراقبة (CCTV)",
                desc: "توفير أحدث كاميرات وأنظمة المراقبة الذكية لضمان أمن منشآتك ومتابعتها على مدار الساعة."
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-primary/5 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <Link href="/services" className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors">
                  المزيد من التفاصيل
                  <ChevronLeft className="w-5 h-5 mr-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               {/* tech team working together professional office */}
               <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop" 
                alt="IT Team" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-2xl shadow-xl max-w-[250px] hidden md:block">
                <h4 className="font-display font-bold text-2xl mb-2">خبرة احترافية</h4>
                <p className="text-white/80">فريقنا مكون من مهندسين معتمدين دولياً.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">لماذا بانل جارد؟</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                شريكك التقني الموثوق لنمو مستدام
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                نحن لا نقدم مجرد خدمات تقنية، بل نبني شراكات استراتيجية. ندرك أن التكنولوجيا هي المحرك الأساسي لنجاح أي مؤسسة حديثة.
              </p>

              <div className="space-y-6">
                {[
                  { title: "دعم فني سريع واستجابة فورية", desc: "نحن متواجدون دائماً لحل أي مشكلة تقنية قبل أن تؤثر على سير عملك." },
                  { title: "حلول مخصصة", desc: "ندرس احتياجاتك بدقة ونقدم حلولاً تناسب حجم وطبيعة عملك وميزانيتك." },
                  { title: "أعلى معايير الجودة العالمية", desc: "نلتزم بأفضل الممارسات (Best Practices) في تنفيذ جميع مشاريعنا." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
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
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute inset-0 opacity-10 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            هل أنت مستعد لتطوير البنية التقنية لمؤسستك؟
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            تواصل مع خبرائنا اليوم للحصول على استشارة مجانية وتقييم شامل لاحتياجاتك التقنية.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 shadow-xl shadow-black/10 hover:-translate-y-1 transition-all duration-300"
          >
            ابدأ معنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
}

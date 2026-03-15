import { motion } from "framer-motion";
import { Network, Shield, Server, Code2, GraduationCap, MonitorPlay, Cloud, Headset } from "lucide-react";

const SERVICES = [
  {
    id: "network",
    icon: Network,
    title: "البنية التحتية للشبكات",
    desc: "تصميم وتنفيذ وتكوين شبكات (LAN/WAN) متطورة تلبي احتياجات الشركات بمختلف أحجامها. نضمن استقرار وسرعة الاتصال مع توفير بنية تحتية قابلة للتوسع مستقبلاً.",
    features: ["تصميم معماري للشبكات", "تمديد الكابلات الهيكلية", "تكوين أجهزة التوجيه (Routers) والمحولات (Switches)", "حلول الشبكات اللاسلكية (Wi-Fi)"]
  },
  {
    id: "support",
    icon: Headset,
    title: "الدعم الفني والصيانة",
    desc: "عقود صيانة دورية ودعم فني مستمر لضمان استمرارية العمل دون انقطاع، مع حل سريع وفعال لجميع المشكلات التقنية المتعلقة بالأجهزة والبرمجيات.",
    features: ["دعم فني عن بعد وفي الموقع", "صيانة وقائية دورية", "تحديث الأنظمة والبرامج", "إدارة الأصول التقنية"]
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "حلول الأمن السيبراني",
    desc: "حماية الأنظمة والبيانات والشبكات من الهجمات الرقمية. نقدم جدران حماية متقدمة وأنظمة كشف التسلل لضمان أقصى درجات الأمان لبيانات عملائك.",
    features: ["جدران الحماية (Firewalls)", "مكافحة الفيروسات المتقدمة", "تقييم الثغرات الأمنية", "النسخ الاحتياطي الآمن والتعافي من الكوارث"]
  },
  {
    id: "servers",
    icon: Server,
    title: "إدارة الخوادم (Server Management)",
    desc: "تركيب وتهيئة وإدارة الخوادم (Windows Server, Linux) لضمان أداء سلس وتخزين آمن ومشاركة فعالة للموارد داخل المؤسسة.",
    features: ["تهيئة Active Directory", "إدارة قواعد البيانات", "خدمات البريد الإلكتروني للشركات", "تكوين خوادم الملفات (File Servers)"]
  },
  {
    id: "software",
    icon: Code2,
    title: "حلول البرمجيات وتطوير الويب",
    desc: "تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تخدم أهداف عملك وتعزز تواجدك الرقمي بصورة احترافية.",
    features: ["تطوير واجهات المستخدم (Frontend/Backend)", "أنظمة تخطيط موارد المؤسسات (ERP)", "تطبيقات الهواتف الذكية", "استضافة المواقع وتأمينها"]
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "التدريب التقني والشهادات",
    desc: "دورات تدريبية متخصصة للأفراد والشركات في مجالات الشبكات (Cisco)، والأنظمة (Microsoft)، والأمن السيبراني، لرفع كفاءة الكوادر التقنية.",
    features: ["دورات Cisco (CCNA, CCNP)", "دورات Microsoft", "تدريب الأمن السيبراني", "ورش عمل مخصصة لفرق العمل"]
  },
  {
    id: "cctv",
    icon: MonitorPlay,
    title: "أنظمة كاميرات المراقبة (CCTV)",
    desc: "توريد وتركيب أنظمة مراقبة متقدمة تتيح لك متابعة منشأتك على مدار الساعة بوضوح عالي مع إمكانية الوصول عن بعد.",
    features: ["كاميرات IP عالية الدقة", "أنظمة تسجيل (NVR/DVR)", "المراقبة الذكية وتحليل الفيديو", "ربط الأنظمة بالشبكة المركزية"]
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "الحلول السحابية (Cloud Solutions)",
    desc: "مساعدة الشركات في الانتقال إلى الحوسبة السحابية لتخفيض التكاليف وزيادة المرونة وسهولة الوصول للبيانات من أي مكان.",
    features: ["Microsoft 365 / Google Workspace", "الاستضافة السحابية المدارة", "تخزين ومشاركة الملفات السحابية", "خدمات النسخ الاحتياطي السحابي"]
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-center"
          >
            خدمات تكنولوجيا المعلومات
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto text-center"
          >
            مجموعة متكاملة من الحلول التقنية المصممة لدفع عجلة الابتكار وتأمين مستقبل مؤسستك
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-bold text-sm text-foreground mb-3">مميزات الخدمة:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Network, Shield, Server, Code2, GraduationCap, MonitorPlay, Cloud, Headset } from "lucide-react";
import { useSite } from "@/context/site-context";

export default function Services() {
  const { language } = useSite();
  const isAr = language === "ar";

  const SERVICES = [
    {
      id: "network",
      icon: Network,
      title: isAr ? "البنية التحتية للشبكات" : "Network Infrastructure",
      desc: isAr ? "تصميم وتنفيذ وتكوين شبكات (LAN/WAN) متطورة تلبي احتياجات الشركات بمختلف أحجامها. نضمن استقرار وسرعة الاتصال مع توفير بنية تحتية قابلة للتوسع مستقبلاً." : "Design, implementation, and configuration of advanced networks (LAN/WAN) meeting needs of companies of all sizes. We ensure stability and speed.",
      features: isAr ? ["تصميم معماري للشبكات", "تمديد الكابلات الهيكلية", "تكوين أجهزة التوجيه والمحولات", "حلول الشبكات اللاسلكية"] : ["Network Architecture Design", "Structural Cabling", "Routers & Switches Config", "Wi-Fi Solutions"]
    },
    {
      id: "support",
      icon: Headset,
      title: isAr ? "الدعم الفني والصيانة" : "Tech Support & Maintenance",
      desc: isAr ? "عقود صيانة دورية ودعم فني مستمر لضمان استمرارية العمل دون انقطاع، مع حل سريع وفعال لجميع المشكلات التقنية." : "Periodic maintenance contracts and continuous tech support to ensure uninterrupted workflow, with fast and effective resolution.",
      features: isAr ? ["دعم فني عن بعد وفي الموقع", "صيانة وقائية دورية", "تحديث الأنظمة والبرامج", "إدارة الأصول التقنية"] : ["Remote & On-site Support", "Preventive Maintenance", "System Updates", "Tech Asset Management"]
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: isAr ? "حلول الأمن السيبراني" : "Cybersecurity Solutions",
      desc: isAr ? "حماية الأنظمة والبيانات والشبكات من الهجمات الرقمية. نقدم جدران حماية متقدمة وأنظمة كشف التسلل لضمان أقصى درجات الأمان." : "Protect systems, data, and networks from digital attacks. We provide advanced firewalls and intrusion detection.",
      features: isAr ? ["جدران الحماية (Firewalls)", "مكافحة الفيروسات المتقدمة", "تقييم الثغرات الأمنية", "النسخ الاحتياطي الآمن والتعافي من الكوارث"] : ["Firewalls", "Advanced Antivirus", "Vulnerability Assessment", "Secure Backup & Disaster Recovery"]
    },
    {
      id: "servers",
      icon: Server,
      title: isAr ? "إدارة الخوادم (Server Management)" : "Server Management",
      desc: isAr ? "تركيب وتهيئة وإدارة الخوادم (Windows Server, Linux) لضمان أداء سلس وتخزين آمن ومشاركة فعالة للموارد داخل المؤسسة." : "Installation, configuration, and management of servers (Windows, Linux) for smooth performance and secure storage.",
      features: isAr ? ["تهيئة Active Directory", "إدارة قواعد البيانات", "خدمات البريد الإلكتروني", "تكوين خوادم الملفات"] : ["Active Directory Setup", "Database Management", "Corporate Email Services", "File Servers Config"]
    },
    {
      id: "software",
      icon: Code2,
      title: isAr ? "حلول البرمجيات وتطوير الويب" : "Software & Web Dev",
      desc: isAr ? "تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تخدم أهداف عملك وتعزز تواجدك الرقمي بصورة احترافية." : "Design and development of custom websites and apps that serve your business goals and enhance digital presence.",
      features: isAr ? ["تطوير واجهات المستخدم (Frontend/Backend)", "أنظمة تخطيط موارد المؤسسات (ERP)", "تطبيقات الهواتف الذكية", "استضافة المواقع وتأمينها"] : ["Frontend/Backend Dev", "ERP Systems", "Mobile Apps", "Web Hosting & Security"]
    },
    {
      id: "training",
      icon: GraduationCap,
      title: isAr ? "التدريب التقني والشهادات" : "Tech Training & Certs",
      desc: isAr ? "دورات تدريبية متخصصة للأفراد والشركات في مجالات الشبكات، والأنظمة، والأمن السيبراني، لرفع كفاءة الكوادر التقنية." : "Specialized training courses for individuals and companies in networks, systems, and cybersecurity.",
      features: isAr ? ["دورات Cisco (CCNA, CCNP)", "دورات Microsoft", "تدريب الأمن السيبراني", "ورش عمل مخصصة لفرق العمل"] : ["Cisco Courses (CCNA, CCNP)", "Microsoft Courses", "Cybersecurity Training", "Custom Team Workshops"]
    },
    {
      id: "cctv",
      icon: MonitorPlay,
      title: isAr ? "أنظمة كاميرات المراقبة (CCTV)" : "CCTV Systems",
      desc: isAr ? "توريد وتركيب أنظمة مراقبة متقدمة تتيح لك متابعة منشأتك على مدار الساعة بوضوح عالي مع إمكانية الوصول عن بعد." : "Supply and install advanced surveillance systems allowing 24/7 monitoring of your facility with remote access.",
      features: isAr ? ["كاميرات IP عالية الدقة", "أنظمة تسجيل (NVR/DVR)", "المراقبة الذكية وتحليل الفيديو", "ربط الأنظمة بالشبكة المركزية"] : ["HD IP Cameras", "Recording Systems (NVR/DVR)", "Smart Monitoring & Analytics", "Central Network Integration"]
    },
    {
      id: "cloud",
      icon: Cloud,
      title: isAr ? "الحلول السحابية (Cloud Solutions)" : "Cloud Solutions",
      desc: isAr ? "مساعدة الشركات في الانتقال إلى الحوسبة السحابية لتخفيض التكاليف وزيادة المرونة وسهولة الوصول للبيانات من أي مكان." : "Assisting companies in moving to cloud computing to reduce costs, increase flexibility, and access data anywhere.",
      features: isAr ? ["Microsoft 365 / Google Workspace", "الاستضافة السحابية المدارة", "تخزين ومشاركة الملفات السحابية", "خدمات النسخ الاحتياطي السحابي"] : ["Microsoft 365 / Google Workspace", "Managed Cloud Hosting", "Cloud Storage & Sharing", "Cloud Backup Services"]
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <div className="gradient-bg py-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-center text-foreground glow"
          >
            {isAr ? "خدمات تكنولوجيا المعلومات" : "IT Services"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto text-center"
          >
            {isAr 
              ? "مجموعة متكاملة من الحلول التقنية المصممة لدفع عجلة الابتكار وتأمين مستقبل مؤسستك"
              : "A comprehensive suite of tech solutions designed to drive innovation and secure your organization's future"}
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
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow transition-all duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="bg-card/50 rounded-xl p-4 border border-border/50">
                    <h4 className="font-bold text-sm text-foreground mb-3">{isAr ? "مميزات الخدمة:" : "Features:"}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 glow" />
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

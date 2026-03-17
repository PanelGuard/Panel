import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  Network, Shield, Server, Code2, GraduationCap, MonitorPlay,
  Cloud, Headset, CheckCircle2, ArrowLeft, ArrowRight,
  ChevronLeft, Phone, Mail
} from "lucide-react";
import { useSite } from "@/context/site-context";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

type ServiceData = {
  id: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
  detailsAr: string[];
  detailsEn: string[];
  whyAr: string;
  whyEn: string;
};

const SERVICES_DATA: ServiceData[] = [
  {
    id: "network",
    icon: Network,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    titleAr: "البنية التحتية للشبكات",
    titleEn: "Network Infrastructure",
    descAr: "تصميم وتنفيذ وتكوين شبكات (LAN/WAN) متطورة تلبي احتياجات الشركات بمختلف أحجامها. نضمن استقرار وسرعة الاتصال مع توفير بنية تحتية قابلة للتوسع مستقبلاً.",
    descEn: "Design, implementation, and configuration of advanced networks (LAN/WAN) for companies of all sizes. We ensure stable, fast connectivity with scalable infrastructure.",
    featuresAr: ["تصميم معماري للشبكات", "تمديد الكابلات الهيكلية", "تكوين أجهزة التوجيه والمحولات", "حلول الشبكات اللاسلكية (Wi-Fi)", "مراقبة الشبكة في الوقت الفعلي", "توثيق البنية التحتية"],
    featuresEn: ["Network Architecture Design", "Structured Cabling", "Routers & Switches Configuration", "Wireless (Wi-Fi) Solutions", "Real-time Network Monitoring", "Infrastructure Documentation"],
    detailsAr: ["تحليل احتياجات الشبكة وتصميم المخطط المناسب", "توريد وتركيب جميع معدات الشبكة", "تكوين بروتوكولات الأمان والتشفير", "اختبار الأداء وضمان الجودة", "تدريب فريق العمل على إدارة الشبكة", "دعم فني مستمر بعد التسليم"],
    detailsEn: ["Analyze network needs and design appropriate topology", "Supply and install all network equipment", "Configure security protocols and encryption", "Performance testing and quality assurance", "Train staff on network management", "Ongoing technical support after handover"],
    whyAr: "شبكة قوية هي العمود الفقري لأي مؤسسة ناجحة. نضمن لك بنية تحتية تدوم لسنوات.",
    whyEn: "A robust network is the backbone of any successful organization. We guarantee infrastructure that lasts for years.",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-400/10",
    titleAr: "حلول الأمن السيبراني",
    titleEn: "Cybersecurity Solutions",
    descAr: "حماية الأنظمة والبيانات والشبكات من الهجمات الرقمية. نقدم جدران حماية متقدمة وأنظمة كشف التسلل لضمان أقصى درجات الأمان.",
    descEn: "Protecting systems, data, and networks from digital attacks. We provide advanced firewalls and intrusion detection systems for maximum security.",
    featuresAr: ["جدران الحماية (Firewalls) المتقدمة", "مكافحة الفيروسات والبرمجيات الخبيثة", "تقييم وتدقيق الثغرات الأمنية", "النسخ الاحتياطي والتعافي من الكوارث", "أنظمة كشف التسلل (IDS/IPS)", "تشفير البيانات الحساسة"],
    featuresEn: ["Advanced Firewalls", "Antivirus & Malware Protection", "Vulnerability Assessment & Auditing", "Backup & Disaster Recovery", "Intrusion Detection Systems (IDS/IPS)", "Sensitive Data Encryption"],
    detailsAr: ["تقييم شامل للوضع الأمني الحالي", "تصميم سياسة أمنية مخصصة للمؤسسة", "تطبيق طبقات الحماية المتعددة", "مراقبة مستمرة واكتشاف التهديدات", "الاستجابة السريعة للحوادث الأمنية", "تقارير دورية عن حالة الأمان"],
    detailsEn: ["Comprehensive assessment of current security posture", "Design a customized security policy for the organization", "Implement multiple layers of protection", "Continuous monitoring and threat detection", "Rapid response to security incidents", "Regular security status reports"],
    whyAr: "في عصر التحول الرقمي، الأمن السيبراني ليس خياراً بل ضرورة. نحمي أصولك الرقمية على مدار الساعة.",
    whyEn: "In the digital transformation era, cybersecurity is not optional — it's essential. We protect your digital assets around the clock.",
  },
  {
    id: "servers",
    icon: Server,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    titleAr: "إدارة الخوادم",
    titleEn: "Server Management",
    descAr: "تركيب وتهيئة وإدارة الخوادم (Windows Server, Linux) لضمان أداء سلس وتخزين آمن ومشاركة فعالة للموارد داخل المؤسسة.",
    descEn: "Installation, configuration, and management of servers (Windows Server, Linux) for smooth performance, secure storage, and effective resource sharing.",
    featuresAr: ["تهيئة Active Directory وإدارة المستخدمين", "إدارة قواعد البيانات (SQL, MySQL)", "خدمات البريد الإلكتروني المؤسسي", "تكوين خوادم الملفات والطباعة", "المراقبة والتنبيه الاستباقي", "صيانة دورية وتحديث الأنظمة"],
    featuresEn: ["Active Directory & User Management", "Database Management (SQL, MySQL)", "Corporate Email Services", "File & Print Server Configuration", "Proactive Monitoring & Alerts", "Regular Maintenance & System Updates"],
    detailsAr: ["اختيار المواصفات المثلى للخادم حسب الاحتياج", "تثبيت نظام التشغيل والبرمجيات اللازمة", "تهيئة الأذونات وسياسات الأمان", "ضبط الأداء وتحسين الموارد", "وضع خطة النسخ الاحتياطي", "توثيق جميع الإعدادات"],
    detailsEn: ["Select optimal server specifications per need", "Install operating system and required software", "Configure permissions and security policies", "Performance tuning and resource optimization", "Establish backup plan", "Document all configurations"],
    whyAr: "الخادم المُدار بكفاءة يعني أقصى إنتاجية لفريقك وحماية تامة لبيانات مؤسستك.",
    whyEn: "An efficiently managed server means maximum productivity for your team and complete protection for your organization's data.",
  },
  {
    id: "software",
    icon: Code2,
    color: "text-green-400",
    bg: "bg-green-400/10",
    titleAr: "حلول البرمجيات وتطوير الويب",
    titleEn: "Software & Web Development",
    descAr: "تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تخدم أهداف عملك وتعزز تواجدك الرقمي بصورة احترافية.",
    descEn: "Design and development of custom websites and applications that serve your business goals and professionally enhance your digital presence.",
    featuresAr: ["تطوير واجهات المستخدم (Frontend/Backend)", "أنظمة تخطيط موارد المؤسسات (ERP)", "تطبيقات الهواتف الذكية (iOS & Android)", "استضافة المواقع وتأمينها", "أنظمة إدارة المحتوى (CMS)", "تكاملات API والطرف الثالث"],
    featuresEn: ["Frontend/Backend Development", "ERP Systems", "Mobile Apps (iOS & Android)", "Web Hosting & Security", "Content Management Systems (CMS)", "API & Third-party Integrations"],
    detailsAr: ["تحليل متطلبات المشروع بالتفصيل", "تصميم واجهة مستخدم احترافية (UI/UX)", "تطوير بالمنهجيات الحديثة (Agile)", "اختبار شامل لجميع الوظائف", "إطلاق المنتج ودعم ما بعد التسليم", "صيانة وتطوير مستمر"],
    detailsEn: ["Detailed project requirements analysis", "Professional UI/UX design", "Modern methodology development (Agile)", "Comprehensive functionality testing", "Product launch and post-delivery support", "Continuous maintenance and development"],
    whyAr: "حضورك الرقمي هو واجهة عملك للعالم. نبنيه بأعلى المعايير التقنية ليخدم أهدافك.",
    whyEn: "Your digital presence is your business face to the world. We build it to the highest technical standards to serve your goals.",
  },
  {
    id: "training",
    icon: GraduationCap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    titleAr: "التدريب التقني والشهادات",
    titleEn: "Tech Training & Certifications",
    descAr: "دورات تدريبية متخصصة للأفراد والشركات في مجالات الشبكات والأنظمة والأمن السيبراني لرفع كفاءة الكوادر التقنية.",
    descEn: "Specialized training courses for individuals and companies in networks, systems, and cybersecurity to enhance technical staff competency.",
    featuresAr: ["دورات Cisco (CCNA, CCNP)", "دورات Microsoft (MCSA, MCSE)", "تدريب الأمن السيبراني المعتمد", "ورش عمل مخصصة لفرق العمل", "تدريب على أدوات الشبكات العملي", "متابعة التقدم وتقييم الأداء"],
    featuresEn: ["Cisco Courses (CCNA, CCNP)", "Microsoft Courses (MCSA, MCSE)", "Certified Cybersecurity Training", "Custom Team Workshops", "Hands-on Network Tools Training", "Progress Tracking & Performance Evaluation"],
    detailsAr: ["تقييم المستوى الحالي للمتدربين", "وضع خطة تدريبية مخصصة", "تدريب نظري وعملي متوازن", "تمارين على بيئات محاكاة حقيقية", "امتحانات محاكاة للشهادات الدولية", "شهادة حضور معتمدة من بانيل جارد"],
    detailsEn: ["Assess current trainee level", "Develop a customized training plan", "Balanced theoretical and practical training", "Exercises on real simulation environments", "Simulation exams for international certifications", "Attendance certificate accredited by Panel Guard"],
    whyAr: "الاستثمار في تدريب كوادرك البشرية هو الاستثمار الأذكى والأبقى لمؤسستك.",
    whyEn: "Investing in training your human resources is the smartest and most lasting investment for your organization.",
  },
  {
    id: "cctv",
    icon: MonitorPlay,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    titleAr: "أنظمة كاميرات المراقبة (CCTV)",
    titleEn: "CCTV Surveillance Systems",
    descAr: "توريد وتركيب أنظمة مراقبة متقدمة تتيح لك متابعة منشأتك على مدار الساعة بوضوح عالٍ مع إمكانية الوصول عن بعد.",
    descEn: "Supply and install advanced surveillance systems allowing 24/7 high-definition monitoring of your facility with remote access capability.",
    featuresAr: ["كاميرات IP عالية الدقة (Full HD/4K)", "أنظمة تسجيل (NVR/DVR) ذكية", "المراقبة الذكية وتحليل الفيديو بالذكاء الاصطناعي", "ربط الأنظمة بالشبكة المركزية", "إشعارات الحركة والتنبيهات الفورية", "عرض وتسجيل عن بعد عبر التطبيق"],
    featuresEn: ["HD IP Cameras (Full HD/4K)", "Smart Recording Systems (NVR/DVR)", "AI-powered Video Analytics", "Central Network Integration", "Motion Detection & Instant Alerts", "Remote Viewing & Recording via App"],
    detailsAr: ["مسح الموقع وتحديد أفضل أماكن التركيب", "اختيار الكاميرات المناسبة لكل بيئة", "تركيب احترافي وتمديد كابلات منظم", "تكوين نظام التسجيل والتنبيهات", "ربط النظام بالهواتف والأجهزة الذكية", "ضمان صيانة ودعم فني لمدة سنة"],
    detailsEn: ["Site survey and optimal installation point identification", "Select cameras suitable for each environment", "Professional installation and organized cabling", "Configure recording and alert system", "Connect system to smartphones and smart devices", "One-year warranty, maintenance, and technical support"],
    whyAr: "أمان منشأتك لا يحتمل المساومة. نوفر لك عيناً يقظة على كل زاوية على مدار الساعة.",
    whyEn: "The security of your facility cannot be compromised. We provide a vigilant eye on every corner, around the clock.",
  },
  {
    id: "cloud",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    titleAr: "الحلول السحابية",
    titleEn: "Cloud Solutions",
    descAr: "مساعدة الشركات في الانتقال إلى الحوسبة السحابية لتخفيض التكاليف وزيادة المرونة وسهولة الوصول للبيانات من أي مكان.",
    descEn: "Helping companies migrate to cloud computing to reduce costs, increase flexibility, and easily access data from anywhere.",
    featuresAr: ["Microsoft 365 / Google Workspace", "الاستضافة السحابية المدارة", "تخزين ومشاركة الملفات السحابية", "خدمات النسخ الاحتياطي السحابي", "Azure / AWS / Google Cloud إعداد", "إدارة وتحسين تكاليف السحابة"],
    featuresEn: ["Microsoft 365 / Google Workspace", "Managed Cloud Hosting", "Cloud File Storage & Sharing", "Cloud Backup Services", "Azure / AWS / Google Cloud Setup", "Cloud Cost Management & Optimization"],
    detailsAr: ["تقييم البنية التحتية الحالية ومتطلبات الهجرة", "وضع خطة هجرة آمنة إلى السحابة", "نقل البيانات والتطبيقات بأمان تام", "تكوين سياسات الوصول والأمان", "تدريب الفريق على البيئة السحابية الجديدة", "مراقبة مستمرة وتحسين الأداء"],
    detailsEn: ["Assess current infrastructure and migration requirements", "Develop a safe cloud migration plan", "Securely migrate data and applications", "Configure access and security policies", "Train the team on the new cloud environment", "Continuous monitoring and performance optimization"],
    whyAr: "السحابة تعني مرونة لا محدودة وتوفيراً في التكاليف مع ضمان استمرارية الأعمال في أي ظرف.",
    whyEn: "Cloud means unlimited flexibility and cost savings while ensuring business continuity under any circumstances.",
  },
  {
    id: "support",
    icon: Headset,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    titleAr: "الدعم الفني والصيانة",
    titleEn: "Tech Support & Maintenance",
    descAr: "عقود صيانة دورية ودعم فني مستمر لضمان استمرارية العمل دون انقطاع مع حل سريع وفعال لجميع المشكلات التقنية.",
    descEn: "Periodic maintenance contracts and continuous technical support to ensure uninterrupted workflow, with fast and effective resolution of all technical issues.",
    featuresAr: ["دعم فني عن بعد وفي الموقع", "صيانة وقائية دورية للأجهزة", "تحديث الأنظمة والبرامج", "إدارة الأصول التقنية", "نظام تذاكر الدعم الإلكتروني", "SLA مضمون لوقت الاستجابة"],
    featuresEn: ["Remote & On-site Technical Support", "Preventive Hardware Maintenance", "System & Software Updates", "Tech Asset Management", "Online Support Ticket System", "Guaranteed SLA Response Time"],
    detailsAr: ["فحص شامل لجميع الأجهزة والأنظمة", "تنظيف الأجهزة وفحص التبريد", "تحديث برامج مكافحة الفيروسات", "التحقق من سلامة النسخ الاحتياطية", "تقرير دوري بحالة الأنظمة", "اتفاقية مستوى الخدمة (SLA) واضحة"],
    detailsEn: ["Comprehensive inspection of all devices and systems", "Device cleaning and cooling inspection", "Update antivirus software", "Verify backup integrity", "Regular system status report", "Clear Service Level Agreement (SLA)"],
    whyAr: "التوقف التقني يعني خسائر مباشرة. فريقنا جاهز للتدخل الفوري وإعادة كل شيء للعمل بأسرع وقت.",
    whyEn: "Technical downtime means direct losses. Our team is ready for immediate intervention to restore everything to working order as quickly as possible.",
  },
];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useSite();
  const isAr = language === "ar";

  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-6">
        <p className="text-2xl font-bold">{isAr ? "الخدمة غير موجودة" : "Service not found"}</p>
        <Link href="/services" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors">
          {isAr ? "عودة للخدمات" : "Back to Services"}
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const title = isAr ? service.titleAr : service.titleEn;
  const desc = isAr ? service.descAr : service.descEn;
  const features = isAr ? service.featuresAr : service.featuresEn;
  const details = isAr ? service.detailsAr : service.detailsEn;
  const why = isAr ? service.whyAr : service.whyEn;

  return (
    <div className="bg-background min-h-screen overflow-hidden">

      {/* Hero */}
      <section className="relative py-24 gradient-bg overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/40 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">{isAr ? "الرئيسية" : "Home"}</Link>
            <ChevronLeft className="w-3 h-3 opacity-50" />
            <Link href="/services" className="hover:text-primary transition-colors">{isAr ? "الخدمات" : "Services"}</Link>
            <ChevronLeft className="w-3 h-3 opacity-50" />
            <span className="text-foreground/90 font-medium">{title}</span>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-24 h-24 rounded-2xl ${service.bg} flex items-center justify-center shrink-0 border border-white/10`}
              style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            >
              <Icon className={`w-12 h-12 ${service.color}`} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {title}
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-foreground/70 max-w-2xl leading-relaxed mb-6">
                {desc}
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/25 flex items-center gap-2 glow"
                >
                  {isAr ? "طلب هذه الخدمة" : "Request This Service"}
                  {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 glass text-foreground rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  {isAr ? "كل الخدمات" : "All Services"}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features + Process */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Features */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {isAr ? "مميزات الخدمة" : "Service Features"}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-3 glass rounded-xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground/80 text-sm leading-relaxed">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How we deliver */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {isAr ? "كيف نقدم الخدمة؟" : "How We Deliver"}
            </motion.h2>
            <div className="flex flex-col gap-4">
              {details.map((d, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed pt-1">{d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why choose us for this service */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mx-auto mb-6`}>
                <Icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {why}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/30 glow flex items-center gap-2"
                >
                  {isAr ? "تواصل معنا الآن" : "Contact Us Now"}
                  {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                <a
                  href="tel:+201002961539"
                  className="px-8 py-4 glass text-foreground rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  {isAr ? "اتصل بنا" : "Call Us"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {isAr ? "خدمات أخرى قد تهمك" : "Other Services You Might Like"}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {SERVICES_DATA.filter(s => s.id !== id).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 hover:border-primary/40 hover:text-primary transition-all duration-300 text-sm text-foreground/80"
              >
                <s.icon className={`w-4 h-4 ${s.color}`} />
                {isAr ? s.titleAr : s.titleEn}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}

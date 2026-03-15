import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, Users, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/about-pattern.png`} 
            alt="Pattern" 
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-primary/5 rounded-3xl mx-auto flex items-center justify-center mb-6"
          >
            <ShieldCheck className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            عن <span className="text-primary">بانيل جارد</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            بانيل جارد لحلول تكنولوجيا المعلومات والتدريب هي شركة رائدة في تقديم حلول تقنية متكاملة تواكب أحدث التطورات العالمية لدعم مسيرة التحول الرقمي لمختلف قطاعات الأعمال.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 text-white/10">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl font-display font-bold mb-4">رسالتنا</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  توفير بنية تحتية تكنولوجية آمنة وذكية تساهم في رفع كفاءة المؤسسات وتحسين أداء أعمالها، مع التزامنا بتقديم خدمات استشارية وتدريبية تصقل المهارات التقنية للكوادر البشرية.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary text-secondary-foreground p-10 rounded-3xl shadow-xl relative overflow-hidden border border-border"
            >
              <div className="absolute -left-10 -bottom-10 text-primary/5">
                <Lightbulb className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <Lightbulb className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl font-display font-bold mb-4 text-primary">رؤيتنا</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  أن نكون الشريك التقني الأول والخيار المفضل للشركات والمؤسسات في المنطقة، من خلال تقديم حلول تكنولوجيا معلومات مبتكرة تتسم بالموثوقية والجودة الفائقة.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "الاحترافية الجودة", desc: "نلتزم بأعلى معايير الجودة في تنفيذ جميع مشاريعنا." },
              { title: "الابتكار", desc: "نواكب أحدث التقنيات لنقدم حلولاً غير تقليدية." },
              { title: "الموثوقية", desc: "نبني ثقة متبادلة مع عملائنا من خلال الشفافية والالتزام." },
              { title: "العمل الجماعي", desc: "نؤمن بأن النجاح يتحقق من خلال فريق عمل متعاون ومتكامل." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-black/5 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Approach */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                فريقنا هو سر نجاحنا
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                تضم بانيل جارد نخبة من المهندسين والخبراء المعتمدين من كبرى الشركات التقنية العالمية مثل Cisco و Microsoft. يتميز فريقنا بالشغف بالتكنولوجيا والقدرة على حل أعقد المشكلات التقنية.
              </p>
              <ul className="space-y-4">
                {["خبرات متراكمة في مجالات متنوعة", "شهادات دولية معتمدة", "التدريب المستمر لمواكبة التطورات", "فهم عميق لاحتياجات السوق المحلي"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                      <Users className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* professional IT engineers working on servers */}
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

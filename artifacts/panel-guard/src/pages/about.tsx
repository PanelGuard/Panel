import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck, Users, CheckCircle } from "lucide-react";
import { useSite } from "@/context/site-context";

export default function About() {
  const { language } = useSite();
  const isAr = language === "ar";

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden gradient-bg">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/about-pattern.png`} 
            alt="Pattern" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-primary/20 rounded-3xl mx-auto flex items-center justify-center mb-6 glow"
          >
            <ShieldCheck className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            {isAr ? "عن " : "About "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow">
              {isAr ? "بانيل جارد" : "Panel Guard"}
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {isAr 
              ? "بانيل جارد لحلول تكنولوجيا المعلومات والتدريب هي شركة رائدة في تقديم حلول تقنية متكاملة تواكب أحدث التطورات العالمية لدعم مسيرة التحول الرقمي لمختلف قطاعات الأعمال."
              : "Panel Guard for IT Solutions and Training is a leading company providing integrated tech solutions keeping pace with global developments to support digital transformation."}
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
              className="bg-primary/10 border border-primary/20 p-10 rounded-3xl relative overflow-hidden glass group hover:border-primary/50 transition-colors"
            >
              <div className="absolute -right-10 -top-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <Target className="w-12 h-12 text-accent mb-6 glow" />
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">{isAr ? "رسالتنا" : "Our Mission"}</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {isAr 
                    ? "توفير بنية تحتية تكنولوجية آمنة وذكية تساهم في رفع كفاءة المؤسسات وتحسين أداء أعمالها، مع التزامنا بتقديم خدمات استشارية وتدريبية تصقل المهارات التقنية للكوادر البشرية."
                    : "Provide secure and smart tech infrastructure that raises enterprise efficiency, while committing to consulting and training services that polish human technical skills."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent/10 border border-accent/20 p-10 rounded-3xl relative overflow-hidden glass group hover:border-accent/50 transition-colors"
            >
              <div className="absolute -left-10 -bottom-10 text-accent/10 group-hover:text-accent/20 transition-colors">
                <Lightbulb className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <Lightbulb className="w-12 h-12 text-primary mb-6 glow" />
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {isAr 
                    ? "أن نكون الشريك التقني الأول والخيار المفضل للشركات والمؤسسات في المنطقة، من خلال تقديم حلول تكنولوجيا معلومات مبتكرة تتسم بالموثوقية والجودة الفائقة."
                    : "To be the premier tech partner and preferred choice for companies in the region by delivering innovative, highly reliable, and top-quality IT solutions."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {isAr ? "قيمنا الأساسية" : "Core Values"}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full glow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: isAr ? "الاحترافية والجودة" : "Professionalism & Quality", desc: isAr ? "نلتزم بأعلى معايير الجودة في تنفيذ جميع مشاريعنا." : "We commit to the highest quality standards." },
              { title: isAr ? "الابتكار" : "Innovation", desc: isAr ? "نواكب أحدث التقنيات لنقدم حلولاً غير تقليدية." : "We keep up with the latest tech for unconventional solutions." },
              { title: isAr ? "الموثوقية" : "Reliability", desc: isAr ? "نبني ثقة متبادلة مع عملائنا من خلال الشفافية والالتزام." : "We build mutual trust through transparency." },
              { title: isAr ? "العمل الجماعي" : "Teamwork", desc: isAr ? "نؤمن بأن النجاح يتحقق من خلال فريق عمل متعاون ومتكامل." : "We believe success comes through a collaborative team." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-primary/30"
              >
                <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 glow">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
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
                {isAr ? "فريقنا هو سر نجاحنا" : "Our Team is Our Success"}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {isAr 
                  ? "تضم بانيل جارد نخبة من المهندسين والخبراء المعتمدين من كبرى الشركات التقنية العالمية مثل Cisco و Microsoft. يتميز فريقنا بالشغف بالتكنولوجيا والقدرة على حل أعقد المشكلات التقنية."
                  : "Panel Guard includes elite engineers and experts certified by major global tech companies like Cisco and Microsoft. Our team is passionate about tech."}
              </p>
              <ul className="space-y-4">
                {(isAr ? [
                  "خبرات متراكمة في مجالات متنوعة", 
                  "شهادات دولية معتمدة", 
                  "التدريب المستمر لمواكبة التطورات", 
                  "فهم عميق لاحتياجات السوق المحلي"
                ] : [
                  "Accumulated expertise in diverse fields",
                  "Internationally recognized certifications",
                  "Continuous training to stay updated",
                  "Deep understanding of local market needs"
                ]).map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 glow">
                      <Users className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl opacity-90 border border-white/10"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

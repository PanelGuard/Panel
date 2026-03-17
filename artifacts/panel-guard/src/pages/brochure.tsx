import { useEffect } from "react";
import { useSite } from "@/context/site-context";
import { Link } from "wouter";
import { Download, Printer, ArrowLeft } from "lucide-react";

export default function Brochure() {
  const { language } = useSite();
  const isAr = language === "ar";

  useEffect(() => {
    document.title = isAr ? "بروشور بانيل جارد" : "Panel Guard Brochure";
  }, [isAr]);

  const handlePrint = () => window.print();

  const SERVICES = [
    {
      ar: "البنية التحتية للشبكات",
      en: "Network Infrastructure",
      featAr: ["تصميم معماري للشبكات", "تمديد الكابلات الهيكلية", "تكوين أجهزة التوجيه والمحولات", "حلول الشبكات اللاسلكية"],
      featEn: ["Network Architecture Design", "Structured Cabling", "Routers & Switches Configuration", "Wireless Solutions"],
    },
    {
      ar: "حلول الأمن السيبراني",
      en: "Cybersecurity Solutions",
      featAr: ["جدران الحماية المتقدمة", "مكافحة الفيروسات والبرمجيات الخبيثة", "تقييم وتدقيق الثغرات", "النسخ الاحتياطي والتعافي من الكوارث"],
      featEn: ["Advanced Firewalls", "Antivirus & Malware Protection", "Vulnerability Assessment", "Backup & Disaster Recovery"],
    },
    {
      ar: "إدارة الخوادم",
      en: "Server Management",
      featAr: ["تهيئة Active Directory", "إدارة قواعد البيانات", "خدمات البريد الإلكتروني", "تكوين خوادم الملفات"],
      featEn: ["Active Directory Setup", "Database Management", "Corporate Email Services", "File Server Configuration"],
    },
    {
      ar: "حلول البرمجيات وتطوير الويب",
      en: "Software & Web Development",
      featAr: ["تطوير المواقع الإلكترونية", "أنظمة ERP المخصصة", "تطبيقات الهواتف الذكية", "استضافة وتأمين المواقع"],
      featEn: ["Website Development", "Custom ERP Systems", "Mobile Applications", "Web Hosting & Security"],
    },
    {
      ar: "التدريب التقني والشهادات",
      en: "Tech Training & Certifications",
      featAr: ["دورات Cisco (CCNA, CCNP)", "دورات Microsoft", "تدريب الأمن السيبراني", "ورش عمل مخصصة"],
      featEn: ["Cisco Courses (CCNA, CCNP)", "Microsoft Courses", "Cybersecurity Training", "Custom Workshops"],
    },
    {
      ar: "أنظمة كاميرات المراقبة (CCTV)",
      en: "CCTV Surveillance Systems",
      featAr: ["كاميرات IP عالية الدقة", "أنظمة تسجيل ذكية", "مراقبة عن بعد", "تحليل الفيديو الذكي"],
      featEn: ["HD IP Cameras", "Smart Recording Systems", "Remote Monitoring", "AI Video Analytics"],
    },
    {
      ar: "الحلول السحابية",
      en: "Cloud Solutions",
      featAr: ["Microsoft 365 / Google Workspace", "الاستضافة السحابية المدارة", "النسخ الاحتياطي السحابي", "إدارة التكاليف السحابية"],
      featEn: ["Microsoft 365 / Google Workspace", "Managed Cloud Hosting", "Cloud Backup Services", "Cloud Cost Management"],
    },
    {
      ar: "الدعم الفني والصيانة",
      en: "Tech Support & Maintenance",
      featAr: ["دعم فني عن بعد وفي الموقع", "صيانة وقائية دورية", "تحديث الأنظمة والبرامج", "إدارة الأصول التقنية"],
      featEn: ["Remote & On-site Support", "Preventive Maintenance", "System & Software Updates", "Tech Asset Management"],
    },
    {
      ar: "تصميم المواقع الإلكترونية",
      en: "Web Design",
      featAr: ["تصميم احترافي متجاوب", "متاجر إلكترونية متكاملة", "تحسين محركات البحث SEO", "لوحات تحكم مخصصة"],
      featEn: ["Professional Responsive Design", "Full E-Commerce Stores", "SEO Optimization", "Custom Dashboards"],
    },
  ];

  return (
    <>
      {/* Print/Download Controls — hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border flex items-center justify-between px-6 py-3 gap-4">
        <Link href="/" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          {isAr ? "عودة للموقع" : "Back to Site"}
        </Link>
        <p className="text-sm text-foreground/60 hidden md:block">
          {isAr ? "اضغط على 'تحميل PDF' لحفظ الملف" : "Click 'Download PDF' to save the file"}
        </p>
        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" />
            {isAr ? "تحميل PDF" : "Download PDF"}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm hover:bg-accent/10 transition-colors"
          >
            <Printer className="w-4 h-4" />
            {isAr ? "طباعة" : "Print"}
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div
        className="pdf-document"
        dir={isAr ? "rtl" : "ltr"}
        style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
      >

        {/* ── PAGE 1: Cover ── */}
        <div className="pdf-page cover-page">
          <div className="cover-bg" />
          <div className="cover-content">
            <div className="cover-logo-wrap">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Panel Guard Logo" className="cover-logo" />
            </div>
            <h1 className="cover-title">{isAr ? "بانيل جارد" : "Panel Guard"}</h1>
            <p className="cover-subtitle">{isAr ? "لحلول تكنولوجيا المعلومات والتدريب" : "IT Solutions & Training"}</p>
            <div className="cover-divider" />
            <p className="cover-tagline">
              {isAr
                ? "نحمي وندير مستقبلك الرقمي"
                : "Securing & Managing Your Digital Future"}
            </p>
            <div className="cover-stats">
              <div className="stat-item"><span className="stat-val">+150</span><span className="stat-lbl">{isAr ? "عميل سعيد" : "Happy Clients"}</span></div>
              <div className="stat-sep" />
              <div className="stat-item"><span className="stat-val">+300</span><span className="stat-lbl">{isAr ? "مشروع منجز" : "Projects Done"}</span></div>
              <div className="stat-sep" />
              <div className="stat-item"><span className="stat-val">+10</span><span className="stat-lbl">{isAr ? "سنوات خبرة" : "Years Exp."}</span></div>
              <div className="stat-sep" />
              <div className="stat-item"><span className="stat-val">24/7</span><span className="stat-lbl">{isAr ? "دعم فني" : "Support"}</span></div>
            </div>
          </div>
        </div>

        {/* ── PAGE 2: About ── */}
        <div className="pdf-page">
          <div className="page-header">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" className="header-logo" />
            <span className="header-name">{isAr ? "بانيل جارد" : "Panel Guard"}</span>
          </div>

          <h2 className="section-title">{isAr ? "من نحن" : "About Us"}</h2>
          <div className="about-grid">
            <div className="about-block">
              <h3 className="about-sub">{isAr ? "نبذة عن الشركة" : "Company Overview"}</h3>
              <p className="body-text">
                {isAr
                  ? "بانيل جارد هي شركة متخصصة في حلول تكنولوجيا المعلومات والتدريب التقني، تأسست بهدف تقديم أعلى مستويات الجودة والاحترافية في تصميم وتنفيذ البنية التحتية الرقمية للشركات والمؤسسات في مصر ومنطقة الشرق الأوسط."
                  : "Panel Guard is a specialized company in IT solutions and technical training, founded with the goal of delivering the highest standards of quality and professionalism in designing and implementing digital infrastructure for companies in Egypt and the Middle East."}
              </p>
              <p className="body-text">
                {isAr
                  ? "نؤمن بأن التكنولوجيا هي المحرك الأساسي للنمو في عصرنا الحالي، لذا نسعى دائماً لتزويد عملائنا بأحدث الحلول التقنية التي تضمن أمان وكفاءة بيئة عملهم الرقمية."
                  : "We believe technology is the key driver of growth in our current era, so we always strive to provide our clients with the latest technical solutions that ensure the security and efficiency of their digital work environment."}
              </p>
            </div>
            <div className="about-block">
              <h3 className="about-sub">{isAr ? "رؤيتنا ورسالتنا" : "Vision & Mission"}</h3>
              <div className="vision-box">
                <span className="vision-label">{isAr ? "رؤيتنا" : "Vision"}</span>
                <p className="body-text">
                  {isAr
                    ? "أن نكون الشريك التقني الأول والأكثر ثقة لكل مؤسسة تسعى للتميز الرقمي في المنطقة."
                    : "To be the first and most trusted technology partner for every institution seeking digital excellence in the region."}
                </p>
              </div>
              <div className="vision-box">
                <span className="vision-label">{isAr ? "رسالتنا" : "Mission"}</span>
                <p className="body-text">
                  {isAr
                    ? "تقديم حلول تقنية متكاملة وموثوقة تمكّن عملاءنا من تحقيق أهدافهم بكفاءة وأمان."
                    : "Delivering comprehensive and reliable technical solutions that enable our clients to achieve their goals with efficiency and security."}
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title mt-section">{isAr ? "لماذا تختار بانيل جارد؟" : "Why Choose Panel Guard?"}</h2>
          <div className="why-grid">
            {(isAr
              ? ["فريق متخصص ومعتمد دولياً", "حلول مخصصة لكل عميل", "دعم فني مستمر 24/7", "أسعار تنافسية وجودة لا مثيل لها", "خبرة أكثر من 10 سنوات", "ضمان رضا العملاء"]
              : ["Specialized & internationally certified team", "Customized solutions for each client", "Continuous 24/7 support", "Competitive prices & unmatched quality", "10+ years of experience", "Customer satisfaction guarantee"]
            ).map((item, i) => (
              <div key={i} className="why-item">
                <span className="why-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="page-footer">
            <span>info@panelguardits.com</span>
            <span>|</span>
            <span dir="ltr">+20 100 296 1539</span>
            <span>|</span>
            <span>{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span>
          </div>
        </div>

        {/* ── PAGE 3+: Services ── */}
        {[0, 1, 2].map((pageIdx) => {
          const chunk = SERVICES.slice(pageIdx * 3, pageIdx * 3 + 3);
          if (chunk.length === 0) return null;
          return (
            <div key={pageIdx} className="pdf-page">
              <div className="page-header">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" className="header-logo" />
                <span className="header-name">{isAr ? "بانيل جارد" : "Panel Guard"}</span>
              </div>

              {pageIdx === 0 && (
                <h2 className="section-title">{isAr ? "خدماتنا" : "Our Services"}</h2>
              )}

              <div className="services-grid">
                {chunk.map((svc, i) => (
                  <div key={i} className="service-card">
                    <h3 className="svc-title">{isAr ? svc.ar : svc.en}</h3>
                    <ul className="svc-list">
                      {(isAr ? svc.featAr : svc.featEn).map((f, j) => (
                        <li key={j} className="svc-item">
                          <span className="svc-dot">●</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="page-footer">
                <span>info@panelguardits.com</span>
                <span>|</span>
                <span dir="ltr">+20 100 296 1539</span>
                <span>|</span>
                <span>{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span>
              </div>
            </div>
          );
        })}

        {/* ── PAGE: Contact ── */}
        <div className="pdf-page">
          <div className="page-header">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" className="header-logo" />
            <span className="header-name">{isAr ? "بانيل جارد" : "Panel Guard"}</span>
          </div>

          <h2 className="section-title">{isAr ? "تواصل معنا" : "Contact Us"}</h2>

          <div className="contact-grid">
            <div className="contact-block">
              <h3 className="contact-sub">{isAr ? "معلومات التواصل" : "Contact Information"}</h3>
              <div className="contact-item"><span className="contact-icon">✉</span><span>info@panelguardits.com</span></div>
              <div className="contact-item"><span className="contact-icon">📞</span><span dir="ltr">+20 100 296 1539</span></div>
              <div className="contact-item"><span className="contact-icon">📞</span><span dir="ltr">+20 155 551 0411</span></div>
              <div className="contact-item"><span className="contact-icon">📞</span><span dir="ltr">+966 535 684 330</span></div>
              <div className="contact-item"><span className="contact-icon">📍</span><span>{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span></div>
            </div>
            <div className="contact-block">
              <h3 className="contact-sub">{isAr ? "ساعات العمل" : "Working Hours"}</h3>
              <div className="hours-item">
                <span className="hours-day">{isAr ? "السبت — الخميس" : "Sat — Thu"}</span>
                <span className="hours-time">{isAr ? "9:00 ص — 6:00 م" : "9:00 AM — 6:00 PM"}</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">{isAr ? "الجمعة" : "Friday"}</span>
                <span className="hours-time">{isAr ? "مغلق" : "Closed"}</span>
              </div>
              <div className="mt-4">
                <h3 className="contact-sub">{isAr ? "الدعم الفني" : "Technical Support"}</h3>
                <p className="body-text">{isAr ? "متاح على مدار الساعة طوال أيام الأسبوع" : "Available 24/7, all days of the week"}</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="cta-box">
            <p className="cta-text">
              {isAr
                ? "هل أنت مستعد للارتقاء ببنيتك التقنية؟ تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك."
                : "Ready to upgrade your technical infrastructure? Contact us today for a free consultation and a custom price quote for your project."}
            </p>
            <div className="cta-contact">
              <span className="cta-email">info@panelguardits.com</span>
              <span className="cta-phone" dir="ltr">+20 100 296 1539</span>
            </div>
          </div>

          <div className="page-footer">
            <span>info@panelguardits.com</span>
            <span>|</span>
            <span dir="ltr">+20 100 296 1539</span>
            <span>|</span>
            <span>{isAr ? "محافظة الشرقية، مصر" : "Sharqia Governorate, Egypt"}</span>
          </div>
        </div>

      </div>

      {/* Print-only styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;600;700;800&display=swap');

        .pdf-document {
          background: #fff;
          color: #1a1a2e;
        }

        .pdf-page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto 20px;
          padding: 20mm 18mm 18mm;
          background: #fff;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }

        /* Cover Page */
        .cover-page {
          background: linear-gradient(135deg, #0f1629 0%, #1a2550 50%, #0d1117 100%) !important;
          color: #fff;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30mm 18mm !important;
        }
        .cover-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 30%, rgba(59,130,246,0.2) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 70%, rgba(251,191,36,0.1) 0%, transparent 60%);
        }
        .cover-content { position: relative; z-index: 1; width: 100%; }
        .cover-logo-wrap {
          width: 130px; height: 130px; border-radius: 50%;
          background: #fff; margin: 0 auto 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 30px rgba(59,130,246,0.5);
        }
        .cover-logo { width: 115px; height: 115px; object-fit: contain; }
        .cover-title { font-size: 42pt; font-weight: 800; color: #fff; margin: 0 0 8px; }
        .cover-subtitle { font-size: 16pt; color: rgba(255,255,255,0.75); margin: 0 0 20px; font-weight: 600; }
        .cover-divider { width: 80px; height: 3px; background: linear-gradient(90deg, #3b82f6, #f59e0b); margin: 0 auto 20px; border-radius: 2px; }
        .cover-tagline { font-size: 20pt; font-weight: 700; color: #3b82f6; margin: 0 0 40px; }
        .cover-stats { display: flex; justify-content: center; align-items: center; gap: 24px; flex-wrap: wrap; }
        .stat-item { text-align: center; }
        .stat-val { display: block; font-size: 26pt; font-weight: 800; color: #f59e0b; }
        .stat-lbl { display: block; font-size: 9pt; color: rgba(255,255,255,0.65); margin-top: 4px; }
        .stat-sep { width: 1px; height: 40px; background: rgba(255,255,255,0.2); }

        /* Header */
        .page-header {
          display: flex; align-items: center; gap: 10px;
          padding-bottom: 10px;
          border-bottom: 2px solid #3b82f6;
          margin-bottom: 18px;
        }
        .header-logo { width: 36px; height: 36px; object-fit: contain; }
        .header-name { font-size: 13pt; font-weight: 700; color: #1e3a8a; }

        /* Footer */
        .page-footer {
          margin-top: auto; padding-top: 12px;
          border-top: 1px solid #e2e8f0;
          display: flex; gap: 10px; align-items: center;
          font-size: 7.5pt; color: #64748b; flex-wrap: wrap;
          justify-content: center;
        }

        /* Section Title */
        .section-title {
          font-size: 18pt; font-weight: 800; color: #1e3a8a;
          margin: 0 0 16px;
          padding-bottom: 6px;
          border-bottom: 2px solid #dbeafe;
        }
        .mt-section { margin-top: 22px; }

        /* About */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 6px; }
        .about-block {}
        .about-sub { font-size: 12pt; font-weight: 700; color: #1e40af; margin: 0 0 8px; }
        .body-text { font-size: 9pt; line-height: 1.7; color: #374151; margin: 0 0 8px; }
        .vision-box { background: #f0f7ff; border-radius: 8px; padding: 10px 12px; margin-bottom: 8px; border-right: 3px solid #3b82f6; }
        .vision-label { font-size: 8pt; font-weight: 700; color: #3b82f6; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }

        /* Why */
        .why-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
        .why-item { display: flex; align-items: flex-start; gap: 6px; font-size: 8.5pt; color: #374151; background: #f8fafc; border-radius: 6px; padding: 8px 10px; }
        .why-check { color: #16a34a; font-weight: 700; font-size: 10pt; line-height: 1; flex-shrink: 0; }

        /* Services */
        .services-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; flex: 1; }
        .service-card { background: #f8fafc; border-radius: 10px; padding: 14px; border: 1px solid #e2e8f0; border-top: 3px solid #3b82f6; }
        .svc-title { font-size: 10pt; font-weight: 700; color: #1e3a8a; margin: 0 0 10px; }
        .svc-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 5px; }
        .svc-item { display: flex; align-items: flex-start; gap: 6px; font-size: 8pt; color: #4b5563; }
        .svc-dot { color: #3b82f6; font-size: 6pt; margin-top: 2px; flex-shrink: 0; }

        /* Contact */
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 20px; }
        .contact-block {}
        .contact-sub { font-size: 12pt; font-weight: 700; color: #1e40af; margin: 0 0 12px; }
        .contact-item { display: flex; align-items: flex-start; gap: 8px; font-size: 9pt; color: #374151; margin-bottom: 8px; }
        .contact-icon { font-size: 10pt; flex-shrink: 0; }
        .hours-item { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed #e2e8f0; font-size: 9pt; }
        .hours-day { font-weight: 600; color: #374151; }
        .hours-time { color: #6b7280; }

        /* CTA */
        .cta-box {
          background: linear-gradient(135deg, #1e3a8a, #1e40af);
          border-radius: 12px; padding: 20px 24px; color: #fff; text-align: center;
          margin-top: auto; margin-bottom: 16px;
        }
        .cta-text { font-size: 10pt; line-height: 1.7; color: rgba(255,255,255,0.9); margin: 0 0 12px; }
        .cta-contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .cta-email { font-size: 9pt; color: #93c5fd; }
        .cta-phone { font-size: 11pt; font-weight: 700; color: #fbbf24; }

        /* ── Print Styles ── */
        @media print {
          @page { size: A4; margin: 0; }
          body { margin: 0 !important; }
          .no-print { display: none !important; }
          .pdf-page {
            width: 210mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always;
            padding: 18mm 16mm 16mm !important;
          }
          .pdf-document { background: #fff !important; }
          .cover-page { background: linear-gradient(135deg, #0f1629 0%, #1a2550 50%, #0d1117 100%) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .service-card { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .vision-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .cta-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .why-item { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }

        /* Screen preview spacing */
        @media screen {
          .pdf-document { padding: 72px 24px 40px; background: #f1f5f9; min-height: 100vh; }
        }
      `}</style>
    </>
  );
}

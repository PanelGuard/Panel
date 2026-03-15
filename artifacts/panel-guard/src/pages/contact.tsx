import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactInput, useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { useSite } from "@/context/site-context";

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const { language } = useSite();
  const isAr = language === "ar";
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await submitContact.mutateAsync(data);
      toast({
        title: isAr ? "عملية ناجحة" : "Success",
        description: res.message,
      });
      form.reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: isAr ? "خطأ" : "Error",
        description: error.message || (isAr ? "حدث خطأ غير متوقع" : "Unexpected error occurred"),
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="gradient-bg py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground glow">
            {isAr ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {isAr 
              ? "نحن هنا للإجابة على استفساراتك وتقديم الاستشارة التقنية التي تحتاجها مؤسستك."
              : "We are here to answer your inquiries and provide the technical consulting your organization needs."}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-2xl shadow-lg border border-white/10"
            >
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 glow">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{isAr ? "العنوان" : "Address"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {isAr ? "محافظة الشرقية،" : "Sharqia Governorate,"}<br/>
                {isAr ? "جمهورية مصر العربية" : "Egypt"}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-2xl shadow-lg border border-white/10"
            >
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 glow">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{isAr ? "الهاتف" : "Phone"}</h3>
              <div className="flex flex-col space-y-2 text-muted-foreground" dir="ltr">
                <a href="tel:+201002961539" className={`hover:text-primary transition-colors ${isAr ? 'text-right' : 'text-left'}`}>+20 100 296 1539</a>
                <a href="tel:+201555510411" className={`hover:text-primary transition-colors ${isAr ? 'text-right' : 'text-left'}`}>+20 155 551 0411</a>
                <a href="tel:+966535684330" className={`hover:text-primary transition-colors ${isAr ? 'text-right' : 'text-left'}`}>+966 535 684 330</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl shadow-lg border border-white/10"
            >
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 glow">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{isAr ? "البريد الإلكتروني" : "Email"}</h3>
              <a href="mailto:info@panelguardits.com" className="text-muted-foreground hover:text-primary transition-colors block" dir="ltr" style={{textAlign: isAr ? 'right' : 'left'}}>
                info@panelguardits.com
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

            <h2 className="text-3xl font-display font-bold mb-8 text-foreground relative z-10">
              {isAr ? "أرسل لنا رسالة" : "Send Us a Message"}
            </h2>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">{isAr ? "الاسم الكامل" : "Full Name"}</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                    placeholder={isAr ? "أدخل اسمك" : "Enter your name"}
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">{isAr ? "البريد الإلكتروني" : "Email Address"}</label>
                  <input 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                    placeholder="example@domain.com"
                    dir="ltr"
                  />
                  {form.formState.errors.email && (
                    <p className={`text-destructive text-sm mt-1 ${isAr ? 'text-right' : 'text-left'}`}>{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">{isAr ? "رقم الهاتف" : "Phone Number"}</label>
                  <input 
                    {...form.register("phone")}
                    className={`w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground ${isAr ? 'text-right' : 'text-left'}`}
                    placeholder="+20 1xxxxxxxxx"
                    dir="ltr"
                  />
                  {form.formState.errors.phone && (
                    <p className={`text-destructive text-sm mt-1 ${isAr ? 'text-right' : 'text-left'}`}>{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">{isAr ? "الموضوع" : "Subject"}</label>
                  <input 
                    {...form.register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                    placeholder={isAr ? "سبب التواصل" : "Reason for contact"}
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/90">{isAr ? "الرسالة" : "Message"}</label>
                <textarea 
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground"
                  placeholder={isAr ? "اكتب رسالتك بالتفصيل هنا..." : "Write your message in detail here..."}
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitContact.isPending}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 glow"
              >
                {submitContact.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {isAr ? "جاري الإرسال..." : "Sending..."}
                  </>
                ) : (
                  <>
                    {isAr ? "إرسال الرسالة" : "Send Message"}
                    <Send className={`w-5 h-5 ${isAr ? 'rtl:-scale-x-100' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

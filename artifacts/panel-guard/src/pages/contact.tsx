import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactInput, useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  
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
        title: "عملية ناجحة",
        description: res.message,
      });
      form.reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: error.message || "حدث خطأ غير متوقع",
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك وتقديم الاستشارة التقنية التي تحتاجها مؤسستك.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">العنوان</h3>
              <p className="text-muted-foreground leading-relaxed">
                محافظة الشرقية،<br/>جمهورية مصر العربية
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">الهاتف</h3>
              <div className="flex flex-col space-y-2 text-muted-foreground" dir="ltr">
                <a href="tel:+201002961539" className="text-right hover:text-primary transition-colors">+20 100 296 1539</a>
                <a href="tel:+201555510411" className="text-right hover:text-primary transition-colors">+20 155 551 0411</a>
                <a href="tel:+966535684330" className="text-right hover:text-primary transition-colors">+966 535 684 330</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
              <a href="mailto:info@panelguardits.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@panelguardits.com
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">أرسل لنا رسالة</h2>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">الاسم الكامل</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="أدخل اسمك"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">البريد الإلكتروني</label>
                  <input 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="example@domain.com"
                    dir="ltr"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1 text-right">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">رقم الهاتف</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-right"
                    placeholder="+20 1xxxxxxxxx"
                    dir="ltr"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-destructive text-sm mt-1 text-right">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">الموضوع</label>
                  <input 
                    {...form.register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="سبب التواصل"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">الرسالة</label>
                <textarea 
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="اكتب رسالتك بالتفصيل هنا..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitContact.isPending}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {submitContact.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال الرسالة
                    <Send className="w-5 h-5 rtl:-scale-x-100" />
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

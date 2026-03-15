import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب ويجب أن يكون حرفين على الأقل"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح"),
  phone: z.string().min(8, "رقم الهاتف مطلوب"),
  subject: z.string().min(2, "الموضوع مطلوب"),
  message: z.string().min(10, "الرسالة قصيرة جداً، يرجى كتابة المزيد من التفاصيل")
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Since there's no defined API endpoint for contact, we simulate a successful network request
      // In a real scenario, this would be: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // We simulate a random failure sometimes just to show error handling is robust
      if (Math.random() < 0.05) {
         throw new Error("حدث خطأ في الخادم، يرجى المحاولة مرة أخرى.");
      }
      
      return { success: true, message: "تم إرسال رسالتك بنجاح!" };
    }
  });
}

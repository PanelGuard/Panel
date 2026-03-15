import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب ويجب أن يكون حرفين على الأقل"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح"),
  phone: z.string().min(8, "رقم الهاتف مطلوب"),
  subject: z.string().min(2, "الموضوع مطلوب"),
  message: z.string().min(10, "الرسالة قصيرة جداً، يرجى كتابة المزيد من التفاصيل")
});

export type ContactInput = z.infer<typeof contactSchema>;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(`${BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any).error || "حدث خطأ في الإرسال، يرجى المحاولة مرة أخرى.");
      }
      return res.json() as Promise<{ success: boolean; message: string; id: number }>;
    },
  });
}

export function useListContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await fetch(`${BASE}/api/contact/list`);
      if (!res.ok) throw new Error("فشل تحميل الطلبات");
      return res.json() as Promise<ContactRecord[]>;
    },
  });
}

export function useUpdateContactStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const res = await fetch(`${BASE}/api/contact/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("فشل تحديث الحالة");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}

export interface ContactRecord {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

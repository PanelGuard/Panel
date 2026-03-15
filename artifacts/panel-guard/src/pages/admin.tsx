import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare, RefreshCw, CheckCheck, Eye, Clock } from "lucide-react";
import { useListContacts, useUpdateContactStatus } from "@/hooks/use-contact";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  new: { label: "جديد", color: "bg-blue-100 text-blue-700" },
  read: { label: "تمت القراءة", color: "bg-yellow-100 text-yellow-700" },
  replied: { label: "تم الرد", color: "bg-green-100 text-green-700" },
};

export default function Admin() {
  const { data: contacts, isLoading, refetch } = useListContacts();
  const updateStatus = useUpdateContactStatus();
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered = contacts?.filter(c => filter === "all" || c.status === filter) ?? [];
  const selectedContact = contacts?.find(c => c.id === selected);

  const newCount = contacts?.filter(c => c.status === "new").length ?? 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-10 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">لوحة إدارة الطلبات</h1>
            <p className="text-white/70 mt-1">طلبات الاستشارة الواردة من الموقع</p>
          </div>
          <div className="flex items-center gap-4">
            {newCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-4 py-1 text-sm font-bold">
                {newCount} طلب جديد
              </span>
            )}
            <button
              onClick={() => refetch()}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              تحديث
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { key: "all", label: "الكل" },
            { key: "new", label: "جديد" },
            { key: "read", label: "تمت القراءة" },
            { key: "replied", label: "تم الرد" },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {f.label}
              {f.key !== "all" && contacts && (
                <span className="mr-2 text-xs opacity-70">
                  ({contacts.filter(c => c.status === f.key).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-16 text-gray-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3" />
            جاري التحميل...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>لا توجد طلبات حتى الآن</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-3">
              {filtered.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setSelected(c.id);
                    if (c.status === "new") {
                      updateStatus.mutate({ id: c.id, status: "read" });
                    }
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selected === c.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-gray-200 bg-white hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-foreground text-sm truncate">{c.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${STATUS_LABELS[c.status]?.color}`}>
                      {STATUS_LABELS[c.status]?.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.subject}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(c.createdAt).toLocaleDateString("ar-EG", {
                      year: "numeric", month: "short", day: "numeric",
                      hour: "2-digit", minute: "2-digit"
                    })}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selectedContact ? (
                <motion.div
                  key={selectedContact.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100 flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{selectedContact.subject}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        طلب #{selectedContact.id} •{" "}
                        {new Date(selectedContact.createdAt).toLocaleDateString("ar-EG", {
                          weekday: "long", year: "numeric", month: "long", day: "numeric",
                        })}
                      </p>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${STATUS_LABELS[selectedContact.status]?.color}`}>
                      {STATUS_LABELS[selectedContact.status]?.label}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <User className="w-5 h-5 text-primary shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">الاسم</p>
                          <p className="text-sm font-medium truncate">{selectedContact.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">البريد</p>
                          <a href={`mailto:${selectedContact.email}`} className="text-sm font-medium text-primary hover:underline truncate block" dir="ltr">
                            {selectedContact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">الهاتف</p>
                          <a href={`tel:${selectedContact.phone}`} className="text-sm font-medium text-primary hover:underline truncate block" dir="ltr">
                            {selectedContact.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">الرسالة:</p>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={`mailto:${selectedContact.email}?subject=رد على: ${selectedContact.subject}`}
                        onClick={() => updateStatus.mutate({ id: selectedContact.id, status: "replied" })}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        رد بالبريد الإلكتروني
                      </a>
                      <a
                        href={`tel:${selectedContact.phone}`}
                        className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors border"
                      >
                        <Phone className="w-4 h-4" />
                        اتصال مباشر
                      </a>
                      {selectedContact.status !== "replied" && (
                        <button
                          onClick={() => updateStatus.mutate({ id: selectedContact.id, status: "replied" })}
                          disabled={updateStatus.isPending}
                          className="flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                        >
                          <CheckCheck className="w-4 h-4" />
                          تم الرد
                        </button>
                      )}
                      {selectedContact.status === "new" && (
                        <button
                          onClick={() => updateStatus.mutate({ id: selectedContact.id, status: "read" })}
                          disabled={updateStatus.isPending}
                          className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          تعيين كمقروء
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>اختر طلباً لعرض التفاصيل</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

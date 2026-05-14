import { useState, type FormEvent, type CSSProperties } from "react";
import type { content } from "@/content";
import { WHATSAPP_URL, PHONE, EMAIL } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";
import { sendEmail } from "@/lib/emailjs";

type T = (typeof content)["ar"] | (typeof content)["en"];

export function Contact({ t, lang }: { t: T; lang: string }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = t.contact.emailSubject;
    const message = lang === "ar"
      ? `الاسم: ${form.name}\nرقم الجوال: ${form.mobile}\nالبريد الإلكتروني: ${form.email}\nاسم الشركة: ${form.company}\nالرسالة: ${form.message}`
      : `Name: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\nCompany: ${form.company}\nMessage: ${form.message}`;

    const { ok } = await sendEmail({
      subject,
      message,
      from_name: form.name,
      reply_to: form.email,
    });

    if (ok) {
      setStatus("success");
      setForm({ name: "", mobile: "", email: "", company: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const focusInput = (el: HTMLInputElement | HTMLTextAreaElement) => {
    el.style.borderColor = "var(--primary)";
    el.style.boxShadow = "0 0 0 3px rgba(0,168,200,0.12)";
  };
  const blurInput = (el: HTMLInputElement | HTMLTextAreaElement) => {
    el.style.borderColor = "var(--card-border)";
    el.style.boxShadow = "none";
  };

  const baseInput = "w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm bg-white";
  const baseInputStyle: CSSProperties = { border: "1px solid var(--card-border)", color: "var(--text-body)" };

  return (
    <SectionWrapper id="contact" style={{ backgroundColor: "var(--section-alt)" } as CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}>
            {t.contact.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {t.contact.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
          <p className="mt-5 text-base" style={{ color: "var(--text-muted)" }}>{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Phone */}
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-5 bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 block"
              style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,168,200,0.09)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--text-muted)" }}>{t.contact.phone}</p>
                <p className="font-bold text-lg" style={{ color: "var(--text-heading)" }} dir="ltr">{PHONE}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-5 bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 block"
              style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(11,44,61,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, var(--secondary), var(--secondary-lt))" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--text-muted)" }}>{t.contact.email}</p>
                <p className="font-bold text-sm break-all" style={{ color: "var(--text-heading)" }} dir="ltr">{EMAIL}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#25D366", boxShadow: "0 6px 20px rgba(37,211,102,0.20)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1fba59"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(37,211,102,0.30)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#25D366"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,211,102,0.20)"; }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.contact.whatsappBtn}
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-2xl p-8"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                  {t.contact.form.nameLbl} <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <input type="text" required placeholder={t.contact.form.namePlaceholder}
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className={baseInput} style={baseInputStyle}
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                  {t.contact.form.mobileLbl} <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <input type="tel" required placeholder={t.contact.form.mobilePlaceholder}
                  value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })}
                  className={baseInput} style={baseInputStyle} dir="ltr"
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                  {t.contact.form.emailLbl}
                </label>
                <input type="email" placeholder={t.contact.form.emailPlaceholder}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className={baseInput} style={baseInputStyle} dir="ltr"
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                  {t.contact.form.companyLbl}
                </label>
                <input type="text" placeholder={t.contact.form.companyPlaceholder}
                  value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                  className={baseInput} style={baseInputStyle}
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
                  {t.contact.form.messageLbl} <span style={{ color: "var(--primary)" }}>*</span>
                </label>
                <textarea required rows={4} placeholder={t.contact.form.messagePlaceholder}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className={`${baseInput} resize-none`} style={baseInputStyle}
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </div>
            </div>
            <button type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: status === "success" ? "#10b981" : status === "error" ? "#ef4444" : "var(--primary)", 
                boxShadow: "0 4px 18px rgba(0,168,200,0.25)" 
              }}
              onMouseEnter={e => { if (status === "idle") (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)"; }}
              onMouseLeave={e => { if (status === "idle") (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary)"; }}>
              {status === "loading" ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === "success" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : status === "error" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {status === "loading" ? (lang === "ar" ? "جاري الإرسال..." : "Sending...") : 
               status === "success" ? (lang === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!") :
               status === "error" ? (lang === "ar" ? "فشل الإرسال، حاول لاحقاً" : "Failed to send, try again") :
               t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}

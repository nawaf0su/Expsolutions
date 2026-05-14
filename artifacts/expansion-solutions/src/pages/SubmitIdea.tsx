import { useState, type FormEvent, type CSSProperties } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EMAIL } from "@/content";
import { sendEmail } from "@/lib/emailjs";

export default function SubmitIdea() {
  const { lang, toggleLang, t } = useLanguage();
  const f = t.ideaForm;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [form, setForm] = useState({
    fullName: "", email: "", mobile: "", company: "",
    ideaName: "", startupName: "", ideaDesc: "", problemSolved: "", targetAudience: "",
    techType: "", hasPrototype: "", projectStage: "", budget: "", timeline: "", notes: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = f.emailSubject;
    const items = [
      `=== ${f.sectionA} ===`,
      `${f.fields.fullName}: ${form.fullName}`,
      `${f.fields.email}: ${form.email}`,
      `${f.fields.mobile}: ${form.mobile}`,
      `${f.fields.company}: ${form.company}`,
      ``,
      `=== ${f.sectionB} ===`,
      `${f.fields.ideaName}: ${form.ideaName}`,
      `${f.fields.startupName}: ${form.startupName}`,
      `${f.fields.ideaDesc}: ${form.ideaDesc}`,
      `${f.fields.problemSolved}: ${form.problemSolved}`,
      `${f.fields.targetAudience}: ${form.targetAudience}`,
      ``,
      `=== ${f.sectionC} ===`,
      `${f.fields.techType}: ${form.techType}`,
      ``,
      `=== ${f.sectionD} ===`,
      `${f.fields.hasPrototype}: ${form.hasPrototype}`,
      `${f.fields.projectStage}: ${form.projectStage}`,
      `${f.fields.budget}: ${form.budget}`,
      `${f.fields.timeline}: ${form.timeline}`,
      ``,
      `=== ${f.sectionE} ===`,
      `${f.fields.notes}: ${form.notes}`,
    ];

    const { ok } = await sendEmail({
      subject,
      message: items.join("\n"),
      from_name: form.fullName,
      reply_to: form.email,
    });

    if (ok) {
      setStatus("success");
      setForm({
        fullName: "", email: "", mobile: "", company: "",
        ideaName: "", startupName: "", ideaDesc: "", problemSolved: "", targetAudience: "",
        techType: "", hasPrototype: "", projectStage: "", budget: "", timeline: "", notes: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const focusStyle = { borderColor: "var(--primary)", boxShadow: "0 0 0 3px rgba(0,168,200,0.12)" };
  const blurStyle: CSSProperties = { borderColor: "var(--card-border)", boxShadow: "none" };
  const baseClass = "w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm bg-white";
  const baseStyle: CSSProperties = { border: "1px solid var(--card-border)", color: "var(--text-body)" };

  const Label = ({ children, required: req }: { children: React.ReactNode; required?: boolean }) => (
    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
      {children}{req && <span style={{ color: "var(--primary)" }}> *</span>}
    </label>
  );

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-3 mb-5 mt-2">
      <div className="w-1 h-6 rounded-full" style={{ background: "linear-gradient(to bottom, var(--primary), var(--accent))" }} />
      <h3 className="text-base font-bold" style={{ color: "var(--text-heading)" }}>{children}</h3>
    </div>
  );

  return (
    <div dir={t.dir} lang={t.lang} className="min-h-screen" style={{ backgroundColor: "var(--page-bg)" }}>
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} onMainPage={false} />

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {f.title}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: "var(--text-heading)", lineHeight: 1.25 }}>
              {f.title}
            </h1>
            <div className="w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {f.subtitle}
            </p>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit}
            className="rounded-2xl p-8 sm:p-10 space-y-8 bg-white"
            style={{ border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>

            {/* Section A: Basic Info */}
            <section>
              <SectionHeading>{f.sectionA}</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label required>{f.fields.fullName}</Label>
                  <input type="text" required placeholder={f.placeholders.fullName}
                    value={form.fullName} onChange={set("fullName")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label required>{f.fields.email}</Label>
                  <input type="email" required placeholder={f.placeholders.email}
                    value={form.email} onChange={set("email")}
                    className={baseClass} style={baseStyle} dir="ltr"
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label required>{f.fields.mobile}</Label>
                  <input type="tel" required placeholder={f.placeholders.mobile}
                    value={form.mobile} onChange={set("mobile")}
                    className={baseClass} style={baseStyle} dir="ltr"
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label>{f.fields.company}</Label>
                  <input type="text" placeholder={f.placeholders.company}
                    value={form.company} onChange={set("company")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--card-border)" }} />

            {/* Section B: Idea Info */}
            <section>
              <SectionHeading>{f.sectionB}</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label required>{f.fields.ideaName}</Label>
                  <input type="text" required placeholder={f.placeholders.ideaName}
                    value={form.ideaName} onChange={set("ideaName")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label>{f.fields.startupName}</Label>
                  <input type="text" placeholder={f.placeholders.startupName}
                    value={form.startupName} onChange={set("startupName")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div className="sm:col-span-2">
                  <Label required>{f.fields.ideaDesc}</Label>
                  <textarea required rows={3} placeholder={f.placeholders.ideaDesc}
                    value={form.ideaDesc} onChange={set("ideaDesc")}
                    className={`${baseClass} resize-none`} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label required>{f.fields.problemSolved}</Label>
                  <textarea required rows={3} placeholder={f.placeholders.problemSolved}
                    value={form.problemSolved} onChange={set("problemSolved")}
                    className={`${baseClass} resize-none`} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
                <div>
                  <Label required>{f.fields.targetAudience}</Label>
                  <textarea required rows={3} placeholder={f.placeholders.targetAudience}
                    value={form.targetAudience} onChange={set("targetAudience")}
                    className={`${baseClass} resize-none`} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--card-border)" }} />

            {/* Section C: Tech Type */}
            <section>
              <SectionHeading>{f.sectionC}</SectionHeading>
              <div>
                <Label required>{f.fields.techType}</Label>
                <select required value={form.techType} onChange={set("techType")}
                  className={baseClass} style={baseStyle}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}>
                  <option value="">{f.selectPlaceholder}</option>
                  {f.techOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--card-border)" }} />

            {/* Section D: Project Details */}
            <section>
              <SectionHeading>{f.sectionD}</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label required>{f.fields.hasPrototype}</Label>
                  <select required value={form.hasPrototype} onChange={set("hasPrototype")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}>
                    <option value="">{f.selectPlaceholder}</option>
                    {f.prototypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <Label required>{f.fields.projectStage}</Label>
                  <select required value={form.projectStage} onChange={set("projectStage")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}>
                    <option value="">{f.selectPlaceholder}</option>
                    {f.stageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <Label required>{f.fields.budget}</Label>
                  <select required value={form.budget} onChange={set("budget")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}>
                    <option value="">{f.selectPlaceholder}</option>
                    {f.budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <Label required>{f.fields.timeline}</Label>
                  <select required value={form.timeline} onChange={set("timeline")}
                    className={baseClass} style={baseStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurStyle)}>
                    <option value="">{f.selectPlaceholder}</option>
                    {f.timelineOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--card-border)" }} />

            {/* Section E: Notes */}
            <section>
              <SectionHeading>{f.sectionE}</SectionHeading>
              <div>
                <Label>{f.fields.notes}</Label>
                <textarea rows={4} placeholder={f.placeholders.notes}
                  value={form.notes} onChange={set("notes")}
                  className={`${baseClass} resize-none`} style={baseStyle}
                  onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurStyle)} />
              </div>
            </section>

            {/* Submit */}
            <button type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: status === "success" ? "#10b981" : status === "error" ? "#ef4444" : "var(--primary)", 
                boxShadow: "0 4px 24px rgba(0,168,200,0.30)" 
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              {status === "loading" ? (lang === "ar" ? "جاري الإرسال..." : "Sending...") : 
               status === "success" ? (lang === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!") :
               status === "error" ? (lang === "ar" ? "فشل الإرسال، حاول لاحقاً" : "Failed to send, try again") :
               f.submit}
            </button>
          </form>
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}

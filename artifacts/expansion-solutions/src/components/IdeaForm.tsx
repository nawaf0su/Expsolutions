import { useState, type FormEvent, type CSSProperties } from "react";
import type { content } from "@/content";
import { EMAIL } from "@/content";
import { SectionWrapper } from "@/components/SectionWrapper";

type T = (typeof content)["ar"] | (typeof content)["en"];

interface IdeaFormProps { t: T; lang: string; }

const baseInput = "w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm bg-white";
const baseInputStyle: CSSProperties = { border: "1px solid var(--card-border)", color: "var(--text-body)" };

function focusInput(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  el.style.borderColor = "var(--primary)";
  el.style.boxShadow = "0 0 0 3px rgba(0,168,200,0.12)";
}
function blurInput(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  el.style.borderColor = "var(--card-border)";
  el.style.boxShadow = "none";
}

const emptyForm = {
  fullName: "", email: "", mobile: "", company: "",
  ideaName: "", startupName: "", ideaDesc: "", problemSolved: "", targetAudience: "",
  techType: "", hasPrototype: "", projectStage: "", budget: "", timeline: "", notes: "",
};

export function IdeaForm({ t, lang }: IdeaFormProps) {
  const [form, setForm] = useState(emptyForm);
  const f = t.ideaForm;
  const lbl = f.fields;
  const ph = f.placeholders;

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isAr = lang === "ar";
    const subject = encodeURIComponent(f.emailSubject);
    const sep = "\n─────────────────────────\n";
    const body = isAr
      ? `${lbl.fullName}: ${form.fullName}\n${lbl.email}: ${form.email}\n${lbl.mobile}: ${form.mobile}\n${lbl.company}: ${form.company || "—"}${sep}${lbl.ideaName}: ${form.ideaName}\n${lbl.startupName}: ${form.startupName}\n${lbl.ideaDesc}:\n${form.ideaDesc}\n\n${lbl.problemSolved}:\n${form.problemSolved}\n\n${lbl.targetAudience}: ${form.targetAudience}${sep}${lbl.techType}: ${form.techType}\n${lbl.hasPrototype}: ${form.hasPrototype}\n${lbl.projectStage}: ${form.projectStage}\n${lbl.budget}: ${form.budget}\n${lbl.timeline}: ${form.timeline}${sep}${lbl.notes}:\n${form.notes || "—"}`
      : `${lbl.fullName}: ${form.fullName}\n${lbl.email}: ${form.email}\n${lbl.mobile}: ${form.mobile}\n${lbl.company}: ${form.company || "—"}${sep}${lbl.ideaName}: ${form.ideaName}\n${lbl.startupName}: ${form.startupName}\n${lbl.ideaDesc}:\n${form.ideaDesc}\n\n${lbl.problemSolved}:\n${form.problemSolved}\n\n${lbl.targetAudience}: ${form.targetAudience}${sep}${lbl.techType}: ${form.techType}\n${lbl.hasPrototype}: ${form.hasPrototype}\n${lbl.projectStage}: ${form.projectStage}\n${lbl.budget}: ${form.budget}\n${lbl.timeline}: ${form.timeline}${sep}${lbl.notes}:\n${form.notes || "—"}`;
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const SectionLabel = ({ children }: { children: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1" style={{ background: "var(--card-border)" }} />
      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
        style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)", whiteSpace: "nowrap" }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ background: "var(--card-border)" }} />
    </div>
  );

  const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-heading)" }}>
        {label} {required && <span style={{ color: "var(--primary)" }}>*</span>}
      </label>
      {children}
    </div>
  );

  const Input = ({ field, type = "text", placeholder, dir, required }: { field: keyof typeof emptyForm; type?: string; placeholder: string; dir?: string; required?: boolean }) => (
    <input type={type} required={required} placeholder={placeholder} value={form[field]}
      onChange={set(field)} className={baseInput} style={baseInputStyle} dir={dir}
      onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
  );

  const Select = ({ field, options, required }: { field: keyof typeof emptyForm; options: string[]; required?: boolean }) => (
    <select required={required} value={form[field]} onChange={set(field)}
      className={baseInput} style={{ ...baseInputStyle, appearance: "auto" }}
      onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)}>
      <option value="">{f.selectPlaceholder}</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );

  return (
    <SectionWrapper id="idea-form" style={{ backgroundColor: "var(--page-bg)" } as CSSProperties}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--primary)", backgroundColor: "rgba(0,168,200,0.08)", border: "1px solid rgba(0,168,200,0.15)" }}>
            {f.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--text-heading)" }}>
            {f.title}
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(to right, var(--primary), var(--accent))" }} />
          <p className="mt-5 text-base max-w-2xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
            {f.subtitle}
          </p>
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 sm:p-10"
          style={{ border: "1px solid var(--card-border)", boxShadow: "0 16px 48px rgba(0,0,0,0.06)" }}>

          {/* A — Contact */}
          <SectionLabel>{f.sectionA}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <Field label={lbl.fullName} required>
              <Input field="fullName" placeholder={ph.fullName} required />
            </Field>
            <Field label={lbl.email} required>
              <Input field="email" type="email" placeholder={ph.email} dir="ltr" required />
            </Field>
            <Field label={lbl.mobile} required>
              <Input field="mobile" type="tel" placeholder={ph.mobile} dir="ltr" required />
            </Field>
            <Field label={lbl.company}>
              <Input field="company" placeholder={ph.company} />
            </Field>
          </div>

          {/* B — Idea info */}
          <SectionLabel>{f.sectionB}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <Field label={lbl.ideaName} required>
              <Input field="ideaName" placeholder={ph.ideaName} required />
            </Field>
            <Field label={lbl.startupName}>
              <Input field="startupName" placeholder={ph.startupName} />
            </Field>
            <div className="sm:col-span-2">
              <Field label={lbl.ideaDesc} required>
                <textarea required rows={3} placeholder={ph.ideaDesc} value={form.ideaDesc}
                  onChange={set("ideaDesc")} className={`${baseInput} resize-none`} style={baseInputStyle}
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label={lbl.problemSolved} required>
                <textarea required rows={3} placeholder={ph.problemSolved} value={form.problemSolved}
                  onChange={set("problemSolved")} className={`${baseInput} resize-none`} style={baseInputStyle}
                  onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label={lbl.targetAudience} required>
                <Input field="targetAudience" placeholder={ph.targetAudience} required />
              </Field>
            </div>
          </div>

          {/* C — Tech type */}
          <SectionLabel>{f.sectionC}</SectionLabel>
          <div className="mb-10">
            <Field label={lbl.techType} required>
              <Select field="techType" options={f.techOptions} required />
            </Field>
          </div>

          {/* D — Scope */}
          <SectionLabel>{f.sectionD}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <Field label={lbl.hasPrototype} required>
              <Select field="hasPrototype" options={f.prototypeOptions} required />
            </Field>
            <Field label={lbl.projectStage} required>
              <Select field="projectStage" options={f.stageOptions} required />
            </Field>
            <Field label={lbl.budget} required>
              <Select field="budget" options={f.budgetOptions} required />
            </Field>
            <Field label={lbl.timeline} required>
              <Select field="timeline" options={f.timelineOptions} required />
            </Field>
          </div>

          {/* E — Notes */}
          <SectionLabel>{f.sectionE}</SectionLabel>
          <div className="mb-8">
            <Field label={lbl.notes}>
              <textarea rows={4} placeholder={ph.notes} value={form.notes}
                onChange={set("notes")} className={`${baseInput} resize-none`} style={baseInputStyle}
                onFocus={e => focusInput(e.currentTarget)} onBlur={e => blurInput(e.currentTarget)} />
            </Field>
          </div>

          {/* Submit */}
          <button type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
            style={{ backgroundColor: "var(--primary)", boxShadow: "0 6px 24px rgba(0,168,200,0.30)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary-dark)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--primary)"; }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {f.submit}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  service: z.string().min(1, "Choose a service"),
  budget: z.string().min(1, "Choose a budget"),
  details: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1500),
});
type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const services = ["Bespoke Web Engineering", "E-Commerce Store Architecture", "Speed & Core Web Vitals", "Conversion Rate Optimization", "Custom API & Systems", "Technical SEO & Accessibility"];
const budgets = ["< $10k", "$10k – $30k", "$30k – $75k", "$75k+"];

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", company: "", service: "", budget: "", details: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  function update<K extends keyof FormData>(k: K, v: FormData[K]) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) {
      const parsed = schema.shape[k].safeParse(v);
      if (parsed.success) setErrors(e => ({ ...e, [k]: undefined }));
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const iss of parsed.error.issues) errs[iss.path[0] as keyof FormData] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("loading");
    await new Promise(r => setTimeout(r, 1400));
    setState("success");
  }

  return (
    <section id="contact" className="relative bg-background text-foreground py-32 md:py-40 px-6 md:px-16 overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-0 w-[70vw] h-[50vh] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(closest-side, oklch(0.55 0.28 320 / 0.5), transparent)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 bottom-0 w-[60vw] h-[50vh] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(closest-side, oklch(0.4 0.22 265 / 0.7), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80">Contact</div>
          <h2 className="mt-6 text-[10vw] md:text-[5vw] leading-[1] tracking-tight">
            <span className="font-normal">Let's build</span><br />
            <span className="font-display italic">something rare</span>
          </h2>
          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            Tell us about your goals. You'll hear back from a principal engineer within one business day — never a sales rep.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            {[
              ["Response time", "< 24h"],
              ["Availability", "Q1 2026 (2 slots)"],
              ["Contact", "hello@northpeak.digital"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-white/60">{k}</span>
                <span className="text-white font-medium">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-10 shadow-[0_40px_100px_-30px_rgba(0,0,20,0.6)] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="min-h-[420px] flex flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center"
                >
                  <Check className="w-7 h-7 text-emerald-300" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-display italic">Message received</h3>
                <p className="mt-3 text-white/70 max-w-sm">Thanks {form.name.split(" ")[0]}. A principal engineer will reach out within one business day.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <Field label="Full Name" error={errors.name}>
                  <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Jane Doe" className={inputCls} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="jane@brand.com" className={inputCls} />
                </Field>
                <Field label="Company" error={errors.company} className="md:col-span-2">
                  <input value={form.company} onChange={e => update("company", e.target.value)} placeholder="Brand Co." className={inputCls} />
                </Field>
                <Field label="Service" error={errors.service}>
                  <select value={form.service} onChange={e => update("service", e.target.value)} className={inputCls}>
                    <option value="">Select service</option>
                    {services.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
                  </select>
                </Field>
                <Field label="Budget" error={errors.budget}>
                  <select value={form.budget} onChange={e => update("budget", e.target.value)} className={inputCls}>
                    <option value="">Select budget</option>
                    {budgets.map(b => <option key={b} value={b} className="text-black">{b}</option>)}
                  </select>
                </Field>
                <Field label="Project Details" error={errors.details} className="md:col-span-2">
                  <textarea value={form.details} onChange={e => update("details", e.target.value)} placeholder="Timelines, goals, current stack…" rows={4} className={`${inputCls} resize-none`} />
                </Field>
                <div className="md:col-span-2 flex items-center justify-between gap-4 mt-2">
                  <p className="text-xs text-white/45">We reply within 24 hours.</p>
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition disabled:opacity-70"
                  >
                    {state === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send Message <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" /></>}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

const inputCls = "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-widest text-white/50">{label}</span>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="block mt-1.5 text-xs text-rose-300"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Sprint Audit & Boost",
    price: "$4,900",
    tag: "2-week sprint",
    desc: "A focused audit and quick-win engineering sprint for teams that need to ship performance fast.",
    features: ["Full technical audit", "Core Web Vitals fixes", "CRO teardown", "Slack support"],
    cta: "Book a Sprint",
    highlight: false,
  },
  {
    name: "Growth Build",
    price: "$24,000",
    tag: "6-week engagement",
    desc: "Bespoke storefront or product surface engineered end-to-end for measurable growth.",
    features: ["Bespoke design system", "Headless storefront build", "Experiment framework", "Analytics & tracking", "Post-launch iterations"],
    cta: "Start Growth Build",
    highlight: true,
  },
  {
    name: "Enterprise Scale",
    price: "Custom",
    tag: "Ongoing retainer",
    desc: "Embedded senior engineers driving your roadmap, platform, and continuous conversion gains.",
    features: ["Dedicated squad", "Custom API & tooling", "Quarterly roadmap", "SLA & priority", "Executive reporting"],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white text-black py-32 md:py-40 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[oklch(0.95_0.03_265)] to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto relative"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/60">Pricing</div>
        <h2 className="mt-6 text-[9vw] md:text-[4.6vw] leading-[1] tracking-tight">
          <span className="font-normal">Simple, senior</span> <span className="font-display italic">engagements</span>
        </h2>
        <p className="mt-6 text-black/60 leading-relaxed">
          Transparent, senior-only teams. No junior handoffs, no scope creep.
        </p>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {plans.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-8 flex flex-col ${
              p.highlight
                ? "bg-[oklch(0.14_0.05_265)] text-white shadow-[0_40px_100px_-30px_rgba(30,40,180,0.5)] scale-100 md:scale-[1.03] md:-my-2 border border-white/10"
                : "bg-white border border-black/5 shadow-[0_20px_60px_-30px_rgba(30,60,180,0.2)]"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 shadow-lg">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            <div className={`text-xs uppercase tracking-widest ${p.highlight ? "text-white/60" : "text-black/50"}`}>{p.tag}</div>
            <h3 className={`mt-2 text-2xl font-medium tracking-tight ${p.highlight ? "text-white" : "text-black"}`}>{p.name}</h3>
            <div className="mt-6 flex items-baseline gap-2">
              <span className={`text-5xl font-medium tracking-tighter ${p.highlight ? "text-white" : "text-gradient-blue"}`}>{p.price}</span>
              {p.price !== "Custom" && <span className={p.highlight ? "text-white/50 text-sm" : "text-black/40 text-sm"}>starting</span>}
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${p.highlight ? "text-white/70" : "text-black/60"}`}>{p.desc}</p>
            <ul className={`mt-6 space-y-3 text-sm flex-1 ${p.highlight ? "text-white/85" : "text-black/75"}`}>
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? "text-blue-300" : "text-[oklch(0.4_0.2_265)]"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition ${
                p.highlight
                  ? "bg-white text-black hover:bg-white/90"
                  : "border border-black/15 text-black hover:bg-black hover:text-white"
              }`}
            >
              {p.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

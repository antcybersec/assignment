import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "D2C · Shopify Plus",
    name: "Aura Skincare D2C",
    metric: "+142%",
    metricLabel: "Conversion Lift",
    before: "1.9%",
    after: "4.6%",
    accent: "from-rose-200 via-pink-200 to-fuchsia-300",
    dot: "#e879f9",
    visual: "chart",
  },
  {
    tag: "Performance Engineering",
    name: "Verde Athletics",
    metric: "0.42s",
    metricLabel: "Page Load",
    before: "3.1s",
    after: "0.42s",
    accent: "from-emerald-200 via-teal-200 to-sky-300",
    dot: "#10b981",
    visual: "gauge",
  },
  {
    tag: "SaaS · Lead Gen",
    name: "Apex Financial",
    metric: "3.8x",
    metricLabel: "Lead Volume",
    before: "212/mo",
    after: "806/mo",
    accent: "from-indigo-200 via-blue-200 to-violet-300",
    dot: "#6366f1",
    visual: "funnel",
  },
];

function Visual({ kind, dot }: { kind: string; dot: string }) {
  if (kind === "chart") {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-full">
        <defs>
          <linearGradient id="ac1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dot} stopOpacity="0.4" />
            <stop offset="100%" stopColor={dot} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 60 L30 55 L60 48 L90 40 L120 28 L150 20 L200 8 L200 80 L0 80 Z"
          fill="url(#ac1)"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
        />
        <motion.path
          d="M0 60 L30 55 L60 48 L90 40 L120 28 L150 20 L200 8"
          fill="none" stroke={dot} strokeWidth="1.8" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    );
  }
  if (kind === "gauge") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 60" className="w-3/4">
          <path d="M10 55 A 40 40 0 0 1 90 55" fill="none" stroke="#e5e7eb" strokeWidth="6" strokeLinecap="round" />
          <motion.path
            d="M10 55 A 40 40 0 0 1 90 55" fill="none" stroke={dot} strokeWidth="6" strokeLinecap="round"
            pathLength={1} strokeDasharray="1" strokeDashoffset="1"
            initial={{ strokeDashoffset: 1 }} whileInView={{ strokeDashoffset: 0.05 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </div>
    );
  }
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      {[0, 1, 2, 3].map(i => (
        <motion.rect
          key={i} x={20 + i * 44} y={40 - i * 8} width={30} height={30 + i * 10} rx={4} fill={dot} opacity={0.15 + i * 0.2}
          initial={{ scaleY: 0, transformOrigin: "bottom" }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.12 }}
          style={{ transformBox: "fill-box" }}
        />
      ))}
    </svg>
  );
}

export function CaseStudies() {
  return (
    <section id="results" className="relative bg-white text-black py-32 md:py-40 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/60">Results</div>
          <h2 className="mt-6 text-[9vw] md:text-[4.6vw] leading-[1] tracking-tight">
            <span className="font-normal">Measurable outcomes</span><br />
            <span className="font-display italic">for real brands</span>
          </h2>
        </div>
        <p className="max-w-sm text-black/60 leading-relaxed">
          A handful of recent engagements. Every metric is real, audited, and holding.
        </p>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {cases.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_-30px_rgba(30,60,180,0.25)] overflow-hidden flex flex-col"
          >
            <div className={`relative h-40 bg-gradient-to-br ${c.accent} p-5 flex flex-col justify-between overflow-hidden`}>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-black/60">
                <span>{c.tag}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
              </div>
              <div className="h-16 w-full flex items-end justify-center overflow-hidden">
                <Visual kind={c.visual} dot={c.dot} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium tracking-tight">{c.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-medium tracking-tighter text-gradient-blue">{c.metric}</span>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-black/50">{c.metricLabel}</div>
              <div className="mt-5 grid grid-cols-2 gap-2 pt-4 border-t border-black/5 text-xs">
                <div>
                  <div className="text-black/40 uppercase tracking-widest text-[10px]">Before</div>
                  <div className="mt-1 text-black/80 font-medium">{c.before}</div>
                </div>
                <div>
                  <div className="text-black/40 uppercase tracking-widest text-[10px]">After</div>
                  <div className="mt-1 text-black font-medium">{c.after}</div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

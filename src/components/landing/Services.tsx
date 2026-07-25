import { motion } from "motion/react";
import { Code2, ShoppingBag, Gauge, MousePointer2, Plug, Search, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Bespoke Web Engineering",
    desc: "Handcrafted React, Next.js and TanStack builds tuned for scale and craft.",
    bullets: ["Design-system driven", "Type-safe end-to-end", "Edge-rendered by default"],
    illustration: "code",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Store Architecture",
    desc: "Headless Shopify and custom storefronts engineered for conversion.",
    bullets: ["Shopify Hydrogen", "Composable checkout", "Global CDN delivery"],
    illustration: "shop",
  },
  {
    icon: Gauge,
    title: "Speed & Core Web Vitals",
    desc: "Sub-second LCP, near-zero CLS, and a green Lighthouse report every ship.",
    bullets: ["<0.8s median LCP", "99% CWV pass rate", "Real user monitoring"],
    illustration: "gauge",
  },
  {
    icon: MousePointer2,
    title: "Conversion Rate Optimization",
    desc: "Experiment programs that lift AOV, checkout completion and LTV.",
    bullets: ["A/B testing framework", "Funnel diagnostics", "Post-purchase flows"],
    illustration: "cro",
  },
  {
    icon: Plug,
    title: "Custom API & Systems",
    desc: "Integrations, workflows and internal tooling that unlock operating leverage.",
    bullets: ["Typed API gateways", "Webhooks & queues", "3rd-party connectors"],
    illustration: "api",
  },
  {
    icon: Search,
    title: "Technical SEO & Accessibility",
    desc: "Architecture that ranks, complies, and welcomes every visitor.",
    bullets: ["Schema & metadata", "WCAG 2.2 AA", "Log-file crawl audits"],
    illustration: "seo",
  },
];

function Illustration({ kind }: { kind: string }) {
  if (kind === "code") {
    return (
      <div className="relative rounded-xl bg-[oklch(0.14_0.05_265)] border border-white/10 overflow-hidden shadow-inner">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-red-400/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-[9px] text-white/40 font-mono">app.tsx</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed text-white/80 flex gap-2">
          <div className="text-white/25 select-none">1<br/>2<br/>3<br/>4</div>
          <div className="flex-1">
            <div><span className="text-purple-300">export</span> <span className="text-sky-300">const</span> <span className="text-emerald-300">ship</span> = <span className="text-purple-300">async</span> () =&gt; {"{"}</div>
            <div className="pl-3"><span className="text-sky-300">await</span> build.<span className="text-emerald-300">optimize</span>();</div>
            <div className="pl-3"><span className="text-sky-300">return</span> <span className="text-amber-200">"98/100"</span>;</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "shop") {
    return (
      <div className="rounded-xl bg-white border border-black/8 overflow-hidden shadow-sm">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/5">
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-black/15" />
          <span className="ml-2 text-[9px] text-black/40 truncate">shop.northpeak.dev</span>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-3 gap-1.5">
            {[0,1,2].map(i => (
              <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-blue-100 to-blue-300 relative overflow-hidden">
                <div className="absolute bottom-1 left-1 right-1 h-1 rounded-full bg-white/50" />
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <div className="h-1.5 w-16 rounded-full bg-black/8" />
            <div className="h-4 w-10 rounded-md bg-black text-white text-[7px] flex items-center justify-center">Add</div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "gauge") {
    return (
      <div className="rounded-xl bg-white border border-black/8 p-4 flex items-center gap-4 shadow-sm">
        <div className="relative w-16 h-16 shrink-0">
          <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
            <circle cx="20" cy="20" r="16" stroke="#eef2ff" strokeWidth="3" fill="none" />
            <motion.circle cx="20" cy="20" r="16" stroke="url(#svgg)" strokeWidth="3" fill="none" strokeLinecap="round"
              strokeDasharray="100.5"
              initial={{ strokeDashoffset: 100.5 }} whileInView={{ strokeDashoffset: 5 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} />
            <defs><linearGradient id="svgg" x1="0" x2="1"><stop offset="0%" stopColor="#22c55e" /><stop offset="100%" stopColor="#0ea5e9" /></linearGradient></defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-base font-medium text-black leading-none">98</div>
            <div className="text-[7px] uppercase tracking-widest text-black/40 mt-0.5">Perf</div>
          </div>
        </div>
        <div className="flex-1 min-w-0 text-[10px] text-black/60 space-y-1.5">
          <div className="flex justify-between"><span>LCP</span><span className="text-black font-medium">0.6s</span></div>
          <div className="flex justify-between"><span>CLS</span><span className="text-black font-medium">0.01</span></div>
          <div className="flex justify-between"><span>INP</span><span className="text-black font-medium">48ms</span></div>
        </div>
      </div>
    );
  }
  if (kind === "cro") {
    return (
      <div className="rounded-xl bg-white border border-black/8 p-3.5 shadow-sm">
        <div className="flex items-center justify-between mb-2 text-[9px] uppercase tracking-widest text-black/40">
          <span>A/B Test</span>
          <span className="text-emerald-500 font-medium normal-case tracking-normal">+312%</span>
        </div>
        <div className="flex items-end gap-1 h-14">
          {[30, 50, 42, 68, 55, 78, 92].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
              className={`flex-1 rounded-t ${i === 6 ? "bg-gradient-to-t from-blue-600 to-blue-300" : "bg-black/8"}`}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-black/40">
          <span className="w-2 h-2 rounded-sm bg-black/10" /> Control
          <span className="w-2 h-2 rounded-sm bg-blue-500 ml-2" /> Variant
        </div>
      </div>
    );
  }
  if (kind === "api") {
    return (
      <div className="rounded-xl bg-white border border-black/8 p-3.5 shadow-sm">
        <svg viewBox="0 0 200 80" className="w-full h-14">
          {[20, 40, 60].map((y, i) => (
            <motion.line key={`l1-${i}`} x1="24" y1="40" x2="90" y2={y}
              stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="3 3"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 }} />
          ))}
          {[20, 40, 60].map((y, i) => (
            <motion.line key={`l2-${i}`} x1="110" y1={y} x2="176" y2="40"
              stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="3 3"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }} />
          ))}
          <circle cx="24" cy="40" r="7" fill="#1e40af" />
          <text x="24" y="43" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">API</text>
          <circle cx="176" cy="40" r="7" fill="#1e40af" />
          <text x="176" y="43" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace">DB</text>
          {["auth", "hook", "sync"].map((t, i) => (
            <g key={t}>
              <rect x="90" y={12 + i * 20} width="20" height="14" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.5" />
              <text x="100" y={22 + i * 20} textAnchor="middle" fontSize="5" fill="#1e40af" fontFamily="monospace">{t}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-white border border-black/8 p-3.5 shadow-sm">
      <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-black/40">
        <span>Audit</span>
        <span className="text-emerald-500 font-medium normal-case tracking-normal">100 / 100</span>
      </div>
      <div className="mt-2 font-mono text-[9px] text-black/70 leading-snug">
        <div><span className="text-blue-500">&lt;meta</span> <span className="text-emerald-600">name</span>=<span className="text-amber-600">"description"</span> /&gt;</div>
        <div><span className="text-blue-500">&lt;script</span> <span className="text-emerald-600">type</span>=<span className="text-amber-600">"ld+json"</span>/&gt;</div>
      </div>
      <div className="mt-2.5 flex gap-1">
        {["SEO","A11y","Best","PWA"].map(t => (
          <span key={t} className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[8px] border border-emerald-200/60">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32 md:py-40 px-6 md:px-16" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eff3ff 60%, #dae4ff 100%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/60">Services</div>
        <h2 className="mt-6 text-[10vw] md:text-[5.2vw] leading-[1.02] tracking-tight text-black pb-2">
          <span className="font-normal">Engineered for</span> <span className="font-display italic">growth</span>
        </h2>
        <p className="mt-6 max-w-lg mx-auto text-black/60 leading-relaxed">
          A senior team that ships production-grade experiences the fastest brands rely on.
        </p>
      </motion.div>

      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(30,60,180,0.25)] hover:shadow-[0_30px_80px_-30px_rgba(30,60,180,0.4)] transition-shadow flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <s.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black/30 group-hover:rotate-45 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
            <h3 className="mt-7 text-[19px] font-medium text-black tracking-tight leading-snug">{s.title}</h3>
            <p className="mt-2.5 text-sm text-black/55 leading-relaxed">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-[13px] text-black/70">
              {s.bullets.map(b => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-[oklch(0.4_0.2_265)]" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-black/5">
              <Illustration kind={s.illustration} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

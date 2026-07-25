import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Performance() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const chartProgress = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  const bars = [
    { m: "W1", v: 62, h: 32 },
    { m: "W2", v: 71, h: 45 },
    { m: "W3", v: 78, h: 58 },
    { m: "W4", v: 98, h: 90, hi: true },
    { m: "W5", v: 96, h: 82 },
  ];

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #dae4ff 0%, #4d6bd8 40%, #2b3fa8 100%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/85">Performance</div>
        <h2 className="mt-6 text-[9vw] md:text-[5vw] leading-[1.02] tracking-tight text-white">
          <span className="font-normal">Every ship measured.</span><br />
          <span className="font-display italic">Every gain compounded.</span>
        </h2>
        <p className="mt-8 text-white/75 max-w-xl mx-auto leading-relaxed">
          A live look at the engineering telemetry we run on every project — from Lighthouse to Core Web Vitals to revenue impact.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 12 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 max-w-6xl mx-auto rounded-3xl border border-white/25 bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-2xl p-6 md:p-10 shadow-[0_40px_100px_-30px_rgba(0,0,20,0.5)]"
        style={{ transformPerspective: 1200 }}
      >
        <div className="flex items-center justify-between text-white flex-wrap gap-4">
          <div className="flex gap-6 text-sm">
            <span className="border-b-2 border-white pb-1">Lighthouse</span>
            <span className="opacity-60">CWV</span>
            <span className="opacity-60">Revenue</span>
          </div>
          <button className="text-xs px-4 py-1.5 rounded-full border border-white/30">Last 5 weeks ▾</button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center">
          <div className="rounded-2xl bg-white p-6 flex flex-col items-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" stroke="#eaeef8" strokeWidth="8" fill="none" />
                <motion.circle
                  cx="50" cy="50" r="42" stroke="url(#g)" strokeWidth="8" fill="none" strokeLinecap="round"
                  strokeDasharray="264"
                  style={{ strokeDashoffset: useTransform(chartProgress, [0, 1], [264, 8]) }}
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5a7dff" />
                    <stop offset="100%" stopColor="#1a2fa8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xs uppercase tracking-widest text-black/50">Median Lighthouse</div>
                <div className="text-4xl font-medium text-black mt-1">98</div>
                <div className="text-[10px] text-emerald-600 mt-1">+34 avg lift</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-8 text-xs w-full">
              <div>
                <div className="text-black/50">Avg LCP</div>
                <div className="text-lg font-medium text-black mt-1">0.6s</div>
              </div>
              <div>
                <div className="text-black/50">CWV pass</div>
                <div className="text-lg font-medium text-black mt-1">99.9%</div>
              </div>
            </div>
          </div>

          <div className="h-72 flex items-end justify-around gap-4 relative">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            {bars.map((b, i) => (
              <div key={i} className="relative flex-1 flex flex-col items-center justify-end h-full">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className={`mb-2 text-xs px-2 py-0.5 rounded-full ${b.hi ? "bg-white text-black" : "text-white"}`}
                >
                  {b.v}
                </motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b.h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full rounded-t-lg ${b.hi ? "bg-white" : "bg-white/40"}`}
                />
                <div className="mt-3 text-xs text-white/80">{b.m}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-white/60 flex-wrap gap-2">
          <span>Source: NorthPeak Observability · production RUM</span>
          <span>Updated 4 min ago</span>
        </div>
      </motion.div>
    </section>
  );
}

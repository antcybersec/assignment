import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowRight, Flame, Gauge, Zap, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const line1 = ["We", "Build", { i: "High-Conversion" }];
const line2 = ["Digital", { i: "Experiences" }];
const line3 = ["That", { i: "Outperform", u: true }];

function Word({ text, italic, underline, delay }: { text: string; italic?: boolean; underline?: boolean; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom mr-[0.22em] pt-[0.18em] -mt-[0.18em] pb-[0.05em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${italic ? "font-display italic pr-[0.12em]" : ""} ${underline ? "underline underline-offset-[0.12em] decoration-[0.03em]" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );
}

function EngineeringDashboard() {
  return (
    <div className="relative w-[340px]">
      {/* ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-sky-500/20 via-violet-500/15 to-fuchsia-500/10 blur-3xl -z-10" />
      <div className="rounded-[22px] border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-5">
          {/* Lighthouse gauge */}
          <div className="relative w-[84px] h-[84px] shrink-0">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" fill="none" />
              <motion.circle
                cx="20" cy="20" r="16" stroke="url(#lhg)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                strokeDasharray="100.5" strokeDashoffset="100.5"
                animate={{ strokeDashoffset: 5 }}
                transition={{ duration: 2.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="lhg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[22px] font-medium leading-none tracking-tight">98</div>
              <div className="text-[8px] uppercase tracking-[0.2em] text-white/45 mt-1.5">Perf</div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">Lighthouse</div>
            <div className="mt-1.5 text-[26px] font-medium tracking-tight leading-none">98<span className="text-white/30 text-lg"> / 100</span></div>
            <div className="mt-2 text-[10px] text-emerald-300/90 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +34 since redesign
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { l: "LCP", v: "0.6s", i: Zap },
            { l: "CLS", v: "0.01", i: Gauge },
            { l: "INP", v: "48ms", i: Flame },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.1, duration: 0.6 }}
              className="rounded-xl bg-white/[0.03] border border-white/8 p-3"
            >
              <m.i className="w-3 h-3 text-white/50" />
              <div className="mt-2 text-[15px] font-medium leading-none tracking-tight">{m.v}</div>
              <div className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-white/40">{m.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/8 p-3.5">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span>Conversion Lift</span>
            <span className="text-emerald-300/90 tracking-normal normal-case text-xs font-medium">+312%</span>
          </div>
          <div className="mt-2.5 h-9 relative overflow-hidden">
            <svg viewBox="0 0 200 40" className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0 34 L30 30 L60 32 L90 22 L120 20 L150 12 L180 8 L200 4 L200 40 L0 40 Z"
                fill="url(#spa)" opacity="0.35"
                initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1.4, delay: 2 }}
              />
              <motion.path
                d="M0 34 L30 30 L60 32 L90 22 L120 20 L150 12 L180 8 L200 4"
                fill="none" stroke="url(#sp)" strokeWidth="1.6" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="sp" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
                <linearGradient id="spa" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 hero-bg">
        <motion.img
          src={heroBg} alt=""
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/3 w-[80vw] h-[40vh] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(closest-side, oklch(0.55 0.28 320 / 0.5), transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 bottom-0 w-[70vw] h-[50vh] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, oklch(0.4 0.22 265 / 0.7), transparent)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>


      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 pt-48 md:pt-56 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-4 py-2 text-xs text-white/80"
        >
          <span>🔥</span> Top-Rated D2C & E-Commerce Web Engineering Agency
        </motion.div>

        <h1 className="mt-10 text-[11.5vw] md:text-[7.2vw] leading-[1.06] font-medium tracking-[-0.035em] max-w-[15ch] pb-2">
          <div className="flex flex-wrap">{line1.map((w, i) => typeof w === "string" ? <Word key={i} text={w} delay={0.3 + i * 0.08} /> : <Word key={i} text={w.i} italic delay={0.3 + i * 0.08} />)}</div>
          <div className="flex flex-wrap">{line2.map((w, i) => typeof w === "string" ? <Word key={i} text={w} delay={0.55 + i * 0.08} /> : <Word key={i} text={w.i} italic delay={0.55 + i * 0.08} />)}</div>
          <div className="flex flex-wrap">{line3.map((w, i) => typeof w === "string" ? <Word key={i} text={w} delay={0.78 + i * 0.08} /> : <Word key={i} text={w.i} italic underline={w.u} delay={0.78 + i * 0.08} />)}</div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 max-w-lg text-base text-white/70 leading-relaxed"
        >
          Bespoke web development, sub-second page performance, and scalable Shopify architecture engineered to turn traffic into profitable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="group px-7 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#results" className="px-7 py-4 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 transition">
            View Case Studies
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-8 left-0 right-0 z-10 px-6 md:px-16 flex items-end justify-between"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs tracking-[0.3em] text-white/70"
        >
          SCROLL <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
        <div className="hidden md:flex items-center gap-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl pl-4 pr-2 py-2">
          <span className="text-sm text-white/80">Trusted by 80+ D2C & SaaS brands</span>
          <div className="flex -space-x-2">
            {[0,1,2].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-background" style={{ background: `linear-gradient(135deg, oklch(0.5 0.2 ${240 + i*30}), oklch(0.7 0.15 ${280 + i*20}))` }} />
            ))}
          </div>
          <span className="text-sm bg-white text-black rounded-full px-3 py-1.5">5.0 rated</span>
        </div>
      </motion.div>
    </section>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "NorthPeak rebuilt our storefront in six weeks and doubled our conversion rate. They operate like an in-house team of principal engineers.",
    name: "Léa Marchand",
    role: "VP Growth, Aura Skincare",
    hue: 320,
  },
  {
    quote: "The performance work paid for itself in a single month. Our LCP dropped from 3.1s to under half a second — SEO and revenue followed.",
    name: "Marcus Weller",
    role: "CTO, Verde Athletics",
    hue: 165,
  },
  {
    quote: "Every deliverable felt handcrafted. The clearest technical thinking and design taste we've worked with in a decade.",
    name: "Priya Anand",
    role: "Head of Product, Apex Financial",
    hue: 250,
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const cur = items[idx];

  return (
    <section className="relative bg-white text-black py-32 md:py-40 px-6 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/60">Testimonials</div>

        <div className="mt-10 relative min-h-[280px] flex items-center justify-center">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 text-black/10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-display italic leading-snug tracking-tight text-[oklch(0.25_0.13_265)] max-w-3xl">
                "{cur.quote}"
              </p>
              <div className="mt-10 flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border border-black/10"
                  style={{ background: `linear-gradient(135deg, oklch(0.55 0.2 ${cur.hue}), oklch(0.7 0.15 ${cur.hue + 30}))` }}
                />
                <div className="text-left">
                  <div className="text-sm font-medium">{cur.name}</div>
                  <div className="text-xs text-black/50">{cur.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[oklch(0.35_0.2_265)]" : "w-1.5 bg-black/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

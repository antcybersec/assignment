import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const mv = useMotionValue(0);
  const out = useTransform(mv, (v) => prefix + v.toFixed(decimals) + suffix);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return c.stop;
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{out}</motion.span>;
}

const stats = [
  { render: <Counter to={45} prefix="$" suffix="M+" />, label: "Client Revenue Generated" },
  { render: <Counter to={99.9} suffix="%" decimals={1} />, label: "Core Web Vitals Pass Rate" },
  { render: <Counter to={3.2} suffix="x" decimals={1} />, label: "Average CRO Conversion Lift" },
  { render: <><span>&lt;</span><Counter to={0.8} suffix="s" decimals={1} /></>, label: "Average Page Load Speed" },
];

export function ProofBar() {
  return (
    <section className="relative bg-background border-t border-white/5 py-20 md:py-28 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left border-l border-white/10 md:pl-6"
          >
            <div className="text-4xl md:text-5xl font-medium tracking-tight text-gradient-blue">
              {s.render}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

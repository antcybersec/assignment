import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const text = "NorthPeak Digital is a web engineering studio for ambitious D2C, e-commerce and SaaS brands. We architect bespoke storefronts, ship sub-second experiences, and engineer the conversion systems that turn traffic into compounding revenue.";
const words = text.split(" ");

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="about" ref={ref} className="relative bg-white text-black py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-black/50"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.35_0.2_265)]" />
        Our Studio
      </motion.div>

      <div className="mt-14 max-w-6xl mx-auto text-[6vw] md:text-[3.2vw] leading-[1.15] font-display tracking-tight text-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const opacity = useTransform(scrollYProgress, [start * 0.7 + 0.1, end * 0.7 + 0.1], [0.15, 1]);
          return (
            <motion.span key={i} style={{ opacity }} className="inline-block mr-[0.25em] text-[oklch(0.25_0.13_265)]">
              {word}
            </motion.span>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 flex justify-center"
      >
        <a href="#services" className="text-xs tracking-[0.3em] px-6 py-3 rounded-full border border-black/20 hover:bg-black hover:text-white transition">
          EXPLORE SERVICES
        </a>
      </motion.div>
    </section>
  );
}

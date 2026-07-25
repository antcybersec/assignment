import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 pl-3">
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-foreground">
        <path d="M2 20 L9 6 L14 14 L17 9 L22 20 Z" fill="currentColor" opacity="0.9" />
        <path d="M9 6 L14 14" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
      <span className="text-[15px] font-medium tracking-tight">
        NORTHPEAK <span className="opacity-60">DIGITAL</span>
      </span>
    </a>
  );
}

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 200], ["oklch(0.14 0.05 265 / 0)", "oklch(0.14 0.05 265 / 0.7)"]);
  const border = useTransform(scrollY, [0, 200], ["oklch(1 0 0 / 0)", "oklch(1 0 0 / 0.1)"]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !dark);
  }, [dark]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <motion.nav
          style={{ background: bg, borderColor: border, scale }}
          className="w-full max-w-7xl rounded-full border border-transparent px-2 py-2 backdrop-blur-xl flex items-center justify-between"
        >
          <Logo />
          <div className="hidden lg:flex items-center gap-8 text-sm text-foreground/85">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground transition story-link">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-foreground/70 hover:text-foreground hover:bg-white/5 transition"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="group hidden md:inline-flex text-sm pl-5 pr-2 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition items-center gap-2"
            >
              Book Strategy Call
              <span className="w-6 h-6 rounded-full bg-black/90 text-white flex items-center justify-center transition group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-white/5 transition"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-[oklch(0.09_0.05_265)]/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                  className="text-[10vw] md:text-6xl font-display italic tracking-tight text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 px-8 py-4 rounded-full bg-white text-black font-medium"
              >
                Book Strategy Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

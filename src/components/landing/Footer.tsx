export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-white/10 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 24 24" className="text-white">
              <path d="M2 20 L9 6 L14 14 L17 9 L22 20 Z" fill="currentColor" opacity="0.9" />
            </svg>
            <span className="text-[15px] font-medium tracking-tight">NORTHPEAK <span className="opacity-60">DIGITAL</span></span>
          </div>
          <p className="mt-4 text-white/60 max-w-sm text-sm leading-relaxed">
            A senior web engineering studio building high-conversion digital experiences for ambitious D2C, e-commerce and SaaS brands.
          </p>
        </div>

        <div>
          <div className="text-white font-medium text-sm">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {[["Services", "#services"], ["Results", "#results"], ["Pricing", "#pricing"], ["Process", "#process"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-white transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-medium text-sm">Social</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {["Twitter / X", "LinkedIn", "GitHub", "Dribbble"].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-medium text-sm">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>hello@northpeak.digital</li>
            <li>Remote · Global</li>
            <li><a href="#contact" className="hover:text-white transition">Book Strategy Call →</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <span>© 2026 NorthPeak Digital. All rights reserved.</span>
        <span>
          Built for <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">Digital Heroes Training Task</a>
        </span>
      </div>
    </footer>
  );
}

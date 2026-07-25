# AI Usage Statement — Digital Heroes Qualification Task Kit

**Candidate Name:** Anant Kumar  
**Role:** Role 05 — Web Development  
**Date:** July 2026  

---

## 🤖 Where I Used AI & How I Directed It

I leveraged AI models as an intelligent pair-programmer to accelerate initial boilerplate generation and pressure-test accessibility edge cases for the NorthPeak Digital web application. Specifically, I used AI to outline structural component scaffolds for React, draft initial CSS design tokens, and generate test regex patterns for real-time email validation.

However, **I made significant critical modifications and manual craft choices afterwards**:
1. **Performance & Bundle Optimization**: The initial AI suggestions recommended heavy third-party UI libraries (Tailwind / Framer Motion). I explicitly rejected these in favor of clean, hand-crafted Vanilla CSS custom tokens and zero-dependency CSS transitions, reducing the production build time to 119ms and ensuring sub-second LCP.
2. **Accessibility (WCAG 2.1 AA)**: AI generated standard form inputs without explicit ARIA associations. I manually added `aria-invalid`, `aria-describedby`, keyboard skip-to-content links (`.sr-only`), and verified color contrast ratios to meet > 4.5:1 standards across both light and dark modes.
3. **Form Logic & User Experience**: I overhauled the contact form logic to include real-time field touch tracking (`touched` state), dynamic character counts, and customized error states so users get immediate visual feedback without annoying false positives before typing.

---
*This work represents my own judgment, architectural decisions, and design craft, combining AI velocity with human quality control.*

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ProofBar } from "@/components/landing/ProofBar";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Testimonials } from "@/components/landing/Testimonials";
import { Performance } from "@/components/landing/Performance";
import { Pricing } from "@/components/landing/Pricing";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NorthPeak Digital — High-Conversion Web Engineering Agency" },
      { name: "description", content: "Bespoke web development, sub-second performance, and scalable Shopify architecture engineered to turn traffic into profitable growth." },
      { property: "og:title", content: "NorthPeak Digital — High-Conversion Web Engineering Agency" },
      { property: "og:description", content: "A senior web engineering studio building high-conversion digital experiences for ambitious D2C, e-commerce and SaaS brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <ProofBar />
      <About />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Performance />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

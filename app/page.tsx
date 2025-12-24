import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AIPowered } from "@/components/sections/ai-powered";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AIPowered />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

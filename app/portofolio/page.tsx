import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { PortfolioCard } from "@/components/features/portfolio-card";
import { FadeIn } from "@/components/animations/fade-in";
import { CTA } from "@/components/sections/cta";
import { PORTFOLIO_ITEMS, SERVICES } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Lihat hasil kerja Creativism untuk berbagai klien dari berbagai industri. Case study dengan hasil yang terukur.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                Our Work
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portofolio & <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Lihat bagaimana kami membantu klien mencapai target bisnis mereka
              dengan strategi digital marketing yang terukur.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Section background="white">
        <SectionHeader
          subtitle="Hasil Kerja"
          title="Klien yang Telah Kami Bantu"
          description="Setiap project adalah kesempatan untuk memberikan dampak nyata bagi bisnis klien."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Hasil yang Berbicara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rata-rata peningkatan yang dialami klien kami setelah bekerja sama
            dengan Creativism.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { value: "300%", label: "Avg. Sales Increase" },
            { value: "500%", label: "Avg. Traffic Growth" },
            { value: "4.5x", label: "Avg. ROAS" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section background="white">
        <SectionHeader
          subtitle="Industri"
          title="Berbagai Industri yang Kami Layani"
          description="Pengalaman bekerja dengan berbagai jenis bisnis dari berbagai industri."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "E-commerce",
            "F&B",
            "Fashion",
            "Technology",
            "Healthcare",
            "Education",
            "Property",
            "Automotive",
            "Finance",
            "Travel",
          ].map((industry, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-600 font-medium hover:bg-primary hover:text-white transition-colors cursor-default">
                {industry}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

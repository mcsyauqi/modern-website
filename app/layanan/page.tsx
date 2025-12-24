import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { ServiceCard } from "@/components/features/service-card";
import { FadeIn } from "@/components/animations/fade-in";
import { CTA } from "@/components/sections/cta";
import { SERVICES } from "@/lib/constants";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan digital marketing lengkap dari Creativism: SEO, Social Media, Website, Google Ads, Meta Ads, Design, Video, dan Photography.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                AI-Powered Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Layanan Digital Marketing{" "}
              <span className="text-gradient">Lengkap</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Dari strategi hingga eksekusi, kami menyediakan layanan end-to-end
              yang didukung teknologi AI untuk hasil optimal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <SectionHeader
          subtitle="Pilih Layanan"
          title="Apa yang Kami Tawarkan"
          description="Setiap layanan dirancang untuk memenuhi kebutuhan spesifik bisnis Anda dengan dukungan teknologi AI."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Kenapa Creativism?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Lebih dari Sekadar Agency
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "AI-Powered Efficiency",
                  description:
                    "Teknologi AI membantu kami memberikan hasil 3x lebih cepat tanpa mengorbankan kualitas.",
                },
                {
                  title: "Dedicated Team",
                  description:
                    "Setiap klien mendapatkan dedicated account manager yang memahami bisnis Anda.",
                },
                {
                  title: "Transparent Reporting",
                  description:
                    "Laporan real-time dan dashboard yang mudah dipahami untuk memantau progress.",
                },
                {
                  title: "Proven Results",
                  description:
                    "Track record 100+ klien dengan hasil yang terukur dan memuaskan.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-dark mb-6">
                Butuh Bantuan Memilih?
              </h3>
              <p className="text-gray-600 mb-6">
                Tim kami siap membantu Anda menemukan layanan yang tepat untuk
                kebutuhan bisnis Anda. Konsultasi gratis!
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="/kontak">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTA />
    </>
  );
}

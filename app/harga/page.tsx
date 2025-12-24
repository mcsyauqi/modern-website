import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { PricingCard } from "@/components/features/pricing-card";
import { FadeIn } from "@/components/animations/fade-in";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { PRICING_TIERS, SERVICES } from "@/lib/constants";
import { Sparkles, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Lihat paket harga layanan digital marketing Creativism. Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda.",
};

const pricingFaq = [
  {
    question: "Apakah ada biaya setup atau commitment awal?",
    answer:
      "Untuk sebagian besar layanan, tidak ada biaya setup terpisah. Semua biaya sudah termasuk dalam paket bulanan. Untuk project tertentu seperti pembuatan website, kami menerapkan sistem milestone payment.",
  },
  {
    question: "Berapa lama kontrak minimum?",
    answer:
      "Kami merekomendasikan kontrak minimal 3 bulan untuk hasil optimal. Namun, kami juga menyediakan opsi bulanan dengan fleksibilitas penuh.",
  },
  {
    question: "Apakah bisa custom paket sesuai kebutuhan?",
    answer:
      "Tentu! Kami menyediakan paket Enterprise/Custom yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda. Hubungi kami untuk konsultasi lebih lanjut.",
  },
  {
    question: "Bagaimana metode pembayaran?",
    answer:
      "Kami menerima transfer bank, kartu kredit, dan e-wallet. Untuk klien korporat, kami juga menyediakan opsi invoice dengan term pembayaran yang dapat disesuaikan.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Harga <span className="text-gradient">Terjangkau</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Investasi yang tepat untuk pertumbuhan bisnis Anda. Pilih paket yang
              sesuai dengan kebutuhan dan budget.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section background="white">
        <SectionHeader
          subtitle="Paket Layanan"
          title="Pilih Paket yang Tepat"
          description="Semua paket sudah termasuk dedicated account manager dan reporting bulanan."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <PricingCard key={index} {...tier} index={index} />
          ))}
        </div>

        {/* Enterprise */}
        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Butuh Solusi Enterprise?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Untuk bisnis dengan kebutuhan khusus atau skala besar, kami
              menyediakan paket custom yang dapat disesuaikan sepenuhnya.
            </p>
            <Button asChild size="lg">
              <Link href="/kontak">
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Service Pricing Overview */}
      <Section background="gray">
        <SectionHeader
          subtitle="Per Layanan"
          title="Harga Per Layanan"
          description="Estimasi harga untuk masing-masing layanan. Harga final disesuaikan dengan scope project."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 8).map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-dark mb-2">{service.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{service.brief}</p>
                <div className="text-primary font-semibold">
                  Mulai dari Rp 3.000.000
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Apa yang Termasuk
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Semua Paket Sudah Termasuk
            </h2>
            <div className="space-y-4">
              {[
                "Dedicated Account Manager",
                "Monthly Strategy Meeting",
                "Comprehensive Reporting",
                "AI-Powered Analytics",
                "Priority Support",
                "Free Consultation",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Garansi Kepuasan</h3>
              <p className="text-blue-100 mb-6">
                Kami yakin dengan kualitas layanan kami. Jika dalam 30 hari
                pertama Anda tidak puas, kami akan mengembalikan 100% pembayaran
                Anda.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold">
                <Check className="w-5 h-5" />
                30-Day Money Back Guarantee
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ
        items={pricingFaq}
        title="Pertanyaan tentang Harga"
        subtitle="FAQ"
        description="Jawaban untuk pertanyaan umum seputar harga dan pembayaran."
      />

      <CTA />
    </>
  );
}

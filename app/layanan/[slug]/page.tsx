import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { SERVICES, PORTFOLIO_ITEMS, PRICING_TIERS } from "@/lib/constants";
import {
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Search,
  Globe,
  Target,
  Megaphone,
  Palette,
  Video,
  Camera,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Search,
  Globe,
  Target,
  Megaphone,
  Palette,
  Video,
  Camera,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Globe;
  const relatedPortfolio = PORTFOLIO_ITEMS.filter((p) =>
    p.category.toLowerCase().includes(slug.split("-")[0])
  ).slice(0, 2);

  const process = [
    {
      step: 1,
      title: "Discovery",
      description:
        "Memahami bisnis, target market, dan goals Anda melalui konsultasi mendalam.",
    },
    {
      step: 2,
      title: "Strategy",
      description:
        "Merancang strategi yang customized berdasarkan data dan insight AI.",
    },
    {
      step: 3,
      title: "Execution",
      description:
        "Implementasi strategi dengan tim expert dan tools terbaik.",
    },
    {
      step: 4,
      title: "Optimization",
      description:
        "Monitoring, analisis, dan optimasi berkelanjutan untuk hasil maksimal.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <FadeIn>
              <Badge variant="ai" className="mb-6 gap-1">
                <Sparkles className="w-3 h-3" />
                {service.aiBadge}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/kontak">
                    Mulai Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark"
                >
                  <Link href="/harga">Lihat Harga</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Keunggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Apa yang Anda Dapatkan
            </h2>
            <p className="text-gray-600 mb-8">{service.brief}</p>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mengapa {service.title}?</h3>
              <p className="text-blue-100 mb-6">{service.description}</p>
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">{service.aiBadge}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Process */}
      <Section background="gray">
        <SectionHeader
          subtitle="Proses Kerja"
          title="Bagaimana Kami Bekerja"
          description="Proses sistematis yang memastikan hasil optimal untuk setiap project."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 relative">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="white">
        <SectionHeader
          subtitle="Investasi"
          title="Paket Layanan"
          description="Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className={`rounded-2xl p-6 ${
                  tier.highlighted
                    ? "bg-gradient-to-br from-primary to-blue-700 text-white"
                    : "bg-gray-50"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    tier.highlighted ? "text-white" : "text-dark"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {tier.target}
                </p>
                <div
                  className={`text-2xl font-bold mb-4 ${
                    tier.highlighted ? "text-white" : "text-dark"
                  }`}
                >
                  {tier.price}
                </div>
                <Button
                  asChild
                  variant={tier.highlighted ? "white" : "default"}
                  className="w-full"
                >
                  <Link href="/harga">Lihat Detail</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/harga" className="text-primary font-semibold hover:underline">
            Lihat semua paket dan harga lengkap →
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ
        title={`FAQ tentang ${service.title}`}
        subtitle="Pertanyaan Umum"
        description={`Temukan jawaban untuk pertanyaan umum tentang layanan ${service.title} kami.`}
      />

      <CTA />
    </>
  );
}

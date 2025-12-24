import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!portfolio) {
    return {
      title: "Portofolio Tidak Ditemukan",
    };
  }

  return {
    title: `${portfolio.title} - ${portfolio.client}`,
    description: portfolio.description,
  };
}

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const portfolio = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!portfolio) {
    notFound();
  }

  const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.slug === slug);
  const prevPortfolio = PORTFOLIO_ITEMS[currentIndex - 1];
  const nextPortfolio = PORTFOLIO_ITEMS[currentIndex + 1];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Portofolio
            </Link>
            <Badge variant="secondary" className="mb-4">
              {portfolio.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {portfolio.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8">{portfolio.client}</p>

            {/* Results */}
            <div className="flex flex-wrap gap-6">
              {portfolio.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4"
                >
                  <div className="text-3xl font-bold text-accent">
                    {result.value}
                  </div>
                  <div className="text-sm text-blue-100">{result.metric}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-6">Overview</h2>
            <p className="text-lg text-gray-600 mb-8">{portfolio.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-dark mb-4">Challenge</h3>
                <p className="text-gray-600">
                  Klien menghadapi tantangan dalam meningkatkan visibility online
                  dan konversi digital mereka. Persaingan yang ketat dan perubahan
                  algoritma platform membuat strategi sebelumnya tidak lagi
                  efektif.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-4">Solution</h3>
                <p className="text-gray-600">
                  Kami mengimplementasikan strategi {portfolio.category.toLowerCase()}{" "}
                  yang komprehensif dengan dukungan AI analytics untuk optimasi
                  berkelanjutan dan hasil yang terukur.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Results */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Hasil yang Dicapai
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-600">{result.metric}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6 text-primary" />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-600 italic mb-6">
              &quot;Creativism membantu kami mencapai target yang sebelumnya terasa
              impossible. Tim yang profesional dan hasil yang memuaskan!&quot;
            </blockquote>
            <div className="font-semibold text-dark">
              Marketing Team, {portfolio.client}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="gray" className="py-12">
        <div className="flex justify-between items-center">
          {prevPortfolio ? (
            <Link
              href={`/portofolio/${prevPortfolio.slug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">{prevPortfolio.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}
          <Button asChild variant="outline">
            <Link href="/portofolio">Semua Portfolio</Link>
          </Button>
          {nextPortfolio ? (
            <Link
              href={`/portofolio/${nextPortfolio.slug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <span className="hidden sm:inline">{nextPortfolio.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>

      <CTA />
    </>
  );
}

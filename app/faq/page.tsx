import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan tentang layanan digital marketing Creativism. Temukan jawaban untuk pertanyaan Anda.",
};

const additionalFaqs = [
  {
    category: "Layanan",
    questions: [
      {
        question: "Layanan apa saja yang disediakan Creativism?",
        answer:
          "Kami menyediakan layanan digital marketing lengkap: SEO, Social Media Management, Website Development, Google Ads, Meta Ads, Graphic Design, Video Production, dan Product Photography.",
      },
      {
        question: "Apakah bisa menggunakan lebih dari satu layanan?",
        answer:
          "Tentu! Bahkan kami merekomendasikan pendekatan integrated marketing untuk hasil optimal. Kami akan membantu merancang paket yang sesuai dengan kebutuhan bisnis Anda.",
      },
    ],
  },
  {
    category: "Proses Kerja",
    questions: [
      {
        question: "Bagaimana proses onboarding klien baru?",
        answer:
          "Proses dimulai dengan konsultasi untuk memahami bisnis Anda, dilanjutkan dengan proposal dan kontrak. Setelah deal, kami akan melakukan kick-off meeting dan mulai eksekusi strategi.",
      },
      {
        question: "Siapa yang akan menangani project saya?",
        answer:
          "Setiap klien mendapatkan dedicated account manager yang akan menjadi point of contact utama. Tim specialist (SEO, Ads, Content, dll) akan bekerja di balik layar.",
      },
    ],
  },
  {
    category: "Hasil & Reporting",
    questions: [
      {
        question: "Bagaimana cara memantau progress dan hasil?",
        answer:
          "Kami menyediakan dashboard real-time dan laporan bulanan yang komprehensif. Anda juga bisa request meeting untuk review kapan saja.",
      },
      {
        question: "Berapa lama sampai terlihat hasil?",
        answer:
          "Tergantung layanan. Iklan digital bisa terlihat hasilnya dalam 1-2 minggu. SEO membutuhkan 3-6 bulan. Social media biasanya 1-2 bulan untuk melihat peningkatan engagement.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan dan proses
              kerja kami.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* General FAQ */}
      <Section background="white">
        <SectionHeader
          subtitle="Umum"
          title="Pertanyaan Umum"
          description="Pertanyaan yang paling sering ditanyakan oleh calon klien."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`general-${index}`}
                className="bg-gray-50 rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Category FAQ */}
      {additionalFaqs.map((category, catIndex) => (
        <Section
          key={catIndex}
          background={catIndex % 2 === 0 ? "gray" : "white"}
        >
          <SectionHeader subtitle="FAQ" title={category.category} />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {category.questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`${catIndex}-${index}`}
                  className={`${
                    catIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } rounded-xl px-6 border-0`}
                >
                  <AccordionTrigger className="text-left text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      ))}

      {/* Still Have Questions */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-blue-100 mb-8">
            Tim kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontak">
                Hubungi Kami
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

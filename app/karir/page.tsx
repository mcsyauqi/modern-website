import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/layout/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Heart,
  Users,
  Zap,
  Coffee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Karir",
  description:
    "Bergabung dengan tim Creativism. Lihat lowongan kerja terbaru di AI-Powered Digital Marketing Agency.",
};

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Jam kerja fleksibel dan remote-friendly environment.",
  },
  {
    icon: Zap,
    title: "Learning & Growth",
    description: "Budget untuk kursus, sertifikasi, dan conference.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Tim yang supportive dan collaborative.",
  },
  {
    icon: Coffee,
    title: "Fun Culture",
    description: "Regular team outing dan office dengan snack bar.",
  },
];

const openPositions = [
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Yogyakarta / Remote",
    description:
      "Bertanggung jawab untuk planning dan eksekusi kampanye digital marketing untuk klien.",
    requirements: [
      "Pengalaman 2+ tahun di digital marketing",
      "Familiar dengan Google Ads & Meta Ads",
      "Kemampuan analisis data yang baik",
      "Komunikasi yang excellent",
    ],
  },
  {
    title: "SEO Specialist",
    department: "SEO",
    type: "Full-time",
    location: "Yogyakarta",
    description:
      "Mengoptimasi website klien untuk ranking yang lebih baik di search engine.",
    requirements: [
      "Pengalaman 1+ tahun di SEO",
      "Memahami technical SEO",
      "Familiar dengan tools SEO (Ahrefs, SEMrush)",
      "Kemampuan content writing",
    ],
  },
  {
    title: "Content Writer",
    department: "Content",
    type: "Full-time / Part-time",
    location: "Remote",
    description:
      "Membuat konten berkualitas untuk website, blog, dan social media klien.",
    requirements: [
      "Portfolio writing yang kuat",
      "Familiar dengan SEO writing",
      "Bisa bekerja dengan deadline",
      "Kreatif dan detail-oriented",
    ],
  },
  {
    title: "Social Media Manager",
    department: "Social Media",
    type: "Full-time",
    location: "Yogyakarta",
    description:
      "Mengelola dan mengembangkan akun social media klien dari berbagai industri.",
    requirements: [
      "Pengalaman 1+ tahun di social media management",
      "Memahami algoritma platform social media",
      "Skill design basic (Canva)",
      "Kreatif dan up-to-date dengan tren",
    ],
  },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                We&apos;re Hiring!
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bergabung dengan <span className="text-gradient">Creativism</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Jadilah bagian dari tim yang passionate dalam membantu bisnis
              Indonesia berkembang melalui digital marketing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <Section background="white">
        <SectionHeader
          subtitle="Benefits"
          title="Kenapa Bergabung dengan Kami"
          description="Kami percaya bahwa tim yang bahagia menghasilkan karya yang luar biasa."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="gray">
        <SectionHeader
          subtitle="Lowongan"
          title="Posisi yang Tersedia"
          description="Temukan posisi yang sesuai dengan skill dan passion Anda."
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {openPositions.map((position, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Badge variant="default">Open</Badge>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Requirements:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild>
                  <Link href={`/kontak?position=${encodeURIComponent(position.title)}`}>
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* No Position */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Tidak Menemukan Posisi yang Sesuai?
          </h2>
          <p className="text-gray-600 mb-8">
            Kirimkan CV dan portfolio Anda ke email kami. Kami selalu terbuka
            untuk talent yang berbakat!
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:career@creativism.id">
              career@creativism.id
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/layout/section";
import { TeamCard } from "@/components/features/team-card";
import { FadeIn } from "@/components/animations/fade-in";
import { CountUp } from "@/components/animations/count-up";
import { TEAM_MEMBERS, STATS } from "@/lib/constants";
import { Target, Eye, Heart, Lightbulb, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Creativism adalah AI-Powered Digital Marketing Agency berbasis di Yogyakarta yang membantu bisnis berkembang melalui strategi digital yang terukur.",
};

const values = [
  {
    icon: Heart,
    title: "Openness",
    description:
      "Kami percaya pada transparansi dan komunikasi terbuka dengan klien.",
  },
  {
    icon: TrendingUp,
    title: "Best Practice",
    description:
      "Menerapkan metodologi dan standar terbaik dalam setiap project.",
  },
  {
    icon: Lightbulb,
    title: "Up-to-date",
    description:
      "Selalu mengikuti perkembangan terbaru dalam digital marketing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tentang <span className="text-gradient">Creativism</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Kami adalah tim passionate yang berdedikasi untuk membantu bisnis
              Indonesia berkembang melalui digital marketing yang terukur dan
              efektif.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Cerita Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Dari Yogyakarta untuk Indonesia
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Creativism didirikan pada tahun 2019 dengan satu misi sederhana:
                membantu bisnis Indonesia memanfaatkan kekuatan digital marketing
                untuk berkembang.
              </p>
              <p>
                Berawal dari sebuah tim kecil di Yogyakarta, kami terus tumbuh dan
                berkembang bersama klien-klien kami. Kini, dengan dukungan teknologi
                AI dan tim expert yang berdedikasi, kami telah membantu lebih dari
                100+ bisnis mencapai target mereka.
              </p>
              <p>
                Kami percaya bahwa setiap bisnis, besar atau kecil, berhak
                mendapatkan akses ke strategi digital marketing yang efektif dan
                terukur.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi partner digital marketing terpercaya bagi bisnis Indonesia
                yang ingin berkembang di era digital dengan memanfaatkan teknologi
                AI dan expertise manusia.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Misi</h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  • Memberikan layanan digital marketing yang terukur dan transparan
                </li>
                <li>
                  • Mengintegrasikan teknologi AI untuk efisiensi dan akurasi
                </li>
                <li>• Membangun partnership jangka panjang dengan klien</li>
                <li>• Terus berinovasi dan mengikuti perkembangan industri</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white">
        <SectionHeader
          subtitle="Nilai Kami"
          title="Yang Kami Yakini"
          description="Nilai-nilai yang menjadi fondasi dalam setiap pekerjaan kami."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="gray" id="team">
        <SectionHeader
          subtitle="Tim Kami"
          title="Meet the Team"
          description="Tim expert yang siap membantu bisnis Anda berkembang."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} {...member} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bergabung dengan 100+ Klien Kami?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis untuk mengetahui bagaimana kami dapat membantu
            bisnis Anda berkembang.
          </p>
          <a
            href="/kontak"
            className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-400 text-dark font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Hubungi Kami
            <Users className="w-5 h-5" />
          </a>
        </div>
      </Section>
    </>
  );
}

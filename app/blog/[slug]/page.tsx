import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { CTA } from "@/components/sections/cta";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: { name: string; role: string };
    content: string;
  }
> = {
  "strategi-seo-2024": {
    title: "10 Strategi SEO yang Masih Efektif di 2024",
    excerpt:
      "Pelajari strategi SEO terbaru yang akan membantu website Anda mendominasi halaman pertama Google.",
    category: "SEO",
    date: "20 Des 2024",
    readTime: "8 min",
    author: { name: "Reza Firmansyah", role: "Head of Digital" },
    content: `
      <p>SEO terus berkembang seiring dengan pembaruan algoritma Google. Di tahun 2024, ada beberapa strategi yang masih sangat efektif untuk meningkatkan ranking website Anda.</p>

      <h2>1. Fokus pada User Experience</h2>
      <p>Google semakin memprioritaskan website yang memberikan pengalaman pengguna yang baik. Core Web Vitals menjadi faktor ranking yang penting. Pastikan website Anda cepat, responsive, dan mudah dinavigasi.</p>

      <h2>2. Content yang Berkualitas dan Relevan</h2>
      <p>Content is still king. Buat konten yang menjawab pertanyaan pengguna secara komprehensif. Gunakan data, research, dan expert insights untuk meningkatkan kredibilitas.</p>

      <h2>3. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</h2>
      <p>Google menambahkan "Experience" ke dalam guidelines mereka. Tunjukkan pengalaman nyata dalam topik yang Anda bahas untuk meningkatkan trustworthiness.</p>

      <h2>4. AI-Powered Content Optimization</h2>
      <p>Manfaatkan AI tools untuk research keyword, analisis kompetitor, dan optimasi konten. Namun, pastikan human touch tetap ada dalam setiap konten yang dibuat.</p>

      <h2>5. Local SEO untuk Bisnis Lokal</h2>
      <p>Optimalkan Google Business Profile, dapatkan reviews positif, dan pastikan NAP (Name, Address, Phone) konsisten di semua platform.</p>

      <h2>Kesimpulan</h2>
      <p>SEO di 2024 membutuhkan pendekatan yang holistik. Kombinasikan technical SEO yang solid dengan konten berkualitas dan user experience yang baik untuk hasil optimal.</p>
    `,
  },
  "content-calendar-efektif": {
    title: "Cara Membuat Content Calendar yang Efektif",
    excerpt:
      "Panduan lengkap membuat content calendar untuk social media yang terorganisir dan konsisten.",
    category: "Social Media",
    date: "18 Des 2024",
    readTime: "6 min",
    author: { name: "Dinda Ayu", role: "Content Lead" },
    content: `
      <p>Content calendar adalah tools essential untuk setiap social media manager. Dengan planning yang baik, Anda bisa menjaga konsistensi dan kualitas konten.</p>

      <h2>Langkah 1: Tentukan Goals dan KPIs</h2>
      <p>Sebelum membuat calendar, tentukan dulu apa yang ingin dicapai. Apakah meningkatkan awareness, engagement, atau konversi?</p>

      <h2>Langkah 2: Kenali Audience Anda</h2>
      <p>Pahami kapan audience Anda paling aktif, jenis konten apa yang mereka sukai, dan pain points mereka.</p>

      <h2>Langkah 3: Pilih Tools yang Tepat</h2>
      <p>Gunakan tools seperti Notion, Trello, atau Google Sheets untuk membuat calendar. Pilih yang sesuai dengan workflow tim Anda.</p>

      <h2>Langkah 4: Buat Content Pillars</h2>
      <p>Tentukan 3-5 tema utama yang akan menjadi fondasi semua konten Anda. Ini memastikan variasi dan relevansi.</p>

      <h2>Langkah 5: Jadwalkan dan Review</h2>
      <p>Plot konten di calendar minimal 2 minggu ke depan. Review performa secara reguler dan sesuaikan strategi.</p>
    `,
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Blog
              </Link>
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} read
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn>
                <article
                  className="prose prose-lg max-w-none prose-headings:text-dark prose-p:text-gray-600 prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </FadeIn>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-dark flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share:
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <FadeIn delay={0.2}>
                <div className="sticky top-24 space-y-8">
                  {/* Author */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark mb-4">Author</h3>
                    <div className="flex items-center gap-3">
                      <Avatar fallback={post.author.name} size="lg" />
                      <div>
                        <div className="font-medium text-dark">
                          {post.author.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.author.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related */}
                  <div>
                    <h3 className="font-semibold text-dark mb-4">
                      Artikel Terkait
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(blogPosts)
                        .filter(([key]) => key !== slug)
                        .slice(0, 2)
                        .map(([key, relatedPost]) => (
                          <Link
                            key={key}
                            href={`/blog/${key}`}
                            className="block text-gray-600 hover:text-primary transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}

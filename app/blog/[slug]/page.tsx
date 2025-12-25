import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    image: string;
    author: { name: string; role: string; image: string };
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
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
    author: { name: "Reza Firmansyah", role: "Head of Digital", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
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

      <h2>6. Technical SEO yang Solid</h2>
      <p>Pastikan website Anda memiliki struktur yang baik, sitemap yang up-to-date, dan tidak ada broken links. Implementasi schema markup juga penting untuk rich snippets.</p>

      <h2>7. Mobile-First Indexing</h2>
      <p>Google mengutamakan versi mobile website Anda. Pastikan tampilan dan performa di mobile sama baiknya dengan desktop.</p>

      <h2>8. Internal Linking Strategy</h2>
      <p>Bangun struktur internal linking yang kuat untuk membantu Google memahami hierarchy dan relevansi konten Anda.</p>

      <h2>9. Featured Snippets Optimization</h2>
      <p>Optimasi konten Anda untuk muncul di featured snippets dengan menjawab pertanyaan secara langsung dan terstruktur.</p>

      <h2>10. Regular Content Updates</h2>
      <p>Perbarui konten lama secara berkala untuk menjaga relevansi dan freshness yang disukai Google.</p>

      <h2>Kesimpulan</h2>
      <p>SEO di 2024 membutuhkan pendekatan yang holistik. Kombinasikan technical SEO yang solid dengan konten berkualitas dan user experience yang baik untuk hasil optimal. Ingat, SEO adalah marathon, bukan sprint.</p>
    `,
  },
  "content-calendar-efektif": {
    title: "Cara Membuat Content Calendar yang Efektif",
    excerpt:
      "Panduan lengkap membuat content calendar untuk social media yang terorganisir dan konsisten.",
    category: "Social Media",
    date: "18 Des 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    author: { name: "Dinda Ayu", role: "Content Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" },
    content: `
      <p>Content calendar adalah tools essential untuk setiap social media manager. Dengan planning yang baik, Anda bisa menjaga konsistensi dan kualitas konten.</p>

      <h2>Langkah 1: Tentukan Goals dan KPIs</h2>
      <p>Sebelum membuat calendar, tentukan dulu apa yang ingin dicapai. Apakah meningkatkan awareness, engagement, atau konversi? KPI yang jelas membantu mengukur keberhasilan.</p>

      <h2>Langkah 2: Kenali Audience Anda</h2>
      <p>Pahami kapan audience Anda paling aktif, jenis konten apa yang mereka sukai, dan pain points mereka. Gunakan analytics untuk insights yang data-driven.</p>

      <h2>Langkah 3: Pilih Tools yang Tepat</h2>
      <p>Gunakan tools seperti Notion, Trello, atau Google Sheets untuk membuat calendar. Pilih yang sesuai dengan workflow tim Anda. Untuk scheduling, pertimbangkan Later, Hootsuite, atau Buffer.</p>

      <h2>Langkah 4: Buat Content Pillars</h2>
      <p>Tentukan 3-5 tema utama yang akan menjadi fondasi semua konten Anda. Ini memastikan variasi dan relevansi. Contoh: Educational, Behind the Scenes, User Generated Content, Promotional.</p>

      <h2>Langkah 5: Plan Konten 1 Bulan ke Depan</h2>
      <p>Buat outline konten minimal 2-4 minggu ke depan. Sisipkan konten seasonal dan event-based. Jangan lupa sisakan ruang untuk konten real-time.</p>

      <h2>Langkah 6: Jadwalkan dan Review</h2>
      <p>Plot konten di calendar minimal 2 minggu ke depan. Review performa secara reguler dan sesuaikan strategi berdasarkan data.</p>

      <h2>Tips Tambahan</h2>
      <ul>
        <li>Batch content creation untuk efisiensi</li>
        <li>Gunakan content repurposing</li>
        <li>A/B test untuk optimasi</li>
        <li>Track metrics secara konsisten</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Content calendar yang baik adalah fondasi social media marketing yang sukses. Dengan planning yang matang, eksekusi menjadi lebih mudah dan hasilnya lebih terukur.</p>
    `,
  },
  "ai-digital-marketing-2024": {
    title: "AI dalam Digital Marketing: Tren 2024",
    excerpt:
      "Bagaimana AI mengubah landscape digital marketing dan cara memanfaatkannya untuk bisnis Anda.",
    category: "Digital Marketing",
    date: "15 Des 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    author: { name: "Andi Prasetyo", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
    content: `
      <p>Artificial Intelligence (AI) telah mengubah cara kita melakukan digital marketing secara fundamental. Di tahun 2024, AI bukan lagi pilihan—tapi keharusan untuk tetap kompetitif.</p>

      <h2>1. AI untuk Content Creation</h2>
      <p>Tools seperti ChatGPT, Claude, dan Jasper membantu marketer membuat konten lebih cepat. Namun, human oversight tetap penting untuk kualitas dan brand voice yang konsisten.</p>

      <h2>2. Predictive Analytics</h2>
      <p>AI dapat menganalisis data historis untuk memprediksi tren dan perilaku konsumen. Ini membantu dalam planning kampanye yang lebih efektif.</p>

      <h2>3. Personalization at Scale</h2>
      <p>AI memungkinkan personalisasi konten dan penawaran untuk setiap individu user, meningkatkan relevance dan conversion rate.</p>

      <h2>4. Automated Ad Optimization</h2>
      <p>Platform seperti Google dan Meta menggunakan AI untuk optimasi bidding, targeting, dan creative secara otomatis. Smart campaigns semakin pintar dari waktu ke waktu.</p>

      <h2>5. Chatbots dan Customer Service</h2>
      <p>AI-powered chatbots dapat handle customer queries 24/7, meningkatkan response time dan customer satisfaction.</p>

      <h2>6. Image dan Video Generation</h2>
      <p>Tools seperti Midjourney, DALL-E, dan Runway memungkinkan pembuatan visual assets tanpa photoshoot tradisional.</p>

      <h2>7. SEO dan Content Optimization</h2>
      <p>AI tools dapat menganalisis kompetitor, suggest keywords, dan bahkan mengoptimasi konten untuk search engines.</p>

      <h2>Cara Memulai dengan AI Marketing</h2>
      <ul>
        <li>Start small dengan satu use case</li>
        <li>Invest dalam training tim</li>
        <li>Pilih tools yang terintegrasi dengan workflow existing</li>
        <li>Selalu review dan validate AI output</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>AI adalah powerful tool yang dapat meningkatkan efisiensi dan efektivitas marketing Anda. Kunci sukses adalah menggunakan AI sebagai assistant, bukan replacement untuk kreativitas dan strategi manusia.</p>
    `,
  },
  "panduan-google-ads-pemula": {
    title: "Panduan Lengkap Google Ads untuk Pemula",
    excerpt:
      "Mulai dari setup hingga optimasi, pelajari cara menjalankan Google Ads yang menghasilkan ROI.",
    category: "Google Ads",
    date: "12 Des 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=1200&h=600&fit=crop",
    author: { name: "Reza Firmansyah", role: "Head of Digital", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
    content: `
      <p>Google Ads adalah salah satu platform advertising paling powerful untuk menjangkau potential customers. Panduan ini akan membantu Anda memulai dari nol.</p>

      <h2>Apa itu Google Ads?</h2>
      <p>Google Ads adalah platform iklan pay-per-click (PPC) di mana Anda membayar setiap kali seseorang mengklik iklan Anda. Iklan dapat muncul di Google Search, YouTube, Gmail, dan Google Display Network.</p>

      <h2>Setup Account Google Ads</h2>
      <ol>
        <li>Buat account di ads.google.com</li>
        <li>Set billing information</li>
        <li>Tentukan business goals Anda</li>
        <li>Setup conversion tracking</li>
      </ol>

      <h2>Jenis Kampanye Google Ads</h2>
      <ul>
        <li><strong>Search Ads:</strong> Iklan teks di hasil pencarian Google</li>
        <li><strong>Display Ads:</strong> Banner ads di website partner Google</li>
        <li><strong>Shopping Ads:</strong> Iklan produk dengan gambar dan harga</li>
        <li><strong>Video Ads:</strong> Iklan di YouTube</li>
        <li><strong>App Ads:</strong> Promosi aplikasi mobile</li>
      </ul>

      <h2>Keyword Research</h2>
      <p>Gunakan Google Keyword Planner untuk menemukan keywords yang relevan. Fokus pada:</p>
      <ul>
        <li>Search volume</li>
        <li>Competition level</li>
        <li>Cost per click (CPC)</li>
        <li>Search intent</li>
      </ul>

      <h2>Membuat Ad Copy yang Efektif</h2>
      <p>Tips untuk ad copy yang converts:</p>
      <ul>
        <li>Include keyword di headline</li>
        <li>Highlight unique selling proposition</li>
        <li>Add clear call-to-action</li>
        <li>Use numbers dan statistics</li>
      </ul>

      <h2>Optimasi Landing Page</h2>
      <p>Landing page harus relevan dengan iklan dan optimized untuk conversion. Pastikan loading cepat, mobile-friendly, dan memiliki clear CTA.</p>

      <h2>Monitoring dan Optimasi</h2>
      <p>Review metrics secara berkala:</p>
      <ul>
        <li>Click-through rate (CTR)</li>
        <li>Conversion rate</li>
        <li>Cost per conversion</li>
        <li>Quality Score</li>
        <li>Return on ad spend (ROAS)</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Google Ads membutuhkan learning curve, tapi dengan strategi yang tepat, bisa menjadi channel acquisition yang sangat profitable. Start small, test, dan scale yang works.</p>
    `,
  },
  "instagram-reels-engagement": {
    title: "Meningkatkan Engagement Instagram dengan Reels",
    excerpt:
      "Tips dan trik membuat Instagram Reels yang viral dan meningkatkan engagement akun bisnis.",
    category: "Social Media",
    date: "10 Des 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=600&fit=crop",
    author: { name: "Lisa Permata", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
    content: `
      <p>Instagram Reels telah menjadi salah satu fitur terpenting untuk meningkatkan reach dan engagement. Dengan algoritma yang mendukung short-form video, Reels adalah kesempatan emas untuk bisnis.</p>

      <h2>Mengapa Reels Penting?</h2>
      <p>Reels mendapat prioritas di algoritma Instagram, muncul di Explore page, dan memiliki potential reach yang jauh lebih besar dibanding post biasa.</p>

      <h2>Anatomi Reels yang Viral</h2>
      <ul>
        <li><strong>Hook dalam 1 detik pertama:</strong> Capture attention immediately</li>
        <li><strong>Durasi optimal:</strong> 7-15 detik untuk engagement tertinggi</li>
        <li><strong>Audio trending:</strong> Gunakan sounds yang sedang viral</li>
        <li><strong>Text overlay:</strong> Banyak yang watch tanpa sound</li>
      </ul>

      <h2>Ide Konten Reels untuk Bisnis</h2>
      <ul>
        <li>Behind the scenes</li>
        <li>Product showcase dengan twist kreatif</li>
        <li>Tips dan tutorials cepat</li>
        <li>Before-after transformations</li>
        <li>Customer testimonials</li>
        <li>Day in the life</li>
        <li>Trending challenges dengan brand twist</li>
      </ul>

      <h2>Tips Editing</h2>
      <p>Gunakan apps seperti CapCut, InShot, atau built-in Instagram editor. Tambahkan:</p>
      <ul>
        <li>Transisi yang smooth</li>
        <li>Text yang eye-catching</li>
        <li>Speed variations</li>
        <li>Color grading yang consistent</li>
      </ul>

      <h2>Optimasi untuk Algorithm</h2>
      <ul>
        <li>Post di peak hours audience Anda</li>
        <li>Gunakan 3-5 relevant hashtags</li>
        <li>Write engaging caption</li>
        <li>Reply ke semua comments</li>
        <li>Share Reels ke Stories</li>
      </ul>

      <h2>Metrics yang Perlu Ditrack</h2>
      <ul>
        <li>Views dan reach</li>
        <li>Likes dan comments</li>
        <li>Shares dan saves</li>
        <li>Profile visits dari Reels</li>
        <li>Follower growth</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Konsistensi adalah kunci. Post Reels secara regular, experiment dengan berbagai format, dan selalu analyze data untuk improvement. Reels adalah investasi waktu yang worth it untuk growth Instagram Anda.</p>
    `,
  },
  "mengukur-roi-digital-marketing": {
    title: "Cara Mengukur ROI Digital Marketing",
    excerpt:
      "Metrik dan tools yang perlu Anda ketahui untuk mengukur efektivitas kampanye digital marketing.",
    category: "Digital Marketing",
    date: "8 Des 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    author: { name: "Andi Prasetyo", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
    content: `
      <p>Mengukur ROI (Return on Investment) adalah crucial untuk memastikan budget marketing Anda digunakan secara efektif. Tanpa measurement yang tepat, Anda hanya menebak-nebak.</p>

      <h2>Formula Dasar ROI</h2>
      <p>ROI = (Revenue - Cost) / Cost x 100%</p>
      <p>Contoh: Jika Anda spend Rp 10 juta dan generate Rp 50 juta revenue, ROI = (50-10)/10 x 100% = 400%</p>

      <h2>Key Metrics per Channel</h2>

      <h3>SEO</h3>
      <ul>
        <li>Organic traffic growth</li>
        <li>Keyword rankings</li>
        <li>Organic conversion rate</li>
        <li>Revenue from organic traffic</li>
      </ul>

      <h3>Paid Ads (Google/Meta)</h3>
      <ul>
        <li>ROAS (Return on Ad Spend)</li>
        <li>Cost per click (CPC)</li>
        <li>Cost per acquisition (CPA)</li>
        <li>Conversion rate</li>
      </ul>

      <h3>Social Media</h3>
      <ul>
        <li>Engagement rate</li>
        <li>Follower growth rate</li>
        <li>Click-through rate</li>
        <li>Social media-attributed conversions</li>
      </ul>

      <h3>Email Marketing</h3>
      <ul>
        <li>Open rate</li>
        <li>Click rate</li>
        <li>Conversion rate</li>
        <li>Revenue per email</li>
      </ul>

      <h2>Tools untuk Tracking</h2>
      <ul>
        <li><strong>Google Analytics 4:</strong> Website analytics</li>
        <li><strong>Google Tag Manager:</strong> Conversion tracking</li>
        <li><strong>Meta Pixel:</strong> Facebook/Instagram tracking</li>
        <li><strong>UTM Parameters:</strong> Campaign tracking</li>
        <li><strong>CRM:</strong> Lead to customer tracking</li>
      </ul>

      <h2>Attribution Models</h2>
      <p>Pahami berbagai attribution models:</p>
      <ul>
        <li><strong>Last Click:</strong> Credit ke touchpoint terakhir</li>
        <li><strong>First Click:</strong> Credit ke touchpoint pertama</li>
        <li><strong>Linear:</strong> Credit dibagi rata</li>
        <li><strong>Data-Driven:</strong> AI-based attribution</li>
      </ul>

      <h2>Tips Mengukur ROI</h2>
      <ul>
        <li>Set goals yang SMART sebelum campaign</li>
        <li>Track semua touchpoints</li>
        <li>Consider customer lifetime value (CLV)</li>
        <li>Account untuk brand awareness (harder to measure)</li>
        <li>Review dan adjust regularly</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>ROI measurement adalah ongoing process, bukan one-time activity. Dengan tracking yang proper, Anda bisa make data-driven decisions dan terus improve marketing performance.</p>
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

      {/* Featured Image */}
      <div className="container-custom -mt-10 mb-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn>
                <article
                  className="prose prose-lg max-w-none prose-headings:text-dark prose-p:text-gray-600 prose-a:text-primary prose-li:text-gray-600 prose-strong:text-dark"
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
                      <Avatar src={post.author.image} alt={post.author.name} fallback={post.author.name} size="lg" />
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
                        .slice(0, 3)
                        .map(([key, relatedPost]) => (
                          <Link
                            key={key}
                            href={`/blog/${key}`}
                            className="block text-gray-600 hover:text-primary transition-colors text-sm"
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

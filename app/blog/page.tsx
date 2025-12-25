import { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { BlogCard } from "@/components/features/blog-card";
import { FadeIn } from "@/components/animations/fade-in";
import { Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, insight, dan panduan digital marketing dari tim Creativism. Pelajari strategi terbaru untuk mengembangkan bisnis Anda.",
};

const categories = [
  "Semua",
  "SEO",
  "Social Media",
  "Digital Marketing",
  "Google Ads",
  "Meta Ads",
  "Tips & Tutorial",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">
                Insight & Tips
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog & <span className="text-gradient">Artikel</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Tips, insight, dan panduan digital marketing untuk membantu bisnis
              Anda berkembang di era digital.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <Section background="white" className="py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Blog Grid */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-dark hover:border-primary hover:text-primary transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dapatkan Update Terbaru
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe newsletter kami untuk mendapatkan tips dan insight digital
            marketing langsung ke inbox Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-accent text-dark font-semibold rounded-xl hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

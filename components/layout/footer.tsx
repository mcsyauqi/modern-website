import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Tim", href: "/tentang#team" },
    { label: "Karir", href: "/karir" },
    { label: "Blog", href: "/blog" },
  ],
  services: SERVICES.slice(0, 6).map((s) => ({
    label: s.title,
    href: `/layanan/${s.slug}`,
  })),
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
    { label: "Harga", href: "/harga" },
    { label: "Portofolio", href: "/portofolio" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* ==================== NEWSLETTER SECTION ==================== */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Text */}
              <div className="max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Dapatkan Tips Digital Marketing
                </h3>
                <p className="text-blue-300 text-base">
                  Subscribe newsletter kami untuk insight dan tips terbaru.
                </p>
              </div>

              {/* Form */}
              <form className="flex gap-3 w-full lg:w-auto">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full lg:w-80 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent h-12"
                />
                <Button variant="secondary" className="h-12 px-6 shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAIN FOOTER ==================== */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
              {/* Column 1: Brand */}
              <div>
                <Link href="/" className="inline-flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">C</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full" />
                  </div>
                  <span className="font-bold text-2xl">Creativism</span>
                </Link>

                <p className="text-blue-300 leading-relaxed mb-8">
                  {SITE_CONFIG.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 shrink-0" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-blue-300">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{SITE_CONFIG.address}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-blue-900 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: Perusahaan */}
              <div>
                <h4 className="font-bold text-lg mb-8">Perusahaan</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-blue-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Layanan */}
              <div>
                <h4 className="font-bold text-lg mb-8">Layanan</h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-blue-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Support */}
              <div>
                <h4 className="font-bold text-lg mb-8">Support</h4>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-blue-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM BAR ==================== */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-blue-400 text-sm">
                &copy; {new Date().getFullYear()} Creativism. All rights reserved.
              </p>
              <div className="flex gap-8 text-sm text-blue-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

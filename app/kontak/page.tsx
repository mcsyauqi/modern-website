import { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/animations/fade-in";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Creativism untuk konsultasi digital marketing gratis. Kami siap membantu bisnis Anda berkembang.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat dengan kami",
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: SITE_CONFIG.address,
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hubungi <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Siap untuk memulai? Konsultasi gratis dengan tim expert kami dan
              temukan solusi digital marketing yang tepat untuk bisnis Anda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-dark mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-gray-600 mb-8">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam
                  1x24 jam.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium text-dark hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-dark">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Operating Hours */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-dark">Jam Operasional</span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span className="font-medium">09:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu</span>
                      <span className="font-medium text-gray-400">Tutup</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-dark mb-4">Ikuti Kami</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray" className="py-12">
        <FadeIn>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20698575167!2d110.29786685!3d-7.7970791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1703424000000!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Creativism"
            />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

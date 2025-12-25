"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

const trustItems = [
  "Tidak ada commitment",
  "Response dalam 1x24 jam",
  "Gratis analisis awal",
];

export function CTA() {
  return (
    <Section background="gradient" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Siap Membawa Bisnis Anda ke Level Berikutnya?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Konsultasi gratis dengan tim expert kami. Kami siap membantu Anda
          merancang strategi digital marketing yang tepat untuk bisnis Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild size="xl" variant="secondary">
            <Link href="/kontak">
              Jadwalkan Konsultasi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-dark"
          >
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </Button>
        </div>

        {/* Trust items */}
        <div className="flex flex-wrap justify-center gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-blue-100"
            >
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-4 h-4 text-dark" />
              </div>
              <span className="text-base">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

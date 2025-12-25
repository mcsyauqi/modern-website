"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/features/service-card";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <Section background="gray" id="services">
      <SectionHeader
        subtitle="Layanan Kami"
        title="Solusi Digital Marketing Lengkap"
        description="Dari strategi hingga eksekusi, kami menyediakan layanan digital marketing end-to-end yang didukung oleh teknologi AI untuk hasil optimal."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="/layanan">
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

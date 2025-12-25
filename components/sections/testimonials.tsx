"use client";

import React from "react";
import { Section, SectionHeader } from "@/components/layout/section";
import { TestimonialCard } from "@/components/features/testimonial-card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section background="white" id="testimonials">
      <SectionHeader
        subtitle="Testimonial"
        title="Apa Kata Klien Kami"
        description="Dengarkan langsung dari klien-klien yang telah merasakan hasil nyata dari layanan Creativism."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
        ))}
      </div>
    </Section>
  );
}

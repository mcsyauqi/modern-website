"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

interface FAQProps {
  items?: typeof FAQ_ITEMS;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function FAQ({
  items = FAQ_ITEMS,
  title = "Pertanyaan yang Sering Diajukan",
  subtitle = "FAQ",
  description = "Temukan jawaban untuk pertanyaan umum tentang layanan dan proses kerja kami.",
}: FAQProps) {
  return (
    <Section background="gray" id="faq">
      <SectionHeader subtitle={subtitle} title={title} description={description} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 py-2 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-medium py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  );
}

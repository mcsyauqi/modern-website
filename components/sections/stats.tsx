"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { CountUp } from "@/components/animations/count-up";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <Section background="gradient" className="py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
            </div>
            <div className="text-blue-100 text-sm md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

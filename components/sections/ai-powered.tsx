"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, BarChart3, Cog, Users, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { AI_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  BarChart3,
  Cog,
  Users,
};

export function AIPowered() {
  return (
    <Section background="dark" id="ai-powered">
      <SectionHeader
        subtitle="AI-Powered"
        title="Kenapa AI-Powered Marketing?"
        description="Teknologi AI membantu kami memberikan hasil yang lebih cepat, akurat, dan efisien untuk bisnis Anda."
        light
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {AI_FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Sparkles;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-dark" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>

              {/* Decorative glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          );
        })}
      </div>

      {/* Workflow visualization */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 relative"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            AI-Powered Workflow
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { label: "Data Collection", icon: "📊" },
              { label: "AI Analysis", icon: "🤖" },
              { label: "Strategy", icon: "🎯" },
              { label: "Execution", icon: "⚡" },
              { label: "Optimization", icon: "📈" },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <span className="text-sm text-blue-100 text-center font-medium">
                    {step.label}
                  </span>
                </motion.div>
                {index < 4 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

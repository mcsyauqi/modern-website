"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  target: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  index?: number;
}

export function PricingCard({
  name,
  target,
  price,
  period,
  features,
  highlighted = false,
  cta,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "relative rounded-2xl p-8",
        highlighted
          ? "bg-gradient-to-br from-primary to-blue-700 text-white scale-105 shadow-2xl shadow-primary/30"
          : "bg-white border-2 border-gray-100"
      )}
    >
      {/* Popular badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-dark text-sm font-bold rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          Paling Populer
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3
          className={cn(
            "text-2xl font-bold mb-1",
            highlighted ? "text-white" : "text-dark"
          )}
        >
          {name}
        </h3>
        <p className={highlighted ? "text-blue-100" : "text-gray-500"}>
          {target}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div
          className={cn(
            "text-3xl font-bold",
            highlighted ? "text-white" : "text-dark"
          )}
        >
          {price}
        </div>
        <div className={highlighted ? "text-blue-200" : "text-gray-500"}>
          {period}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                highlighted ? "bg-accent text-dark" : "bg-primary/10 text-primary"
              )}
            >
              <Check className="w-3 h-3" />
            </div>
            <span className={highlighted ? "text-blue-50" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant={highlighted ? "white" : "default"}
        className="w-full"
        size="lg"
      >
        <Link href="/kontak">{cta}</Link>
      </Button>
    </motion.div>
  );
}

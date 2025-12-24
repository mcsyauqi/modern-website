"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  index?: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  content,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 card-hover"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <Quote className="w-5 h-5 text-white" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-accent fill-accent" : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-6 leading-relaxed">{content}</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <Avatar src={image} alt={name} size="lg" fallback={name} />
        <div>
          <h4 className="font-bold text-dark">{name}</h4>
          <p className="text-sm text-gray-500">
            {role} di {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

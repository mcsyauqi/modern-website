"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  category: string;
  date: string;
  readTime?: string;
  index?: number;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime = "5 min",
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 card-hover">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/20">
                  {title[0]}
                </span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge
                variant={
                  category === "SEO"
                    ? "default"
                    : category === "Social Media"
                    ? "secondary"
                    : "outline"
                }
              >
                {category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">{excerpt}</p>

            {/* Read more */}
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

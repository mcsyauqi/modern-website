"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  title: string;
  slug: string;
  client: string;
  category: string;
  image?: string;
  results?: Array<{ metric: string; value: string }>;
  index?: number;
}

export function PortfolioCard({
  title,
  slug,
  client,
  category,
  image,
  results,
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portofolio/${slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-dark aspect-[4/3]">
          {/* Image */}
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <Badge variant="secondary" className="self-start mb-3">
              {category}
            </Badge>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-blue-200 text-sm mb-4">{client}</p>

            {/* Results */}
            {results && results.length > 0 && (
              <div className="flex gap-4 mb-4">
                {results.slice(0, 2).map((result, i) => (
                  <div key={i} className="text-white">
                    <div className="text-xl font-bold text-accent">
                      {result.value}
                    </div>
                    <div className="text-xs text-blue-200">{result.metric}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Arrow */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-all">
              <ArrowUpRight className="w-5 h-5 text-white group-hover:text-dark" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Globe,
  Target,
  Megaphone,
  Palette,
  Video,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Search,
  Globe,
  Target,
  Megaphone,
  Palette,
  Video,
  Camera,
};

interface ServiceCardProps {
  title: string;
  slug: string;
  icon: string;
  brief: string;
  aiBadge: string;
  index?: number;
}

export function ServiceCard({
  title,
  slug,
  icon,
  brief,
  aiBadge,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/layanan/${slug}`}>
        <div className="group relative h-full bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 card-hover">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{brief}</p>

          {/* AI Badge */}
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="ai" className="gap-1">
              <Sparkles className="w-3 h-3" />
              {aiBadge}
            </Badge>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  index?: number;
}

export function TeamCard({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      {/* Image */}
      <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{name[0]}</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Linkedin className="w-5 h-5 text-dark" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Twitter className="w-5 h-5 text-dark" />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-dark mb-1">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      {bio && <p className="text-gray-500 text-sm max-w-xs mx-auto">{bio}</p>}
    </motion.div>
  );
}

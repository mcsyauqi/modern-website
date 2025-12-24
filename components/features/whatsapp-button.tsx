"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Halo%20Creativism,%20saya%20tertarik%20untuk%20konsultasi.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">Chat WhatsApp</span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20" />
    </motion.a>
  );
}

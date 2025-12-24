"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  company: z.string().optional(),
  service: z.string().min(1, "Pilih layanan yang diminati"),
  budget: z.string().min(1, "Pilih range budget"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormData = z.infer<typeof formSchema>;

const budgetOptions = [
  { value: "< 5jt", label: "< Rp 5.000.000" },
  { value: "5-10jt", label: "Rp 5.000.000 - Rp 10.000.000" },
  { value: "10-25jt", label: "Rp 10.000.000 - Rp 25.000.000" },
  { value: "25-50jt", label: "Rp 25.000.000 - Rp 50.000.000" },
  { value: "> 50jt", label: "> Rp 50.000.000" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">Terima Kasih!</h3>
        <p className="text-gray-600 mb-6">
          Pesan Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Kirim Pesan Lain</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Nama Lengkap *
          </label>
          <Input
            {...register("name")}
            placeholder="Masukkan nama lengkap"
            error={!!errors.name}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Email *
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="nama@email.com"
            error={!!errors.email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Nomor WhatsApp *
          </label>
          <Input
            {...register("phone")}
            placeholder="08xxxxxxxxxx"
            error={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Perusahaan
          </label>
          <Input {...register("company")} placeholder="Nama perusahaan (opsional)" />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Layanan yang Diminati *
          </label>
          <Select onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih layanan" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Range Budget *
          </label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih range budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-dark mb-2">
          Detail Project *
        </label>
        <Textarea
          {...register("message")}
          placeholder="Ceritakan tentang bisnis dan kebutuhan Anda..."
          rows={5}
          error={!!errors.message}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Kirim Pesan
          </>
        )}
      </Button>
    </form>
  );
}

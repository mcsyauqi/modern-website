import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  id?: string;
  background?: "white" | "gray" | "dark" | "gradient" | "transparent";
}

export function Section({
  children,
  className,
  containerSize = "lg",
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "gradient-hero text-white",
    gradient: "gradient-primary text-white",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider mb-3",
            light ? "text-accent" : "text-primary"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg max-w-3xl",
            centered && "mx-auto",
            light ? "text-blue-100" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

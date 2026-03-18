"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col gap-4 mb-14", alignClass, className)}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text">
        {title}
      </h2>
      {/* Accent bar */}
      <div
        className={cn(
          "h-1 w-16 rounded-full bg-gradient-to-r from-brand to-brand-light",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

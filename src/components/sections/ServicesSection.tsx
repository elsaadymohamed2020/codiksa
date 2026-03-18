"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { Code, Smartphone, Palette, Cloud, Database, Cpu } from "lucide-react";

import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Services");

  const SERVICES = [
    {
      title: t("web_dev"),
      description: t("web_dev_desc"),
      icon: Code,
      tags: ["React", "Next.js", "Node.js"],
    },
    {
      title: t("mobile"),
      description: t("mobile_desc"),
      icon: Smartphone,
      tags: ["Flutter", "React Native", "Swift"],
    },
    {
      title: t("ui_ux"),
      description: t("ui_ux_desc"),
      icon: Palette,
      tags: ["Figma", "Prototyping", "Research"],
    },
    {
      title: t("cloud"),
      description: t("cloud_desc"),
      icon: Cloud,
      tags: ["AWS", "Docker", "CI/CD"],
    },
    {
      title: t("data"),
      description: t("data_desc"),
      icon: Database,
      tags: ["PostgreSQL", "Prisma", "Python"],
    },
    {
      title: t("ai"),
      description: t("ai_desc"),
      icon: Cpu,
      tags: ["OpenAI", "TensorFlow", "NLP"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface-subtle relative">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

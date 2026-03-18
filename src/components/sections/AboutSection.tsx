"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  const MILESTONES = [
    {
      year: t("milestones.m1_year"),
      title: t("milestones.m1_title"),
      description: t("milestones.m1_desc"),
    },
    {
      year: t("milestones.m2_year"),
      title: t("milestones.m2_title"),
      description: t("milestones.m2_desc"),
    },
    {
      year: t("milestones.m3_year"),
      title: t("milestones.m3_title"),
      description: t("milestones.m3_desc"),
    },
    {
      year: t("milestones.m4_year"),
      title: t("milestones.m4_title"),
      description: t("milestones.m4_desc"),
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">
              {t("heading")}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t("description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {[
                { label: t("values.innovation"), icon: "🚀" },
                { label: t("values.performance"), icon: "⚡" },
                { label: t("values.scalability"), icon: "📈" },
              ].map((v) => (
                <div key={v.label} className="p-4 rounded-xl bg-surface-subtle border border-surface-muted flex flex-col items-center gap-2">
                  <span className="text-2xl">{v.icon}</span>
                  <span className="font-semibold text-sm">{v.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-surface-muted hidden md:block" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-surface z-10 hidden md:block" />
                  <div className="flex-1 p-6 rounded-xl bg-surface-subtle border border-surface-muted hover:border-brand/30 transition-colors">
                    <div className="text-brand font-bold text-sm mb-1 uppercase tracking-wider">
                      {m.year}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("Index");

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">

      {/* ═══════════════════════════════════════
          BACKGROUND — full bleed image + fade layers
          Image starts below navbar (top-20 = 80px)
          ═══════════════════════════════════════ */}
      <div className="absolute inset-0 top-20 -z-10">
        {/* Image covers the section below navbar */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team working together"
          fill
          className="object-cover object-center"
          priority
        />

        {/* 
          Gradient tint under the text.
          RTL-aware: Starts from the left in English, starts from the right in Arabic.
        */}
        <div className="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-white/95 via-white/70 to-transparent dark:from-black/95 dark:via-black/70 dark:to-transparent w-full lg:w-3/4 z-10" />
        
        {/* Subtle overall tint to help text contrast */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 z-10 pointer-events-none" />
      </div>

      {/* ═══════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════ */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative space-y-8 text-center lg:text-start z-10"
          >

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{ textShadow: '0 2px 20px var(--background), 0 4px 40px var(--background)' }}
            >
              <span className="text-text-primary">{t("title_part1")}</span>
              <br />
              <span className="gradient-text">{t("title_part2")}</span>
              <br />
              <span className="text-text-primary">{t("title_part3")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ textShadow: '0 1px 12px var(--background), 0 2px 24px var(--background)' }}
            >
              {t("subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base shadow-lg shadow-brand/25 hover:shadow-brand/40"
                asChild
              >
                <Link href="/#contact" className="gap-2">
                  {t("cta_start")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base"
                asChild
              >
                <Link href="/#projects">{t("cta_explore")}</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-surface-muted/50 mt-4"
            >
              {[
                { label: t("stats.projects"), value: 150, suffix: "+" },
                { label: t("stats.clients"), value: 80, suffix: "+" },
                { label: t("stats.experience"), value: 8, suffix: "" },
                { label: t("stats.team"), value: 25, suffix: "" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-start">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — intentionally empty, image bleeds through */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
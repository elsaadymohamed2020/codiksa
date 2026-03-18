"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const t = useTranslations("Index");

  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Glow orbs */}
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-brand/20 blur-[120px] opacity-60" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-light/15 blur-[100px] opacity-50" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand/30 bg-brand/10 text-brand-light">
              <Sparkles className="w-3 h-3" />
              {t("badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-text-primary">{t("title_part1")}</span><br />
            <span className="gradient-text">{t("title_part2")}</span><br />
            <span className="text-text-primary">{t("title_part3")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
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
              <Link href="/#projects">
                {t("cta_explore")}
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-surface-muted/50 mt-8"
          >
            {[
              { label: t("stats.projects"), value: 150, suffix: "+" },
              { label: t("stats.clients"), value: 80, suffix: "+" },
              { label: t("stats.experience"), value: 8, suffix: "" },
              { label: t("stats.team"), value: 25, suffix: "" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}


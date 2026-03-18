"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-24 bg-surface">
      <Container>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{t("email")}</h4>
                <p className="text-text-secondary text-sm">hello@codiksa.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{t("phone")}</h4>
                <p className="text-text-secondary text-sm">+20 123 456 7890</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">{t("office")}</h4>
                <p className="text-text-secondary text-sm">{t("address")}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <Card className="p-2 sm:p-4">
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("form.name_label")}</label>
                    <Input placeholder={t("form.name_placeholder")} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("form.email_label")}</label>
                    <Input type="email" placeholder={t("form.email_placeholder")} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("form.subject_label")}</label>
                  <Input placeholder={t("form.subject_placeholder")} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("form.message_label")}</label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-surface-muted bg-surface px-3 py-2 text-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t("form.message_placeholder")}
                  />
                </div>
                <Button className="w-full gap-2">
                  {t("form.send_btn")}
                  <Send className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="
        flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
        border border-surface-muted bg-surface-card/50 backdrop-blur-sm
        text-text-secondary hover:text-brand hover:border-brand/30
        transition-all duration-300 disabled:opacity-50
      "
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">
        {locale === "ar" ? "EN" : "عربي"}
      </span>
    </button>
  );
}

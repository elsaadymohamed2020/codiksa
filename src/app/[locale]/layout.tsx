import type { Metadata } from "next";
import { Outfit, Cairo } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Codiksa Agency",
  description: "Building the Future of Digital Products",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const fontVariable = locale === "ar" ? cairo.variable : outfit.variable;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`${outfit.variable} ${cairo.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            <SmoothScrollProvider>
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Cairo, Playfair_Display, Amiri } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amaken International Group | A Vision… Followed by Success",
    template: "%s | Amaken International Group",
  },
  description:
    "Amaken International Group - Leading provider of professional appraisal, consulting, and real estate services in Saudi Arabia since 2010.",
  keywords: [
    "appraisal",
    "valuation",
    "consulting",
    "real estate",
    "Saudi Arabia",
    "property management",
    "feasibility studies",
  ],
  authors: [{ name: "Amaken International Group" }],
  creator: "Amaken International Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Amaken International Group",
    title: "Amaken International Group | A Vision… Followed by Success",
    description:
      "Leading provider of professional appraisal, consulting, and real estate services in Saudi Arabia since 2010.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaken International Group",
    description: "A Vision… Followed by Success",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

import { I18nProvider } from "@/lib/i18n/context";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppContact } from "@/components/ui/whatsapp-contact";
import SupportChat from "@/components/ui/support-chat";
import { CallIcon } from "@/components/ui/call-icon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} ${playfair.variable} ${amiri.variable} font-sans antialiased`}
      >
        <I18nProvider>
          <AuthProvider>
            {children}
            <WhatsAppContact />
            <SupportChat />
            <CallIcon />
            <Toaster />
          </AuthProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}

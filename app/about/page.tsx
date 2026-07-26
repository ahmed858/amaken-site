"use client";

import { I18nProvider } from "@/lib/i18n/context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutFounder } from "@/components/about/about-founder";
import { AboutValues } from "@/components/about/about-values";

export default function AboutPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <AboutHero />
          <AboutTimeline />
          <AboutFounder />
          <AboutValues />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

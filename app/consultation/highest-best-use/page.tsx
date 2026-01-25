"use client"

import { I18nProvider } from "@/lib/i18n/context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HBUHero } from "@/components/consultation/hbu/hbu-hero"
import { HBUExplanation } from "@/components/consultation/hbu/hbu-explanation"
import { HBUMethodology } from "@/components/consultation/hbu/hbu-methodology"
import { HBUCTA } from "@/components/consultation/hbu/hbu-cta"

export default function HighestBestUsePage() {
  return (
    <I18nProvider>
      <div className="min-h-screen division-consulting">
        <Header />
        <main>
          <HBUHero />
          <HBUExplanation />
          <HBUMethodology />
          <HBUCTA />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

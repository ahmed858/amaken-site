"use client"

import { I18nProvider } from "@/lib/i18n/context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MethodsHero } from "@/components/appraisal/methods/methods-hero"
import { MethodsContent } from "@/components/appraisal/methods/methods-content"
import { MethodsFAQ } from "@/components/appraisal/methods/methods-faq"

export default function ValuationMethodsPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen division-appraisal">
        <Header />
        <main>
          <MethodsHero />
          <MethodsContent />
          <MethodsFAQ />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

"use client"

import { I18nProvider } from "@/lib/i18n/context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FeasibilityHero } from "@/components/consultation/feasibility/feasibility-hero"
import { FeasibilityBenefits } from "@/components/consultation/feasibility/feasibility-benefits"
import { FeasibilityProcess } from "@/components/consultation/feasibility/feasibility-process"
import { FeasibilityDeliverables } from "@/components/consultation/feasibility/feasibility-deliverables"
import { FeasibilityCTA } from "@/components/consultation/feasibility/feasibility-cta"

export default function FeasibilityPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen division-consulting">
        <Header />
        <main>
          <FeasibilityHero />
          <FeasibilityBenefits />
          <FeasibilityProcess />
          <FeasibilityDeliverables />
          <FeasibilityCTA />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

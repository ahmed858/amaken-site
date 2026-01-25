"use client"


import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ConsultingHero } from "@/components/consultation/consulting-hero"
import { ConsultingServices } from "@/components/consultation/consulting-services"
import { ConsultingProcess } from "@/components/consultation/consulting-process"
import { ConsultingCaseStudies } from "@/components/consultation/consulting-case-studies"
import { ConsultingCTA } from "@/components/consultation/consulting-cta"

export default function consultationPage() {
  return (
    <div className="min-h-screen division-consulting">
      <Header />
      <main>
        <ConsultingHero />
        <ConsultingServices />
        <ConsultingProcess />
        <ConsultingCaseStudies />
        <ConsultingCTA />
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { ConsultingHero } from "@/components/consultation/oldcomponant/consulting-hero"
import { ConsultingServices } from "@/components/consultation/oldcomponant/consulting-services"
import { ConsultingProcess } from "@/components/consultation/oldcomponant/consulting-process"
import { ConsultingCaseStudies } from "@/components/consultation/oldcomponant/consulting-case-studies"
import { ConsultingCTA } from "@/components/consultation/oldcomponant/consulting-cta"

export default function consultationPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <ConsultingCaseStudies />
      <ConsultingCTA />
    </>
  )
}

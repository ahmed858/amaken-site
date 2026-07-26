"use client"

import { MethodsHero } from "@/components/appraisal/methods/methods-hero"
import { MethodsContent } from "@/components/appraisal/methods/methods-content"
import { MethodsFAQ } from "@/components/appraisal/methods/methods-faq"

export default function ValuationMethodsPage() {
  return (
    <>
      <MethodsHero />
      <MethodsContent />
      <MethodsFAQ />
    </>
  )
}

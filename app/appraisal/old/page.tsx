"use client"

import { AppraisalHero } from "@/components/appraisal/appraisal-hero"
import { AppraisalServices } from "@/components/appraisal/appraisal-services"
import { Plans } from "@/components/appraisal/plans"
import { AppraisalAccreditations } from "@/components/appraisal/appraisal-accreditations"
import { AppraisalIndustries } from "@/components/appraisal/appraisal-industries"
import { AppraisalCTA } from "@/components/appraisal/appraisal-cta"
import { MethodsFAQ } from "@/components/appraisal/methods/methods-faq"

export default function AppraisalPage() {
  return (
    <>
      <AppraisalHero />
      <AppraisalServices />
      <Plans />
      < AppraisalAccreditations />
      <AppraisalIndustries />
      <AppraisalCTA />
      <MethodsFAQ />
    </>
  )
}

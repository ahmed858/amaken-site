"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AppraisalHero } from "@/components/appraisal/appraisal-hero"
import { AppraisalServices } from "@/components/appraisal/appraisal-services"
import { StudyProcess } from "@/components/appraisal/study-process"
import { AppraisalAccreditations } from "@/components/appraisal/appraisal-accreditations"
import { AppraisalIndustries } from "@/components/appraisal/appraisal-industries"
import { AppraisalCTA } from "@/components/appraisal/appraisal-cta"

export default function AppraisalPage() {
  return (
    <div className="min-h-screen division-appraisal">
      <Header />
      <main>
        <AppraisalHero />
        <AppraisalServices />
        <StudyProcess />
        <AppraisalAccreditations />
        <AppraisalIndustries />
        <AppraisalCTA />
      </main>
      <Footer />
    </div>
  )
}

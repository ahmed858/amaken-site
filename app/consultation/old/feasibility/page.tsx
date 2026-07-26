"use client"

import { FeasibilityHero } from "@/components/consultation/oldcomponant/feasibility/feasibility-hero"
import { FeasibilityBenefits } from "@/components/consultation/oldcomponant/feasibility/feasibility-benefits"
import { FeasibilityProcess } from "@/components/consultation/oldcomponant/feasibility/feasibility-process"
import { FeasibilityDeliverables } from "@/components/consultation/oldcomponant/feasibility/feasibility-deliverables"
import { FeasibilityCTA } from "@/components/consultation/oldcomponant/feasibility/feasibility-cta"

export default function FeasibilityPage() {
  return (
    <>
      <FeasibilityHero />
      <FeasibilityBenefits />
      <FeasibilityProcess />
      <FeasibilityDeliverables />
      <FeasibilityCTA />
    </>
  )
}

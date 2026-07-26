"use client"

import { HBUHero } from "@/components/consultation/oldcomponant/hbu/hbu-hero"
import { HBUExplanation } from "@/components/consultation/oldcomponant/hbu/hbu-explanation"
import { HBUMethodology } from "@/components/consultation/oldcomponant/hbu/hbu-methodology"
import { HBUCTA } from "@/components/consultation/oldcomponant/hbu/hbu-cta"

export default function HighestBestUsePage() {
  return (
    <>
      <HBUHero />
      <HBUExplanation />
      <HBUMethodology />
      <HBUCTA />
    </>
  )
}

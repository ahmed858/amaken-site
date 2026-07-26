"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import Link from "next/link"

export function HBUCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <div className="bg-gradient-to-br from-consulting to-consulting/80 rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Maximize Your Property's Potential
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let our experts analyze your property and identify the optimal use strategy for maximum value creation.
              </p>
              <Link href="/portal/consultations/new">
                <Button size="lg" className="bg-white text-consulting hover:bg-white/90 gap-2 px-8">
                  Request HBU Analysis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

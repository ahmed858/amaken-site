"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import Link from "next/link"

export function FeasibilityCTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Start Your Feasibility Study Today
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Get the insights you need to make confident investment decisions. Our team is ready to help you assess
              your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portal/consultations/new">
                <Button size="lg" className="bg-consulting hover:bg-consulting/90 text-white gap-2 px-8">
                  Request a Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

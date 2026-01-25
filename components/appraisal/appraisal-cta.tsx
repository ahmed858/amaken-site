"use client"

import { ArrowRight, FileText, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import Link from "next/link"

const benefits = [
  { icon: FileText, text: "Comprehensive Reports" },
  { icon: Clock, text: "Fast Turnaround" },
  { icon: Shield, text: "TAQEEM Certified" },
]

export function AppraisalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal>
          <div className="bg-gradient-to-br from-appraisal to-appraisal/80 rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Request a Professional Appraisal
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Get accurate, reliable valuations from our certified team. Submit your request today and receive a
                detailed report within days.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-2 text-white/90">
                    <benefit.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/portal/appraisals/new">
                <Button size="lg" className="bg-white text-appraisal hover:bg-white/90 gap-2 px-8">
                  Start Your Request
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

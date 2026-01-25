"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { CheckCircle } from "lucide-react"

const criteria = [
  {
    title: "Legally Permissible",
    description: "Analysis of zoning, deed restrictions, environmental regulations, and building codes.",
    checks: ["Zoning compliance", "Deed restrictions", "Environmental permits", "Building codes"],
  },
  {
    title: "Physically Possible",
    description: "Assessment of site characteristics, access, utilities, and physical constraints.",
    checks: ["Site dimensions", "Topography", "Utility access", "Infrastructure"],
  },
  {
    title: "Financially Feasible",
    description: "Evaluation of development costs, revenues, and return requirements.",
    checks: ["Construction costs", "Market rents/prices", "Development timeline", "Return analysis"],
  },
  {
    title: "Maximally Productive",
    description: "Determination of the use that produces the highest residual land value.",
    checks: ["Use alternatives", "Value comparison", "Risk assessment", "Market timing"],
  },
]

export function HBUMethodology() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Four-Test Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our HBU analysis follows the internationally recognized four-test framework to ensure comprehensive
            evaluation.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {criteria.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-consulting/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-consulting text-white rounded-lg flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {item.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-consulting flex-shrink-0" />
                      <span className="text-muted-foreground">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

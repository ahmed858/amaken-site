"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { Building, Users, Briefcase, HelpCircle } from "lucide-react"

const whoNeeds = [
  {
    icon: Building,
    title: "Real Estate Developers",
    description: "Optimize development programs and maximize project returns.",
  },
  {
    icon: Users,
    title: "Land Owners",
    description: "Understand the full potential of your land assets.",
  },
  {
    icon: Briefcase,
    title: "Investors",
    description: "Make informed acquisition decisions based on optimal use potential.",
  },
]

export function HBUExplanation() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <SectionReveal>
            <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">Overview</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              What is Highest & Best Use?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Highest and Best Use (HBU) analysis determines the most profitable, legally permissible, physically
              possible, and financially feasible use of a property. This analysis is fundamental to real estate
              valuation and development planning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our HBU analysis considers current market conditions, zoning regulations, site characteristics, and
              economic trends to recommend the optimal development or use strategy that maximizes property value.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-consulting/5 border border-consulting/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-consulting" />
                <h3 className="text-xl font-semibold text-foreground">Who Needs This Analysis?</h3>
              </div>
              <div className="space-y-6">
                {whoNeeds.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-consulting/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-consulting" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

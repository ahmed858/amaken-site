"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { FileText, BarChart3, Calculator, AlertTriangle, Presentation, FileCheck } from "lucide-react"

const deliverables = [
  {
    icon: FileText,
    title: "Executive Summary",
    description: "Concise overview of findings and recommendations for decision-makers.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis Report",
    description: "Detailed market research including size, trends, and competitive landscape.",
  },
  {
    icon: Calculator,
    title: "Financial Projections",
    description: "Comprehensive financial models with 5-10 year projections and scenarios.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment Matrix",
    description: "Identified risks with probability, impact, and mitigation strategies.",
  },
  {
    icon: Presentation,
    title: "Management Presentation",
    description: "Professional presentation materials for stakeholder and board meetings.",
  },
  {
    icon: FileCheck,
    title: "Bank-Ready Documentation",
    description: "All documentation required for financing applications and approvals.",
  },
]

export function FeasibilityDeliverables() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Study Deliverables
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive documentation to support your investment decisions and stakeholder communications.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-consulting/30 transition-colors h-full">
                <div className="w-12 h-12 bg-consulting/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-consulting" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

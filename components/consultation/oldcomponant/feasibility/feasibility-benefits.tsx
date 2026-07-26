"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { CheckCircle, TrendingUp, Shield, FileText, Users, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: CheckCircle,
    title: "Informed Decision Making",
    description: "Make confident investment decisions backed by comprehensive data analysis and market insights.",
  },
  {
    icon: TrendingUp,
    title: "Financing Support",
    description: "Professional studies that meet bank requirements and help secure project financing.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify and assess potential risks before committing significant capital to projects.",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    description: "Studies that meet all regulatory requirements for project approvals and licensing.",
  },
  {
    icon: Users,
    title: "Stakeholder Confidence",
    description: "Build trust with investors, partners, and stakeholders through transparent analysis.",
  },
  {
    icon: BarChart3,
    title: "Market Validation",
    description: "Validate market assumptions with thorough research and competitive analysis.",
  },
]

export function FeasibilityBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Benefits of Our Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our feasibility studies provide the insights you need to move forward with confidence.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <SectionReveal key={benefit.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-consulting/30 transition-colors"
              >
                <div className="w-12 h-12 bg-consulting/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-consulting" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Landmark, Building, Briefcase, TrendingUp, Scale, Users } from "lucide-react"

const industries = [
  { icon: Landmark, name: "Banks & Financial Institutions", count: "15+ partners" },
  { icon: Building, name: "Real Estate Developers", count: "50+ clients" },
  { icon: Briefcase, name: "Corporate Entities", count: "200+ companies" },
  { icon: TrendingUp, name: "Investment Firms", count: "30+ firms" },
  { icon: Scale, name: "Legal & Insurance", count: "40+ providers" },
  { icon: Users, name: "Government Agencies", count: "10+ ministries" },
]

export function AppraisalIndustries() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-appraisal text-sm font-semibold uppercase tracking-wider mb-4 block">Trusted By</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">Industries We Serve</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our appraisal services support decision-making across all major sectors of the Saudi economy.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <SectionReveal key={industry.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 bg-appraisal/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-6 h-6 text-appraisal" />
                </div>
                <h3 className="font-medium text-sm text-primary-foreground mb-1">{industry.name}</h3>
                <p className="text-xs text-primary-foreground/50">{industry.count}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

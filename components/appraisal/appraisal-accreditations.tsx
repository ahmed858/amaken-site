"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Shield, Award, FileCheck, Globe } from "lucide-react"

const accreditations = [
  {
    icon: Shield,
    title: "TAQEEM Certified",
    description:
      "Licensed by the Saudi Authority for Accredited Valuers (TAQEEM) to provide professional valuation services.",
  },
  {
    icon: Globe,
    title: "RICS Compliant",
    description: "Our valuations comply with the Royal Institution of Chartered Surveyors international standards.",
  },
  {
    icon: FileCheck,
    title: "IVS Standards",
    description: "All appraisals follow International Valuation Standards for global consistency and reliability.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Quality management systems certified to ISO standards ensuring consistent service delivery.",
  },
]

export function AppraisalAccreditations() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <SectionReveal>
            <span className="text-appraisal text-sm font-semibold uppercase tracking-wider mb-4 block">
              Professional Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Accreditations & Compliance
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team of certified appraisers operates under the highest professional standards, ensuring every
              valuation meets regulatory requirements and industry best practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {accreditations.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-appraisal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-appraisal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Image */}
          <SectionReveal delay={0.2} direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/professional-certification-documents-certificates-.jpg"
                  alt="Professional Accreditations"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl font-bold text-appraisal mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

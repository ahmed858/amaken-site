"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileCheck, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeasibilityHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-consulting/20" />
      </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-consulting/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-consulting/20 border border-consulting/30 rounded-full mb-6"
          >
            <FileCheck className="w-4 h-4 text-consulting" />
            <span className="text-consulting text-sm font-medium">Investment Decision Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6"
          >
            Feasibility & Market Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed"
          >
            Comprehensive feasibility analysis and market research to support your investment decisions, secure
            financing, and minimize project risks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-8"
          >
            {[
              { icon: TrendingUp, text: "ROI Analysis" },
              { icon: Shield, text: "Risk Assessment" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/60">
                <item.icon className="w-4 h-4 text-consulting" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/portal/consultations/new">
              <Button size="lg" className="bg-consulting hover:bg-consulting/90 text-white gap-2 px-8">
                Request a Study
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

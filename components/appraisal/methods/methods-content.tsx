"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"
import { DollarSign, TrendingUp, BarChart3, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function MethodsContent() {
  const { t } = useI18n()
  const [activeMethod, setActiveMethod] = useState("cost")

  const methods = [
    {
      id: "cost",
      title: t("methodsPage.content.methods.cost.title"),
      subtitle: t("methodsPage.content.methods.cost.subtitle"),
      icon: DollarSign,
      description: t("methodsPage.content.methods.cost.description"),
      whenToUse: [
        t("methodsPage.content.methods.cost.whenToUse.i1"),
        t("methodsPage.content.methods.cost.whenToUse.i2"),
        t("methodsPage.content.methods.cost.whenToUse.i3"),
        t("methodsPage.content.methods.cost.whenToUse.i4"),
      ],
      process: [
        t("methodsPage.content.methods.cost.process.s1"),
        t("methodsPage.content.methods.cost.process.s2"),
        t("methodsPage.content.methods.cost.process.s3"),
        t("methodsPage.content.methods.cost.process.s4"),
      ],
      example: t("methodsPage.content.methods.cost.example"),
    },
    {
      id: "market",
      title: t("methodsPage.content.methods.market.title"),
      subtitle: t("methodsPage.content.methods.market.subtitle"),
      icon: TrendingUp,
      description: t("methodsPage.content.methods.market.description"),
      whenToUse: [
        t("methodsPage.content.methods.market.whenToUse.i1"),
        t("methodsPage.content.methods.market.whenToUse.i2"),
        t("methodsPage.content.methods.market.whenToUse.i3"),
        t("methodsPage.content.methods.market.whenToUse.i4"),
      ],
      process: [
        t("methodsPage.content.methods.market.process.s1"),
        t("methodsPage.content.methods.market.process.s2"),
        t("methodsPage.content.methods.market.process.s3"),
        t("methodsPage.content.methods.market.process.s4"),
      ],
      example: t("methodsPage.content.methods.market.example"),
    },
    {
      id: "income",
      title: t("methodsPage.content.methods.income.title"),
      subtitle: t("methodsPage.content.methods.income.subtitle"),
      icon: BarChart3,
      description: t("methodsPage.content.methods.income.description"),
      whenToUse: [
        t("methodsPage.content.methods.income.whenToUse.i1"),
        t("methodsPage.content.methods.income.whenToUse.i2"),
        t("methodsPage.content.methods.income.whenToUse.i3"),
        t("methodsPage.content.methods.income.whenToUse.i4"),
      ],
      process: [
        t("methodsPage.content.methods.income.process.s1"),
        t("methodsPage.content.methods.income.process.s2"),
        t("methodsPage.content.methods.income.process.s3"),
        t("methodsPage.content.methods.income.process.s4"),
      ],
      example: t("methodsPage.content.methods.income.example"),
    },
  ]

  const currentMethod = methods.find((m) => m.id === activeMethod) || methods[0]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{t("methodsPage.content.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("methodsPage.content.description")}
          </p>
        </SectionReveal>

        {/* Method Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300",
                activeMethod === method.id
                  ? "bg-appraisal text-white border-appraisal"
                  : "bg-card border-border hover:border-appraisal/50",
              )}
            >
              <method.icon className="w-5 h-5" />
              <span className="font-medium">{method.title}</span>
            </button>
          ))}
        </div>

        {/* Method Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Column */}
            <div>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-appraisal/10 rounded-xl flex items-center justify-center">
                    <currentMethod.icon className="w-7 h-7 text-appraisal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{currentMethod.title}</h3>
                    <p className="text-muted-foreground">{currentMethod.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">{currentMethod.description}</p>

                <h4 className="font-semibold text-foreground mb-4">{t("methodsPage.content.ui.whenToUse")}</h4>
                <ul className="space-y-3">
                  {currentMethod.whenToUse.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-appraisal flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Process */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h4 className="font-semibold text-foreground mb-6">{t("methodsPage.content.ui.process")}</h4>
                <div className="space-y-4">
                  {currentMethod.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-appraisal text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div className="bg-appraisal/5 border border-appraisal/20 rounded-xl p-8">
                <h4 className="font-semibold text-foreground mb-4">{t("methodsPage.content.ui.example")}</h4>
                <p className="text-muted-foreground leading-relaxed">{currentMethod.example}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

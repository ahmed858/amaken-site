"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function MethodsFAQ() {
  const { t } = useI18n()

  const faqs = [
    {
      question: t("methodsPage.faq.questions.q1.question"),
      answer: t("methodsPage.faq.questions.q1.answer"),
    },
    {
      question: t("methodsPage.faq.questions.q2.question"),
      answer: t("methodsPage.faq.questions.q2.answer"),
    },
    {
      question: t("methodsPage.faq.questions.q3.question"),
      answer: t("methodsPage.faq.questions.q3.answer"),
    },
    {
      question: t("methodsPage.faq.questions.q4.question"),
      answer: t("methodsPage.faq.questions.q4.answer"),
    },
    {
      question: t("methodsPage.faq.questions.q5.question"),
      answer: t("methodsPage.faq.questions.q5.answer"),
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <SectionReveal>
            <span className="text-appraisal text-sm font-semibold uppercase tracking-wider mb-4 block">{t("methodsPage.faq.badge")}</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">{t("methodsPage.faq.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("methodsPage.faq.subtitle")}
            </p>

            <Link href="/contact">
              <Button className="bg-appraisal hover:bg-appraisal/90 text-white gap-2">
                {t("methodsPage.faq.cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-appraisal/30"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-appraisal hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

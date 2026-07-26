"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useI18n } from "@/lib/i18n/context"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ContactForm() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Will integrate with ERPNext
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 bg-appraisal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-appraisal" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t("contact.success")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("contact.successDetail")}
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="bg-transparent">
              {t("contact.another")}
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{t("contact.title")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("contact.subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t("contact.firstName")}</Label>
                  <Input id="firstName" placeholder={t("contact.firstName")} required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="lastName">{t("contact.lastName")}</Label>
                  <Input id="lastName" placeholder={t("contact.lastName")} required className="mt-1.5" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t("contact.email")}</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="mt-1.5" />
              </div>

              <div>
                <Label htmlFor="phone">{t("contact.phone")}</Label>
                <Input id="phone" placeholder="+966 5x xxx xxxx" className="mt-1.5" />
              </div>

              <div>
                <Label htmlFor="department">{t("contact.department")}</Label>
                <Select>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder={t("contact.department")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="appraisal">Appraisal Services</SelectItem>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="realestate">Real Estate Services</SelectItem>
                    <SelectItem value="auctions">Auctions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.message")}
                  rows={5}
                  required
                  className="mt-1.5 resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto gap-2">
                {t("contact.send")}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-6">{t("contact.headquarters")}</h3>

              <div className="aspect-[4/3] bg-secondary rounded-xl mb-6 overflow-hidden">
                <img
                  src="/amaken-headquarters-riyadh-office-building.jpg"
                  alt="Amaken Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.address")}</p>
                  <p className="text-foreground">{t("footer.address")}</p>
                  <p className="text-foreground">Kingdom of Saudi Arabia</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.poBox")}</p>
                  <p className="text-foreground">12345, Riyadh 11234</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

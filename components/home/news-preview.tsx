"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"
import { motion } from "framer-motion"

// Mock news data - will be replaced with ERPNext data
const mockNews = [
  {
    id: "1",
    title: "Amaken Group Expands Coverage to Eastern Province",
    excerpt:
      "We are excited to announce the opening of our new branch in Dammam, bringing our professional services closer to clients in the Eastern Province.",
    date: "2026-01-10",
    category: "Company News",
    image: "/modern-office-opening-ceremony-saudi-arabia.jpg",
  },
  {
    id: "2",
    title: "New Partnership with Leading Financial Institutions",
    excerpt: "Amaken Appraisal has been selected as an approved valuation provider by three major Saudi banks.",
    date: "2026-01-05",
    category: "Partnership",
    image: "/business-handshake-partnership-meeting.jpg",
  },
  {
    id: "3",
    title: "Market Report: Saudi Real Estate Trends 2026",
    excerpt: "Our latest market analysis reveals promising growth opportunities in the Saudi real estate sector.",
    date: "2025-12-28",
    category: "Insights",
    image: "/real-estate-market-analysis-chart-graph.jpg",
  },
]

export function NewsPreview() {
  const { t } = useI18n()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">{t("newsPreview.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("newsPreview.subtitle")}</p>
          </div>
          <Link href="/news">
            <Button variant="outline" className="gap-2 bg-transparent">
              {t("common.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured Article */}
          <SectionReveal className="lg:col-span-2">
            <motion.article
              whileHover={{ y: -4 }}
              className="group relative h-full bg-card border border-border rounded-xl overflow-hidden"
            >
              <Link href={`/news/${mockNews[0].id}`} className="block h-full">
                <div className="relative h-64 lg:h-80">
                  <img
                    src={mockNews[0].image || "/placeholder.svg"}
                    alt={mockNews[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 bg-appraisal text-white text-xs font-medium rounded-full mb-3">
                      {mockNews[0].category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">{mockNews[0].title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{mockNews[0].excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          </SectionReveal>

          {/* Secondary Articles */}
          <div className="space-y-6">
            {mockNews.slice(1).map((article, index) => (
              <SectionReveal key={article.id} delay={(index + 1) * 0.1}>
                <motion.article
                  whileHover={{ y: -2 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden"
                >
                  <Link href={`/news/${article.id}`} className="flex gap-4 p-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-appraisal font-medium">{article.category}</span>
                      <h3 className="font-semibold text-foreground text-sm mt-1 line-clamp-2 group-hover:text-appraisal transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(article.date).toLocaleDateString(t("nav.language") === "English" ? "ar-SA" : "en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

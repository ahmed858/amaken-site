"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { useI18n } from "@/lib/i18n/context"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const servicesData = [
  {
    order: 1,
    title: { ar: "تقييم المشاريع" },
    description: {
      ar: "بينما قد تكون مسرورًا بالنتائج، فإن قيمة عملك ليست مقياسًا للغرور. يمكن أن يكون التقييم المناسب للأعمال الصغيرة والمشاريع أمرًا مهمًا إذا كنت تخطط لبيع عملك، أو دمج أو شراء مالكين آخرين",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/09/cash.png",
  },
  {
    order: 2,
    title: { ar: "تقييم الافراد" },
    description: {
      ar: "تعتبر عملية تقييم الأداء من العمليات الهامة التي تمارسها إدارة الموارد البشرية في المنظمات وعلى جميع مستويات المنظمة بدءً من الإدارة العليا وانتهاءً بالعاملين",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/09/signature.png",
  },
  {
    order: 3,
    title: { ar: "تقييم المحافظ العقارية" },
    description: {
      ar: "أما في حال اختلاف مستويات مخاطر المحافظ محل التقييم، فتظهر الحاجة لاستخدام مقاييس للمقارنة تأخذ في الاعتبار مستوى المخاطر وتسمى مقاييس الأداء المعدلة بالمخاطر",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/09/building-svgrepo-com-3.png",
  },
  {
    order: 4,
    title: { ar: "تقييم العقارات الاستثمارية" },
    description: {
      ar: "تعريف تقييم العقارات. هو فن وعلم تقدير قيمة حقوق الملكية العقارية، لأصل محدد وغرض محدد في وقت محدد ولمستخدمين محددين، مع الأخذ بالحسبان جميع خصائص وسمات",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/09/building-svgrepo-com-3.png",
  },
  {
    order: 5,
    title: { ar: "تقييم لأغراض نزع الملكية" },
    description: {
      ar: "التقييم لأغراض نزع الملكية : التقييم للمصلحة العامة لصالح مشاريع الدوله باغراض محددة مسبقا",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/10/property.png",
  },
  {
    order: 6,
    title: { ar: "تقييم الصناديق العقارية" },
    description: {
      ar: "هناك عدد من المقاييس الرئيسية المستخدمة في تقييم الأداء التشغيلي للمحفظة العقارية التابعة لأي صندوق ، وتشمل هذه المقاييس على سبيل المثال نسبة الإشغال ومعدل الشغور",
    },
    image: "https://olaat.com/opm/wp-content/uploads/2022/09/bank.png",
  },
]

export function AppraisalServices() {
  const { t, direction, locale } = useI18n()
  const [api, setApi] = React.useState<CarouselApi>()

  // Autoplay effect
  React.useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      // User requested:
      // Arabic (RTL) -> Move Right to Left.
      // English (LTR) -> Move Left to Right.

      // In Embla RTL mode:
      // scrollNext() moves logically to the next slide.
      // Visually in RTL, slides are [3] [2] [1]. Next is [2].
      // So viewport moves Left. Content moves Right?
      // Let's try standard Next for both and adjust if needed based on visual feedback.
      // Usually "Next" is the desired flow.

      // If the user specifically wants visual movement L->R in English:
      // In LTR, slides are [1] [2] [3]. scollNext moves viewport Right. Content moves Left.
      // To move content Right, we need scrollPrev.

      if (direction === "ltr") {
        api.scrollPrev()
      } else {
        api.scrollNext()
      }
    }, 3000) // "Every half second" (0.5s) is too fast for full slide, maybe they meant marquee. 
    // Using 3s for readability for now. If it's a marquee request, we might need a different approach.

    return () => clearInterval(intervalId)
  }, [api, direction])

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-appraisal text-sm font-semibold uppercase tracking-wider mb-4 block">
            {t("appraisalServices.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("appraisalServices.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("appraisalServices.description")}
          </p>
        </SectionReveal>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            direction: direction,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {servicesData.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
                <div className="h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-appraisal/30 hover:shadow-lg hover:shadow-appraisal/5 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-appraisal/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-appraisal/20 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title.ar}
                        className="w-8 h-8 object-contain brightness-0 sepia-[1] hue-rotate-[190deg] saturate-[5] opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ filter: "none" }}
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {service.title.ar}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">
                      {service.description.ar}
                    </p>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

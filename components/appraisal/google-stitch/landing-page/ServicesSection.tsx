"use client"

import { useI18n } from "@/lib/i18n/context"
import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
    const { t } = useI18n();

    return (
        <section className="py-24 container mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8">

                <ServiceCard
                    icon={<span className="text-5xl">🏢</span>}
                    title={t("appraisal.home.services.realEstate.title")}
                    description={t("appraisal.home.services.realEstate.desc")}
                    href="/appraisal/services/real-estate"
                />

                <ServiceCard
                    icon={<span className="text-5xl">⚙️</span>}
                    title={t("appraisal.home.services.machinery.title")}
                    description={t("appraisal.home.services.machinery.desc")}
                    href="/appraisal/services/machinery"
                />

                <ServiceCard
                    icon={<span className="text-5xl">🏭</span>}
                    title={t("appraisal.home.services.facilities.title")}
                    description={t("appraisal.home.services.facilities.desc")}
                    href="/appraisal/services/facilities"
                />

            </div>

        </section>
    )
}
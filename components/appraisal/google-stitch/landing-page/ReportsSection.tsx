"use client"

import { useI18n } from "@/lib/i18n/context"

export default function ReportsSection() {
    const { t } = useI18n();

    return (
        <section className="py-24 container mx-auto px-6">

            <div className="flex flex-col md:flex-row items-center gap-16">

                <div className="flex-1">
                    <img
                        src="#"
                        className="rounded-3xl shadow-2xl w-full"
                        alt="report"
                    />
                </div>

                <div className="flex-1 space-y-8">

                    <h2 className="text-5xl font-extrabold text-[#041534]">
                        {t("appraisal.home.reports.title")}
                    </h2>

                    <p className="text-gray-600 text-lg">
                        {t("appraisal.home.reports.description")}
                    </p>

                    <button className="bg-[#041534] text-white px-8 py-4 rounded-xl font-bold">
                        {t("appraisal.home.reports.button")}
                    </button>

                </div>

            </div>

        </section>
    )
}
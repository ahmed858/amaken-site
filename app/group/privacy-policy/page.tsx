"use client"

import { useI18n } from "@/lib/i18n/context"
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection"
import { Shield, Eye, UserCheck, Phone } from "lucide-react"

export default function PrivacyPolicyPage() {
    const { t, locale, direction } = useI18n()
    const isRTL = direction === "rtl"
    const groupColor = "#A28B67"

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: t("privacyPolicy.title") },
    ]

    const sections = [
        {
            icon: Eye,
            title: t("privacyPolicy.section1.title"),
            body: t("privacyPolicy.section1.body"),
        },
        {
            icon: UserCheck,
            title: t("privacyPolicy.section2.title"),
            body: t("privacyPolicy.section2.body"),
        },
        {
            icon: Phone,
            title: t("privacyPolicy.section3.title"),
            body: `${t("privacyPolicy.section3.body")} 920003401`,
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50/50">
            <PageBreadcrumb
                title={t("privacyPolicy.title")}
                items={breadcrumbItems}
            />

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

                    {/* Header Card */}
                    <div
                        className="rounded-3xl p-8 lg:p-12 text-white mb-10 relative overflow-hidden"
                        style={{ backgroundColor: groupColor }}
                    >
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="relative z-10 flex items-start gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 mt-1">
                                <Shield className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                                    {t("privacyPolicy.title")}
                                </h1>
                                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                                    {t("privacyPolicy.intro")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-6">
                        {sections.map((section, index) => {
                            const Icon = section.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 lg:p-9 flex items-start gap-5 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1"
                                        style={{ backgroundColor: `${groupColor}18` }}
                                    >
                                        <Icon
                                            className="w-6 h-6"
                                            style={{ color: groupColor }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2
                                            className="text-xl font-bold mb-3"
                                            style={{ color: groupColor }}
                                        >
                                            {section.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {section.body}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Footer note */}
                    <p className="text-center text-sm text-gray-400 mt-10">
                        {locale === "ar"
                            ? "© مجموعة أماكن الدولية — جميع الحقوق محفوظة"
                            : "© AMAKEN International Group — All rights reserved"}
                    </p>
                </div>
            </section>
        </div>
    )
}

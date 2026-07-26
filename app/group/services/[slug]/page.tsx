"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ServiceRequestForm } from "@/components/group/ServiceRequestForm";
import {
    Megaphone,
    Gavel,
    Building2,
    ShieldCheck,
    CheckCircle2,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesData = {
    marketing: {
        id: "marketing",
        icon: Megaphone,
        key: "marketing",
    },
    auctions: {
        id: "auctions",
        icon: Gavel,
        key: "auctions",
    },
    management: {
        id: "management",
        icon: Building2,
        key: "management",
    },
    tawjeed: {
        id: "tawjeed",
        icon: ShieldCheck,
        key: "tawjeed",
    }
};

export default function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const { t, locale, direction, dictionary } = useI18n();
    const isRTL = direction === "rtl";
    const groupColor = "#A28B67";

    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    const tPage = (key: string) => t(`groupServices.${service.key}.${key}`);

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "خدماتنا" : "Our Services", href: "/group/services" },
        { label: tPage("title") },
    ];

    return (
        <div className="min-h-screen bg-[#faf7f2]">
            <PageBreadcrumb
                title={tPage("title")}
                items={breadcrumbItems}
            />

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
                        {/* Info Column */}
                        <div className="flex-1">
                            <SectionReveal>
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                                    style={{ backgroundColor: `${groupColor}10` }}
                                >
                                    <service.icon className="w-10 h-10" style={{ color: groupColor }} />
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-8">
                                    {tPage("title")}
                                </h1>
                                <p className="text-xl text-zinc-600 leading-relaxed mb-12">
                                    {tPage("description")}
                                </p>

                                <div className="space-y-6 mb-12">
                                    <h2 className="text-2xl font-bold text-zinc-900">
                                        {locale === "ar" ? "مميزات الخدمة" : "Service Features"}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(dictionary.groupServices?.[service.key]?.features as string[] || []).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 italic">
                                                <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: groupColor }} />
                                                <span className="text-zinc-700 font-medium text-lg">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/group/services">
                                    <motion.button
                                        whileHover={{ x: isRTL ? 10 : -10 }}
                                        className="flex items-center gap-2 text-zinc-500 font-medium hover:text-[#A28B67] transition-colors"
                                    >
                                        <ArrowLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
                                        <span>{locale === "ar" ? "العودة للخدمات" : "Back to Services"}</span>
                                    </motion.button>
                                </Link>
                            </SectionReveal>
                        </div>

                        {/* Form Column */}
                        <div className="w-full lg:w-[500px] shrink-0">
                            <SectionReveal delay={0.2}>
                                <ServiceRequestForm serviceTitle={tPage("title")} />
                            </SectionReveal>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

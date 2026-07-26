"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import {
    Maximize2,
    Home,
    Bed,
    Bath,
    Compass,
    Calendar,
    Layers,
    Tag,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";

interface PropertyFeaturesProps {
    features: {
        area: string;
        type: string;
        rooms?: string;
        bathrooms?: string;
        orientation?: string;
        year?: string;
        floors?: string;
        advantages?: string[];
    };
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
    const { t, locale } = useI18n();
    const isRTL = locale === "ar";

    const items = [
        { icon: Maximize2, label: t("projectsPage.units.area") || (isRTL ? "المساحة" : "Area"), value: features.area },
        { icon: Home, label: t("projectsPage.units.type") || (isRTL ? "النوع" : "Type"), value: features.type },
        features.rooms && { icon: Bed, label: t("projectsPage.units.rooms") || (isRTL ? "الغرف" : "Rooms"), value: features.rooms },
        features.bathrooms && { icon: Bath, label: t("projectsPage.units.bathrooms") || (isRTL ? "دورات المياه" : "Bathrooms"), value: features.bathrooms },
        features.orientation && { icon: Compass, label: isRTL ? "الواجهة" : "Orientation", value: features.orientation },
        features.year && { icon: Calendar, label: isRTL ? "سنة البناء" : "Year", value: features.year },
        features.floors && { icon: Layers, label: isRTL ? "الطوابق" : "Floors", value: features.floors },
    ].filter(Boolean) as { icon: any, label: string, value: string }[];

    return (
        <div className="space-y-12">
            {/* Grid Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-[#A28B67]/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#A28B67]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-[#A28B67]" />
                        </div>
                        <span className="text-sm text-gray-500 mb-1">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.value}</span>
                    </motion.div>
                ))}
            </div>

            {/* Advantages */}
            {features.advantages && features.advantages.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-[#A28B67]" />
                        {isRTL ? "مميزات العقار" : "Property Advantages"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                        {features.advantages.map((adv, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{adv}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

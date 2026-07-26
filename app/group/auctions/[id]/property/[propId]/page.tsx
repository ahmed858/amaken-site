"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { PropertyGallery } from "@/components/group/auctions/property-gallery";
import { PropertyFeatures } from "@/components/group/auctions/property-features";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2, Info } from "lucide-react";
import { useState, useEffect, use } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string, propId: string }> }) {
    const { id, propId } = use(params);
    const { t, locale } = useI18n();
    const isRTL = locale === "ar";
    const groupColor = "#A28B67";
    const [property, setProperty] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const NEXT_PUBLIC_ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/group/auctions/${id}/property/${propId}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Failed to fetch property details");
                }

                setProperty(result.data);
            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching property details:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPropertyDetails();
    }, [id, propId]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#faf7f2]/50">
                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <Skeleton className="h-[400px] w-full mb-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <Skeleton className="h-[300px] w-full" />
                            <Skeleton className="h-[200px] w-full" />
                        </div>
                        <div className="space-y-8">
                            <Skeleton className="h-[400px] w-full" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]/50">
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
                    <p className="text-gray-600">{error || "Property not found"}</p>
                </div>
            </div>
        );
    }

    // Prepare images array
    const images: string[] = [
        property.custom_unit_image ? `${NEXT_PUBLIC_ERPNEXT_URL}${property.custom_unit_image}` : "/placeholder.svg",
        property.image11 ? `${NEXT_PUBLIC_ERPNEXT_URL}${property.image11}` : null,
        property.image22 ? `${NEXT_PUBLIC_ERPNEXT_URL}${property.image22}` : null,
        property.image33 ? `${NEXT_PUBLIC_ERPNEXT_URL}${property.image33}` : null,
        property.image44 ? `${NEXT_PUBLIC_ERPNEXT_URL}${property.image44}` : null,
    ].filter((img): img is string => Boolean(img));

    // Prepare features object
    const features = {
        area: property.instrument_size || property.area || "غير محدد",
        type: property.property_type || "غير محدد",
        rooms: property.rooms || "غير محدد",
        bathrooms: property.bathrooms || "غير محدد",
        orientation: property.orientation || "غير محدد",
        year: property.year_built || "غير محدد",
        floors: property.floors || "غير محدد",
        advantages: [] // Can be populated later if available
    };

    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
        { label: property.auctionDetails?.auction_name || property.project_name || "المزاد", href: `/group/auctions/${id}` },
        { label: property.title || "تفاصيل العقار", href: `/group/auctions/${id}/property/${propId}` },
    ];

    return (
        <div className="min-h-screen bg-[#faf7f2]/50">
            <PageBreadcrumb
                title={t("auctions.pageTitles.propertyDetails")}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Side: Images & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <SectionReveal>
                            <PropertyGallery images={images} />
                        </SectionReveal>

                        <SectionReveal delay={0.1}>
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-[#A28B67]" />
                                    {t("auctions.labels.description")}
                                </h2>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                                    {property.description || property.title || "لا يوجد وصف متاح"}
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <PropertyFeatures features={features} />
                        </SectionReveal>
                    </div>

                    {/* Right Side: Sidebar */}
                    <div className="space-y-8">
                        {/* Price & Action Card */}
                        <SectionReveal delay={0.3} className="sticky top-32">
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#A28B67]" />

                                <div className="mb-8">
                                    <span className="text-gray-400 text-sm block mb-1">
                                        {t("auctions.startingPrice")}
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {property.auctionprice || property.sales || "غير محدد"}
                                        </span>
                                        <span className="text-[#A28B67] font-medium">
                                            {t("projectsPage.units.currency")}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        className="w-full h-14 text-white text-lg font-bold rounded-2xl"
                                        style={{ backgroundColor: groupColor }}
                                    >
                                        {t("auctions.labels.register")}
                                    </Button>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="h-12 rounded-xl group border-gray-200">
                                            <Phone className="w-4 h-4 mr-2 group-hover:text-[#A28B67]" />
                                            {isRTL ? "اتصال" : "Call"}
                                        </Button>
                                        <Button variant="outline" className="h-12 rounded-xl group border-gray-200">
                                            <MessageSquare className="w-4 h-4 mr-2 group-hover:text-[#A28B67]" />
                                            {isRTL ? "واتساب" : "WhatsApp"}
                                        </Button>
                                    </div>

                                    <Button variant="ghost" className="w-full h-12 rounded-xl text-gray-500 hover:text-[#A28B67]">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        {isRTL ? "مشاركة العقار" : "Share Property"}
                                    </Button>
                                </div>

                                {/* Status Indicator */}
                                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${(property.status === "Active" || property.status === "جاري" || property.status === "active")
                                                ? "bg-green-500 animate-pulse"
                                                : property.status === "Ended" || property.status === "منتهي"
                                                    ? "bg-gray-400"
                                                    : "bg-yellow-500 animate-pulse"
                                            }`} />
                                        <span className="text-sm font-medium text-gray-600">
                                            {(() => {
                                                const status = property.status?.toLowerCase();
                                                if (status === "active" || status === "جاري" || status === "جارة") {
                                                    return "المزاد جاري";
                                                } else if (status === "ended" || status === "منتهي") {
                                                    return "المزاد منتهي";
                                                } else {
                                                    return "المزاد قادم";
                                                }
                                            })()}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        ID: {property.name || propId}
                                    </span>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </main>
        </div>
    );
}

import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionsFilter } from "@/components/group/auctions/auctions-filter";
import { AuctionCard } from "@/components/group/auctions/auction-card";
import { Auction } from "@/types/auction";



import { headers } from "next/headers";

export default async function AuctionsPage({
    searchParams,
}: {
    searchParams: Promise<{ filter?: string }>;
}) {
    // Await searchParams in Next.js 15
    const resolvedSearchParams = await searchParams;

    // Get locale from headers or fallback
    const headerList = await headers();
    const locale = headerList.get("accept-language")?.includes("en") ? "en" : "ar";

    // Simple helper to get translations (mocking dictionary access for brevity)
    const t = (key: string) => {
        const ar: any = {
            "nav.home": "الرئيسية",
            "auctions.pageTitles.auctions": "المزادات",
            "auctions.filters.all": "الكل",
            "auctions.filters.upcoming": "قادم",
            "auctions.filters.current": "جاري",
            "auctions.filters.ended": "منتهي"
        };
        const en: any = {
            "nav.home": "Home",
            "auctions.pageTitles.auctions": "Auctions",
            "auctions.filters.all": "All",
            "auctions.filters.upcoming": "Upcoming",
            "auctions.filters.current": "Current",
            "auctions.filters.ended": "Ended"
        };
        return (locale === "ar" ? ar[key] : en[key]) || key;
    };


    const filter = (resolvedSearchParams.filter || "all") as "all" | "upcoming" | "current" | "ended";


    let auctions: Auction[] = [];
    let error = null;

    try {
        const ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
        const API_KEY = process.env.ERP_API_KEY;
        const API_SECRET = process.env.ERP_API_SECRET;

        if (!ERPNEXT_URL || !API_KEY || !API_SECRET) {
            throw new Error("ERPNext configuration missing in environment variables");
        }

        const filters = JSON.stringify([["Auction", "is_published", "=", 1]]);
        const fields = JSON.stringify(["*"]);

        const url = new URL(`${ERPNEXT_URL}/api/resource/Auction`);
        url.searchParams.append("filters", filters);
        url.searchParams.append("fields", fields);
        url.searchParams.append("limit_page_length", "50");
        url.searchParams.append("order_by", "creation desc");

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Authorization": `token ${API_KEY}:${API_SECRET}`,
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        });

        const result = await response.json();
        if (!response.ok) {
            console.error("Frappe API Error:", result);
            throw new Error(result.exc || "Failed to fetch auctions from Frappe");
        }
        auctions = result.data || [];
    } catch (e: any) {
        error = e.message;
    }


    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
    ];

    // Filter logic on the server using ERPNext status
    const filteredAuctions = auctions.filter((auction) => {
        if (filter === "all") return true;

        const erpStatus = auction.status?.toLowerCase() || "upcoming";
        const status: "upcoming" | "current" | "ended" =
            erpStatus.includes("upcoming") || erpStatus.includes("قادم") ? "upcoming" :
                erpStatus.includes("current") || erpStatus.includes("جاري") || erpStatus.includes("open") ? "current" :
                    "ended";

        return status === filter;
    });

    return (
        <div className="min-h-screen  ">
            <PageBreadcrumb
                title={t("auctions.pageTitles.auctions")}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 lg:px-8 py-16">
                {/* Note: AuctionsFilter needs to be a client component or use links for searchParams */}
                <AuctionsFilter currentFilter={filter} />

                {error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg mb-4">حدث خطأ في تحميل البيانات</p>
                        <button className="bg-[#A28B67] text-white px-6 py-2 rounded-lg">إعادة المحاولة</button>
                    </div>
                ) : filteredAuctions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAuctions.map((auction, index) => (
                            <AuctionCard key={auction.name} auction={auction} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            {locale === "ar" ? "لا توجد مزادات في هذه الفئة حالياً." : "No auctions found in this category at the moment."}
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}


"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { cn, formatAuctionTime } from "@/lib/utils";
import { Auction } from "@/types/auction";
import { ERPNEXT_URL } from "@/lib/api";

interface AuctionCardProps {
    auction: Auction;
    index: number;
}

export function AuctionCard({ auction, index }: AuctionCardProps) {
    const { t, locale } = useI18n();

    // Group colors
    const groupColor = "#A28B67";

    // Map Frappe auction_type to UI types
    const typeMap: Record<string, "online" | "onsite" | "hybrid"> = {
        "عن بعد": "online",
        "حضوري": "onsite",
        "هجين": "hybrid",
    };
    const uiType = typeMap[auction.auction_type] || "online";

    // Use status from ERPNext directly
    const erpStatus = auction.status?.toLowerCase() || "upcoming";
    const uiStatus: "upcoming" | "current" | "ended" =
        erpStatus.includes("upcoming") || erpStatus.includes("قادم") ? "upcoming" :
            erpStatus.includes("current") || erpStatus.includes("جاري") || erpStatus.includes("open") ? "current" :
                "ended";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={auction.auction_image ? (auction.auction_image.startsWith('http') ? auction.auction_image : `${ERPNEXT_URL}${auction.auction_image}`) : "/placeholder.svg"}
                    alt={auction.auction_name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Type Badge */}
                <Badge
                    className={cn(
                        "absolute top-4 left-4 text-white border-0 shadow-lg px-3 py-1",
                        (auction.auction_type === "عن بعد" || auction.auction_type?.toLowerCase() === "online") && "bg-gradient-to-r from-blue-600 to-indigo-600 font-bold",
                        (auction.auction_type === "حضوري" || auction.auction_type?.toLowerCase() === "onsite") && "bg-orange-600",
                        (auction.auction_type === "هجين" || auction.auction_type?.toLowerCase() === "hybrid") && "bg-purple-600"
                    )}
                >
                    {(auction.auction_type === "عن بعد" || auction.auction_type?.toLowerCase() === "online") ? (
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            {auction.auction_type}
                        </span>
                    ) : (
                        auction.auction_type
                    )}
                </Badge>


                {/* Status Badge */}
                <Badge
                    className={cn(
                        "absolute top-4 right-4 border-0 shadow-md",
                        uiStatus === "upcoming" && "bg-green-600 text-white",
                        uiStatus === "current" && "bg-red-600 text-white",
                        uiStatus === "ended" && "bg-gray-500 text-white"
                    )}
                >
                    {t(`auctions.status.${uiStatus}` as any) || uiStatus}
                </Badge>


                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#A28B67] transition-colors">
                    {auction.auction_name}
                </h3>

                <div className="space-y-3 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#A28B67]" />
                        <span>{auction.city || auction.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#A28B67]" />
                        <span>
                            {new Date(auction.auction_start_date).toLocaleDateString(locale === "en" ? "en-US" : "ar-SA", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#A28B67]" />
                        <span>{formatAuctionTime(auction.auction_start_time, locale)}</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {auction.starting_bid && (
                        <div>
                            <p className="text-xs text-gray-400 mb-1">{t("auctions.startingPrice")}</p>
                            <p className="font-bold text-gray-800">{auction.starting_bid.toLocaleString()} {t("projectsPage.units.currency")}</p>
                        </div>
                    )}

                    <Link href={`/group/auctions/${auction.name}`} className="w-full">
                        <Button
                            className="w-full gap-2 text-white hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: groupColor }}
                        >
                            {t("auctions.viewDetails")}
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}


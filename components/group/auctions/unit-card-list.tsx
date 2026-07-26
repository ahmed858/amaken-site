"use client";

import Image from "next/image";
import { Clock, TrendingUp, Users, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuctionUnit } from "./unit-types";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { getStatusInfo } from "@/lib/auction-status";

// Mock countdown hook
const useCountdown = (targetDate?: string) => {
    return { days: 0, hours: 3, minutes: 11, seconds: 48 };
};

export function UnitCardList({ unit }: { unit: AuctionUnit }) {
    const router = useRouter();
    const { days, hours, minutes, seconds } = useCountdown(unit.endDate);

    const statusInfo = getStatusInfo(unit.status);
    const { status: normalizedStatus } = statusInfo;

    const handlePropertyDetails = () => {
        router.push(`/group/auctions/${unit.auctionId}/property/${unit.id}`);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("ar-SA", {
            style: "currency",
            currency: "SAR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <Card className={`group flex flex-col md:flex-row items-center border bg-white shadow-sm transition-all hover:shadow-md overflow-hidden ${normalizedStatus === 'active' ? 'ring-1 ring-[#A28B67]/20' : ''} ${normalizedStatus === 'ended' ? 'opacity-80 grayscale-[0.3]' : ''}`}>
            {/* Thumbnail */}
            <div className="relative w-full md:w-32 h-32 md:h-full shrink-0 bg-gray-100 hidden md:block aspect-square">


                <Image
                    src={unit.image || "/placeholder.svg"}
                    alt={unit.title}
                    fill
                    className="object-cover"
                    sizes="120px"
                    onClick={handlePropertyDetails}
                />

            </div>

            {/* Mobile Image (visible only on small screens) */}
            <div className="relative w-full h-40 shrink-0 bg-gray-100 md:hidden block">
                <Image
                    src={unit.image || "/placeholder.svg"}
                    alt={unit.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 120px"
                />
                {normalizedStatus === 'active' && (
                    <Badge className="absolute top-2 right-2 bg-[#A28B67] text-white hover:bg-[#8A7556] px-2 py-0.5 text-xs font-semibold">
                        عرض
                    </Badge>
                )}
            </div>


            {/* Content Row */}
            <div className="flex flex-1 flex-col md:flex-row items-center justify-between p-4 gap-4 w-full">

                {/* Title & Location */}
                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm md:text-base mb-1">
                        <span className="text-[#A28B67] ml-1">{unit.lotNumber} -</span>
                        {unit.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 gap-3 mt-2">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {unit.location}</span>
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">{unit.type}</span>
                    </div>
                </div>

                {/* Bidding Stats */}
                <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-center border-t border-b md:border-y-0 border-gray-100 py-3 md:py-0">
                    <div className="flex flex-col gap-1 items-start md:items-center">
                        <span className="text-gray-500 text-[10px] md:text-xs">سعر الافتتاح</span>
                        <div className="flex items-center font-bold text-gray-800 text-sm">
                            {formatCurrency(unit.startingBid)}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 items-start md:items-center">
                        <span className="text-gray-500 text-[10px] md:text-xs">أعلى عرض</span>
                        <div className="flex items-center font-bold text-[#A28B67] bg-[#A28B67]/10 px-2 py-0.5 rounded text-sm">
                            {formatCurrency(unit.highestBid)}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 items-start md:items-center">
                        <span className="text-gray-500 text-[10px] md:text-xs flex items-center gap-1">
                            المشاركين
                        </span>
                        <span className="font-medium text-gray-700 text-sm flex items-center justify-center bg-gray-50 w-6 h-6 rounded-full">{unit.bidCount}</span>
                    </div>
                </div>

                {/* Status & Time */}
                <div className="flex flex-row md:flex-col items-center justify-between md:justify-center w-full md:w-32 shrink-0 gap-2">
                    {(normalizedStatus === 'active' || normalizedStatus === 'upcoming') && unit.endDate ? (
                        <div className="flex items-center gap-2" dir="ltr">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-800 font-mono font-bold text-xs bg-gray-50 px-1 rounded">
                                    {days.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[9px] text-gray-500">يوم</span>
                            </div>
                            <span className="text-gray-300 font-bold mb-3">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-800 font-mono font-bold text-xs bg-gray-50 px-1 rounded">
                                    {hours.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[9px] text-gray-500">ساعة</span>
                            </div>
                            <span className="text-gray-300 font-bold mb-3">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-800 font-mono font-bold text-xs bg-gray-50 px-1 rounded">
                                    {minutes.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[9px] text-gray-500">دقيقة</span>
                            </div>
                            <span className="text-gray-300 font-bold mb-3">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-[#A28B67] font-mono font-bold text-xs bg-gray-50 px-1 rounded">
                                    {seconds.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[9px] text-gray-500">ثانية</span>
                            </div>
                        </div>
                    ) : (
                        <Badge variant="outline" className={`${normalizedStatus === 'ended' ? 'text-gray-500' : ''}`}>
                            {normalizedStatus === 'ended' ? 'منتهي' : 'قادم'}
                        </Badge>
                    )}

                </div>

                {/* Action */}
                <div className="shrink-0 w-full md:w-auto">
                    {normalizedStatus === 'active' ? (
                        <Button
                            size="sm"
                            className="w-full md:w-auto bg-[#A28B67] hover:bg-[#8A7556] text-white whitespace-nowrap"
                            asChild
                        >
                            <a href={unit.custom_bidding_link} target="_blank" rel="noopener noreferrer">
                                زايد الآن
                            </a>
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            variant="outline"
                            className="w-full md:w-auto border-[#A28B67] text-[#A28B67] hover:bg-[#A28B67] hover:text-white whitespace-nowrap"
                            onClick={handlePropertyDetails}
                        >
                            التفاصيل
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}

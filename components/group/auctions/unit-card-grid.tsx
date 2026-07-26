"use client";

import Image from "next/image";
import { Heart, Clock, MapPin, Building2, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuctionUnit } from "./unit-types";
import { useI18n } from "@/lib/i18n/context";

// Simple countdown hook mock - you'd replace this with a real implementation
const useCountdown = (targetDate?: string) => {
    // Return mock values for now
    return { days: 0, hours: 3, minutes: 11, seconds: 48 };
};

export function UnitCardGrid({ unit }: { unit: AuctionUnit }) {
    const { t } = useI18n();
    const { days, hours, minutes, seconds } = useCountdown(unit.endDate);

    const isEnded = unit.status === "ended";
    const isActive = unit.status === "active";
    const isUpcoming = unit.status === "upcoming";

    // Format currency helper
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("ar-SA", {
            style: "currency",
            currency: "SAR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <Card className={`group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md ${isActive ? 'ring-2 ring-[#A28B67]/20' : ''} ${isEnded ? 'opacity-80 grayscale-[0.3]' : ''}`}>
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={unit.image || "/placeholder.svg"}
                    alt={unit.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    {/* <div className="flex flex-col gap-2">
                        {isActive && (
                            <Badge className="bg-[#A28B67] text-white hover:bg-[#8A7556] px-3 py-1 font-semibold">
                                جاري
                            </Badge>
                        )}
                        {isEnded && (
                            <Badge className="bg-gray-500 text-white hover:bg-gray-600 px-3 py-1 font-semibold">
                                منتهي
                            </Badge>
                        )}
                        {isUpcoming && (
                            <Badge className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 font-semibold">
                                قادم
                            </Badge>
                        )}
                    </div> */}
                    {/* <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 hover:text-white">
                        <Heart className="h-4 w-4" />
                    </Button> */}
                </div>

                {/* Status Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md">
                    <p className="font-medium truncate">{unit.title}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm ml-2 leading-relaxed h-10">
                        <span className="text-[#A28B67] ml-1">{unit.lotNumber} -</span>
                        {unit.title}
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm mb-6 border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs truncate">سعر الافتتاح</span>
                        <div className="flex items-center text-[#A28B67] font-bold bg-[#A28B67]/10 px-2 py-1 rounded w-fit">
                            <TrendingUp className="h-3 w-3 ml-1" />
                            {formatCurrency(unit.startingBid)}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-gray-500 text-xs truncate">أعلى مزايدة</span>
                        <div className="flex items-center font-bold text-gray-900">
                            {formatCurrency(unit.highestBid)}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs truncate flex items-center gap-1">
                            <Users className="h-3 w-3" /> المشاركين
                        </span>
                        <span className="font-medium text-gray-700">{unit.bidCount}</span>
                    </div>

                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-gray-500 text-xs truncate flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> المدينة
                        </span>
                        <span className="font-medium text-[#A28B67]">{unit.location}</span>
                    </div>
                </div>

                {/* Time Remaining */}
                {(isActive || isUpcoming) && unit.endDate && (
                    <div className="flex flex-col items-center justify-center space-y-2 bg-gray-50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-gray-600 flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3 text-[#A28B67]" />
                            {isActive ? 'ينتهي في' : 'يبدأ في'}
                        </span>
                        <div className="flex items-center gap-2 text-center" dir="ltr">
                            <div className="flex flex-col">
                                <span className="bg-white border rounded shadow-sm text-gray-800 font-mono font-bold text-sm w-8 h-8 flex items-center justify-center">
                                    {days.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[10px] text-gray-500 mt-1">يوم</span>
                            </div>
                            <span className="text-gray-400 font-bold -mt-4">:</span>
                            <div className="flex flex-col">
                                <span className="bg-white border rounded shadow-sm text-gray-800 font-mono font-bold text-sm w-8 h-8 flex items-center justify-center">
                                    {hours.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[10px] text-gray-500 mt-1">ساعة</span>
                            </div>
                            <span className="text-gray-400 font-bold -mt-4">:</span>
                            <div className="flex flex-col">
                                <span className="bg-white border rounded shadow-sm text-gray-800 font-mono font-bold text-sm w-8 h-8 flex items-center justify-center">
                                    {minutes.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[10px] text-gray-500 mt-1">دقيقة</span>
                            </div>
                            <span className="text-gray-400 font-bold -mt-4">:</span>
                            <div className="flex flex-col">
                                <span className="bg-white border rounded shadow-sm text-[#A28B67] font-mono font-bold text-sm w-8 h-8 flex items-center justify-center">
                                    {seconds.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[10px] text-gray-500 mt-1">ثانية</span>
                            </div>
                        </div>
                    </div>
                )}
                {isEnded && (
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-5">
                        <span className="text-sm font-semibold text-gray-500">
                            المنتهي المزاد
                        </span>
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-5 pt-0">
                <Button
                    className="w-full bg-[#A28B67] hover:bg-[#8A7556] text-white"
                    disabled={isEnded}
                    asChild
                >
                    {isActive ? (
                        <a href={unit.custom_bidding_link} target="_blank" rel="noopener noreferrer">
                            زايد الآن
                        </a>
                    ) : isEnded ? (
                        'التفاصيل'
                    ) : (
                        'التفاصيل'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}

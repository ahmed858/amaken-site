"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { formatAuctionTime } from "@/lib/utils";
import { ERPNEXT_URL } from "@/lib/api";
import { useCountdown } from "@/hooks/use-countdown";

interface AuctionInfoBarProps {
    title: string;
    date: string;
    time: string;
    days: number;
    productsCount: number;
    status: "upcoming" | "current" | "ended";
    targetDate?: string; // The date to count down to (starts at or ends at)
    brochureUrl?: string;
}

export function AuctionInfoBar({ title, date, time, days, productsCount, status, targetDate, brochureUrl }: AuctionInfoBarProps) {
    const { t, locale } = useI18n();
    const isRTL = locale !== "en";
    const timeLeft = useCountdown(targetDate, status);

    const formatNumber = (num: number) => num.toString().padStart(2, '0').split('');

    const handleBrochureClick = () => {
        if (!brochureUrl) return;
        const fullUrl = `${ERPNEXT_URL}${brochureUrl}`;
        window.open(fullUrl, "_blank");
    };

    return (
        <div className="w-full bg-white mb-8" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-4 lg:px-8">



                {/* Stats Bar */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-md mt-5 p-6 flex flex-col md:flex-row items-center justify-between shadow-sm">

                    {/* Text Details */}
                    <div className="flex flex-col text-base text-gray-500 gap-3 mb-4 md:mb-0">
                        <div className="flex items-center gap-4">
                            <span className="w-24">أيام المزاد :</span>
                            <span className="font-bold text-gray-900">1</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <span className="font-bold text-gray-900">{date}</span>
                            <span className="font-bold text-gray-900">{formatAuctionTime(time, locale)}</span>
                        </div>

                    </div>

                    {/* Products Count */}
                    <div className="flex flex-col items-center justify-center p-4 px-8 bg-[#f4f4f4] border border-gray-200 rounded-md min-w-[140px] mb-4 md:mb-0">
                        <span className="text-sm font-medium text-gray-500 mb-1">عدد المنتجات</span>
                        <span className="text-3xl font-black text-[#A28B67]">{productsCount}</span>
                    </div>

                    {/* Countdown Timer */}
                    {status !== "ended" && timeLeft && (
                        <div className="flex flex-col items-center mb-4 md:mb-0">
                            <span className="text-sm font-bold text-gray-800 mb-3">
                                {status === "upcoming" ? "يبدأ بعد" : "ينتهي خلال"}
                            </span>
                            <div className="flex gap-4 text-center" dir="ltr">
                                {/* Days */}
                                <div className="flex flex-col items-center">
                                    <div className="flex gap-1 mb-1">
                                        {formatNumber(timeLeft.days).map((d, i) => (
                                            <span key={`d-${i}`} className="bg-[#e9ecef] text-gray-900 font-bold px-2 py-1 rounded text-xl min-w-[28px] text-center shadow-sm">{d}</span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">يوم</span>
                                </div>

                                {/* Hours */}
                                <div className="flex flex-col items-center">
                                    <div className="flex gap-1 mb-1">
                                        {formatNumber(timeLeft.hours).map((h, i) => (
                                            <span key={`h-${i}`} className="bg-[#e9ecef] text-gray-900 font-bold px-2 py-1 rounded text-xl min-w-[28px] text-center shadow-sm">{h}</span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">ساعة</span>
                                </div>

                                {/* Minutes */}
                                <div className="flex flex-col items-center">
                                    <div className="flex gap-1 mb-1">
                                        {formatNumber(timeLeft.minutes).map((m, i) => (
                                            <span key={`m-${i}`} className="bg-[#e9ecef] text-gray-900 font-bold px-2 py-1 rounded text-xl min-w-[28px] text-center shadow-sm">{m}</span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">دقيقة</span>
                                </div>

                                {/* Seconds */}
                                <div className="flex flex-col items-center">
                                    <div className="flex gap-1 mb-1">
                                        {formatNumber(timeLeft.seconds).map((s, i) => (
                                            <span key={`s-${i}`} className="bg-[#e9ecef] text-[#A28B67] font-bold px-2 py-1 rounded text-xl min-w-[28px] text-center shadow-sm">{s}</span>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-gray-500">ثانية</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Buttons */}
                    <div className="flex gap-4 pb-3">
                        <Button
                            className="bg-[#A28B67] hover:bg-[#8A7556] text-white rounded-full px-6 text-base h-11 font-medium shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handleBrochureClick}
                            disabled={!brochureUrl}
                        >
                            بروشور المزاد
                        </Button>
                        <Button className="bg-[#A28B67] hover:bg-[#8A7556] text-white rounded-full px-6 text-base h-11 font-medium shadow-sm transition-all hover:scale-105 active:scale-95">
                            عرض الخريطة
                        </Button>
                    </div>
                    {/* Empty block on the far left to match screenshot alignment if needed, or flex justify-between handles it */}

                </div>
            </div>
        </div>
    );
}

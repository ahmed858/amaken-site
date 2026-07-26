"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ERPNEXT_URL } from "@/lib/api";
import { formatAuctionTime } from "@/lib/utils";

interface AuctionHeroProps {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    status: "upcoming" | "current" | "ended";
    videoUrl?: string; // Placeholder for now
    mobasher_url?: string;
    approvalNumber?: string;
    auctionImage?: string;
}

export function AuctionHero({ title, description, date, time, location, status, videoUrl, mobasher_url, approvalNumber, auctionImage }: AuctionHeroProps) {
    // Helper to get YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;
    const { t, locale } = useI18n();
    const groupColor = "#A28B67";
    console.log(videoUrl);
    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#faf7f2] overflow-hidden">

            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A28B67]/5 skew-x-12 hidden lg:block" />

            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <SectionReveal>
                            <div className="inline-block px-4 py-2 rounded-full bg-[#A28B67]/10 text-[#A28B67] font-medium text-sm mb-6">
                                {t(`auctions.status.${status}` as any) || status}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-6 text-gray-500 mb-10">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#A28B67]" />
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#A28B67]" />
                                    <span>{formatAuctionTime(time, locale)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[#A28B67]" />
                                    <span>{location}</span>
                                </div>
                                {approvalNumber && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A28B67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                                        </div>
                                        <span>{t("auctions.labels.approvalNumber") || "رقم موافقة الهيئة العامة للعقار على إقامة المزاد"}: {approvalNumber}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="text-white px-8 text-lg h-14"
                                    style={{ backgroundColor: groupColor }}
                                    onClick={() => mobasher_url && window.open(mobasher_url, "_blank")}
                                >
                                    {t("auctions.labels.register")}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#A28B67] text-[#A28B67] px-8 text-lg h-14 hover:bg-[#A28B67] hover:text-white"
                                >
                                    {t("common.contactUs")}
                                </Button>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Video Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <SectionReveal delay={0.2} className=" w-[860px] h-[515px] relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-gray-900 border border-white/10">
                            {videoUrl ? (
                                <div className="absolute inset-0">
                                    <iframe
                                        className="w-full h-full border-0"
                                        src={videoUrl.includes("embed") ? videoUrl : `https://www.youtube.com/embed/${getYouTubeId(videoUrl)}?autoplay=1&mute=1&loop=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            ) : auctionImage ? (
                                <div className="absolute inset-0">
                                    <img
                                        src={auctionImage.startsWith('http') ? auctionImage : `${ERPNEXT_URL}${auctionImage}`}
                                        alt={title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/50 italic font-light">
                                    {t("auctions.noVideoAvailable")}
                                </div>
                            )}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none z-20">
                                <p className="font-serif italic text-lg opacity-80">{t("auctions.previewSubtitle")}</p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

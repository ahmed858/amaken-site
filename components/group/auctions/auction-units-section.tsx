"use client";

import { useState, useEffect } from "react";
import { Grid, List } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useI18n } from "@/lib/i18n/context";
import { AuctionUnit } from "./unit-types";
import { UnitCardGrid } from "./unit-card-grid";
import { UnitCardList } from "./unit-card-list";
import { Skeleton } from "@/components/ui/skeleton";

type ViewMode = "grid" | "list";

interface AuctionUnitsSectionProps {
    units: AuctionUnit[];
    isLoading: boolean;
}

export function AuctionUnitsSection({ units, isLoading }: AuctionUnitsSectionProps) {
    const { t } = useI18n();
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [mounted, setMounted] = useState(false);

    // Persist view preference
    useEffect(() => {
        setMounted(true);
        const savedView = localStorage.getItem("auction-units-view");
        if (savedView === "grid" || savedView === "list") {
            setViewMode(savedView);
        }
    }, []);

    const handleViewChange = (value: string) => {
        if (!value) return; // Prevent deselecting
        const newView = value as ViewMode;
        setViewMode(newView);
        localStorage.setItem("auction-units-view", newView);
    };

    if (!mounted) return null;

    return (
        <section className="py-12 bg-gray-50/50" dir="rtl">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 pb-4 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                            الوحدات المعروضة في المزاد
                            <span className="bg-[#A28B67] text-white text-sm px-2 py-0.5 rounded-full font-sans">
                                {units.length}
                            </span>
                        </h2>
                        <p className="text-gray-500 mt-1 text-sm">تصفح العقارات المتاحة للمزايدة</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-1 rounded-lg border shadow-sm">
                        <ToggleGroup type="single" value={viewMode} onValueChange={handleViewChange}>
                            <ToggleGroupItem value="grid" aria-label="Grid view" className="data-[state=on]:bg-[#A28B67]/10 data-[state=on]:text-[#A28B67]">
                                <Grid className="h-4 w-4 ml-2" />
                                <span className="text-sm font-medium">بطاقات</span>
                            </ToggleGroupItem>
                            <div className="w-px h-6 bg-gray-200 mx-1" />
                            <ToggleGroupItem value="list" aria-label="List view" className="data-[state=on]:bg-[#A28B67]/10 data-[state=on]:text-[#A28B67]">
                                <List className="h-4 w-4 ml-2" />
                                <span className="text-sm font-medium">قائمة</span>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {isLoading ? (
                        /* Loading Skeletons */
                        viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="rounded-xl border bg-white overflow-hidden">
                                        <Skeleton className="h-48 w-full" />
                                        <div className="p-5 space-y-4">
                                            <Skeleton className="h-6 w-3/4" />
                                            <div className="grid grid-cols-2 gap-4">
                                                <Skeleton className="h-10 w-full" />
                                                <Skeleton className="h-10 w-full" />
                                            </div>
                                            <Skeleton className="h-16 w-full" />
                                            <Skeleton className="h-10 w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex flex-col md:flex-row items-center border bg-white rounded-lg p-4 gap-4">
                                        <Skeleton className="h-24 w-24 rounded-md shrink-0 hidden md:block" />
                                        <div className="flex-1 space-y-3 w-full">
                                            <Skeleton className="h-5 w-1/3" />
                                            <Skeleton className="h-4 w-1/4" />
                                        </div>
                                        <Skeleton className="h-10 w-full md:w-32" />
                                    </div>
                                ))}
                            </div>
                        )
                    ) : units.length === 0 ? (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-20 bg-white border border-dashed rounded-xl">
                            <div className="bg-gray-50 p-4 rounded-full mb-4 text-gray-400">
                                <Grid className="w-10 h-10" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد وحدات متاحة</h3>
                            <p className="text-gray-500">لم يتم إضافة أي وحدات لهذا المزاد بعد.</p>
                        </div>
                    ) : (
                        /* Units List/Grid */
                        viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {units.map((unit) => (
                                    <UnitCardGrid key={unit.id} unit={unit} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {units.map((unit) => (
                                    <UnitCardList key={unit.id} unit={unit} />
                                ))}
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}

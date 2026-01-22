"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, Building2, LandPlot, Building, Filter, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterMode = "all" | "sale" | "rent";
export type FilterType = "all" | "Apartment" | "Villa" | "Building" | "Land";

interface FilterBarProps {
    mode: FilterMode;
    setMode: (mode: FilterMode) => void;
    type: FilterType;
    setType: (type: FilterType) => void;
    t: any;
}

export function FilterBar({ mode, setMode, type, setType, t }: FilterBarProps) {

    const types = [
        { value: "all", label: t.filters.all, icon: LayoutGrid },
        { value: "شقة", label: t.filters.apartment, icon: Building },
        { value: "فيلا", label: t.filters.villa, icon: Home },
        { value: "عمارة", label: t.filters.building, icon: Building2 },
        { value: "أرض", label: t.filters.land, icon: LandPlot },
    ];

    return (
        <div className="w-full space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-8 sticky top-20 z-30 bg-background/80 backdrop-blur-lg p-4 rounded-xl border shadow-sm">

            {/* Sale / Rent Toggle */}
            <div className="flex p-1 bg-muted rounded-lg w-full md:w-auto">
                {(["all", "sale", "rent"] as const).map((m) => (
                    <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={cn(
                            "flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                            mode === m
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {t.filters[m]}
                    </button>
                ))}
            </div>

            {/* Property Type Icons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <div className="flex items-center gap-1 md:gap-2">
                    <Filter className="w-4 h-4 text-muted-foreground hidden md:block mr-2" />
                    {types.map((item) => {
                        const Icon = item.icon;
                        const isSelected = type === item.value;

                        return (
                            <Button
                                key={item.value}
                                variant={isSelected ? "default" : "outline"}
                                size="sm"
                                onClick={() => setType(item.value as FilterType)}
                                className={cn(
                                    "flex items-center gap-2 whitespace-nowrap",
                                    isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

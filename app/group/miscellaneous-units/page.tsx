"use client";

import { useState, useEffect, useMemo } from "react";
import { UnitData } from "@/types/UnitData";
import { UnitCard } from "@/components/group/projects/UnitCard";
import { UnitInterestModal } from "@/components/group/projects/UnitInterestModal";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { useI18n } from "@/lib/i18n/context";
import { Loader2, Search, FilterX } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function MiscellaneousUnitsPage() {
    const { locale, dictionary, direction } = useI18n();
    const t = (dictionary as any).miscellaneousUnitsPage;

    const [units, setUnits] = useState<UnitData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Filter states
    const [typeFilter, setTypeFilter] = useState("all");
    const [cityFilter, setCityFilter] = useState("all");
    const [neighborhoodFilter, setNeighborhoodFilter] = useState("all");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchUnits = async () => {
            try {
                const response = await fetch("/api/group/miscellaneous-units");
                if (!response.ok) throw new Error("Failed to fetch units");
                const data = await response.json();
                setUnits(data);
            } catch (error) {
                console.error("Failed to load miscellaneous units", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUnits();
    }, []);

    const filterOptions = useMemo(() => {
        const types = new Set<string>();
        const cities = new Set<string>();
        const neighborhoods = new Set<string>();

        units.forEach(u => {
            if (u.type[locale]) types.add(u.type[locale]);
            if (u.city) cities.add(u.city);
            if (u.neighborhood) neighborhoods.add(u.neighborhood);
        });

        return {
            types: Array.from(types).sort(),
            cities: Array.from(cities).sort(),
            neighborhoods: Array.from(neighborhoods).sort()
        };
    }, [units, locale]);

    const filteredUnits = useMemo(() => {
        return units.filter(u => {
            const matchesType = typeFilter === "all" || u.type[locale] === typeFilter;
            const matchesCity = cityFilter === "all" || u.city === cityFilter;
            const matchesNeighborhood = neighborhoodFilter === "all" || u.neighborhood === neighborhoodFilter;
            const matchesMinPrice = minPrice === "" || (u.price && u.price >= parseFloat(minPrice));
            const matchesMaxPrice = maxPrice === "" || (u.price && u.price <= parseFloat(maxPrice));
            const matchesSearch = searchQuery === "" ||
                u.name[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
                u.id.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesType && matchesCity && matchesNeighborhood && matchesMinPrice && matchesMaxPrice && matchesSearch;
        });
    }, [units, typeFilter, cityFilter, neighborhoodFilter, minPrice, maxPrice, searchQuery, locale]);

    const handleRegisterInterest = (unit: UnitData) => {
        setSelectedUnit(unit);
        setModalOpen(true);
    };

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: t.title },
    ];

    const resetFilters = () => {
        setTypeFilter("all");
        setCityFilter("all");
        setNeighborhoodFilter("all");
        setMinPrice("");
        setMaxPrice("");
        setSearchQuery("");
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950" dir={direction}>
            <PageBreadcrumb
                title={t.title}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 py-12">
                {/* Search and Filters Header */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Search */}
                        <div className="space-y-2">
                            <Label className="text-zinc-500 font-medium">{t.filters.search}</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                                <Input
                                    placeholder={t.filters.search}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* City Filter */}
                        <div className="space-y-2">
                            <Label className="text-zinc-500 font-medium">{t.filters.city}</Label>
                            <Select value={cityFilter} onValueChange={setCityFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder={t.filters.city} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">{t.filters.all}</SelectItem>
                                    {filterOptions.cities.map(city => (
                                        <SelectItem key={city} value={city}>{city}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Neighborhood Filter */}
                        <div className="space-y-2">
                            <Label className="text-zinc-500 font-medium">{t.filters.neighborhood}</Label>
                            <Select value={neighborhoodFilter} onValueChange={setNeighborhoodFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder={t.filters.neighborhood} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">{t.filters.all}</SelectItem>
                                    {filterOptions.neighborhoods.map(nb => (
                                        <SelectItem key={nb} value={nb}>{nb}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Type Filter */}
                        <div className="space-y-2">
                            <Label className="text-zinc-500 font-medium">{t.filters.type}</Label>
                            <Select value={typeFilter} onValueChange={setTypeFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder={t.filters.type} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">{t.filters.all}</SelectItem>
                                    {filterOptions.types.map(type => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-end justify-between gap-6 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                            <div className="space-y-2">
                                <Label className="text-zinc-500 font-medium">{t.filters.minPrice}</Label>
                                <Input
                                    type="number"
                                    placeholder={t.filters.minPrice}
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full lg:w-40"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-zinc-500 font-medium">{t.filters.maxPrice}</Label>
                                <Input
                                    type="number"
                                    placeholder={t.filters.maxPrice}
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full lg:w-40"
                                />
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            onClick={resetFilters}
                            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-2"
                        >
                            <FilterX className="h-4 w-4" />
                            {locale === "ar" ? "إعادة ضبط الفلاتر" : "Reset Filters"}
                        </Button>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        {locale === "ar"
                            ? `تم العثور على ${filteredUnits.length} وحدة`
                            : `Found ${filteredUnits.length} units`}
                    </p>
                </div>

                {/* Units Grid */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <Loader2 className="h-10 w-10 animate-spin text-zinc-400 mb-4" />
                        <p className="text-zinc-500">{dictionary.common.loading}</p>
                    </div>
                ) : filteredUnits.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredUnits.map((unit, index) => (
                            <UnitCard
                                key={unit.id}
                                unit={unit}
                                index={index}
                                onRegisterInterest={handleRegisterInterest}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-full mb-6">
                            <Search className="h-10 w-10 text-zinc-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.noResults}</h3>
                        <Button variant="outline" onClick={resetFilters} className="mt-4">
                            {locale === "ar" ? "مسح جميع الفلاتر" : "Clear all filters"}
                        </Button>
                    </div>
                )}
            </main>

            <UnitInterestModal
                unit={selectedUnit}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </div>
    );
}

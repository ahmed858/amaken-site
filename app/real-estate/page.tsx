"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RealEstateHero } from "@/components/real-estate/real-estate-hero";
import { FilterBar, FilterMode, FilterType } from "@/components/real-estate/filter-bar";
import { PropertyCard, PropertyData } from "@/components/real-estate/property-card";
import { useI18n } from "@/lib/i18n/context";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function RealEstatePage() {
    const { dictionary, direction, locale } = useI18n();
    const t = dictionary as any;
    const [properties, setProperties] = useState<PropertyData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filters & Pagination
    const [filterMode, setFilterMode] = useState<FilterMode>("all");
    const [filterType, setFilterType] = useState<FilterType>("all");
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const LIMIT = 9;

    const fetchProperties = async (isLoadMore = false) => {
        if (!isLoadMore) {
            setLoading(true);
            setPage(0);
        }

        try {
            const start = isLoadMore ? (page + 1) * LIMIT : 0;
            const query = new URLSearchParams({
                limit: LIMIT.toString(),
                start_limit: start.toString(),
                type: filterType,
                mode: filterMode
            });

            const response = await fetch(`/api/real-estate?${query}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch properties: ${response.statusText}`);
            }

            const result = await response.json();

            if (result.data) {
                if (isLoadMore) {
                    setProperties(prev => [...prev, ...result.data]);
                    setPage(prev => prev + 1);
                } else {
                    setProperties(result.data);
                }
                setHasMore(result.data.length === LIMIT);
            }
        } catch (err: any) {
            console.error("Error fetching properties:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, [filterMode, filterType]);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <br />
            <br />

            <div className="flex-1 container mx-auto px-4 py-12">
                <FilterBar
                    mode={filterMode}
                    setMode={setFilterMode}
                    type={filterType}
                    setType={setFilterType}
                    t={t.realEstateListing}
                />

                {
                    loading && properties.length === 0 ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            <span className="ml-2 text-muted-foreground">{t.common.loading}</span>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 py-12">
                            <p>{error}</p>
                            <p className="text-sm text-muted-foreground mt-2">Please try again later.</p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {properties.length > 0 ? (
                                    properties.map((property) => (
                                        <PropertyCard
                                            key={property.name}
                                            property={property}
                                            t={t.realEstateListing}
                                            direction={direction}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-20 text-muted-foreground">
                                        No properties found matching your criteria.
                                    </div>
                                )}
                            </div>

                            {hasMore && (
                                <div className="flex justify-center">
                                    <Button
                                        onClick={() => fetchProperties(true)}
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full px-12 py-6 text-lg font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/20"
                                        disabled={loading}
                                    >
                                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t.common.viewAll}
                                    </Button>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>

            <Footer />
        </main >
    );
}

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PropertyDetails } from "@/components/real-estate/property-details";
import { PropertyData } from "@/components/real-estate/property-card";
import { useI18n } from "@/lib/i18n/context";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PropertyPage() {
    const { id } = useParams();
    const { dictionary, direction, locale } = useI18n();
    const t = dictionary as any;

    const [property, setProperty] = useState<PropertyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            setLoading(true);
            try {
                // In ERPNext, we can fetch a single resource by name
                // Usually the ID in our system is the 'name' in ERPNext
                const response = await fetch(`/api/real-estate`); // For now we fetch all and find, but ideally /api/real-estate/${id}
                if (!response.ok) throw new Error("Failed to fetch property");

                const result = await response.json();
                const found = result.data?.find((p: PropertyData) => p.name === id);

                if (found) {
                    setProperty(found);
                } else {
                    setError("Property not found");
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProperty();
    }, [id]);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <div className="flex-1 container mx-auto px-4 py-32">
                {/* Back Button */}
                <Link href="/real-estate" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    {direction === 'rtl' ? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> : <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
                    {t.nav.realEstate}
                </Link>

                {loading ? (
                    <div className="flex flex-col justify-center items-center h-96 space-y-4">
                        <Loader2 className="w-12 h-12 animate-spin text-primary" />
                        <span className="text-xl font-medium text-muted-foreground">{t.common.loading}</span>
                    </div>
                ) : error || !property ? (
                    <div className="text-center py-24 space-y-6">
                        <h2 className="text-3xl font-bold text-red-500">{error || "Property Not Found"}</h2>
                        <Button asChild>
                            <Link href="/real-estate">Back to Listings</Link>
                        </Button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <PropertyDetails
                            property={property}
                            t={t.realEstateListing}
                            direction={direction}
                        />
                    </motion.div>
                )}
            </div>

            <Footer />
        </main>
    );
}

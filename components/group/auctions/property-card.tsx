"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Store, Home, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Property {
    id: string;
    auctionId: string;
    title: string;
    description: string;
    location: string;
    type: "residential" | "commercial" | "land" | "industrial";
    area: number;
    rooms?: number;
    bathrooms?: number;
    image: string;
    startingPrice?: string;
    status: "available" | "sold" | "withdrawn";
}

interface PropertyCardProps {
    property: Property;
    index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
    const { t } = useI18n();
    const groupColor = "#A28B67";

    const typeIcons = {
        residential: Home,
        commercial: Store,
        land: MapPin,
        industrial: Store, // Fallback or specific icon
    };

    const TypeIcon = typeIcons[property.type] || Home;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <Badge className={cn(
                    "absolute top-4 left-4 bg-white/90 text-gray-800 backdrop-blur-sm border-0",
                )}>
                    {t(`projectsPage.units.type`)}: {property.type} {/* Needs translation key or use dictionary */}
                </Badge>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-[#A28B67] transition-colors">
                        {property.title}
                    </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <MapPin className="w-4 h-4 text-[#A28B67]" />
                    <span>{property.location}</span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                        <TypeIcon className="w-4 h-4 text-[#A28B67]" />
                        <span className="text-sm">{property.area} {t("projectsPage.units.area")}</span>
                    </div>
                    {property.rooms && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Bed className="w-4 h-4 text-[#A28B67]" />
                            <span className="text-sm">{property.rooms} {t("projectsPage.units.rooms")}</span>
                        </div>
                    )}
                    {property.bathrooms && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Bath className="w-4 h-4 text-[#A28B67]" />
                            <span className="text-sm">{property.bathrooms} {t("projectsPage.units.bathrooms")}</span>
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link href={`/group/auctions/${property.auctionId}/property/${property.id}`} className="block">
                        <Button
                            variant="outline"
                            className="w-full gap-2 hover:bg-[#A28B67] hover:text-white transition-colors border-gray-200"
                        >
                            {t("auctions.labels.viewProperty")}
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

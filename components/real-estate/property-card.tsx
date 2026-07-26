"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, MapPin, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface PropertyData {
    name: string; // ID
    title: string;
    property_type: string;
    marketing: string;
    sales: number;
    rent: number;
    project_name: string;
    instrument_size: number;
    image11?: string;
    image22?: string;
    image33?: string;
    image44?: string;
}

interface PropertyCardProps {
    property: PropertyData;
    t: any;
    direction: "ltr" | "rtl";
}

export function PropertyCard({ property, t, direction }: PropertyCardProps) {
    // Determine if sale or rent
    const isForSale = property.sales > 0;
    const isForRent = property.rent > 0;

    // Use first available image or placeholder
    const imageUrl = property.image11 || property.image22 || property.image33 || "/placeholder-property.jpg";

    // Price formatting
    const price = isForSale ? property.sales : property.rent;
    const formattedPrice = new Intl.NumberFormat(direction === 'rtl' ? 'ar-SA' : 'en-US').format(price);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="h-full"
        >
            <Card className="overflow-hidden h-full border-0 shadow-lg group bg-card hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={imageUrl.startsWith('http') ? imageUrl : `${process.env.NEXT_PUBLIC_ERPNEXT_URL || 'https://amaken.space'}${imageUrl}`}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                        <Badge variant={isForSale ? "default" : "secondary"} className="bg-primary/90 hover:bg-primary backdrop-blur-sm">
                            {isForSale ? t.filters.sale : t.filters.rent}
                        </Badge>
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {t.filters[property.property_type.toLowerCase()] || property.property_type}
                        </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{property.title}</h3>
                            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                                <Building2 className="w-3 h-3" />
                                {property.project_name || t.card.project}
                            </p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-5 pt-2">
                    <div className="flex items-baseline gap-1 mt-2 mb-4">
                        <span className="text-2xl font-bold text-primary">{formattedPrice}</span>
                        <span className="text-sm text-muted-foreground">{t.card.sar}</span>
                        {isForRent && <span className="text-sm text-muted-foreground">/ {t.filters.rent}</span>}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                        <div className="flex items-center gap-1.5">
                            <Ruler className="w-4 h-4 text-primary/70" />
                            <span>{property.instrument_size} {t.card.area}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                    <Button asChild className="w-full gap-2 group-hover:bg-primary/90" variant="secondary">
                        <Link href={`/real-estate/${property.name}`}>
                            {t.card.viewDetails}
                            <ArrowRight className={`w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

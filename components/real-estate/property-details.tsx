"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
    Ruler,
    BedDouble,
    Bath,
    MapPin,
    Calendar,
    CheckCircle2,
    Share2,
    Heart,
    ChevronLeft,
    ChevronRight,
    Wind,
    Droplets,
    Zap,
    Navigation,
    Home,
    Layers
} from "lucide-react";
import { PropertyData } from "./property-card";

interface PropertyDetailsProps {
    property: PropertyData;
    t: any;
    direction: "ltr" | "rtl";
}

export function PropertyDetails({ property, t, direction }: PropertyDetailsProps) {
    const images = [property.image11, property.image22, property.image33, property.image44].filter(Boolean) as string[];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const isForSale = (property.sales ?? 0) > 0;
    const price = isForSale ? property.sales : property.rent;
    const formattedPrice = new Intl.NumberFormat(direction === 'rtl' ? 'ar-SA' : 'en-US').format(price);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const baseUrl = process.env.NEXT_PUBLIC_ERPNEXT_URL || 'https://amaken.space';

    const renderFeature = (icon: any, label: string) => (
        <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors">
            <div className="text-primary mb-2">{icon}</div>
            <span className="text-sm font-medium text-center">{label}</span>
        </div>
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Images and Basic Info */}
            <div className="lg:col-span-8 space-y-8">
                {/* Image Slider */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted group shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={images[currentImageIndex]?.startsWith('http') ? images[currentImageIndex] : `${baseUrl}${images[currentImageIndex]}`}
                                alt={property.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={prevImage}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={nextImage}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="absolute top-6 right-6 flex gap-2">
                        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full">
                            <Heart className="w-5 h-5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="bg-white/20 hover:bg-white/40 text-white backdrop-blur-md rounded-full">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Property Header */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="default" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                            {isForSale ? t.filters.sale : t.filters.rent}
                        </Badge>
                        <Badge variant="outline" className="px-4 py-1 text-sm border-border">
                            {t.filters[property.property_type.toLowerCase()] || property.property_type}
                        </Badge>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{property.title}</h1>
                            <p className="text-muted-foreground flex items-center gap-2 text-lg">
                                <MapPin className="w-5 h-5 text-primary" />
                                {property.project_name || "Riyadh, Saudi Arabia"}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-black text-primary">
                                {formattedPrice} <span className="text-xl font-medium text-muted-foreground">{t.card.sar}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features Bar */}
                <div className="flex gap-8 py-6 border-y border-border/50 overflow-x-auto">
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                            <BedDouble className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">2</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.details.bedrooms}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                            <Bath className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">2</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.details.bathrooms}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                            <Ruler className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="text-lg font-bold">{property.instrument_size}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.card.area}</div>
                        </div>
                    </div>
                </div>

                {/* Description Snippet (Mobile/Short View) */}
                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                    <h3 className="text-xl font-bold mb-4">{t.details.description}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {property.title} | {t.realEstate.projects.description}
                    </p>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="details" className="w-full" dir={direction}>
                    <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 backdrop-blur-sm rounded-xl border border-border mb-6 overflow-x-auto flex-nowrap">
                        <TabsTrigger value="details" className="px-8 py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.details.title}</TabsTrigger>
                        <TabsTrigger value="description" className="px-8 py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.details.description}</TabsTrigger>
                        <TabsTrigger value="address" className="px-8 py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.details.address}</TabsTrigger>
                        <TabsTrigger value="advantages" className="px-8 py-2.5 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.details.advantages}</TabsTrigger>
                    </TabsList>

                    <Card className="border-0 bg-transparent shadow-none">
                        <TabsContent value="details" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {[
                                    { label: t.details.propertyType, value: t.filters[property.property_type.toLowerCase()] || property.property_type },
                                    { label: t.details.offerType, value: isForSale ? t.filters.sale : t.filters.rent },
                                    { label: t.details.refNumber, value: "87846715" },
                                    { label: t.details.status, value: t.details.ready },
                                    { label: t.details.furnishing, value: t.details.furnished },
                                    { label: t.details.addedDate, value: "25 Dec 2025" },
                                    { label: t.details.truCheck, value: "3 Jan 2026", icon: true },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-3 border-b border-border/50">
                                        <span className="text-muted-foreground">{item.label}</span>
                                        <span className="font-bold flex items-center gap-2">
                                            {item.icon && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="description" className="mt-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                {property.title} | {t.realEstate.projects.description}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Apartments fully furnished with modern elegant furniture.
                                2 Bedrooms + Hall + Kitchen + 2 Bathrooms.
                                Areas starting from 88m² up to 165m².
                                Prices from 1,352,000 SAR.
                            </p>
                        </TabsContent>

                        <TabsContent value="address" className="mt-0">
                            <div className="bg-muted/50 p-8 rounded-3xl border border-border flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">{property.project_name || "Riyadh, Saudi Arabia"}</h4>
                                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                                        Prince Faisal bin Abdullah bin Abdulrahman St, Hattin, North Riyadh, Riyadh
                                    </p>
                                </div>
                                <Button className="rounded-full px-8">View on Map</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="advantages" className="mt-0">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {renderFeature(<Home className="w-6 h-6" />, t.details.features.balcony)}
                                {renderFeature(<Wind className="w-6 h-6" />, t.details.features.ac)}
                                {renderFeature(<Zap className="w-6 h-6" />, t.details.features.electricity)}
                                {renderFeature(<Navigation className="w-6 h-6" />, t.details.features.roads)}
                                {renderFeature(<Droplets className="w-6 h-6" />, t.details.features.water)}
                                {renderFeature(<Layers className="w-6 h-6" />, t.details.features.sanitation)}
                            </div>
                        </TabsContent>
                    </Card>
                </Tabs>
            </div>

            {/* Right Column: Sticky Sidebar / Contact Box */}
            <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                    <Card className="border-0 shadow-lg bg-card">
                        <CardContent className="p-8 space-y-6">
                            <h3 className="text-xl font-bold">{t.common.contactUs}</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{t.common.phoneLabel}</div>
                                        <div className="font-bold">{t.common.phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Droplets className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{t.common.emailLabel}</div>
                                        <div className="font-bold">{t.common.email}</div>
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full py-6 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">
                                {t.common.contactUs}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Quick Badge Table */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border flex flex-col items-center text-center">
                            <div className="text-primary font-bold">2026</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Expiry</div>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border flex flex-col items-center text-center">
                            <div className="text-primary font-bold">SAR</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Currency</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

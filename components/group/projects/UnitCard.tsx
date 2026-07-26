"use client";

import { motion } from "framer-motion";
import { Bed, Move, Check, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { UnitData } from "@/types/UnitData";

interface UnitCardProps {
    unit: UnitData;
    onRegisterInterest: (unit: UnitData) => void;
    index: number;
}

export function UnitCard({ unit, onRegisterInterest, index }: UnitCardProps) {
    const { dictionary, locale } = useI18n();
    const t = (dictionary as any).projectsPage.units;

    const formattedPrice = unit.price
        ? new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US").format(unit.price)
        : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border transition-all duration-300 ${unit.status === 'تم البيع'
                ? "border-zinc-100 dark:border-zinc-800 opacity-80"
                : "border-zinc-200 dark:border-zinc-700 hover:shadow-lg hover:border-group-primary/50"
                }`}
        >
            <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                    src={unit.image || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"}
                    alt={unit.name[locale]}
                    className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${unit.status === 'تم البيع' ? "grayscale" : ""}`}
                />

                {/* Status Badge */}
                {/* <div className="absolute top-3 right-3">
                    <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg ${unit.status === 'جديد' ? 'bg-emerald-600 shadow-emerald-600/20' :
                        unit.status === 'محجوز' ? 'bg-zinc-500 shadow-zinc-500/20' :
                            unit.status === 'تم البيع' ? 'bg-red-600 shadow-red-600/20' :
                                'bg-group-primary shadow-[#A28B67]/20'
                        }`}>
                        {unit.status}
                    </span>
                </div> */}
            </div>

            <div className="p-5">
                <div className="grid grid-cols-2 text  mb-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 items-start mb-4">
                    <div className="flex flex-col items-start    ">
                        <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1 italic">
                            {unit.name[locale]}
                        </h3>
                        <span className="text-xs font-bold text-group-primary   ">
                            {unit.type[locale]}
                        </span>
                        {unit.description?.[locale] && (
                            <p className="text-xs text-zinc-500 mt-2 line-clamp-2">
                                {unit.description[locale]}
                            </p>
                        )}
                    </div>

                    <div className=" flex flex-col grid grid-cols-2 gap-4 mb-6    ">
                        <div className="flex flex-col items-center text-center">
                            <Move className="w-4 h-4 text-zinc-400 mb-1" />
                            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{unit.area}</span>
                            <span className="text-[10px] text-zinc-400 uppercase">{t.area}</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Bed className="w-4 h-4 text-zinc-400 mb-1" />
                            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{unit.rooms}</span>
                            <span className="text-[10px] text-zinc-400 uppercase">{t.rooms}</span>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between mt-auto">

                    <Button
                        variant={unit.status === 'تم البيع' ? "outline" : "default"}
                        disabled={unit.status === 'تم البيع'}
                        onClick={() => onRegisterInterest(unit)}
                        style={unit.status !== 'تم البيع' ? { backgroundColor: '#A28B67' } : {}}
                        className={`
              ${unit.status === 'تم البيع'
                                ? "border-zinc-200 text-zinc-400"
                                : "text-white transition-colors shadow-lg shadow-[#A28B67]/20 hover:opacity-90"}
            `}
                    >
                        {unit.status === 'تم البيع' ? t.sold : t.viewDetails}
                    </Button>

                    <div>
                        {unit.status === 'تم البيع' ? (
                            <span className="text-zinc-400 font-semibold italic">
                                {t.priceHidden}
                            </span>
                        ) : (
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-group-primary">
                                    {unit.price}
                                </span>
                                <span className="text-xs text-zinc-500">{t.currency}</span>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </motion.div>
    );
}

"use client";

import { useState } from "react";
import { UnitData } from "@/types/UnitData";
import { UnitCard } from "./UnitCard";
import { UnitInterestModal } from "./UnitInterestModal";
import { useI18n } from "@/lib/i18n/context";

interface UnitListProps {
    units: UnitData[];
}

export function UnitList({ units }: UnitListProps) {
    const { dictionary } = useI18n();
    const t = (dictionary as any).projectsPage.units;
    const [selectedUnit, setSelectedUnit] = useState<UnitData | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleRegisterInterest = (unit: UnitData) => {
        setSelectedUnit(unit);
        setModalOpen(true);
    };

    if (!units || units.length === 0) {
        return (
            <div className="py-20 text-center text-zinc-500">
                <p>No units available at the moment.</p>
            </div>
        );
    }

    return (
        <section className="py-16 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-2">{t.title}</h2>
                        <p className="text-zinc-500">
                            {units.filter(u => u.status !== 'تم البيع').length} Available / {units.length} Total
                        </p>
                    </div>
                    {/* Filter could go here */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {units.map((unit, index) => (
                        <UnitCard
                            key={unit.id}
                            unit={unit}
                            index={index}
                            onRegisterInterest={handleRegisterInterest}
                        />
                    ))}
                </div>
            </div>

            <UnitInterestModal
                unit={selectedUnit}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </section>
    );
}

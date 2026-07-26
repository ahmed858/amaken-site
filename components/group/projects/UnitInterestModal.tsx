"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n/context";
import { UnitData } from "@/types/UnitData";
import { Move, Bed, Bath, CheckCircle, RotateCcw, RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

interface UnitInterestModalProps {
    unit: UnitData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UnitInterestModal({ unit, open, onOpenChange }: UnitInterestModalProps) {
    const { dictionary, locale, direction } = useI18n();
    const t = (dictionary as any).projectsPage;
    const tUnits = t.units;
    const [submitted, setSubmitted] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        const submitPayload = {
            first_name: name,
            email_id: email,
            mobile_no: phone,
            // Send unit name as custom unit
            custom_unit: unit?.id,
            custom_project: unit?.project_id
        };

        console.log("Submitting lead payload:", submitPayload);

        try {
            const res = await fetch('/api/common/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitPayload),
            });

            if (res.ok) {
                console.log("Lead created successfully");
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    onOpenChange(false);
                }, 3000);
            } else {
                const err = await res.json();
                console.error("Error creating lead:", err);
            }
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRotateLeft = () => setRotation(prev => prev - 90);
    const handleRotateRight = () => setRotation(prev => prev + 90);
    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
    const handleReset = () => {
        setRotation(0);
        setZoom(1);
        x.set(0);
        y.set(0);
    };

    if (!unit) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent dir={direction} className="sm:max-w-[1200px] w-[95vw] max-h-[90dvh] overflow-hidden bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-0 flex flex-col md:flex-row">
                {/* Left Side: Image Viewer */}
                <div className="relative flex-1 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-4 overflow-hidden min-h-[300px] md:min-h-[500px]">
                    <motion.div
                        className={`w-full h-full flex items-center justify-center ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
                        drag={zoom > 1}
                        dragConstraints={{
                            top: -200 * zoom,
                            bottom: 200 * zoom,
                            left: -200 * zoom,
                            right: 200 * zoom,
                        }}
                        dragElastic={0.05}
                        style={{ x, y }}
                        animate={{
                            rotate: rotation,
                            scale: zoom,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {(!unit.planner_image) ? (
                            <div className="text-zinc-400 font-bold text-6xl">..</div>
                        ) : (
                            <img
                                src={unit.planner_image}
                                alt='..'
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                                draggable={false}
                            />
                        )}
                    </motion.div>

                    {/* Image Controls */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 z-20">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={handleRotateLeft}>
                            <RotateCcw className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={handleRotateRight}>
                            <RotateCw className="w-5 h-5" />
                        </Button>
                        <div className="w-px h-6 bg-white/20 mx-1" />
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={handleZoomOut} disabled={zoom <= 1}>
                            <ZoomOut className="w-5 h-5" />
                        </Button>
                        <span className="text-white text-sm font-bold min-w-[40px] text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={handleZoomIn} disabled={zoom >= 3}>
                            <ZoomIn className="w-5 h-5" />
                        </Button>
                        <div className="w-px h-6 bg-white/20 mx-1" />
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={handleReset}>
                            <Maximize2 className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="absolute top-6 left-6 bg-group-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg z-10" style={{ backgroundColor: '#A28B67' }}>
                        {unit.status === 'تم البيع' ? tUnits.sold : `${unit.price} ${tUnits.currency}`}
                    </div>
                </div>

                {/* Right Side: Form and Info */}
                <div className="w-full md:w-[450px] p-6 md:p-10 flex flex-col bg-white overflow-y-auto">
                    <DialogHeader className="mb-8">
                        <DialogTitle className="text-3xl font-bold">{unit.name[locale]}</DialogTitle>
                        <p className="text-zinc-500 mt-2">{unit.description?.[locale]}</p>
                        <h5 className="text-zinc-500 mt-2">رقم ترخيص الإعلان: {unit.authorization_number}</h5>
                    </DialogHeader>

                    {/* Unit Info Summary */}
                    <div className="bg-zinc-50 rounded-2xl p-6 mb-8 border border-zinc-100 italic">
                        <h4 className="text-xl font-bold mb-4">{unit.name[locale]}</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <Move className="w-5 h-5 text-group-primary" style={{ color: '#A28B67' }} />
                                <span className="text-xs font-bold text-zinc-400 uppercase">{tUnits.area}</span>
                                <span className="font-bold">{unit.area}</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Bed className="w-5 h-5 text-group-primary" style={{ color: '#A28B67' }} />
                                <span className="text-xs font-bold text-zinc-400 uppercase">{tUnits.rooms}</span>
                                <span className="font-bold">{unit.rooms}</span>
                            </div>
                            {/* <div className="flex flex-col items-center gap-1">
                                <Bath className="w-5 h-5 text-group-primary" style={{ color: '#A28B67' }} />
                                <span className="text-xs font-bold text-zinc-400 uppercase">{tUnits.bathrooms}</span>
                                <span className="font-bold">{unit.bathrooms}</span>
                            </div> */}
                        </div>
                    </div>

                    {submitted ? (
                        <div className="flex-1 flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-[#A28B67]/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-10 h-10 text-[#A28B67]" />
                            </div>
                            <h4 className="text-2xl font-bold text-zinc-900 mb-2">{t.form.success}</h4>
                            <p className="text-zinc-500 italic">Our team will be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="modal-name">{t.form.name}</Label>
                                <Input id="modal-name" name="name" required placeholder={t.form.name} className="h-12 bg-zinc-50 focus-visible:ring-[#A28B67] border-zinc-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="modal-email">{t.form.email}</Label>
                                <Input id="modal-email" name="email" type="email" required placeholder={t.form.email} className="h-12 bg-zinc-50 focus-visible:ring-[#A28B67] border-zinc-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="modal-phone">{t.form.phone}</Label>
                                <Input id="modal-phone" name="phone" type="tel" required placeholder={t.form.phone} className="h-12 bg-zinc-50 focus-visible:ring-[#A28B67] border-zinc-200" />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                style={{ backgroundColor: '#A28B67' }}
                                className="w-full text-white mt-4 h-14 text-lg font-bold shadow-lg shadow-[#A28B67]/20 hover:opacity-90 transition-all active:scale-[0.98] rounded-xl disabled:opacity-50"
                            >
                                {loading ? "..." : t.form.submit}
                            </Button>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
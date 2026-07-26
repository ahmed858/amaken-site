"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n/context";
import { CheckCircle } from "lucide-react";

interface InterestModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function InterestModal({ open, onOpenChange }: InterestModalProps) {
    const { dictionary, locale, direction } = useI18n();
    const t = (dictionary as any).groupCTA;
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onOpenChange(false);
        }, 3000);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent dir={direction} className="sm:max-w-[500px] p-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 max-h-[90dvh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-bold text-center">
                        {t.title}
                    </DialogTitle>
                </DialogHeader>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-[#A28B67]/10 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-[#A28B67]" />
                        </div>
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 italic">
                            {locale === "ar" ? "تم استلام طلبك بنجاح" : "Request Received Successfully"}
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            {locale === "ar" ? "سيتواصل معك فريقنا قريباً." : "Our team will be in touch shortly."}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="interest-name">{locale === "ar" ? "الاسم الكامل" : "Full Name"}</Label>
                            <Input
                                id="interest-name"
                                required
                                placeholder={locale === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                                className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 focus-visible:ring-[#A28B67]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="interest-email">{locale === "ar" ? "البريد الإلكتروني" : "Email"}</Label>
                                <Input
                                    id="interest-email"
                                    type="email"
                                    required
                                    placeholder="example@mail.com"
                                    className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 focus-visible:ring-[#A28B67]"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="interest-phone">{locale === "ar" ? "رقم الجوال" : "Phone Number"}</Label>
                                <Input
                                    id="interest-phone"
                                    type="tel"
                                    required
                                    placeholder="05xxxxxxx"
                                    className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 focus-visible:ring-[#A28B67]"
                                />
                            </div>
                        </div>

                        {/* <div className="space-y-2">
                            <Label>{locale === "ar" ? "نوع الاهتمام" : "Interest Type"}</Label>
                            <Select required>
                                <SelectTrigger className="h-12 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 focus:ring-[#A28B67]">
                                    <SelectValue placeholder={locale === "ar" ? "اختر نوع الاهتمام" : "Select interest type"} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="owner">{t.ownerBtn}</SelectItem>
                                    <SelectItem value="interested">{t.interestedBtn}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                        <Button
                            type="submit"
                            style={{ backgroundColor: '#A28B67' }}
                            className="w-full text-white mt-6 h-14 text-lg font-bold shadow-lg shadow-[#A28B67]/20 hover:opacity-90 transition-all active:scale-[0.98] rounded-xl"
                        >
                            {locale === "ar" ? "إرسال الطلب" : "Submit Request"}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n/context";
import { CheckCircle, Send } from "lucide-react";

interface ServiceRequestFormProps {
    serviceTitle: string;
}

export function ServiceRequestForm({ serviceTitle }: ServiceRequestFormProps) {
    const { locale } = useI18n();
    const [submitted, setSubmitted] = useState(false);
    const groupColor = "#A28B67";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#A28B67]/20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#A28B67]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" style={{ color: groupColor }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                    {locale === "ar" ? "تم إرسال طلبك بنجاح" : "Request Sent Successfully"}
                </h3>
                <p className="text-gray-600 mb-8">
                    {locale === "ar"
                        ? "شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة طلبك والرد عليك في أقرب وقت ممكن."
                        : "Thank you for contacting us. Our team will review your request and get back to you as soon as possible."}
                </p>
                <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                >
                    {locale === "ar" ? "إرسال طلب آخر" : "Send another request"}
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                    {locale === "ar" ? "طلب الخدمة" : "Request Service"}
                </h3>
                <p className="text-gray-500">
                    {locale === "ar"
                        ? `يرجى ملء النموذج أدناه لطلب خدمة ${serviceTitle}`
                        : `Please fill out the form below to request ${serviceTitle} service.`}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="service-name">{locale === "ar" ? "الاسم الكامل" : "Full Name"}</Label>
                        <Input
                            id="service-name"
                            required
                            placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-[#A28B67]"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="service-phone">{locale === "ar" ? "رقم الجوال" : "Phone Number"}</Label>
                        <Input
                            id="service-phone"
                            type="tel"
                            required
                            placeholder="05xxxxxxx"
                            className="h-12 bg-gray-50 border-gray-200 focus:ring-[#A28B67]"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="service-email">{locale === "ar" ? "البريد الإلكتروني" : "Email Address"}</Label>
                    <Input
                        id="service-email"
                        type="email"
                        required
                        placeholder="example@mail.com"
                        className="h-12 bg-gray-50 border-gray-200 focus:ring-[#A28B67]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="service-message">{locale === "ar" ? "تفاصيل إضافية" : "Additional Details"}</Label>
                    <Textarea
                        id="service-message"
                        placeholder={locale === "ar" ? "أخبرنا المزيد عن احتياجاتك..." : "Tell us more about your needs..."}
                        className="min-h-[120px] bg-gray-50 border-gray-200 focus:ring-[#A28B67]"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold text-white shadow-lg shadow-[#A28B67]/20 transition-all active:scale-[0.98]"
                    style={{ backgroundColor: groupColor }}
                >
                    <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 shrink-0" />
                    {locale === "ar" ? "إرسال الطلب" : "Send Request"}
                </Button>
            </form>
        </div>
    );
}

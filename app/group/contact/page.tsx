"use client"

import { useI18n } from "@/lib/i18n/context"
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react"

export default function GroupContactPage() {
    const { t, locale, direction } = useI18n()
    const isRTL = direction === "rtl"
    const groupColor = "#A28B67"

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "اتصل بنا" : "Contact Us" },
    ]

    return (
        <div className="min-h-screen bg-gray-50/50">
            <PageBreadcrumb
                title={locale === "ar" ? "اتصل بنا" : "Contact Us"}
                items={breadcrumbItems}
            />

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white">

                        {/* Contact Info Box - Group Gold Side */}
                        <div
                            className="lg:w-5/12 p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden"
                            style={{ backgroundColor: groupColor }}
                        >
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 z-0 opacity-10"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                            ></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 border-b border-white/20 pb-6 inline-block w-full">
                                        {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
                                    </h2>

                                    <div className="space-y-8 text-lg">
                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col gap-2 pt-1" dir="ltr">
                                                <span className={`font-semibold tracking-wide ${isRTL ? "text-right" : "text-left"}`}>920003401</span>
                                                {/* <span className={`font-semibold tracking-wide ${isRTL ? "text-right" : "text-left"}`}>920003401</span> */}
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span className="pt-2 font-medium">info@goamaken.com</span>
                                        </div>

                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <span className="pt-2 font-medium leading-relaxed">
                                                {locale === "ar"
                                                    ? "الدائري الشرقي الفرعيRQRA6805, 6805, 2990 ,الرياض ,14213, حي الريان ,المملكة العربية السعودية"
                                                    : "Eastern Ring Road Branch, RQRA6805, 6805, 2990, Riyadh, 14213, Al Rayyan District, Kingdom of Saudi Arabia"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-10">
                                    <p className="text-white/80 text-sm mb-4 font-medium">
                                        {locale === "ar" ? "تابعونا على:" : "Follow us on:"}
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                            <Facebook size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                            <Instagram size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="lg:w-7/12 p-8 lg:p-16 bg-white">
                            <div className="max-w-xl mx-auto">
                                <h2 className="text-3xl font-bold text-[#1e2c3a] mb-8 text-center lg:text-start">
                                    {locale === "ar" ? "ارسل لنا" : "Send us a Message"}
                                </h2>

                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 block">
                                            {locale === "ar" ? "الاسم" : "Name"}
                                        </label>
                                        <Input
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#A28B67] focus:ring-1 focus:ring-[#A28B67] h-12 rounded-xl transition-all"
                                            placeholder={locale === "ar" ? "الاسم" : "Name"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 block">
                                            {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                                        </label>
                                        <Input
                                            type="email"
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#A28B67] focus:ring-1 focus:ring-[#A28B67] h-12 rounded-xl transition-all"
                                            placeholder={locale === "ar" ? "البريد الإلكتروني" : "Email"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 block">
                                            {locale === "ar" ? "رقم الجوال" : "Phone Number"}
                                        </label>
                                        <Input
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#A28B67] focus:ring-1 focus:ring-[#A28B67] h-12 rounded-xl transition-all"
                                            placeholder={locale === "ar" ? "رقم الجوال" : "Phone Number"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 block">
                                            {locale === "ar" ? "الموضوع" : "Subject"}
                                        </label>
                                        <Input
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#A28B67] focus:ring-1 focus:ring-[#A28B67] h-12 rounded-xl transition-all"
                                            placeholder={locale === "ar" ? "الموضوع" : "Subject"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 block">
                                            {locale === "ar" ? "اكتب رسالتك هنا" : "Write your message here"}
                                        </label>
                                        <Textarea
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#A28B67] focus:ring-1 focus:ring-[#A28B67] min-h-[140px] rounded-xl resize-none transition-all p-4"
                                            placeholder={locale === "ar" ? "اكتب رسالتك هنا" : "Write your message here"}
                                        />
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-bold mt-6 hover:shadow-lg hover:translate-y-[-2px] transition-all rounded-xl"
                                        style={{ backgroundColor: groupColor }}
                                    >
                                        {locale === "ar" ? "ارسال" : "Send"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

"use client"

import React from 'react'

export const ContactForm = () => (
    <section className="lg:col-span-7 bg-[#ffffff] p-8 lg:p-12 rounded-xl shadow-sm">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-semibold text-[#041534] text-sm uppercase tracking-wider">الأسم بالكامل</label>
                    <input
                        className="w-full bg-[#f2f4f6] border-none rounded-md focus:ring-2 focus:ring-[#006a66] py-3 px-4"
                        placeholder="أدخل اسمك"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block font-semibold text-[#041534] text-sm uppercase tracking-wider">البريد الإلكتروني</label>
                    <input
                        className="w-full bg-[#f2f4f6] border-none rounded-md focus:ring-2 focus:ring-[#006a66] py-3 px-4 text-right"
                        placeholder="email@example.com"
                        type="email"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-semibold text-[#041534] text-sm uppercase tracking-wider">رقم الهاتف</label>
                    <input
                        className="w-full bg-[#f2f4f6] border-none rounded-md focus:ring-2 focus:ring-[#006a66] py-3 px-4 text-left"
                        dir="ltr"
                        placeholder="+966 XX XXX XXXX"
                        type="tel"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block font-semibold text-[#041534] text-sm uppercase tracking-wider">الموضوع</label>
                    <select className="w-full bg-[#f2f4f6] border-none rounded-md focus:ring-2 focus:ring-[#006a66] py-3 px-4 appearance-none">
                        <option>طلب تقييم عقاري</option>
                        <option>استفسار عام</option>
                        <option>الدعم الفني</option>
                        <option>أخرى</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2">
                <label className="block font-semibold text-[#041534] text-sm uppercase tracking-wider">الرسالة</label>
                <textarea
                    className="w-full bg-[#f2f4f6] border-none rounded-md focus:ring-2 focus:ring-[#006a66] py-3 px-4 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                ></textarea>
            </div>
            <button className="w-full md:w-auto bg-[#041534] text-white font-bold py-4 px-12 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                إرسال الرسالة
                <span className="material-symbols-outlined align-middle">send</span>
            </button>
        </form>
    </section>
)

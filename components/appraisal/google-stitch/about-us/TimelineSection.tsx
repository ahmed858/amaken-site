"use client"

import React from 'react'

export const TimelineSection = () => (
    <section className="py-24 px-6 md:px-20 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-[#041534] text-3xl font-bold mb-16 text-center">رحلة أماكن: عقد من التميز</h2>
            <div className="relative border-r-2 border-[#c5c6cf] pr-8 space-y-16">
                {/* 2014 */}
                <div className="relative">
                    <div className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-[#006a66] border-4 border-white"></div>
                    <span className="text-[#006a66] font-bold text-xl block mb-2">2014</span>
                    <h3 className="text-[#041534] font-bold text-lg mb-2">التأسيس والانطلاقة</h3>
                    <p className="text-[#45464e] leading-relaxed">تأسيس شركة أماكن للتقييم العقاري في مدينة الرياض برؤية واضحة لتنظيم قطاع التقييم وتقديم خدمات مهنية تعتمد على البيانات.</p>
                </div>
                {/* 2018 */}
                <div className="relative">
                    <div className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-[#006a66] border-4 border-white"></div>
                    <span className="text-[#006a66] font-bold text-xl block mb-2">2018</span>
                    <h3 className="text-[#041534] font-bold text-lg mb-2">التحول الرقمي</h3>
                    <p className="text-[#45464e] leading-relaxed">إطلاق أول منصة رقمية مؤتمتة لإدارة عمليات التقييم، مما ساهم في تقليص مدة التسليم بنسبة 40%.</p>
                </div>
                {/* 2021 */}
                <div className="relative">
                    <div className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-[#006a66] border-4 border-white"></div>
                    <span className="text-[#006a66] font-bold text-xl block mb-2">2021</span>
                    <h3 className="text-[#041534] font-bold text-lg mb-2">التوسع الإقليمي</h3>
                    <p className="text-[#45464e] leading-relaxed">الحصول على تراخيص لجميع فروع التقييم وافتتاح مكاتب إقليمية في جدة والدمام لتغطية احتياجات السوق المتنامية.</p>
                </div>
                {/* 2024 */}
                <div className="relative">
                    <div className="absolute -right-[41px] top-0 w-5 h-5 rounded-full bg-[#006a66] border-4 border-white"></div>
                    <span className="text-[#006a66] font-bold text-xl block mb-2">2024</span>
                    <h3 className="text-[#041534] font-bold text-lg mb-2">السيادة والابتكار</h3>
                    <p className="text-[#45464e] leading-relaxed">احتلال مكانة رائدة كشريك استراتيجي للبنوك والصناديق الاستثمارية، وتطوير تقنيات الذكاء الاصطناعي في التنبؤات العقارية.</p>
                </div>
            </div>
        </div>
    </section>
)

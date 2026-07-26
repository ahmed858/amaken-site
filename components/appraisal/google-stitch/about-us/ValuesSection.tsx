"use client"

import React from 'react'

export const ValuesSection = () => (
    <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-[#041534] text-3xl font-bold mb-4">قيمنا الجوهرية</h2>
                <div className="h-1 w-20 bg-[#006a66] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-[#f8f9fb] border-none hover:bg-[#e7e8ea] transition-colors rounded-xl">
                    <span className="material-symbols-outlined text-[#006a66] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                    <h4 className="text-[#041534] font-bold text-lg mb-2">النزاهة</h4>
                    <p className="text-[#45464e] text-sm">الالتزام بأعلى معايير الأخلاقيات المهنية والحياد المطلق.</p>
                </div>
                <div className="text-center p-8 bg-[#f8f9fb] border-none hover:bg-[#e7e8ea] transition-colors rounded-xl">
                    <span className="material-symbols-outlined text-[#006a66] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <h4 className="text-[#041534] font-bold text-lg mb-2">الدقة</h4>
                    <p className="text-[#45464e] text-sm">الاعتماد على البيانات الحية والتحليل العميق لكل تقرير.</p>
                </div>
                <div className="text-center p-8 bg-[#f8f9fb] border-none hover:bg-[#e7e8ea] transition-colors rounded-xl">
                    <span className="material-symbols-outlined text-[#006a66] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                    <h4 className="text-[#041534] font-bold text-lg mb-2">الشراكة</h4>
                    <p className="text-[#45464e] text-sm">بناء علاقات طويلة الأمد قائمة على النجاح المشترك.</p>
                </div>
                <div className="text-center p-8 bg-[#f8f9fb] border-none hover:bg-[#e7e8ea] transition-colors rounded-xl">
                    <span className="material-symbols-outlined text-[#006a66] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    <h4 className="text-[#041534] font-bold text-lg mb-2">الابتكار</h4>
                    <p className="text-[#45464e] text-sm">التطوير المستمر لأدواتنا التقنية ومنهجيات عملنا.</p>
                </div>
            </div>
        </div>
    </section>
)

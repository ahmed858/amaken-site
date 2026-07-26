"use client"

import React from 'react'

export const CertificationsSection = () => (
    <section className="py-24 px-6 md:px-20 bg-[#041534] text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold">الاعتمادات والتراخيص</h2>
            <p className="text-[#8392b7] mt-4">نعمل تحت مظلة الجهات التشريعية لضمان جودة المخرجات</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-[#1b2a4a] p-8 rounded-lg flex items-center gap-6">
                <span className="material-symbols-outlined text-4xl text-[#86f5ee]" style={{ fontVariationSettings: "'FILL' 1" }}>policy</span>
                <div className="text-right">
                    <h4 className="font-bold">هيئة "تقييم"</h4>
                    <p className="text-xs text-[#8392b7] mt-1">عضوية كاملة وترخيص رسمي للتقييم العقاري.</p>
                </div>
            </div>
            <div className="bg-[#1b2a4a] p-8 rounded-lg flex items-center gap-6">
                <span className="material-symbols-outlined text-4xl text-[#86f5ee]" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <div className="text-right">
                    <h4 className="font-bold">RICS معتمد</h4>
                    <p className="text-xs text-[#8392b7] mt-1">مطابقة المعايير الدولية للجمعية الملكية للمساحين.</p>
                </div>
            </div>
            <div className="bg-[#1b2a4a] p-8 rounded-lg flex items-center gap-6">
                <span className="material-symbols-outlined text-4xl text-[#86f5ee]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                <div className="text-right">
                    <h4 className="font-bold">ISO 9001:2015</h4>
                    <p className="text-xs text-[#8392b7] mt-1">شهادة عالمية في إدارة وضمان جودة الخدمات.</p>
                </div>
            </div>
        </div>
    </section>
)

"use client"

import React from 'react'
import type { ServiceSlug } from './appraisal-form.types'
import { SERVICE_META } from './appraisal-form.types'

const services: { slug: ServiceSlug; subtitleAr: string }[] = [
    { slug: 'real-estate', subtitleAr: 'عقارات سكنية وتجارية وأراضي' },
    { slug: 'machinery', subtitleAr: 'آلات ومعدات صناعية ومركبات' },
    { slug: 'facilities', subtitleAr: 'شركات وعلامات تجارية وأصول معنوية' },
]

interface Props {
    selectedService: ServiceSlug | null
    onSelect: (service: ServiceSlug) => void
}

export const AppraisalCategory = ({ selectedService, onSelect }: Props) => (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-extrabold text-[#041534] tracking-tight">اختر نوع الخدمة</h2>
            <p className="text-slate-500 mt-1 text-sm">حدد الخدمة المناسبة لأصولك لنتمكن من توجيهك للمقيّم المختص.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(({ slug, subtitleAr }) => {
                const meta = SERVICE_META[slug]
                const isSelected = selectedService === slug
                return (
                    <button
                        key={slug}
                        onClick={() => onSelect(slug)}
                        className={`w-full text-right cursor-pointer border-2 p-6 rounded-xl flex flex-col items-center text-center transition-all duration-200 outline-none
                            ${isSelected
                                ? 'border-[#006a66] bg-[#006a66]/5 shadow-md scale-[1.02]'
                                : 'border-transparent bg-white hover:bg-slate-50 hover:shadow-sm'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all ${isSelected ? 'bg-[#86f5ee]' : 'bg-[#edeef0]'}`}>
                            <span className={`material-symbols-outlined text-3xl align-middle ${isSelected ? 'text-[#006a66]' : 'text-[#75777f]'}`}
                                style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}>
                                {meta.icon}
                            </span>
                        </div>
                        <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-[#006a66]' : 'text-[#041534]'}`}>
                            {meta.titleAr}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{subtitleAr}</p>
                        {isSelected && (
                            <div className="mt-3 flex items-center gap-1 text-[#006a66] text-xs font-bold">
                                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                تم الاختيار
                            </div>
                        )}
                    </button>
                )
            })}
        </div>
        {!selectedService && (
            <p className="text-xs text-amber-600 flex items-center gap-1">
                <span className="material-symbols-outlined text-base align-middle">info</span>
                الرجاء اختيار نوع الخدمة للمتابعة
            </p>
        )}
    </div>
)

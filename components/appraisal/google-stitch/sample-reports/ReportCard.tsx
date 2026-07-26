"use client"

import React from 'react'

interface ReportCardProps {
    image: string
    category: string
    categoryColor: string
    title: string
    date: string
    description: string
}

export const ReportCard = ({ image, category, categoryColor, title, date, description }: ReportCardProps) => (
    <div className="group bg-[#ffffff] rounded-xl shadow-md transition-all hover:-translate-y-1 overflow-hidden text-right" dir="rtl">
        <div className="h-48 relative overflow-hidden bg-[#e7e8ea]">
            <img
                className="w-full h-full object-cover blur-[2px] opacity-60 scale-105 group-hover:scale-110 transition-transform duration-500"
                alt={title}
                src={image}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded-lg text-[#041534] text-xs font-bold shadow-sm">نمط المعاينة</span>
            </div>
            <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 ${categoryColor} rounded-full text-[10px] font-extrabold uppercase`}>{category}</span>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-[#041534] text-lg leading-snug">{title}</h3>
                <span className="text-[#45464e] text-xs font-medium shrink-0 ml-2">{date}</span>
            </div>
            <p className="text-sm text-[#45464e] mb-6 line-clamp-2">{description}</p>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#edeef0] text-[#041534] rounded-lg text-sm font-bold group-hover:bg-[#006a66] group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-lg align-middle">download</span>
                تحميل العينة
            </button>
        </div>
    </div>
)

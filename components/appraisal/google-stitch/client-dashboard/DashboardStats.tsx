"use client"

import React from 'react'

export const DashboardStats = () => (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#ffffff] p-6 rounded-xl border-r-4 border-[#041534] shadow-sm group hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-[#75777f] mb-1">إجمالي الطلبات</p>
            <div className="flex items-end justify-between">
                <span className="text-3xl font-extrabold text-[#041534]">12</span>
                <span className="material-symbols-outlined text-[#1b2a4a] opacity-20 text-4xl">inventory_2</span>
            </div>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-xl border-r-4 border-[#006a66] shadow-sm group hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-[#75777f] mb-1">تحت المراجعة</p>
            <div className="flex items-end justify-between">
                <span className="text-3xl font-extrabold text-[#006a66]">3</span>
                <span className="material-symbols-outlined text-[#86f5ee] opacity-30 text-4xl">pending_actions</span>
            </div>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-xl border-r-4 border-[#00c853] shadow-sm group hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-[#75777f] mb-1">الطلبات المكتملة</p>
            <div className="flex items-end justify-between">
                <span className="text-3xl font-extrabold text-[#00c853]">8</span>
                <span className="material-symbols-outlined text-green-200 opacity-40 text-4xl">task_alt</span>
            </div>
        </div>
        <div className="bg-[#ffffff] p-6 rounded-xl border-r-4 border-[#ffab00] shadow-sm group hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-[#75777f] mb-1">في انتظار الرد</p>
            <div className="flex items-end justify-between">
                <span className="text-3xl font-extrabold text-[#ffab00]">1</span>
                <span className="material-symbols-outlined text-amber-200 opacity-40 text-4xl">hourglass_empty</span>
            </div>
        </div>
    </section>
)

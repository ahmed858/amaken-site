"use client"

import React from 'react'
import { DashboardSidebar } from './DashboardSidebar'
import { DashboardHeader } from './DashboardHeader'
import { DashboardStats } from './DashboardStats'
import { DashboardRecentRequests } from './DashboardRecentRequests'
import { DashboardActions } from './DashboardActions'
import { DashboardFAB } from './DashboardFAB'

export const ClientDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <DashboardSidebar />
            <main className="mr-64 min-h-screen">
                <DashboardHeader />
                <div className="p-8 space-y-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
            <DashboardFAB />
            <footer className="mr-64 bg-[#041534] text-white w-[calc(100%-16rem)] py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h5 className="font-bold text-lg mb-4">Amaken Appraisal</h5>
                    <p className="text-slate-300 text-xs leading-relaxed max-w-xs">
                        الشريك الموثوق في تقديم حلول التقييم العقاري المبتكرة والتقارير الاستشارية الدقيقة عبر المملكة العربية السعودية.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="text-sm font-bold text-slate-400 mb-2">روابط سريعة</h5>
                    <a className="text-slate-300 hover:text-[#006a66] text-xs transition-colors" href="#">سياسة الخصوصية</a>
                    <a className="text-slate-300 hover:text-[#006a66] text-xs transition-colors" href="#">شروط الخدمة</a>
                    <a className="text-slate-300 hover:text-[#006a66] text-xs transition-colors" href="#">سياسة الكوكيز</a>
                </div>
                <div className="text-left md:text-right flex flex-col justify-between">
                    <div className="flex gap-4 mb-4 md:justify-end">
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">language</span>
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-white">share</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">© 2024 Amaken Appraisal. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

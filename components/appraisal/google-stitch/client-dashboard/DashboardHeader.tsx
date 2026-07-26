"use client"

import React from 'react'
import DropdownNeu from '../ui/dropdownneu'
import { useAuth } from '@/lib/appraisal/auth-context'
import { usePathname } from 'next/navigation'

export const DashboardHeader = () => {
    const { user } = useAuth()
    const pathname = usePathname()

    const getTitle = () => {
        if (pathname === '/appraisal/me') return 'الملف الشخصي'
        return 'لوحة التحكم'
    }

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-8 py-4 flex justify-between items-center shadow-sm">
            <h2 className="text-xl font-bold text-[#041534]">{getTitle()}</h2>
            <div className="flex items-center gap-4">

                <div className="h-8 w-[1px] bg-[#c5c6cf] mx-2"></div>
                <div className="flex items-center gap-2 cursor-pointer group">
                    <span className="text-sm font-medium text-[#041534]">{user?.first_name} {user?.last_name}</span>
                    {/* <span className="material-symbols-outlined text-[#75777f] group-hover:text-[#041534] transition-colors align-middle">expand_more</span> */}
                </div>
                <DropdownNeu />
            </div>
        </header>
    )
}

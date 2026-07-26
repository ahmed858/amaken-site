"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/appraisal/auth-context'

export const DashboardSidebar = () => {
    const pathname = usePathname()
    const { user, logout } = useAuth()

    const navItems = [
        { label: 'Dashboard', icon: 'dashboard', href: '/appraisal/client-dashboard' },
        { label: 'My Requests', icon: 'description', href: '/appraisal/client-dashboard/requests' },
        { label: 'My Reports', icon: 'assessment', href: '/appraisal/client-dashboard/reports' },
        { label: 'Invoices', icon: 'receipt_long', href: '/appraisal/client-dashboard/invoices' },
        { label: 'Profile', icon: 'person', href: '/appraisal/me' },
    ]

    const fullName = user ? `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email : 'جاري التحميل...'

    return (
        <aside className="h-screen w-64 fixed right-0 top-0 bg-[#f8f9fb] flex flex-col p-4 space-y-2 z-40 border-l border-[#edeef0]">
            <div className="mb-8 px-2 py-4">
                <h1 className="font-bold text-[#041534] text-xl tracking-tight">Amaken Appraisal</h1>
                <p className="text-xs text-[#75777f]">Sovereign Archive</p>
            </div>
            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${isActive
                                ? 'bg-white text-[#006a66] font-semibold shadow-sm'
                                : 'text-[#75777f] hover:bg-white/50'
                                }`}
                        >
                            <span className="material-symbols-outlined align-middle">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
            <div className="pt-4 border-t border-[#edeef0]">
                <button
                    onClick={() => logout()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                >
                    <span className="material-symbols-outlined align-middle">logout</span>
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    )
}

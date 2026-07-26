"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n/context'

export const AuthInput = ({ label, icon, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string, icon?: string }) => (
    <div className="space-y-2">
        {label && (
            <label className="block text-xs font-bold text-[#041534] uppercase tracking-wider" htmlFor={props.id}>
                {label}
            </label>
        )}
        <div className="relative group">
            <input
                className={cn(
                    "w-full py-4 bg-[#f2f4f6] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#006a66] transition-all disabled:opacity-50",
                    icon ? "pl-12 pr-4" : "px-4",
                    className
                )}
                {...props}
            />
            {icon && (
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#75777f] group-focus-within:text-[#006a66] transition-colors text-lg">
                    {icon}
                </span>
            )}
        </div>
    </div>
)

export const AuthButton = ({ variant = 'primary', children, icon, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary', icon?: string }) => (
    <button
        className={cn(
            "w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
            variant === 'primary'
                ? "bg-[#041534] text-white shadow-lg hover:shadow-xl"
                : "border-2 border-[#e1e2e4] text-[#041534] hover:bg-[#f2f4f6]",
            className
        )}
        {...props}
    >
        {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
        {children}
    </button>
)

export const AuthTabs = ({ activeTab, onTabChange }: { activeTab: 'login' | 'register', onTabChange: (tab: 'login' | 'register') => void }) => {
    const { t } = useI18n()
    return (
        <div className="flex w-full bg-[#f2f4f6] p-1 rounded-xl">
            <button
                onClick={() => onTabChange('login')}
                className={cn(
                    "flex-1 py-3 text-sm transition-all duration-300 rounded-lg",
                    activeTab === 'login'
                        ? "font-bold text-[#006a66] bg-white shadow-sm"
                        : "font-medium text-[#75777f] hover:text-[#041534]"
                )}
            >
                {t('appraisalAuth.login.tab')}
            </button>
            <button
                onClick={() => onTabChange('register')}
                className={cn(
                    "flex-1 py-3 text-sm transition-all duration-300 rounded-lg",
                    activeTab === 'register'
                        ? "font-bold text-[#006a66] bg-white shadow-sm"
                        : "font-medium text-[#75777f] hover:text-[#041534]"
                )}
            >
                {t('appraisalAuth.register.tab')}
            </button>
        </div>
    )
}

export const AuthCheckbox = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <div className="flex items-center gap-2">
        <input
            type="checkbox"
            className="w-4 h-4 rounded-md border-[#c5c6cf] text-[#006a66] focus:ring-[#006a66]"
            {...props}
        />
        <label className="text-xs text-[#75777f] font-medium" htmlFor={props.id}>
            {label}
        </label>
    </div>
)

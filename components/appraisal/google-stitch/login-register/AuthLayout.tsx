"use client"

import React from 'react'
import { AuthBenefits } from './AuthBenefits'
import { AuthFormSection } from './AuthFormSection'
import { useI18n } from '@/lib/i18n/context'

export const AuthLayout = () => {
    const { t, locale } = useI18n()

    return (
        <main className={`flex min-h-screen w-full bg-white ${locale === 'ar' ? 'font-arabic' : ''}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <AuthBenefits />
            <AuthFormSection />

            {/* Success Indicator (Hidden by default, can be toggled via state) */}
            <div className={`fixed bottom-8 ${locale === 'ar' ? 'right-8' : 'left-8'} p-4 bg-[#86f5ee] text-[#00201f] rounded-xl shadow-2xl flex items-center gap-4 border border-[#006a66]/20 hidden`}>
                <div className="w-10 h-10 rounded-full bg-[#006a66] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                    </span>
                </div>
                <div>
                    <p className="font-bold text-sm">{t('appraisalAuth.status.title')}</p>
                    <p className="text-xs opacity-80">{t('appraisalAuth.status.operational')}</p>
                </div>
            </div>
        </main>
    )
}

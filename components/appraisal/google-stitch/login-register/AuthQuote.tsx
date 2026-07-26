"use client"

import React from 'react'
import { useI18n } from '@/lib/i18n/context'

export const AuthQuote = () => {
    const { t } = useI18n()

    return (
        <div className="relative z-10">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm max-w-md">
                <p className="text-white/80 italic text-sm mb-4 leading-relaxed">
                    &ldquo;{t('appraisalAuth.quote.text')}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                    <img
                        alt="Executive Profile"
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0XCzn4AnlOmILm1Wi2WzajZ7k8V3RLm5rPE2H7uAbTkjsT9s3QEMT54Xd5w-HPqYP1q1cyk9gA6Auh8F6ack3pde-axWQv-MZG4okRAl06_NIipkh92_QDJCztcKE_FT-LuW5Mn9HI9vh2X_9EUENVQOW2eIkdQuKkP9EPDyguDBDh5d7UVVKGZ4GC9dTAbICPS0yfd9dZxMlsiBhRbtOeeSJApyn7T6TZUrpRJD7v5VlkQdFoiljpjVROI7rbQhoGFjCE00lAlo"
                    />
                    <div>
                        <p className="text-white font-bold text-xs">{t('appraisalAuth.quote.role')}</p>
                        <p className="text-white/50 text-[10px]">{t('appraisalAuth.quote.company')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

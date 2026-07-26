"use client"

import React, { useState } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { AuthTabs } from './AuthUI'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export const AuthFormSection = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
    const { t } = useI18n()

    return (
        <section className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
            <div className="w-full max-w-md space-y-10">
                {/* Mobile Branding (visible only on mobile) */}
                <div className="lg:hidden flex items-center gap-2 mb-12">
                    <span className="text-2xl font-extrabold text-[#041534] tracking-tighter">{t('appraisalAuth.benefits.brand')}</span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-[#041534]">
                        {activeTab === 'login' ? t('appraisalAuth.login.title') : t('appraisalAuth.register.title')}
                    </h2>
                    <p className="text-[#75777f] text-sm">
                        {activeTab === 'login'
                            ? t('appraisalAuth.login.subtitle')
                            : t('appraisalAuth.register.subtitle')}
                    </p>
                </div>

                <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'login' ? <LoginForm /> : <RegisterForm onSuccess={() => setActiveTab('login')} />}

                {/* Footer for Auth */}
                <div className="pt-8 text-center border-t border-[#f2f4f6]">
                    <p className="text-xs text-[#75777f] leading-relaxed">
                        {t('appraisalAuth.footer.termsPrefix')}{' '}
                        <a className="text-[#041534] font-bold hover:underline" href="#">{t('appraisalAuth.footer.terms')}</a> {t('appraisalAuth.footer.and')}{' '}
                        <a className="text-[#041534] font-bold hover:underline" href="#">{t('appraisalAuth.footer.privacy')}</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

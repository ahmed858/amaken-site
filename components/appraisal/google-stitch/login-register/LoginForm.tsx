"use client"

import React, { useState } from 'react'
import { useAuth } from '@/lib/appraisal/auth-context'
import { useI18n } from '@/lib/i18n/context'
import { AuthInput, AuthButton, AuthCheckbox } from './AuthUI'

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth()
    const { t } = useI18n()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await login({ usr: email, pwd: password }, { redirectTo: '/appraisal/client-dashboard' })
        } catch {
            // Error handled by auth-context toast
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <AuthInput
                id="login-email"
                label={t('appraisalAuth.login.email')}
                placeholder={t('appraisalAuth.login.emailPlaceholder')}
                type="email"
                icon="mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="block text-xs font-bold text-[#041534] uppercase tracking-wider" htmlFor="login-password">
                        {t('appraisalAuth.login.password')}
                    </label>
                    <a className="text-[11px] font-bold text-[#006a66] hover:underline" href="#">
                        {t('appraisalAuth.login.forgotPassword')}
                    </a>
                </div>
                <AuthInput
                    id="login-password"
                    label=""
                    placeholder="••••••••"
                    type="password"
                    icon="lock"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </div>

            <AuthCheckbox id="login-remember" label={t('appraisalAuth.login.rememberMe')} />

            <div className="space-y-4 pt-2">
                <AuthButton type="submit" icon="arrow_forward" disabled={isLoading}>
                    {isLoading ? t('appraisalAuth.login.submitting') : t('appraisalAuth.login.submit')}
                </AuthButton>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#e1e2e4]"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-4 text-[#75777f] font-bold tracking-widest">{t('appraisalAuth.login.orDivider')}</span>
                    </div>
                </div>

                <AuthButton variant="secondary" icon="phone_iphone">
                    {t('appraisalAuth.login.otpLogin')}
                </AuthButton>
            </div>
        </form>
    )
}

"use client"

import React, { useState } from 'react'
import { useAuth } from '@/lib/appraisal/auth-context'
import { useI18n } from '@/lib/i18n/context'
import { toast } from 'sonner'
import { AuthInput, AuthButton } from './AuthUI'

interface RegisterFormProps {
    onSuccess?: () => void
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // National Address
    const [buildingNumber, setBuildingNumber] = useState('')
    const [streetName, setStreetName] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    // const [additionalNumber, setAdditionalNumber] = useState('')

    const [isAddressOpen, setIsAddressOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { register } = useAuth()
    const { t } = useI18n()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error(t('appraisalAuth.register.passwordMismatch'))
            return
        }

        if (password.length < 8) {
            toast.error(t('appraisalAuth.register.passwordMinLength'))
            return
        }

        setIsLoading(true)
        try {
            await register({
                email,
                first_name: firstName,
                last_name: lastName,
                phone,
                password,
                building_number: buildingNumber,
                street_name: streetName,
                district,
                city,
                postal_code: postalCode,
                // additional_number: additionalNumber,

            }, { redirectTo: '/appraisal/login-register' })
            onSuccess?.()
        } catch {
            // Error handled by auth-context toast
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AuthInput
                    id="reg-firstName"
                    label={t('appraisalAuth.register.firstName')}
                    placeholder={t('appraisalAuth.register.firstNamePlaceholder')}
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isLoading}
                />
                <AuthInput
                    id="reg-lastName"
                    label={t('appraisalAuth.register.lastName')}
                    placeholder={t('appraisalAuth.register.lastNamePlaceholder')}
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isLoading}
                />
            </div>

            <AuthInput
                id="reg-email"
                label={t('appraisalAuth.register.email')}
                placeholder={t('appraisalAuth.register.emailPlaceholder')}
                type="email"
                icon="mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />

            <AuthInput
                id="reg-phone"
                label={t('appraisalAuth.register.phone')}
                placeholder={t('appraisalAuth.register.phonePlaceholder')}
                type="tel"
                icon="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
            />

            <AuthInput
                id="reg-password"
                label={t('appraisalAuth.register.password')}
                placeholder="••••••••"
                type="password"
                icon="lock"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />

            <AuthInput
                id="reg-confirmPassword"
                label={t('appraisalAuth.register.confirmPassword')}
                placeholder="••••••••"
                type="password"
                icon="lock"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
            />
            {/* National Address Collapsible Section */}
            <div className="pt-2 border-t border-[#f2f4f6]">
                <button
                    type="button"
                    onClick={() => setIsAddressOpen(!isAddressOpen)}
                    className="flex items-center justify-between w-full group"
                >
                    <p className="text-xs font-bold text-[#75777f] uppercase tracking-wider group-hover:text-[#041534] transition-colors">
                        {t('appraisalAuth.register.addressSection')}
                    </p>
                    <span className={`material-symbols-outlined text-[#75777f] transition-transform duration-300 ${isAddressOpen ? 'rotate-180' : ''}`}>
                        expand_more
                    </span>
                </button>
            </div>

            <div className={`space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${isAddressOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 invisible'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AuthInput
                        id="reg-buildingNumber"
                        label={t('appraisalAuth.register.buildingNumber')}
                        placeholder={t('appraisalAuth.register.buildingPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={buildingNumber}
                        onChange={(e) => setBuildingNumber(e.target.value)}
                        disabled={isLoading}
                        pattern="[0-9]{4}"
                    />
                    <AuthInput
                        id="reg-streetName"
                        label={t('appraisalAuth.register.streetName')}
                        placeholder={t('appraisalAuth.register.streetPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AuthInput
                        id="reg-district"
                        label={t('appraisalAuth.register.district')}
                        placeholder={t('appraisalAuth.register.districtPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        disabled={isLoading}
                    />
                    <AuthInput
                        id="reg-city"
                        label={t('appraisalAuth.register.city')}
                        placeholder={t('appraisalAuth.register.cityPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AuthInput
                        id="reg-postalCode"
                        label={t('appraisalAuth.register.postalCode')}
                        placeholder={t('appraisalAuth.register.postalPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        disabled={isLoading}
                        pattern="[0-9]{5}"
                    />
                    {/* <AuthInput
                        id="reg-additionalNumber"
                        label={t('appraisalAuth.register.additionalNumber')}
                        placeholder={t('appraisalAuth.register.additionalPlaceholder')}
                        type="text"
                        required={isAddressOpen}
                        value={additionalNumber}
                        onChange={(e) => setAdditionalNumber(e.target.value)}
                        disabled={isLoading}
                        pattern="[0-9]{4}"
                    /> */}
                </div>
            </div>

            <div className="pt-2">
                <AuthButton type="submit" icon="how_to_reg" disabled={isLoading}>
                    {isLoading ? t('appraisalAuth.register.submitting') : t('appraisalAuth.register.submit')}
                </AuthButton>
            </div>
        </form>
    )
}

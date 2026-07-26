"use client"

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/lib/appraisal/auth-context'
import { toast } from 'sonner'

export const ProfileContent = () => {
    const { user, refreshUser } = useAuth()
    const [loading, setLoading] = useState(false)

    // Form states
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [buildingNumber, setBuildingNumber] = useState('')
    const [streetName, setStreetName] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name || '')
            setLastName(user.last_name || '')
            setEmail(user.email || '')
            setMobile_no(user.mobile_no || '')
            // Address fields - we might need to populate these if available in user object
        }
    }, [user])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/appraisal/auth/user/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    mobile_no: mobile_no,
                    building_number: buildingNumber,
                    street_name: streetName,
                    district: district,
                    city: city,
                    postal_code: postalCode,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to update profile')
            }

            toast.success('تم تحديث الملف الشخصي بنجاح')
            await refreshUser()
        } catch (error: any) {
            toast.error(error.message || 'حدث خطأ أثناء التحديث')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                {/* Profile Form */}
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 text-right">
                            <label className="text-sm font-bold text-[#041534]">الاسم الأول</label>
                            <input
                                className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                placeholder="خالد"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2 text-right">
                            <label className="text-sm font-bold text-[#041534]">اسم العائلة</label>
                            <input
                                className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                placeholder="الجاسر"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email & Mobile */}
                    <div className="space-y-6">
                        <div className="space-y-2 text-right relative">
                            <label className="text-sm font-bold text-[#041534]">بريد العمل الإلكتروني</label>
                            <div className="relative opacity-60">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#75777f] text-xl">mail</span>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl pr-4 pl-12 py-3 text-[#45464e] cursor-not-allowed outline-none"
                                    placeholder="name@company.com"
                                    type="email"
                                    value={email}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="space-y-2 text-right relative">
                            <label className="text-sm font-bold text-[#041534]">رقم الجوال</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#75777f] text-xl">call</span>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl pr-4 pl-12 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all text-left"
                                    dir="ltr"
                                    placeholder="05xxxxxxxx"
                                    type="tel"
                                    value={mobile_no}
                                    onChange={(e) => setMobile_no(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* National Address Section */}
                    <div className="pt-8 border-t border-[#edeef0]">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-[#041534]">معلومات العنوان الوطني</h2>
                            <span className="material-symbols-outlined text-[#75777f]">expand_less</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-[#041534]">رقم المبنى</label>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                    placeholder="1234"
                                    type="text"
                                    value={buildingNumber}
                                    onChange={(e) => setBuildingNumber(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-[#041534]">اسم الشارع</label>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                    placeholder="طريق الملك فهد"
                                    type="text"
                                    value={streetName}
                                    onChange={(e) => setStreetName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-[#041534]">الحي</label>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                    placeholder="الحي"
                                    type="text"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-[#041534]">المدينة</label>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                    placeholder="الرياض"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-[#041534]">الرمز البريدي</label>
                                <input
                                    className="w-full bg-[#f1f4f9] border-none rounded-xl px-4 py-3 text-[#45464e] focus:ring-2 focus:ring-[#006a66] outline-none transition-all"
                                    placeholder="12345"
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-10">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#041534] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="animate-spin material-symbols-outlined">sync</span>
                            ) : (
                                <span className="material-symbols-outlined">person_add</span>
                            )}
                            <span>{loading ? 'جاري التحديث...' : 'تحديث الملف الشخصي'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

"use client"

import React from 'react'
import type { AppraisalFormData } from './appraisal-form.types'
import { SERVICE_META } from './appraisal-form.types'

interface Props {
    formData: AppraisalFormData
}

export const AppraisalSidebar = ({ formData }: Props) => {
    const meta = formData.service ? SERVICE_META[formData.service] : null
    
    // Build dynamic description for the "Asset" row
    const getAssetSummary = () => {
        if (!formData.service) return "—"
        
        if (formData.service === 'real-estate') {
            if (formData.propertyType && formData.city) {
                return `${formData.propertyType} / ${formData.city}`
            }
            return formData.propertyType || formData.city || "—"
        }
        
        if (formData.service === 'machinery') {
            if (formData.machineryType) {
                return formData.machineryType
            }
            return "—"
        }
        
        if (formData.service === 'facilities') {
            if (formData.facilityType) {
                return formData.facilityType
            }
            return "—"
        }
        
        return "—"
    }

    return (
        <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
                {/* Summary Card */}
                <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm space-y-6 border border-[#edeef0]">
                    <div className="flex items-center gap-2 border-b border-[#f2f4f6] pb-4">
                        <span className="material-symbols-outlined text-[#041534]">analytics</span>
                        <h4 className="font-bold text-[#041534]">ملخص الطلب</h4>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-start text-sm">
                            <span className="text-slate-500">نوع الخدمة</span>
                            <span className="font-bold text-[#041534] text-right">{meta?.titleAr || "—"}</span>
                        </div>
                        
                        <div className="flex justify-between items-start text-sm">
                            <span className="text-slate-500">الأصل</span>
                            <span className="font-bold text-[#041534] text-right">{getAssetSummary()}</span>
                        </div>

                        {meta && (
                            <div className="flex justify-between items-start text-sm border-t border-[#edeef0] pt-4">
                                <span className="text-slate-500">التوقيت المتوقع</span>
                                <div className="text-right">
                                    <span className="font-bold text-[#006a66] block">{meta.timeline}</span>
                                    <span className="text-[10px] text-slate-400 font-medium">بناءً على المعايير المعتمدة</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Card */}
                <div className="bg-[#041534] text-white p-6 rounded-2xl relative overflow-hidden shadow-xl">
                    <div className="relative z-10 space-y-3">
                        <div className="flex items-center gap-2 text-[#86f5ee]">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            <span className="text-xs font-bold uppercase tracking-wider">تقييم معتمد</span>
                        </div>
                        <h4 className="font-bold text-lg">لماذا اختيار أماكن؟</h4>
                        <p className="text-sm text-[#8392b7] leading-relaxed">
                            نحن مرخصون من قبل الهيئة السعودية للمقيّمين المعتمدين (تقييم)، ونلتزم بالحياد والدقة في كافة تقاريرنا.
                        </p>
                    </div>
                    {/* Abstract texture */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                </div>
            </div>
        </aside>
    )
}

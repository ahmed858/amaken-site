"use client"

import React from 'react'
import type { AppraisalFormData } from './appraisal-form.types'
import { SERVICE_META } from './appraisal-form.types'

interface Props {
    formData: AppraisalFormData
}

export const AppraisalConfirmation = ({ formData }: Props) => {
    const serviceMeta = formData.service ? SERVICE_META[formData.service] : null

    const renderDetailRow = (label: string, value?: string) => {
        if (!value) return null
        return (
            <div className="flex justify-between items-center py-3 border-b border-[#edeef0] last:border-0">
                <span className="text-slate-500 text-sm">{label}</span>
                <span className="font-bold text-[#041534] text-sm">{value}</span>
            </div>
        )
    }

    return (
        <div className="bg-[#ffffff] rounded-xl p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-[#edeef0] pb-4">
                <span className="material-symbols-outlined text-[#006a66] align-middle">task_alt</span>
                <h2 className="text-xl font-bold text-[#041534]">مراجعة الطلب</h2>
            </div>

            <div className="space-y-6">
                {/* Service Type */}
                <div className="bg-[#f8f9fb] p-6 rounded-xl border border-[#edeef0]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#86f5ee] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#006a66] text-2xl">{serviceMeta?.icon}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#041534]">نوع الخدمة</h3>
                            <p className="text-[#006a66] font-medium">{serviceMeta?.titleAr}</p>
                        </div>
                    </div>
                </div>

                {/* Form Details */}
                <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">تفاصيل الأصل</h4>
                    
                    {formData.service === 'real-estate' && (
                        <>
                            {renderDetailRow('نوع العقار', formData.propertyType)}
                            {renderDetailRow('المدينة', formData.city)}
                            {renderDetailRow('الحي', formData.neighborhood)}
                            {renderDetailRow('المساحة', formData.area ? `${formData.area} م²` : undefined)}
                            <div className="flex justify-between items-center py-3 border-b border-[#edeef0]">
                                <span className="text-slate-500 text-sm">رخصة البناء</span>
                                <span className="text-[#006a66] font-bold text-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">attachment</span>
                                    {formData.buildingLicense ? formData.buildingLicense : 'غير مرفقة'}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-[#edeef0]">
                                <span className="text-slate-500 text-sm">نسخة الصك</span>
                                <span className="text-[#006a66] font-bold text-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">attachment</span>
                                    {formData.deedNumber ? formData.deedNumber : 'غير مرفقة'}
                                </span>
                            </div>
                            {renderDetailRow('الغرض من التقييم', formData.purpose)}
                        </>
                    )}

                    {formData.service === 'machinery' && (
                        <>
                            {renderDetailRow('نوع المعدة', formData.machineryType)}
                            {renderDetailRow('الشركة المصنعة', formData.manufacturer)}
                            {renderDetailRow('سنة الصنع', formData.yearOfManufacture)}
                            {renderDetailRow('الحالة', formData.condition)}
                            {renderDetailRow('الغرض من التقييم', formData.machineryPurpose)}
                        </>
                    )}

                    {formData.service === 'facilities' && (
                        <>
                            {renderDetailRow('نوع المنشأة', formData.facilityType)}
                            {renderDetailRow('القطاع', formData.activitySector)}
                            {renderDetailRow('الإيرادات السنوية', formData.annualRevenue ? `${formData.annualRevenue} ريال` : undefined)}
                            {renderDetailRow('سنوات التأسيس', formData.yearsEstablished)}
                            {renderDetailRow('الغرض من التقييم', formData.facilityPurpose)}
                        </>
                    )}
                    
                    {renderDetailRow('ملاحظات', formData.notes)}
                </div>

                <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex gap-3">
                    <span className="material-symbols-outlined text-amber-600">info</span>
                    <p className="text-xs text-amber-800 leading-relaxed">
                        يرجى مراجعة البيانات بعناية قبل التأكيد. بمجرد إرسال الطلب، سيبدأ فريقنا المختص في مراجعته والتواصل معك خلال مدة التوقيت الموضحة في الملخص.
                    </p>
                </div>
            </div>
        </div>
    )
}

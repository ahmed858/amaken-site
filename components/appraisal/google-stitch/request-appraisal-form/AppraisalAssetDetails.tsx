"use client"

import React from 'react'
import type { AppraisalFormData, ServiceSlug } from './appraisal-form.types'

interface Props {
    service: ServiceSlug
    formData: AppraisalFormData
    onChange: (partial: Partial<AppraisalFormData>) => void
}

export const AppraisalAssetDetails = ({ service, formData, onChange }: Props) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        onChange({ [name]: value })
    }

    const renderRealEstateFields = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">نوع العقار</label>
                    <select 
                        name="propertyType"
                        value={formData.propertyType || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر النوع...</option>
                        <option value="شقة">شقة</option>
                        <option value="فيلا">فيلا</option>
                        <option value="أرض">أرض</option>
                        <option value="عمارة">عمارة</option>
                        <option value="مجمع تجاري">مجمع تجاري</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">المدينة</label>
                    <select 
                        name="city"
                        value={formData.city || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر المدينة...</option>
                        <option value="الرياض">الرياض</option>
                        <option value="جدة">جدة</option>
                        <option value="مكة">مكة</option>
                        <option value="الدمام">الدمام</option>
                        <option value="الخبر">الخبر</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الحي</label>
                    <input
                        name="neighborhood"
                        value={formData.neighborhood || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="اسم الحي"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">المساحة الإجمالية (م²)</label>
                    <input
                        name="area"
                        value={formData.area || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="مثال: 450"
                        type="number"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">رخصة البناء (إن وُجد)</label>
                    <div 
                        onClick={() => document.getElementById('buildingLicenseInput')?.click()}
                        className={`w-full border-2 border-dashed rounded-lg p-3 text-sm flex items-center justify-between cursor-pointer transition-all
                            ${formData.buildingLicense ? 'bg-[#006a66]/5 border-[#006a66] text-[#006a66]' : 'bg-[#f2f4f6] border-[#c5c6cf] text-slate-400 hover:bg-white'}`}
                    >
                        <span className="flex items-center gap-2 truncate">
                            <span className="material-symbols-outlined text-sm">{formData.buildingLicense ? 'description' : 'upload_file'}</span>
                            {formData.buildingLicense || 'ارفع نسخة من الرخصة'}
                        </span>
                        {formData.buildingLicense && <span className="material-symbols-outlined text-sm">check_circle</span>}
                    </div>
                    <input 
                        id="buildingLicenseInput"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) onChange({ buildingLicense: file.name });
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">صورة الصك</label>
                    <div 
                        onClick={() => document.getElementById('deedNumberInput')?.click()}
                        className={`w-full border-2 border-dashed rounded-lg p-3 text-sm flex items-center justify-between cursor-pointer transition-all
                            ${formData.deedNumber ? 'bg-[#006a66]/5 border-[#006a66] text-[#006a66]' : 'bg-[#f2f4f6] border-[#c5c6cf] text-slate-400 hover:bg-white'}`}
                    >
                        <span className="flex items-center gap-2 truncate">
                            <span className="material-symbols-outlined text-sm">{formData.deedNumber ? 'description' : 'upload_file'}</span>
                            {formData.deedNumber || 'ارفع نسخة من الصك'}
                        </span>
                        {formData.deedNumber && <span className="material-symbols-outlined text-sm">check_circle</span>}
                    </div>
                    <input 
                        id="deedNumberInput"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) onChange({ deedNumber: file.name });
                        }}
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الغرض من التقييم</label>
                    <select 
                        name="purpose"
                        value={formData.purpose || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر الغرض...</option>
                        <option value="بيع">بيع</option>
                        <option value="تمويل بنكي">تمويل بنكي</option>
                        <option value="نزاع قضائي">نزاع قضائي</option>
                        <option value="تصفية تركة">تصفية تركة</option>
                    </select>
                </div>
            </div>
        </>
    )

    const renderMachineryFields = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">نوع المعدة / الآلة</label>
                    <input
                        name="machineryType"
                        value={formData.machineryType || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="مثال: خط إنتاج، لودر، إلخ"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الشركة المصنعة</label>
                    <input
                        name="manufacturer"
                        value={formData.manufacturer || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="اسم الشركة"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">سنة الصنع</label>
                    <input
                        name="yearOfManufacture"
                        value={formData.yearOfManufacture || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="مثال: 2020"
                        type="number"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الحالة التشغيلية</label>
                    <select 
                        name="condition"
                        value={formData.condition || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر الحالة...</option>
                        <option value="ممتازة">ممتازة (جديدة)</option>
                        <option value="جيدة جدا">جيدة جداً</option>
                        <option value="جيدة">جيدة (تعمل وتحتاج صيانة)</option>
                        <option value="خردة">خردة (لا تعمل)</option>
                    </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الغرض من التقييم</label>
                    <select 
                        name="machineryPurpose"
                        value={formData.machineryPurpose || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر الغرض...</option>
                        <option value="بيع">بيع</option>
                        <option value="تأمين">تأمين</option>
                        <option value="رهن صناعي">رهن صناعي</option>
                    </select>
                </div>
            </div>
        </>
    )

    const renderFacilitiesFields = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">نوع المنشأة</label>
                    <select 
                        name="facilityType"
                        value={formData.facilityType || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر النوع...</option>
                        <option value="مؤسسة فردية">مؤسسة فردية</option>
                        <option value="شركة ذات مسؤولية محدودة">شركة ذات مسؤولية محدودة</option>
                        <option value="شركة مساهمة">شركة مساهمة</option>
                        <option value="مطعم / كافيه">مطعم / كافيه</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">القطاع / النشاط</label>
                    <input
                        name="activitySector"
                        value={formData.activitySector || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="مثال: تقني، طبي، تجاري"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الإيرادات السنوية (تقريبي)</label>
                    <input
                        name="annualRevenue"
                        value={formData.annualRevenue || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="أدخل المبلغ بالريال"
                        type="number"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">سنوات التأسيس</label>
                    <input
                        name="yearsEstablished"
                        value={formData.yearsEstablished || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                        placeholder="عدد السنوات"
                        type="number"
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">الغرض من التقييم</label>
                    <select 
                        name="facilityPurpose"
                        value={formData.facilityPurpose || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    >
                        <option value="">اختر الغرض...</option>
                        <option value="اندماج أو استحواذ">اندماج أو استحواذ</option>
                        <option value="خروج شريك">خروج شريك</option>
                        <option value="رفع رأس المال">رفع رأس المال</option>
                    </select>
                </div>
            </div>
        </>
    )

    const titles = {
        'real-estate': 'بيانات العقار',
        'machinery': 'بيانات الآلات والمعدات',
        'facilities': 'بيانات المنشأة الاقتصادية'
    }

    return (
        <div className="bg-[#ffffff] rounded-xl p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-[#edeef0] pb-4">
                <span className="material-symbols-outlined text-[#006a66] align-middle">edit_note</span>
                <h2 className="text-xl font-bold text-[#041534]">{titles[service]}</h2>
            </div>
            
            {service === 'real-estate' && renderRealEstateFields()}
            {service === 'machinery' && renderMachineryFields()}
            {service === 'facilities' && renderFacilitiesFields()}

            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">ملاحظات إضافية</label>
                <textarea
                    name="notes"
                    value={formData.notes || ""}
                    onChange={handleInputChange}
                    className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    placeholder="أي تفاصيل أخرى ترغب في ذكرها..."
                    rows={4}
                ></textarea>
            </div>
            <div className="border-2 border-dashed border-[#c5c6cf] rounded-xl p-10 flex flex-col items-center justify-center bg-[#f2f4f6] text-center group cursor-pointer hover:bg-white transition-all">
                <span className="material-symbols-outlined text-4xl text-[#75777f] mb-3 group-hover:text-[#006a66] align-middle">cloud_upload</span>
                <p className="text-sm font-semibold text-[#041534]">رفع المستندات والوثائق</p>
                <p className="text-xs text-slate-400 mt-1">الصك، المخططات، أو الصور (الحد الأقصى 10 ميجابايت)</p>
            </div>
        </div>
    )
}

"use client"

import React from 'react'

export const RequestDocuments = () => (
    <section className="space-y-4" dir="rtl">
        <h3 className="text-lg font-bold text-[#041534] flex items-center gap-2">
            <span className="material-symbols-outlined align-middle">folder_open</span>
            الوثائق والمرفقات
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
            {/* Upload Area */}
            <div className="bg-[#f2f4f6] border-2 border-dashed border-[#c5c6cf] rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-[#006a66] transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <span className="material-symbols-outlined text-[#006a66] align-middle">cloud_upload</span>
                </div>
                <p className="text-sm font-bold text-[#041534]">رفع ملفات إضافية</p>
                <p className="text-xs text-[#45464e] mt-1">PDF, JPG or PNG (Max 10MB)</p>
            </div>
            {/* Document List */}
            <div className="space-y-3">
                <div className="bg-[#ffffff] p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-red-600 align-middle">picture_as_pdf</span>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-[#041534]">Land_Deed_001.pdf</p>
                            <p className="text-[10px] text-[#75777f] font-medium">مرفوع من العميل • ٢.٤ ميجابايت</p>
                        </div>
                    </div>
                    <button className="text-[#006a66] hover:bg-[#006a66]/10 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined align-middle">download</span>
                    </button>
                </div>
                <div className="bg-[#ffffff] p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-600 align-middle">image</span>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-[#041534]">Site_Photo_North.jpg</p>
                            <p className="text-[10px] text-[#75777f] font-medium">مرفوع في ١٤ أكتوبر • ١.١ ميجابايت</p>
                        </div>
                    </div>
                    <button className="text-[#006a66] hover:bg-[#006a66]/10 p-2 rounded-full transition-colors">
                        <span className="material-symbols-outlined align-middle">visibility</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
)

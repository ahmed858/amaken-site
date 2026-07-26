"use client"

import React from 'react'

export const AppraisalSuccessModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-[#041534]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-all" onClick={onClose}>
        <div className="bg-white rounded-3xl p-10 max-w-lg w-full text-center space-y-6 shadow-2xl relative" onClick={(e) => e.stopPropagation()} dir="rtl">
            <button 
                onClick={onClose}
                className="absolute top-4 left-4 text-slate-400 hover:text-[#041534] transition-colors"
            >
                <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-24 h-24 bg-[#86f5ee] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[#006a66] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#041534]">تم إرسال الطلب بنجاح!</h2>
            <p className="text-[#75777f]">لقد تم تسجيل طلب التقييم الخاص بك في أرشيفنا. سيتواصل معك فريقنا المختص قريباً.</p>
            <div className="bg-[#f2f4f6] p-4 rounded-xl inline-block border border-[#c5c6cf]/30 w-full max-w-[280px]">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">رقم الطلب</p>
                <p className="text-2xl font-mono font-bold text-[#041534]">APR-2024-00142</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <button 
                    onClick={onClose}
                    className="bg-[#041534] text-white py-3 rounded-lg font-bold shadow-lg hover:bg-[#1b2a4a] transition-all"
                >
                    متابعة الطلب
                </button>
                <button className="bg-[#edeef0] text-[#041534] py-3 rounded-lg font-bold hover:bg-[#e1e2e4] transition-all">تحميل الإيصال</button>
            </div>
        </div>
    </div>
)

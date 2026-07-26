"use client"

import React from 'react'
import type { StepNumber } from './appraisal-form.types'

interface Props {
    step: StepNumber
    canProceed: boolean
    onNext: () => void
    onBack: () => void
    onSubmit: () => void
}

export const AppraisalFormNav = ({ step, canProceed, onNext, onBack, onSubmit }: Props) => {
    return (
        <div className="flex justify-between items-center pt-6">
            <div className="flex gap-4">
                {step > 1 ? (
                    <button 
                        onClick={onBack}
                        className="px-8 py-3 rounded-lg text-[#041534] font-bold hover:bg-[#edeef0] transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm align-middle">arrow_forward</span>
                        رجوع
                    </button>
                ) : (
                    <button className="px-8 py-3 rounded-lg text-slate-400 font-bold hover:bg-[#edeef0] transition-colors">حفظ كمسودة</button>
                )}
            </div>

            {step < 3 ? (
                <button 
                    onClick={onNext}
                    disabled={!canProceed}
                    className={`px-12 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-xl
                        ${canProceed 
                            ? 'bg-[#041534] text-white hover:bg-[#1b2a4a] active:scale-95 shadow-[#041534]/20' 
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'}`}
                >
                    {step === 1 ? 'التالي: بيانات الأصل' : 'التالي: المراجعة والتأكيد'}
                    <span className="material-symbols-outlined text-sm align-middle">arrow_back</span>
                </button>
            ) : (
                <button 
                    onClick={onSubmit}
                    className="bg-[#006a66] text-white px-12 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-[#005a56] transition-transform active:scale-95 shadow-xl shadow-[#006a66]/20"
                >
                    تأكيد وإرسال الطلب
                    <span className="material-symbols-outlined text-sm align-middle">send</span>
                </button>
            )}
        </div>
    )
}

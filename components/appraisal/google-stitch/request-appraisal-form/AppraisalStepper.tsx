"use client"

import React from 'react'
import type { StepNumber } from './appraisal-form.types'

const steps = [
    { num: 1, label: 'اختيار الخدمة' },
    { num: 2, label: 'بيانات الأصل' },
    { num: 3, label: 'مراجعة وتأكيد' },
]

export const AppraisalStepper = ({ currentStep }: { currentStep: StepNumber }) => {
    const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100

    return (
        <div className="mb-12 relative">
            <div className="flex justify-between items-center relative z-10">
                {steps.map((s) => {
                    const isCompleted = s.num < currentStep
                    const isActive = s.num === currentStep

                    return (
                        <div key={s.num} className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300
                                ${isCompleted ? 'bg-[#006a66] text-white shadow-md' :
                                    isActive ? 'bg-[#041534] text-white shadow-lg ring-4 ring-[#86f5ee]' :
                                        'bg-[#e1e2e4] text-[#75777f]'}`}
                            >
                                {isCompleted ? (
                                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                ) : (
                                    s.num
                                )}
                            </div>
                            <span className={`mt-3 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[#041534] font-bold' : isCompleted ? 'text-[#006a66]' : 'text-[#75777f]'}`}>
                                {s.label}
                            </span>
                        </div>
                    )
                })}
            </div>
            {/* Progress Line */}
            <div className="absolute top-5 right-5 left-5 h-[2px] bg-[#e1e2e4] -z-0">
                <div
                    className="h-full bg-[#006a66] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
        </div>
    )
}

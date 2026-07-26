"use client"

import React, { useState } from 'react'
import { AppraisalStepper } from './AppraisalStepper'
import { AppraisalCategory } from './AppraisalCategory'
import { AppraisalAssetDetails } from './AppraisalAssetDetails'
import { AppraisalConfirmation } from './AppraisalConfirmation'
import { AppraisalFormNav } from './AppraisalFormNav'
import { AppraisalSidebar } from './AppraisalSidebar'
import { AppraisalSuccessModal } from './AppraisalSuccessModal'
import type { AppraisalFormData, StepNumber } from './appraisal-form.types'

export const RequestAppraisalLayout = () => {
    const [step, setStep] = useState<StepNumber>(1)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState<AppraisalFormData>({ service: null })

    const updateFormData = (partial: Partial<AppraisalFormData>) => {
        setFormData(prev => ({ ...prev, ...partial }))
    }

    const canProceedStep1 = formData.service !== null
    const canProceedStep2 = true // can add validation later

    const handleNext = () => {
        if (step === 1 && canProceedStep1) setStep(2)
        else if (step === 2) setStep(3)
    }

    const handleBack = () => {
        if (step === 2) setStep(1)
        else if (step === 3) setStep(2)
    }

    const handleSubmit = () => {
        setShowModal(true)
    }

    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="max-w-5xl mx-auto px-6 py-12">
                <AppraisalStepper currentStep={step} />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Form Canvas */}
                    <section className="lg:col-span-8 space-y-8">
                        {step === 1 && (
                            <AppraisalCategory
                                selectedService={formData.service}
                                onSelect={(service) => updateFormData({ service })}
                            />
                        )}
                        {step === 2 && formData.service && (
                            <AppraisalAssetDetails
                                service={formData.service}
                                formData={formData}
                                onChange={updateFormData}
                            />
                        )}
                        {step === 3 && (
                            <AppraisalConfirmation
                                formData={formData}
                            />
                        )}
                        <AppraisalFormNav
                            step={step}
                            canProceed={step === 1 ? canProceedStep1 : canProceedStep2}
                            onNext={handleNext}
                            onBack={handleBack}
                            onSubmit={handleSubmit}
                        />
                    </section>
                    <AppraisalSidebar formData={formData} />
                </div>
                {showModal && <AppraisalSuccessModal onClose={() => setShowModal(false)} />}
            </main>
        </div>
    )
}

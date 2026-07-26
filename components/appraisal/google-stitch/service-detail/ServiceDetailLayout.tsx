"use client"

import React from 'react'

import { ServiceHero } from './ServiceHero'
import { AppraisalTypes } from './AppraisalTypes'
import { ServiceProcess } from './ServiceProcess'
import { ServiceUseCases } from './ServiceUseCases'
import { ReportSamplePreview } from './ReportSamplePreview'
import { PricingPlans } from './PricingPlans'
import { ServiceCTA } from './ServiceCTA'
import { RelatedServices } from './RelatedServices'

import { ServiceData } from '../services/serviceData'

export const ServiceDetailLayout = ({ service }: { service: ServiceData }) => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main>
                <ServiceHero title={service.hero.title} description={service.hero.description} icon={service.hero.icon} />
                <AppraisalTypes types={service.types} />
                {/* <ServiceProcess /> */}
                <ServiceUseCases useCases={service.useCases} />
                <ReportSamplePreview
                    title={service.reportPreview.title}
                    description={service.reportPreview.description}
                    features={service.reportPreview.features}
                />
                <PricingPlans
                    title={service.pricing.title}
                    subtitle={service.pricing.subtitle}
                    plans={service.pricing.plans}
                />
                <ServiceCTA title={service.cta.title} subtitle={service.cta.subtitle} />
                {/* <RelatedServices /> */}
            </main>
        </div>
    )
}

"use client"

import React from 'react'
import { RequestHeader } from './RequestHeader'
import { RequestTimeline } from './RequestTimeline'
import { AssetSummary } from './AssetSummary'
import { RequestDocuments } from './RequestDocuments'
import { RequestInvoice } from './RequestInvoice'
import { RequestActivity } from './RequestActivity'

export const RequestDetailLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="max-w-[1440px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <RequestHeader />
                <div className="lg:col-span-12">
                    <RequestTimeline />
                </div>

                {/* Left Column: Main Info & Documents (8/12) */}
                <div className="lg:col-span-8 space-y-8">
                    <AssetSummary />
                    <RequestDocuments />
                </div>

                {/* Right Column: Notes & Invoice (4/12) */}
                <div className="lg:col-span-4 space-y-8">
                    <RequestInvoice />
                    {/* <RequestActivity /> */}
                </div>
            </main>
        </div>
    )
}

"use client"

import React from 'react'

import { ContactHero } from './ContactHero'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'
import { ContactMap } from './ContactMap'

export const ContactUsLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="min-h-screen max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <ContactHero />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <ContactForm />
                    <aside className="lg:col-span-5 space-y-8">
                        <ContactInfo />
                        <ContactMap />
                    </aside>
                </div>
            </main>
        </div>
    )
}

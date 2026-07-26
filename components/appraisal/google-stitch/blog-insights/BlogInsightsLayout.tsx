"use client"

import React from 'react'

import { BlogHero } from './BlogHero'
import { BlogFilters } from './BlogFilters'
import { BlogGrid } from './BlogGrid'
import { BlogSidebar } from './BlogSidebar'

export const BlogInsightsLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="max-w-[1440px] mx-auto px-6 py-8" dir="ltr">
                <BlogHero />
                <BlogFilters />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <BlogGrid />
                    <BlogSidebar />
                </div>
            </main>
        </div>
    )
}

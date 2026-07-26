"use client"

import React from 'react'

export const BlogFilters = () => (
    <section className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-[#e7e8ea] pb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button className="px-6 py-2 rounded-full bg-[#041534] text-white text-sm font-bold whitespace-nowrap">All Insights</button>
            <button className="px-6 py-2 rounded-full bg-[#ffffff] text-[#45464e] hover:bg-[#edeef0] text-sm font-medium transition-colors whitespace-nowrap border border-[#e1e2e4]">Real Estate</button>
            <button className="px-6 py-2 rounded-full bg-[#ffffff] text-[#45464e] hover:bg-[#edeef0] text-sm font-medium transition-colors whitespace-nowrap border border-[#e1e2e4]">Industrial</button>
            <button className="px-6 py-2 rounded-full bg-[#ffffff] text-[#45464e] hover:bg-[#edeef0] text-sm font-medium transition-colors whitespace-nowrap border border-[#e1e2e4]">Market News</button>
            <button className="px-6 py-2 rounded-full bg-[#ffffff] text-[#45464e] hover:bg-[#edeef0] text-sm font-medium transition-colors whitespace-nowrap border border-[#e1e2e4]">Regulatory Updates</button>
        </div>
        <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#75777f]">search</span>
            <input
                className="w-full pr-10 pl-4 py-2 bg-[#ffffff] border border-[#e1e2e4] rounded-lg text-sm focus:ring-2 focus:ring-[#006a66]/50"
                placeholder="Search archive..."
                type="text"
            />
        </div>
    </section>
)

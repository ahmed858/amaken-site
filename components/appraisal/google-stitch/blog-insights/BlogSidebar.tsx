"use client"

import React from 'react'

export const BlogSidebar = () => (
    <aside className="lg:col-span-4 space-y-10">
        {/* Newsletter Signup */}
        <div className="bg-[#041534] p-8 rounded-xl text-white relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#006a66]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">The Sovereign Report</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">Get exclusive market data, valuation trends, and regulatory analysis delivered to your inbox every Thursday.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Email Address</label>
                        <input
                            className="w-full bg-[#1b2a4a] border-none rounded-lg text-white placeholder-slate-500 text-sm py-3 focus:ring-2 focus:ring-[#006a66]"
                            placeholder="name@company.com"
                            type="email"
                        />
                    </div>
                    <button className="w-full bg-[#006a66] text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all">
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>

        {/* Popular Posts */}
        <div>
            <h3 className="text-[#041534] font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-[#006a66] rounded-full"></span>
                Most Read This Month
            </h3>
            <div className="space-y-8">
                <a className="group block" href="#">
                    <div className="flex gap-4">
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Close-up of a person analyzing complex financial charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Ml2Kzzp9n3Cc7kuaz8SmRyQV2xWAwxKEMnFQzE_JwZnDlMULK0SytGHHhdykg92452RM86pb6nbiIwuwK8TrwGa6YfFZHaDC3_kjGvVDxjkGruFLpuyvYxHw2MWvIQwU4hz1EGef0CSH4dKpkiI63sh0kFwJfZSD7QIOy_sSobnxyxsXogfaLDXEwWMC_WLz0nV-Mkc0kNwt7xkN068YnPiltaZ_P3xGlSWB8lHL4VOQaVrEW4HGIGTYlCftNL0ufdRd7rzaJmw" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-[#041534] group-hover:text-[#006a66] leading-snug transition-colors">5 Key Trends in Data-Driven Real Estate Appraisal for 2024</h4>
                            <span className="text-[10px] text-[#75777f] mt-1 font-medium">1.2k Reads</span>
                        </div>
                    </div>
                </a>

                <a className="group block" href="#">
                    <div className="flex gap-4">
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Construction site of a modern skyscraper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7h6Blzs5Jokk7daGemI4jRYVDWikWqjis8LENf-dwMOQGOEYvjR0oMyhSdAeoNhC4zmrqOy0-9w91B8Zenr1LI75BiLAIMsET7DmWNqU76bpGLG5h8x6mF1SvqFseUBHh0qN4Bi3g7s3Wmq3D__25JFPpUj-_B6_UiP-0PnPy6QtVk3NBMzpprIq4T3V7-dHJ1AvxkOQjotUzUSUi4h2obywxTA_rx4XNWLgVMhr4HXgmgIIS00ubSW0ebleb7bS7oxd0MUbZOKk" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-[#041534] group-hover:text-[#006a66] leading-snug transition-colors">The Impact of Infrastructure Projects on Secondary Market Value</h4>
                            <span className="text-[10px] text-[#75777f] mt-1 font-medium">940 Reads</span>
                        </div>
                    </div>
                </a>

                <a className="group block" href="#">
                    <div className="flex gap-4">
                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Digital representation of a smart city network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4xNfehTvgDTL78otYOgs3-jqeYynRosSDJGt8Sp5uSkmMk-CUE3C53ouco7ob45u-TItOlnSQFW7DfoHlC-kjmso27GlbYmyqGpJhCZL0PiG1dfDVWmUFwxHxoXazjtlKFfKh6k2SOrOZS4RQ0NXbiocS3XiwVYXM2mlOYEO7NbcGmEvAjOrMUKL0b7Wy8TtF0OesgfuS_XcqDXveoQCJD10SgUAzhKOIM5BDT55qA65BtkoHFCYQewYXxphIXmqufdSOZzbNyAE" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-[#041534] group-hover:text-[#006a66] leading-snug transition-colors">How AI is Changing the Accuracy of Commercial Valuations</h4>
                            <span className="text-[10px] text-[#75777f] mt-1 font-medium">850 Reads</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        {/* Ad/CTA Banner */}
        <div className="p-8 border-2 border-dashed border-[#c5c6cf] rounded-xl flex flex-col items-center text-center mt-10">
            <span className="material-symbols-outlined text-4xl text-[#006a66] mb-4">file_present</span>
            <h4 className="text-[#041534] font-bold mb-2">Need a Professional Appraisal?</h4>
            <p className="text-[#45464e] text-sm mb-6">Our experts are ready to provide certified reports within 48 hours.</p>
            <button className="text-[#006a66] font-bold text-sm underline hover:no-underline">Request a consultation</button>
        </div>
    </aside>
)

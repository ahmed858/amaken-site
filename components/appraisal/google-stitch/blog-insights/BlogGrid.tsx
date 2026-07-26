"use client"

import React from 'react'

export const BlogGrid = () => (
    <div className="lg:col-span-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article Card 1 */}
            <article className="group bg-[#ffffff] border border-[#e1e2e4] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt="Modern logistics warehouse interior"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCxJoZCYDdUPh-7PvZFLe1Hj8k49WAeAFWhS0w_hA6HRUSicgFO4HklWI7KttllCSSmbZLEGuxLCHZSYEa_e1XlPFmvko8rnztO7JY_M4cXFe4XbEdwUvqInKQcFVCZRiEzxGZ0Qc44HQMBeOv9SqZhbbIqPJPmKuTZzRfOU71gHUAhgBdBTsT9B9OA5OmZiYSjAUYo4oxco1vjxIjrJ2j4Xgm8fQX5TJp5GG6EqqF17CUZMr8xeSyHXLTr_grPEue9wgiIO-zhUI"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#baece8] text-[#1d4e4b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Industrial</span>
                        <span className="text-[#75777f] text-xs">Sep 15, 2024</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#041534] mb-3 group-hover:text-[#006a66] transition-colors">Logistics Infrastructure: The Backbone of KSA 2030</h2>
                    <p className="text-[#45464e] text-sm leading-relaxed mb-4 line-clamp-3">Evaluating the explosive growth of specialized logistics parks in Jeddah and the impact on regional land prices.</p>
                    <a className="inline-flex items-center gap-2 text-[#006a66] font-bold text-sm" href="#">
                        Read more
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </a>
                </div>
            </article>

            {/* Article Card 2 */}
            <article className="group bg-[#ffffff] border border-[#e1e2e4] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt="Luxury residential villa complex in Riyadh"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuANy2lUTIG1vyjwK0s9SqMSpH4ZKo4oDODwKQy9hGAIcVwYzBSvhRfii1WZPRFN6csL8VvQIPtQicpKShlXwX0ZvV3kKrqszng4nKzXBHWF2KCqBURXV-Rh1ghfJdVp_e1q_D7Ttf--Ih8bHH_7QSADbsbjQIm5a9BEYxTFmgK8FfOaa_2W22z6UcTwhjPafVW20TDoScZBpTm-o1vlzD1FxxOaBxyQyIMg0dutN16f12xpQNkWd-BP6x8_tR23BDdqAR2vcqDswOo"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#baece8] text-[#1d4e4b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Real Estate</span>
                        <span className="text-[#75777f] text-xs">Sep 12, 2024</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#041534] mb-3 group-hover:text-[#006a66] transition-colors">Residential Appraisal Standards in New Neom Districts</h2>
                    <p className="text-[#45464e] text-sm leading-relaxed mb-4 line-clamp-3">How cutting-edge smart city metrics are redefining how we value residential assets in high-tech zones.</p>
                    <a className="inline-flex items-center gap-2 text-[#006a66] font-bold text-sm" href="#">
                        Read more
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </a>
                </div>
            </article>

            {/* Article Card 3 */}
            <article className="group bg-[#ffffff] border border-[#e1e2e4] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt="Corporate headquarters building"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5mbMo3M7C2BbjWNh2TwZjYKocV2qNXfDlzxG9RHAZgP81yQYPAMoxK1Vbw_KHQcjGElF7mMUbGYw9_hnlz6Wah5QCH2M8ZGPNeUhDOCTJLMktg1oUuwiBjC-1vhJQgzwmR8en1SyTtHgp1VRkGaR10oaKNOKJaxG2O5dr8yRfsI8jIxOMMTAtepTBr3gslqb7HdlLYNHRQg6DQnMESjD_m--L-yV-c2-oVLzQvZ-TsyieWLKuD3Crlvuw40WgDA_JRScmcqyME0"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#baece8] text-[#1d4e4b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Market News</span>
                        <span className="text-[#75777f] text-xs">Aug 28, 2024</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#041534] mb-3 group-hover:text-[#006a66] transition-colors">Understanding the 2024 Appraisal Law Changes</h2>
                    <p className="text-[#45464e] text-sm leading-relaxed mb-4 line-clamp-3">A simplified guide to the latest legislative updates affecting professional appraisers across the Kingdom.</p>
                    <a className="inline-flex items-center gap-2 text-[#006a66] font-bold text-sm" href="#">
                        Read more
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </a>
                </div>
            </article>

            {/* Article Card 4 */}
            <article className="group bg-[#ffffff] border border-[#e1e2e4] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt="Interior of a modern coworking space"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIwuxOe_mH1Adv_brbir9RBSvafYnZSvmigip7bfvCEiI_OYgZEPlmTTl0OkCFivILHzb2ZLz3vwtz-rbgTtCLNd8QuIg4axqrzHUtN1ilpxWmBooaEExzavcSch5fbDz3_326nxAv8GFcbd12shfhxbpLShDbYe5ldg7A03U4KDav8Zg4wlsKLNkqW6mzFgo40_fGxhmmjo1li9yLZjkBQQ1XiWyNvXxx4IzvX3xlWnrZ6ER3vuTqqCqbdkb4dA2lJjqbxiSGu2g"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-[#baece8] text-[#1d4e4b] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Real Estate</span>
                        <span className="text-[#75777f] text-xs">Aug 20, 2024</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#041534] mb-3 group-hover:text-[#006a66] transition-colors">The Rise of Flex-Spaces: A New Asset Class</h2>
                    <p className="text-[#45464e] text-sm leading-relaxed mb-4 line-clamp-3">Co-working and shared offices are no longer just for startups—institutions are taking note.</p>
                    <a className="inline-flex items-center gap-2 text-[#006a66] font-bold text-sm" href="#">
                        Read more
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </a>
                </div>
            </article>
        </div>

        <div className="flex justify-center pt-8">
            <button className="px-8 py-3 bg-white border border-[#c5c6cf] text-[#041534] font-bold rounded-lg hover:bg-[#f2f4f6] transition-colors">
                Load Older Insights
            </button>
        </div>
    </div>
)

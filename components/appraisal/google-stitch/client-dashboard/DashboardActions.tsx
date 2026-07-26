"use client"

import React from 'react'

export const DashboardActions = () => (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        <div className="bg-[#041534] p-8 rounded-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#041534] via-[#041534] to-[#1b2a4a] opacity-50 z-0"></div>
            <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2 italic">Amaken Insights</h4>
                <p className="text-[#8392b7] mb-6 max-w-sm">توقع اتجاهات السوق في المنطقة الوسطى للربع الرابع من عام 2023 بناءً على بياناتنا المحدثة.</p>
                <button className="bg-[#006a66] px-6 py-2 rounded-lg font-bold hover:bg-[#68d8d2] transition-all flex items-center gap-2 group/btn">
                    تحميل التقرير
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform align-middle">arrow_back</span>
                </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-8 -left-8 text-[12rem] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">insights</span>
        </div>
        <div className="bg-[#ffffff] p-8 rounded-xl flex items-center gap-8 group shadow-sm">
            <div className="flex-1">
                <h4 className="font-bold text-[#041534] text-xl mb-2">تواصل مع مستشارك</h4>
                <p className="text-[#75777f] text-sm mb-4 leading-relaxed">لديك استفسار حول تقرير معين أو ترغب في تعديل تفاصيل طلبك؟ فريقنا جاهز لمساعدتك.</p>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-3 space-x-reverse">
                        <img
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            alt="close-up of a professional advisor"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGqE6Xdf9zEcoHi1rKYlcOX7nHYC5qu36iiF-Cow7Vk868UyohoTbpP9m48OwudKMDHEirLn60Mnw8UyRSzxxK_cyeN1V4qC5uH2_itestcCFcw3oAjHkeIIt46Z5D3_X7nMiB7ESVqROEw0an8Kj0f_OV-gcwzvXXkmlIDBadWM_uLt2-JU929KShoNe9PJKlyFdc1ld0QjNKdDNHAl8UPGH0kXES8iM8kXsAse5fQqyCL39qipT-pSGTaGplXUNwCcn4MYhFR6s"
                        />
                        <img
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            alt="professional woman portrait"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKAdRIzxT5J6XDFfFgcZGFL9nK3O0vj8JFucYkIwj5qvL6w6iykunZRr_rb9b9ZpuSeV-Q8dmWbdXxNQQ2sohqwOQ03qaX_rdw8g6bG17RT2dzOs_m3YGE1MzfVbbYN3eLAskzoOElni0pPBaQC3K1wSze7_QdWueCTAFEgjlyol1l4gngT9G5vCH04SSRE2tG0AR4_fHuzJtEYBoRk6xy5lcGSFh2b0De3JVj-0Vy4qai5av7TKA_HFDasPQF-t9TCkj_zoXhOG0"
                        />
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-[#edeef0] flex items-center justify-center text-[10px] text-[#75777f] font-bold">+2</div>
                    </div>
                    <button className="text-[#006a66] font-bold text-sm hover:underline">بدء محادثة</button>
                </div>
            </div>
            <div className="w-24 h-24 bg-[#f2f4f6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-[#8392b7]">support_agent</span>
            </div>
        </div>
    </section>
)

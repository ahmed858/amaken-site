"use client"

import React from 'react'

export const DashboardRecentRequests = () => (
    <section className="bg-[#ffffff] rounded-xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 flex justify-between items-center bg-[#f2f4f6]/50">
            <h3 className="font-bold text-[#041534] text-lg">الطلبات الأخيرة</h3>
            <button className="text-[#006a66] text-sm font-semibold hover:underline">عرض الكل</button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-right">
                <thead className="bg-[#f2f4f6] text-[#75777f] text-xs uppercase tracking-wider">
                    <tr>
                        <th className="px-8 py-4 font-semibold">رقم الطلب</th>
                        <th className="px-8 py-4 font-semibold">الخدمة</th>
                        <th className="px-8 py-4 font-semibold">نوع العقار</th>
                        <th className="px-8 py-4 font-semibold">التاريخ</th>
                        <th className="px-8 py-4 font-semibold">الحالة</th>
                        <th className="px-8 py-4 font-semibold">الإجراء</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#edeef0]">
                    <tr className="hover:bg-[#f2f4f6]/30 transition-colors">
                        <td className="px-8 py-5 font-medium text-[#041534]">#REQ-8291</td>
                        <td className="px-8 py-5 text-[#45464e]">تقييم عقاري سكني</td>
                        <td className="px-8 py-5 text-[#45464e]">فيلا - الرياض</td>
                        <td className="px-8 py-5 text-[#45464e]">12 أكتوبر 2023</td>
                        <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#86f5ee]/20 text-[#00716d]">تحت المراجعة</span>
                        </td>
                        <td className="px-8 py-5">
                            <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                <span className="material-symbols-outlined align-middle">visibility</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/30 transition-colors">
                        <td className="px-8 py-5 font-medium text-[#041534]">#REQ-8288</td>
                        <td className="px-8 py-5 text-[#45464e]">تقييم تجاري</td>
                        <td className="px-8 py-5 text-[#45464e]">برج إداري - جدة</td>
                        <td className="px-8 py-5 text-[#45464e]">10 أكتوبر 2023</td>
                        <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">معاينة ميدانية</span>
                        </td>
                        <td className="px-8 py-5">
                            <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                <span className="material-symbols-outlined align-middle">visibility</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/30 transition-colors">
                        <td className="px-8 py-5 font-medium text-[#041534]">#REQ-8275</td>
                        <td className="px-8 py-5 text-[#45464e]">دراسة جدوى</td>
                        <td className="px-8 py-5 text-[#45464e]">أرض فضاء - الخبر</td>
                        <td className="px-8 py-5 text-[#45464e]">08 أكتوبر 2023</td>
                        <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">صياغة التقرير</span>
                        </td>
                        <td className="px-8 py-5">
                            <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                <span className="material-symbols-outlined align-middle">visibility</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/30 transition-colors">
                        <td className="px-8 py-5 font-medium text-[#041534]">#REQ-8260</td>
                        <td className="px-8 py-5 text-[#45464e]">تقييم محفظة</td>
                        <td className="px-8 py-5 text-[#45464e]">وحدات متعددة - مكة</td>
                        <td className="px-8 py-5 text-[#45464e]">05 أكتوبر 2023</td>
                        <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">مكتمل</span>
                        </td>
                        <td className="px-8 py-5">
                            <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                <span className="material-symbols-outlined align-middle">download</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f2f4f6]/30 transition-colors">
                        <td className="px-8 py-5 font-medium text-[#041534]">#REQ-8255</td>
                        <td className="px-8 py-5 text-[#45464e]">تحديث قيمة</td>
                        <td className="px-8 py-5 text-[#45464e]">مجمع سكني - الرياض</td>
                        <td className="px-8 py-5 text-[#45464e]">01 أكتوبر 2023</td>
                        <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">قيد الانتظار</span>
                        </td>
                        <td className="px-8 py-5">
                            <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                <span className="material-symbols-outlined align-middle">visibility</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
)

"use client"

import React, { useEffect, useState } from 'react'

interface Report {
    name: string
    commissioningnumber: string
    dateofcommissioning: string
    customer: string
    template: string
    purpose_of_evaluation: string
    status: string
}

export const ReportsList = () => {
    const [reports, setReports] = useState<Report[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch('/api/appraisal/reports')
                if (!response.ok) throw new Error('فشل في جلب التقارير')
                const data = await response.json()
                setReports(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchReports()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center p-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006a66]"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 text-center">
                <span className="material-symbols-outlined text-4xl mb-2">error</span>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <section className="bg-[#ffffff] rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center bg-[#f2f4f6]/50 border-b border-[#edeef0]">
                <h3 className="font-bold text-[#041534] text-lg">تقارير التقييم</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-right">
                    <thead className="bg-[#f2f4f6] text-[#75777f] text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-8 py-4 font-semibold text-right">رقم التكليف</th>
                            <th className="px-8 py-4 font-semibold text-right">الغرض</th>
                            <th className="px-8 py-4 font-semibold text-right">الدورة المستندية</th>
                            <th className="px-8 py-4 font-semibold text-right">التاريخ</th>
                            <th className="px-8 py-4 font-semibold text-right">الحالة</th>
                            <th className="px-8 py-4 font-semibold text-right">الإجراء</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edeef0]">
                        {reports.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-8 py-10 text-center text-[#75777f]">
                                    لا توجد تقارير حالياً
                                </td>
                            </tr>
                        ) : (
                            reports.map((report) => (
                                <tr key={report.name} className="hover:bg-[#f2f4f6]/30 transition-colors">
                                    <td className="px-8 py-5 font-medium text-[#041534]">{report.commissioningnumber || report.name}</td>
                                    <td className="px-8 py-5 text-[#45464e]">{report.purpose_of_evaluation}</td>
                                    <td className="px-8 py-5 text-[#45464e]">{report.template}</td>
                                    <td className="px-8 py-5 text-[#45464e]">
                                        {report.dateofcommissioning ? new Date(report.dateofcommissioning).toLocaleDateString('ar-EG') : '-'}
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            report.status === 'Completed' || report.status === 'مكتمل'
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {report.status || 'قيد المعالجة'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                            <span className="material-symbols-outlined align-middle">download</span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

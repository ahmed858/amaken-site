"use client"

import React, { useEffect, useState } from 'react'

interface Invoice {
    name: string
    posting_date: string
    grand_total: number
    status: string
    currency: string
    customer_name: string
}

export const InvoicesList = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch('/api/appraisal/invoices')
                if (!response.ok) throw new Error('فشل في جلب الفواتير')
                const data = await response.json()
                setInvoices(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchInvoices()
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
                <h3 className="font-bold text-[#041534] text-lg">الفواتير</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-right">
                    <thead className="bg-[#f2f4f6] text-[#75777f] text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-8 py-4 font-semibold text-right">رقم الفاتورة</th>
                            <th className="px-8 py-4 font-semibold text-right">التاريخ</th>
                            <th className="px-8 py-4 font-semibold text-right">العميل</th>
                            <th className="px-8 py-4 font-semibold text-right">الإجمالي</th>
                            <th className="px-8 py-4 font-semibold text-right">الحالة</th>
                            <th className="px-8 py-4 font-semibold text-right">الإجراء</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edeef0]">
                        {invoices.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-8 py-10 text-center text-[#75777f]">
                                    لا توجد فواتير حالياً
                                </td>
                            </tr>
                        ) : (
                            invoices.map((inv) => (
                                <tr key={inv.name} className="hover:bg-[#f2f4f6]/30 transition-colors">
                                    <td className="px-8 py-5 font-medium text-[#041534]">{inv.name}</td>
                                    <td className="px-8 py-5 text-[#45464e]">{inv.posting_date}</td>
                                    <td className="px-8 py-5 text-[#45464e]">{inv.customer_name}</td>
                                    <td className="px-8 py-5 text-[#45464e] font-bold">
                                        {inv.grand_total.toLocaleString()} {inv.currency}
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            inv.status === 'Paid' 
                                                ? 'bg-green-100 text-green-800' 
                                                : inv.status === 'Unpaid' 
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-amber-100 text-amber-800'
                                        }`}>
                                            {inv.status === 'Paid' ? 'مدفوعة' : inv.status === 'Unpaid' ? 'غير مدفوعة' : inv.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <button className="text-[#041534] hover:text-[#006a66] transition-colors">
                                            <span className="material-symbols-outlined align-middle">visibility</span>
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

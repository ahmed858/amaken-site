"use client"

import React from 'react'

import { SampleReportsHero } from './SampleReportsHero'
import { FeaturedReport } from './FeaturedReport'
import { ReportFilters } from './ReportFilters'
import { ReportCard } from './ReportCard'

const reports = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaKb6B-pSWtX9hAsp8h-JTTC7rTuSSZqJsc-PfgS8gTfWlnbuQfmgb9VnWhkyPEI3SSz-AdvZyk1ldmexsjsAtJpP7qSuah7_n70JkgD0eX5kDQ0-7CXTdOXzZQG0M0UO2YW8Z8i8a5NhrsxkkIhK2hLPXyank6kxa8XCL982tFBwdlETYgdtYxB-VQs5nTQbAL-eAosoe0S6kaka2mXOIjsQfvBgK69DxFmmM9x6QUWvOM0eJyqrlf7Gv2S6mhxoUBWlzH8CXYH0",
        category: "عقارات",
        categoryColor: "bg-[#86f5ee] text-[#00504d]",
        title: "محفظة الواجهة البحرية السكنية بجدة",
        date: "فبراير ٢٠٢٤",
        description: "تقييم قياسي للأصول السكنية الفاخرة متعددة الوحدات بما في ذلك تقييم المرافق."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfuHcePKM9pY5o7nk91mjwYPyLu5kU39xA5Idl4AWOMkNKH8JxL7Bppu_5yGHY5o-O9cdkPIkTBbdMv1eJpsEaEkLvwdLMCG_-2lwJzDoPQlz8bfecgK_OzEGuH36iC0nS6_-Pe9xRWbJcNA8-F9ZEBzpguBiaBdhl67KMuEJyQTXK_6gDwRwdunIXop8wWQ3eEJ-N_hiJsSMkoVRXWlbmMv2_hF8rVpvKAUOY9wtJxT_T5pvrygfB-JLFv3lTizVsGoZ5TQ0KHp0",
        category: "آلات",
        categoryColor: "bg-[#baece8] text-[#1d4e4b]",
        title: "تقييم أسطول الرافعات الصناعية",
        date: "يناير ٢٠٢٤",
        description: "تقييم مفصل للحالة الفنية وتحليل القيمة المتبقية لأصول الرفع الثقيل."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVLE0HEmq0yVQspx68xfRYO_RHIYB4rj_Xs58l9qw6H6Wp7z0HFEvaKiZNtzRDfGWWaITPqCai14DaqIB8Bk2KtLPGvyUMohVautaon0zlIv7phCUCKT61jJ7Tq0OLnQVbCaEUmUHLFmJ3I7evD5i6INLzlZ_ne6e93DtvRshv3nshmkja-jGSkmJ3nXGSqvMmejEwodI39xV6LlTkVrbWARJ7doYR7G8bqjmSMDjTwXT2b-uxwIVzeP2ofDYpDAbWIV_itq3cnpA",
        category: "مرافق",
        categoryColor: "bg-[#86f5ee] text-[#00504d]",
        title: "تدقيق مرافق مطار الملك خالد الدولي",
        date: "ديسمبر ٢٠٢٣",
        description: "تدقيق شامل لإدارة المرافق والتقييم التشغيلي لتوسعة المحطة."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oveGgaGA_YeRHwC4lVonDYyHAE46RQxXIuRwgu864yhn8NPNoJ2y1hitjc99Hl6xZVW-gXqk8YI3W7qPwiqJkU6enbbVcl_7vGx0hDo6aRmYNosc_370l1d6rZkSmIQX5k3t8tJAPjW9ONsTj4vAMqFeM-MKwn2T_uLnI6Jii_WQj1QXMFNG2k0IiD68tAbXUqy3nNgpzQhhdfFf6iZV30rN_QLnUjfQdq1KgAT8kcDglfnQuK5m4uMGjz6UWvcwfUNLjvxENZQ",
        category: "عقارات",
        categoryColor: "bg-[#86f5ee] text-[#00504d]",
        title: "مجمع المكاتب بمدينة الرياض الرقمية",
        date: "نوفمبر ٢٠٢٣",
        description: "تحليل عائد الإيجار وتقييم الأصول طويلة الأجل لمركز تجاري عالي التقنية."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv5zG4Et7dPhuouYoI-bxlBeAu1C8Uw9qWKG-UiO0IbOV_5P-pJEnOQVyLellO3aB5_YWgu7Ig5oo6VROzunQq1_OyTbuEDLbmr-xZVqgvRQM4VD05SfL-ldtiueSwy3Ld6VMuzXWup4QDRhvipfT0eX03RrINA8ENbhQuO9h2a_RboTqUpZECo4RPBileC3KLnsTyF7UiMWlX_9bi7552swigVzpau-UFfhDAEDG9pLsBe3fKeyomTsfUhP75_MBRiEzmb5wOWIQ",
        category: "آلات",
        categoryColor: "bg-[#baece8] text-[#1d4e4b]",
        title: "أصول توربينات قطاع الطاقة",
        date: "أكتوبر ٢٠٢٣",
        description: "تقييم الآلات المتخصصة لبنية توليد الطاقة ودورات الصيانة."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMgqd4JH5uXG71B5MaHyPPxHWiX7zgjs_gDv1cDb1P8QZWJ8H6U4PXMUvhr4dr3BXDo06mviIonCB7wocjEYJCOEVLSKzf7_sGpd0tIS9MtQF_9Ddpga9v1eRPbhmY35tQIBs7spH-zfO5PTf5ABz5jrzd3GhfcImXDk6yAwyOjLGOV_D5MRhyqzeRPgUdhIvZeDteVbamXWoIFABlOU9vvjcs3sBR3QKLTO4n7SHuu2aNZM2Vxhj5aYIXL9vHsS2-kLp0YV6Y0LI",
        category: "مرافق",
        categoryColor: "bg-[#86f5ee] text-[#00504d]",
        title: "تدقيق ضيافة منتجع البحر الأحمر",
        date: "سبتمبر ٢٠٢٣",
        description: "تقييم مرافق الضيافة المحددة بما في ذلك أصول الترفيه والمعدات التشغيلية."
    }
]

export const SampleReportsLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="max-w-7xl mx-auto px-6 py-12">
                <SampleReportsHero />
                <FeaturedReport />
                {/* <ReportFilters />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reports.map((report, index) => (
                        <ReportCard key={index} {...report} />
                    ))}
                </div> */}

                {/* Load More Section */}
                {/* <div className="mt-16 flex flex-col items-center">
                    <button className="px-8 py-4 border-2 border-[#041534] text-[#041534] rounded-lg font-bold hover:bg-[#041534] hover:text-white transition-all">
                        استكشاف المزيد من الأرشيف
                    </button>
                    <p className="mt-4 text-[#45464e] text-sm italic">الوصول إلى قاعدة بيانات تضم أكثر من ١,٢٠٠ تقرير موثق</p>
                </div> */}
            </main>
        </div>
    )
}

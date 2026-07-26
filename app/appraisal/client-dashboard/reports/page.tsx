import { ClientDashboardLayout } from "@/components/appraisal/google-stitch/client-dashboard/ClientDashboardLayout"
import { ReportsList } from "@/components/appraisal/google-stitch/client-dashboard/ReportsList"

export default function ReportsPage() {
    return (
        <ClientDashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#041534]">تقارير التقييم</h2>
                    <p className="text-[#75777f]">عرض وتحميل تقارير التقييم العقاري المكتملة</p>
                </div>
                <ReportsList />
            </div>
        </ClientDashboardLayout>
    )
}

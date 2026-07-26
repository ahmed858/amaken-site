import { ClientDashboardLayout } from "@/components/appraisal/google-stitch/client-dashboard/ClientDashboardLayout"
import { DashboardRecentRequests } from "@/components/appraisal/google-stitch/client-dashboard/DashboardRecentRequests"

export default function RequestsPage() {
    return (
        <ClientDashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#041534]">طلباتي</h2>
                    <p className="text-[#75777f]">متابعة حالة طلبات التقييم العقاري الخاصة بك</p>
                </div>
                <DashboardRecentRequests />
            </div>
        </ClientDashboardLayout>
    )
}

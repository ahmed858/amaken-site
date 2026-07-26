import { ClientDashboardLayout } from "@/components/appraisal/google-stitch/client-dashboard/ClientDashboardLayout"
import { DashboardStats } from "@/components/appraisal/google-stitch/client-dashboard/DashboardStats"
import { DashboardRecentRequests } from "@/components/appraisal/google-stitch/client-dashboard/DashboardRecentRequests"
import { DashboardActions } from "@/components/appraisal/google-stitch/client-dashboard/DashboardActions"

export default function ClientDashboardPage() {
    return (
        <ClientDashboardLayout>
            <DashboardStats />
            <DashboardRecentRequests />
            <DashboardActions />
        </ClientDashboardLayout>
    )
}

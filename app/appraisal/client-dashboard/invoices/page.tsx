import { ClientDashboardLayout } from "@/components/appraisal/google-stitch/client-dashboard/ClientDashboardLayout"
import { InvoicesList } from "@/components/appraisal/google-stitch/client-dashboard/InvoicesList"

export default function InvoicesPage() {
    return (
        <ClientDashboardLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#041534]">الفواتير</h2>
                    <p className="text-[#75777f]">عرض وإدارة فواتير خدمات التقييم الخاصة بك</p>
                </div>
                <InvoicesList />
            </div>
        </ClientDashboardLayout>
    )
}

import React from 'react'
import { ClientDashboardLayout } from '@/components/appraisal/google-stitch/client-dashboard/ClientDashboardLayout'
import { ProfileContent } from '@/components/appraisal/google-stitch/client-dashboard/ProfileContent'

export default function MePage() {
    return (
        <ClientDashboardLayout>
            <ProfileContent />
        </ClientDashboardLayout>
    )
}

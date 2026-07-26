import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, serverAuthHeaders } from '@/lib/api';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('appraisal_sid')?.value;
        const customer_name = cookieStore.get('appraisal_customer_name')?.value;
        const userEmail = cookieStore.get('appraisal_user_email')?.value;

        if (!sid) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Use the customer_name from cookies if available, otherwise fallback to user email
        const filters = JSON.stringify(
            customer_name
                ? [["customer", "=", customer_name]]
                : [["owner", "=", userEmail]]
        );

        const fields = JSON.stringify([
            "name",
            "commissioningnumber",
            "dateofcommissioning",
            "customer",
            "template",
            "purpose_of_evaluation",
            "status"
        ]);

        const reportsRes = await fetch(
            `${ERPNEXT_URL}/api/resource/BaseSample?filters=${filters}&fields=${fields}&order_by=modified desc`,
            { headers: serverAuthHeaders }
        );

        if (!reportsRes.ok) {
            const error = await reportsRes.text();
            console.error('ERPNext Reports Error:', error);
            return NextResponse.json({ message: 'Failed to fetch reports' }, { status: reportsRes.status });
        }

        const data = await reportsRes.json();
        return NextResponse.json(data.data);

    } catch (error: any) {
        console.error('Reports API Error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

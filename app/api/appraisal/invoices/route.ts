import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, serverAuthHeaders } from '@/lib/api';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('appraisal_sid')?.value;
        const customerName = cookieStore.get('appraisal_customer_name')?.value;
        const userEmail = cookieStore.get('appraisal_user_email')?.value;
        console.log(customerName, "api/appraisal/invoices");
        if (!sid) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // 2. Fetch Sales Invoices
        // Priority to customer_name from cookies, then fallback to email as owner
        const filters = [["customer", "=", customerName], ["docstatus", "!=", 2]]


        const fields = ["name", "posting_date", "grand_total", "status", "currency", "customer_name"];

        const invoicesRes = await fetch(
            `${ERPNEXT_URL}/api/resource/Sales Invoice?fields=${fields}&filters=${filters}&order_by=creation desc`,
            { headers: serverAuthHeaders }
        );

        if (!invoicesRes.ok) {
            const error = await invoicesRes.text();
            console.error('ERPNext Invoices Error:', error);
            return NextResponse.json({ message: 'Failed to fetch invoices' }, { status: invoicesRes.status });
        }

        const data = await invoicesRes.json();
        return NextResponse.json(data.data);

    } catch (error: any) {
        console.error('Invoices API Error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

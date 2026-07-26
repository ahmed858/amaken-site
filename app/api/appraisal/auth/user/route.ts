import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, serverAuthHeaders } from '@/lib/api';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('appraisal_sid')?.value;

        if (!sid) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        // 1. Verify session and get email
        const response = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
            method: 'GET',
            headers: {
                'Cookie': `sid=${sid}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const data = await response.json();
        const email = data.message;

        if (!email || email === 'Guest') {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        // 2. Fetch full User details using server side auth
        const userDetailsResponse = await fetch(`${ERPNEXT_URL}/api/resource/User/${email}`, {
            headers: serverAuthHeaders,
        });

        let userDetails = { first_name: '', last_name: '', mobile_no: '' };
        if (userDetailsResponse.ok) {
            const userData = await userDetailsResponse.json();
            userDetails = userData.data;
        }

        // 3. Try to fetch Customer and Address info
        // We look for a Customer associated with this user
        const customerResponse = await fetch(
            `${ERPNEXT_URL}/api/resource/Portal User?filters=[["parent", "=", "${email}"]]&fields=["parent"]`,
            { headers: serverAuthHeaders }
        );
        // Note: The above is a simplification. Usually we'd search Customer directly.
        // For now, let's stick to User details and provide placeholders for address
        // since complex joins are harder via REST resource API without custom methods.

        return NextResponse.json({
            user: {
                email: email,
                name: email,
                first_name: userDetails.first_name,
                last_name: userDetails.last_name,
                mobile_no: userDetails.mobile_no,
                // The address fields would ideally be fetched here too
            }
        });

    } catch (error: any) {
        console.error('Session check error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}

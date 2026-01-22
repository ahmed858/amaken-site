import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL } from '@/lib/api';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('sid')?.value;

        if (!sid) {
            return NextResponse.json({ message: 'Not logged in' }, { status: 401 });
        }

        const response = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
            method: 'GET',
            headers: {
                'Cookie': `sid=${sid}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json({ message: 'Session expired' }, { status: 401 });
        }

        const data = await response.json();
        // frappe.auth.get_logged_user returns the user email usually in `message`

        // We might want more details (full name etc).
        // If we have the user email, we can try to fetch more info if needed, but permissions might restrict it.
        // For now, let's just return what we have to confirm session.

        return NextResponse.json({
            user: {
                email: data.message,
                // If we want more info we'd need another call or a different endpoint.
                // But confirming session is the main goal here.
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

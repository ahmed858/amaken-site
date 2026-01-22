import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, handleResponse } from '@/lib/api';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('sid')?.value;

        if (!sid) {
            return NextResponse.json({ message: 'Not logged in' }, { status: 401 });
        }

        const response = await fetch(`${ERPNEXT_URL}/api/method/amaken_app.api.get_my_requests`, {
            method: 'GET',
            headers: {
                'Cookie': `sid=${sid}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const data = await handleResponse(response);

        return NextResponse.json(data);

    } catch (error: any) {
        console.error('Error fetching requests:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: error.status || 500 }
        );
    }
}

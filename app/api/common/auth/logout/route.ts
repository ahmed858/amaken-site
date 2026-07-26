import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL } from '@/lib/api';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('sid')?.value;

        if (sid) {
            // Best effort logout on ERPNext side
            try {
                await fetch(`${ERPNEXT_URL}/api/method/logout`, {
                    method: 'GET', // logout is often a GET or POST, varies. Safe to try.
                    headers: {
                        'Cookie': `sid=${sid}`
                    }
                });
            } catch (e) {
                // Ignore error on upstream logout
            }
        }

        (await cookies()).delete('sid');

        return NextResponse.json({ message: 'Logged out' });
    } catch (error: any) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, handleResponse, serverAuthHeaders } from '@/lib/api';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { usr, pwd } = body;

        const response = await fetch(`${ERPNEXT_URL}/api/method/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ usr, pwd }),
        });

        const data = await handleResponse(response);

        const setCookieHeader = response.headers.get('set-cookie');

        let customerName = '';
        let email = usr;

        if (setCookieHeader) {
            const sidMatch = setCookieHeader.match(/sid=([^;]+)/);
            if (sidMatch) {
                const sid = sidMatch[1];
                const cookieStore = await cookies();

                cookieStore.set('appraisal_sid', sid, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    path: '/',
                    sameSite: 'lax'
                });

                // Fetch customer details to store in cookies
                try {
                    const customerRes = await fetch(
                        `${ERPNEXT_URL}/api/resource/Customer?filters=[["Portal User","user","=","${usr}"]]&fields=["name","customer_name"]`,
                        { headers: serverAuthHeaders }
                    );
                    if (customerRes.ok) {
                        const customerData = await customerRes.json();
                        cookieStore.set('appraisal_customerData', JSON.stringify(customerData), {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === 'production',
                            path: '/',
                            sameSite: 'lax'
                        });

                        if (customerData.data && customerData.data.length > 0) {
                            customerName = customerData.data[0].name;
                            cookieStore.set('appraisal_customer_name', customerName, { path: '/' });
                        }
                    }
                } catch (e) {
                    console.error('Failed to fetch customer during login', e);
                }

                cookieStore.set('appraisal_user_email', usr, { path: '/' });
            }
        }

        const res = NextResponse.json({
            message: 'Logged in successfully',
            user: (data as any).full_name || (data as any).message || 'User',
            customer_name: customerName
        });

        return res;
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: error.status || 500 }
        );
    }
}

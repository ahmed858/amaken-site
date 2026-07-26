import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, serverAuthHeaders, handleResponse } from '@/lib/api';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Prepare payload for ERPNext
        const payload = {
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            mobile_no: body.phone,
            password: body.password,
            building_number: body.building_number,
            street_name: body.street_name,
            district: body.district,
            city: body.city,
            postal_code: body.postal_code,

        };

        // const response = await fetch(`${ERPNEXT_URL}/api/method/register_appraisal_customer?${new URLSearchParams(payload)}`, {
        //     method: 'POST',
        //     headers: serverAuthHeaders,

        // });

        const response = await fetch(`${ERPNEXT_URL}/api/method/register_appraisal_customer`, {
            method: 'POST',
            headers: serverAuthHeaders,
            body: JSON.stringify(payload),
        });

        const data = await handleResponse(response);

        return NextResponse.json({
            message: 'Registration successful. If verification is required, please check your email.',
            data
        });

    } catch (error: any) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: error.status || 500 }
        );
    }
}

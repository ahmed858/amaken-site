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
            phone: body.phone,
            password: body.password,
            interest_type: body.interest_type,
            source: 'Website',
            expected_income: body.expected_income || 0,
            company_name: body.company_name,
            cr_number: body.cr_number,
            building_number: body.building_number,
            street_name: body.street_name,
            district: body.district,
            city: body.city,
            postal_code: body.postal_code,
            additional_number: body.additional_number,
        };

        // Note: Using the path suggested by the business logic or standard ERPNext setup
        // The user manually changed this to /api/method/api/register_portal_user in a previous step
        // We will try to call the whitelisted method.
        const response = await fetch(`${ERPNEXT_URL}/api/method/register_portal_user`, {
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

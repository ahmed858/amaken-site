import { NextResponse } from 'next/server';
const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
const API_KEY = process.env.ERP_API_KEY;
const API_SECRET = process.env.ERP_API_SECRET;

export async function POST(request: Request) {
    try {
        const body = await request.json();


        // Validate mandatory fields
        if (!body.first_name || !body.mobile_no) {
            return NextResponse.json(
                { error: 'First name and mobile number are required' },
                { status: 400 }
            );
        }

        // Build payload for ERPNext
        const payload: any = {
            status: "جديد",
            source2: "الموقع الالكتروني",
            first_name: body.first_name,
            mobile_no: body.mobile_no,
        };

        if (body.email_id) {
            payload.email_id = body.email_id;
        }

        // Conditionally include project/unit interest fields
        if (body.custom_project || body.custom_unit) {
            payload.buying_ = 1;
            if (body.custom_project) payload.custom_project = body.custom_project;
            if (body.custom_unit) payload.custom_unit = body.custom_unit;
        }

        // If ERPNext details are configured, send the request
        if (ERP_API_URL && API_KEY && API_SECRET) {
            const response = await fetch(`${ERP_API_URL}/api/resource/Lead`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${API_KEY}:${API_SECRET}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                let errorData = null;
                try {
                    errorData = JSON.parse(errorText);
                } catch {
                    errorData = errorText;
                }
                console.error('ERPNext API Error:', errorData);
                return NextResponse.json(
                    { error: 'Failed to create lead in ERPNext', details: errorData },
                    { status: response.status }
                );
            }

            const data = await response.json();
            return NextResponse.json({ success: true, data });
        } else {
            console.warn('ERPNext credentials are not configured. Logging payload:');
            console.log(payload);
            return NextResponse.json(
                {
                    error: 'ERPNext credentials not configured', missing: {
                        url: !ERP_API_URL,
                        apiKey: !API_KEY,
                        apiSecret: !API_SECRET,
                    }
                },
                { status: 503 }
            );
        }

    } catch (error) {
        console.error('API Error /api/common/lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

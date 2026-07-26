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
            status: "Lead",
            company_type: "أفراد",
            source2: body.source2,
            first_name: body.first_name,
            mobile_no: body.mobile_no,
            contact_date: new Date().toISOString().split('T')[0],
            custom_contact_time: new Date().toISOString().split('T')[1].split('.')[0],
            appraisal: body.appraisal,
            campaign_name: body.campaign_name,
            custom_appraisal_property_type: body.custom_appraisal_property_type,
        };

        if (body.email_id) {
            payload.email_id = body.email_id;
        }

        // If ERPNext details are configured, send the request
        if (ERP_API_URL && API_KEY && API_SECRET) {
            console.log('Sending payload to ERPNext:', payload);
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
                console.error('ERPNext API Error while add appraisal lead:', {
                    status: response.status,
                    data: errorData,
                    payload
                });
                return NextResponse.json(
                    { error: 'ERPNext API Error', details: errorData },
                    { status: response.status }
                );
            }

            const data = await response.json();
            return NextResponse.json({ success: true, data });
        } else {
            console.warn('ERPNext credentials are not configured.');
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
        console.error('API Error /api/appraisal/lead:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', message: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

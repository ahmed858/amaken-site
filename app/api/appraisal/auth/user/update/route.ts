import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, serverAuthHeaders, handleResponse } from '@/lib/api';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('appraisal_sid')?.value;

        if (!sid) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // 1. Get logged in user email
        const userRes = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
            headers: { 'Cookie': `appraisal_sid=${sid}` }
        });
        const userStatus = await userRes.json();
        const email = userStatus.message;

        if (!email || email === 'Guest') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();

        // 2. Update User document
        await fetch(`${ERPNEXT_URL}/api/resource/User/${email}`, {
            method: 'PUT',
            headers: serverAuthHeaders,
            body: JSON.stringify({
                first_name: body.first_name,
                last_name: body.last_name,
                mobile_no: body.mobile_no
            })
        });

        // 3. Find and Update Customer
        const customerSearchRes = await fetch(
            `${ERPNEXT_URL}/api/resource/Portal User?filters=[["parenttype", "=", "Customer"], ["user", "=", "${email}"]]&fields=["parent"]`,
            { headers: serverAuthHeaders }
        );
        const customers = await customerSearchRes.json();
        const customerName = customers.data?.[0]?.parent;

        if (customerName) {
            await fetch(`${ERPNEXT_URL}/api/resource/Customer/${customerName}`, {
                method: 'PUT',
                headers: serverAuthHeaders,
                body: JSON.stringify({
                    customer_name: `${body.first_name} ${body.last_name || ''}`.trim()
                })
            });

            // 4. Update Contact
            // Search for primary contact for this customer/email
            const contactSearchRes = await fetch(
                `${ERPNEXT_URL}/api/resource/Contact?filters=[["email_id", "=", "${email}"]]&fields=["name"]`,
                { headers: serverAuthHeaders }
            );
            const contacts = await contactSearchRes.json();
            const contactName = contacts.data?.[0]?.name;

            if (contactName) {
                await fetch(`${ERPNEXT_URL}/api/resource/Contact/${contactName}`, {
                    method: 'PUT',
                    headers: serverAuthHeaders,
                    body: JSON.stringify({
                        first_name: body.first_name,
                        last_name: body.last_name || "",
                        email_ids: [{ email_id: email, is_primary: 1 }],
                        phone_nos: [{ phone: body.mobile_no, is_primary_phone: 1 }]
                    })
                });
            }

            // 5. Update/Create Address linked to Customer
            const addressSearchRes = await fetch(
                `${ERPNEXT_URL}/api/resource/Dynamic Link?filters=[["link_doctype", "=", "Customer"], ["link_name", "=", "${customerName}"], ["parenttype", "=", "Address"]]&fields=["parent"]`,
                { headers: serverAuthHeaders }
            );
            const addresses = await addressSearchRes.json();
            const addressName = addresses.data?.[0]?.parent;

            const addressPayload = {
                address_title: `${body.first_name} ${body.last_name || ''}`.trim(),
                address_line1: `${body.building_number || ''} ${body.street_name || ''}`.trim() || customerName,
                address_line2: body.district || "",
                city: body.city || "",
                pincode: body.postal_code || "",
                custom_building_number: body.building_number || "",
                custom_area: body.district || "",
            };

            if (addressName) {
                await fetch(`${ERPNEXT_URL}/api/resource/Address/${addressName}`, {
                    method: 'PUT',
                    headers: serverAuthHeaders,
                    body: JSON.stringify(addressPayload)
                });
            } else {
                await fetch(`${ERPNEXT_URL}/api/resource/Address`, {
                    method: 'POST',
                    headers: serverAuthHeaders,
                    body: JSON.stringify({
                        ...addressPayload,
                        doctype: 'Address',
                        address_type: 'Billing',
                        country: 'Saudi Arabia',
                        is_primary_address: 1,
                        links: [{ link_doctype: 'Customer', link_name: customerName }]
                    })
                });
            }
        }

        return NextResponse.json({ message: 'Profile updated successfully' });

    } catch (error: any) {
        console.error('Profile update error:', error);
        return NextResponse.json({ message: error.message || 'Failed to update profile' }, { status: 500 });
    }
}

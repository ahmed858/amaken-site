
export const ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL || 'https://amaken.space';
const ERP_API_KEY = process.env.ERP_API_KEY;
const ERP_API_SECRET = process.env.ERP_API_SECRET;

export class ERPNextError extends Error {
    constructor(public message: string, public status: number) {
        super(message);
        this.name = 'ERPNextError';
    }
}

/**
 * Common headers for ERPNext requests (Used by client-side or generic requests)
 */
export const commonHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

/**
 * Headers for server-to-server authenticated requests
 */
export const serverAuthHeaders = {
    ...commonHeaders,
    'Authorization': `token ${ERP_API_KEY}:${ERP_API_SECRET}`,
};

/**
 * Helper to handle ERPNext responses
 */
export async function handleResponse<T>(response: Response): Promise<T> {
    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text);
    } catch (e) {
        data = { message: text };
    }

    if (!response.ok) {
        throw new ERPNextError(
            data.exception || data.message || 'An error occurred with ERPNext',
            response.status
        );
    }

    return data;
}

/**
 * Get the logged-in user from the session cookie
 */
export async function getLoggedUser(sid?: string) {
    if (!sid) return null;

    try {
        const response = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
            headers: {
                'Cookie': `sid=${sid}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) return null;

        const data = await response.json();
        const email = data.message;

        if (!email || email === 'Guest') return null;

        // Fetch associated Customer
        const customerRes = await fetch(
            `${ERPNEXT_URL}/api/resource/Customer?filters=[["Portal User","user","=","${email}"]]&fields=["name","customer_name"]`,
            { headers: serverAuthHeaders }
        );

        let customer = null;
        if (customerRes.ok) {
            const customerData = await customerRes.json();
            if (customerData.data && customerData.data.length > 0) {
                customer = customerData.data[0].name;
            }
        }

        return { email, customer };
    } catch (error) {
        console.error('Error fetching logged user:', error);
        return null;
    }
}

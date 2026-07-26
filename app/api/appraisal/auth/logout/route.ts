import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    const cookieStore = await cookies();
    cookieStore.delete('appraisal_sid');
    cookieStore.delete('appraisal_customer_name');
    cookieStore.delete('appraisal_user_email');
    cookieStore.delete('appraisal_customerData');
    
    return NextResponse.json({ message: 'Logged out successfully' });
}

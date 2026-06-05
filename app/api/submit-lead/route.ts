import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // CRM fields
    const formData = new URLSearchParams();
    formData.append('name', data.name || '');
    formData.append('email', data.email || '');
    formData.append('phone', data.phone || '');
    formData.append('mobile', data.phone || ''); 
    formData.append('source', 'Website');
    formData.append('city', 'Gurugram');
    formData.append('course', 'General Enquiry');

    // Proxy the request to the vPulse CRM API
    const response = await fetch('http://www.vlccinstitutelms.com/vpulse_website_lead_api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const result = await response.text();
    console.log("CRM PHP SERVER RESPONSE:", result);
    
    // Check if the CRM specifically rejected it
    if (result.includes('invalid') || result.includes('Error')) {
      return NextResponse.json({ success: false, message: 'CRM rejected lead: Data Incorrect Format' }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, message: 'Lead submitted successfully', result });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to submit lead' }, { status: 500 });
  }
}

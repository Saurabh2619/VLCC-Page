import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Client provided the EXACT JSON format. It MUST be an array containing an object.
    const payload = [
      {
        "name" : data.name || "",
        "email" : data.email || "",
        "gender" : "",
        "center_code": "Inf187",
        "course": "1",
        "mobile" : data.phone || "",
        "qualification" : "",
        "source" : "81",
        "af_tid" : "",
        "af_pid" : "",
        "publisher" : "",
        "campaign_code" : "dMkBCPTm9rcBEIn3m5ID",
        "motto" : "",
        "gclcode": "",
        "adw" : "",
        "keyw" : "",
        "url" : ""
      }
    ];

    // Proxy the request to the vPulse CRM API
    const response = await fetch('http://www.vlccinstitutelms.com/vpulse_website_lead_api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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

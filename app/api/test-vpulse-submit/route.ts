import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const payload = [
      {
        "name": data.name || "",
        "email": data.email || "",
        "gender": "",
        "center_code": "Inf187",
        "course": "1",
        "mobile": data.phone || "",
        "qualification": "",
        "source": "81",
        "af_tid": "",
        "af_pid": "",
        "publisher": "",
        "campaign_code": "dMkBCPTm9rcBEIn3m5ID",
        "motto": "",
        "gclcode": "",
        "adw": "",
        "keyw": "",
        "url": ""
      }
    ];

    // BACKEND API CALL TO VPULSE
    const response = await fetch('http://www.vlccinstitutelms.com/vpulse_website_lead_api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const textResult = await response.text();

    return NextResponse.json({
      status: response.status,
      result: textResult,
      payloadSent: payload
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

'use client';

import { useState } from 'react';

export default function TestVPulseForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [log, setLog] = useState<string>('');

  
  // VERSION 1: Call from fronend fdirectly and issue CORS error   (line:- 12-38)
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLog('Submitting directly to vPulse API from frontend (Version 1)...');

  //   try {
  //     const payload = [{
  //       "name": formData.name || "", "email": formData.email || "", "gender": "", "center_code": "Inf187",
  //       "course": "1", "mobile": formData.phone || "", "qualification": "", "source": "81", "af_tid": "",
  //       "af_pid": "", "publisher": "", "campaign_code": "dMkBCPTm9rcBEIn3m5ID", "motto": "", "gclcode": "",
  //       "adw": "", "keyw": "", "url": ""
  //     }];

  //     setLog(prev => prev + '\n\nPayload:\n' + JSON.stringify(payload, null, 2));

  //     const res = await fetch('http://www.vlccinstitutelms.com/vpulse_website_lead_api.php', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload),
  //     });

  //     const textResult = await res.text();
  //     setLog(prev => prev + '\n\nResponse Status: ' + res.status + '\nResponse Text: ' + textResult);
  //   } catch (error: any) {
  //     setLog(prev => prev + '\n\nCRITICAL BROWSER ERROR (CORS): ' + error.message);
  //     setLog(prev => prev + '\n\nExplain this: "Browsers block direct API calls without CORS headers. We MUST use a backend route."');
  //   }
  // };
  

  
  // VERSION 2: BACKEND ROUTE CALL (get "Data Incorrect Format" from VPulse)   (line:- 43-62)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLog('Submitting via our Backend route (Version 2)...');

    try {
      const res = await fetch('/api/test-vpulse-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      setLog(prev => prev + '\n\nPayload Sent by Backend:\n' + JSON.stringify(data.payloadSent, null, 2));
      setLog(prev => prev + '\n\nResponse from vPulse Server:\nStatus: ' + data.status + '\nRaw Text: ' + data.result);
      
    } catch (error: any) {
      setLog(prev => prev + '\n\nServer Error: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-black mt-20">
      <h2 className="text-2xl font-bold mb-4">Dedicated vPulse Test Form</h2>
      <p className="mb-6 text-gray-600">This form bypasses our Google Sheet and backend, calling vPulse directly exactly as the client requested.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Direct API Test
        </button>
      </form>

      {log && (
        <div className="mt-8 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded whitespace-pre-wrap overflow-x-auto">
          {log}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MagneticButton from './MagneticButton';

export default function EnquiryForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const submitted = localStorage.getItem('vlcc_enquiry_submitted');
      if (submitted) {
        setIsAlreadySubmitted(true);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Setup Google Forms Request
      const googleFormData = new URLSearchParams();
      googleFormData.append('entry.1073725328', formData.name);
      googleFormData.append('entry.455340996', formData.email);
      googleFormData.append('entry.24840909', formData.phone);

      const googleFormPromise = fetch('https://docs.google.com/forms/d/e/1FAIpQLSeKBs9nAxpzuM9ISVC1aHcAq_gvCGFnTSCD9-bLm1pKpZe9Ew/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleFormData.toString(),
      });

      // 2. Setup vPulse CRM Request (via our backend route)
      const vPulsePromise = fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 3. Execute both requests concurrently
      await Promise.allSettled([googleFormPromise, vPulsePromise]);

      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      if (typeof window !== 'undefined') {
        localStorage.setItem('vlcc_enquiry_submitted', 'true');
      }
      setIsAlreadySubmitted(true);
      router.push('/thank-you');
      
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <form className="flex flex-col gap-3.5 md:gap-[15px]" onSubmit={handleSubmit}>
      {isAlreadySubmitted ? (
        <div className="py-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <p className="text-[#4caf50] text-lg font-bold font-heading mb-2">Enquiry Submitted</p>
          <p className="text-gray-300 text-sm font-body">Thank you! Your enquiry is already submitted. Our team will contact you shortly.</p>
        </div>
      ) : (
        <>
          <div>
        <input 
          type="text" 
          placeholder="Name*" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Email*" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      <div>
        <input 
          type="tel" 
          placeholder="Contact Number*" 
          required 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center font-body animate-fade-in">Something went wrong. Please try again.</p>
      )}
      
      {status === 'success' && (
        <p className="text-[#4caf50] text-sm text-center font-body animate-fade-in">Thank you! Your enquiry has been sent successfully.</p>
      )}

      <MagneticButton className="w-full mt-1 md:mt-2">
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'} 
          className="btn-primary w-full h-[50px] md:h-auto text-[15px] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {status === 'loading' ? 'Submitting...' : 'Enquire Now'}
        </button>
      </MagneticButton>
        </>
      )}
    </form>
  );
}

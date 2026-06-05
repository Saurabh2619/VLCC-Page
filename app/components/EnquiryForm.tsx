'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MagneticButton from './MagneticButton';

export default function EnquiryForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Create FormData for Google Forms
      const googleFormData = new URLSearchParams();
      googleFormData.append('entry.1073725328', formData.name);
      googleFormData.append('entry.455340996', formData.email);
      googleFormData.append('entry.24840909', formData.phone);

      // Submit directly to Google Forms with no-cors to bypass security restrictions
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeKBs9nAxpzuM9ISVC1aHcAq_gvCGFnTSCD9-bLm1pKpZe9Ew/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Forms
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: googleFormData.toString(),
      });

      // Since mode is 'no-cors', we can't read the response properly, but if it didn't throw an error, it succeeded.
      setStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      router.push('/thank-you');
      
    } catch (error) {
      console.error("Google Form Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <form className="flex flex-col gap-3.5 md:gap-[15px]" onSubmit={handleSubmit}>
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
    </form>
  );
}

'use client';

import MagneticButton from './MagneticButton';

export default function EnquiryForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to vPulse CRM API here
    console.log('Form submitted!');
  };

  return (
    <form className="flex flex-col gap-3.5 md:gap-[15px]" onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Name*" 
          required 
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Email*" 
          required 
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      <div>
        <input 
          type="tel" 
          placeholder="Contact Number*" 
          required 
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-white font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" 
        />
      </div>
      <div>
        <select 
          required 
          defaultValue="" 
          className="w-full h-[45px] md:h-[50px] bg-white/5 border border-white/10 rounded-lg px-4 md:px-5 text-gray-300 font-body text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 [&>option]:bg-[#121212] [&>option]:text-white"
        >
          <option value="" disabled>Select Qualification*</option>
          <option value="12th">12th Passed</option>
          <option value="graduate">Graduate</option>
          <option value="post-graduate">Post Graduate</option>
        </select>
      </div>
      
      <div className="flex items-start gap-2.5 mt-2 text-left">
        <input type="checkbox" id="agreement" required className="mt-1 flex-shrink-0" />
        <label htmlFor="agreement" className="text-[11px] md:text-xs text-[#aaa] leading-relaxed">
          I agree to the Terms and Conditions and Privacy Policy of VLCC.
        </label>
      </div>
      
      <MagneticButton className="w-full mt-3 md:mt-2.5">
        <button type="submit" className="btn-primary w-full h-[50px] md:h-auto text-[15px]">
          Enquire Now
        </button>
      </MagneticButton>
    </form>
  );
}

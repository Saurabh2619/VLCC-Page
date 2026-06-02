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
      <MagneticButton className="w-full mt-3 md:mt-2.5">
        <button type="submit" className="btn-primary w-full h-[50px] md:h-auto text-[15px]">
          Enquire Now
        </button>
      </MagneticButton>
    </form>
  );
}

'use client';

import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-fixed py-[120px] md:py-[100px] overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-[#141414]/60 z-[1]"></div>
      <div className="max-w-[1200px] mx-auto px-5 w-full z-[2] relative">
        <div className="flex justify-between items-center flex-wrap gap-10 md:text-left text-center flex-col md:flex-row">
          <div className="flex-1 min-w-[300px] animate-slide-up w-full">
            <span className="inline-block bg-vlcc-orange/20 text-vlcc-orange px-[15px] py-[5px] rounded-full font-semibold text-sm mb-5 border border-vlcc-orange tracking-wide uppercase">Admissions Open</span>
            <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold leading-[1.1] mb-5 font-heading">Diploma in Makeup & Styling<br /><span className="text-vlcc-orange italic">VLCC Institute</span></h1>
            
            <p className="text-lg text-[#d1d1d1] mb-[30px] max-w-[500px] mx-auto md:mx-0 font-body">Enroll for the Upcoming Batch</p>
            
            <div className="flex gap-[30px] justify-center md:justify-start flex-wrap">
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-2xl border border-white/20 shadow-sm">📍</div>
                <div className="text-left">
                  <h4 className="text-base font-semibold font-heading mb-1">On-Campus</h4>
                  <p className="text-sm text-[#aaa] font-body">Delhi-NCR</p>
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-2xl border border-white/20 shadow-sm">🏆</div>
                <div className="text-left">
                  <h4 className="text-base font-semibold font-heading mb-1">Approved by</h4>
                  <p className="text-sm text-[#aaa] font-body">NSDC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none md:flex-[0_1_450px] w-full animate-fade-in">
            <div className="glass-panel p-[30px] md:p-[40px] bg-[#141414]/40">
              <h3 className="text-2xl text-white mb-1.5 font-heading font-semibold text-left">Request a Call Back</h3>
              <p className="text-[#bbb] text-sm mb-[25px] text-left">Fill in Your Details to Get Started</p>
              
              <form className="flex flex-col gap-[15px]" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Name*" required className="w-full h-[50px] bg-white/5 border border-white/10 rounded-lg px-5 text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <div>
                  <input type="email" placeholder="Email*" required className="w-full h-[50px] bg-white/5 border border-white/10 rounded-lg px-5 text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <div>
                  <input type="tel" placeholder="Contact Number*" required className="w-full h-[50px] bg-white/5 border border-white/10 rounded-lg px-5 text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <div>
                  <select required defaultValue="" className="w-full h-[50px] bg-white/5 border border-white/10 rounded-lg px-5 text-gray-300 font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 [&>option]:bg-[#121212] [&>option]:text-white">
                    <option value="" disabled>Select Qualification*</option>
                    <option value="12th">12th Passed</option>
                    <option value="graduate">Graduate</option>
                    <option value="post-graduate">Post Graduate</option>
                  </select>
                </div>
                
                <div className="flex items-start gap-2.5 mt-2.5 text-left">
                  <input type="checkbox" id="agreement" required className="mt-1" />
                  <label htmlFor="agreement" className="text-xs text-[#aaa] leading-relaxed">I agree to the Terms and Conditions and Privacy Policy of VLCC.</label>
                </div>
                
                <MagneticButton className="w-full mt-2.5">
                  <button type="submit" className="btn-primary w-full">
                    Enquire Now
                  </button>
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

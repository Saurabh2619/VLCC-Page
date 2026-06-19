'use client';

import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import EnquiryForm from './EnquiryForm';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] md:min-h-screen flex items-center bg-[url('https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496054/WhatsApp_Image_2026-06-02_at_22.24.20_bvf5cd.jpg')] bg-cover bg-[center_15%] pt-[110px] pb-[70px] md:pt-[160px] md:pb-[100px] overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-[#141414]/60 z-[1]"></div>
      <div className="max-w-[1200px] mx-auto px-5 w-full z-[2] relative">
        <div className="flex justify-between items-center flex-wrap gap-6 md:gap-10 md:text-left text-center flex-col md:flex-row">
          <div className="flex-1 min-w-[300px] animate-slide-up w-full mt-4 md:mt-0">
            <span className="inline-block bg-vlcc-orange/20 text-vlcc-orange px-4 py-1.5 md:px-[15px] md:py-[5px] rounded-full font-semibold text-xs md:text-sm mb-4 md:mb-5 border border-vlcc-orange tracking-wide uppercase">Admissions Open</span>
            <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.1] font-heading font-black text-white mb-6 tracking-tight">
              Find Your Perfect <br />
              <span className="text-vlcc-orange italic pr-2 font-serif font-light tracking-normal">Beauty Course</span> <br />
              Today
            </h1>
            
            <p className="text-base md:text-lg text-[#d1d1d1] mb-6 md:mb-[30px] max-w-[500px] mx-auto md:mx-0 font-body">Enroll for the Upcoming Batch</p>
            
            <div className="flex gap-4 md:gap-[30px] justify-center md:justify-start flex-wrap">
              <div className="flex items-center gap-3 md:gap-[15px] group">
                <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white/10 rounded-full flex items-center justify-center text-xl md:text-2xl border border-white/20 shadow-sm transition-colors">📍</div>
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-semibold font-heading mb-0 md:mb-1 transition-colors">On-Campus</h4>
                  <p className="text-[11px] md:text-sm text-[#aaa] font-body transition-colors">Sector 49, Gurugram</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-[15px]">
                <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm p-2 shrink-0 border border-white/20">
                  <img src="/nsdc_logo.png" alt="NSDC Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <h4 className="text-[11px] md:text-sm text-[#aaa] font-body mb-0">Approved by</h4>
                  <p className="text-sm md:text-base font-semibold font-heading">NSDC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none md:flex-[0_1_450px] w-full animate-fade-in mt-2 md:mt-0" id="enquiry-form" style={{ scrollMarginTop: '15vh' }}>
            <div className="glass-panel p-6 md:p-[40px] bg-[#141414]/40 rounded-2xl">
              <h3 className="text-[28px] md:text-[32px] leading-tight font-heading font-bold text-left mb-6">
                <span className="text-vlcc-orange block">Book a Free</span>
                <span className="text-[#e0e0e0] block">Demo Class Now!</span>
              </h3>
              
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

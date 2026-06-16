'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLandingContext } from '@/app/context/LandingContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isLockedMode } = useLandingContext();

  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 font-body relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-vlcc-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <img src="/vlcc-logo.png" alt="VLCC Logo" className="h-[45px] object-contain mb-6 brightness-0 invert opacity-90" />
            <p className="text-[#999] text-sm leading-relaxed mb-6">Empowering aspiring beauty professionals with world-class education, practical training, and 100% placement assistance in the wellness industry.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-[2px] after:bg-vlcc-orange">Quick Links</h4>
            <ul>
              <li className="mb-3"><Link href={isLockedMode ? '#hero' : '/#hero'} className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Home</Link></li>
              <li className="mb-3"><Link href={isLockedMode ? '#about' : '/#about'} className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">About Us</Link></li>
              <li className="mb-3"><Link href={isLockedMode ? '#apply' : '/#apply'} className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">How to Apply</Link></li>
              <li className="mb-3"><Link href={isLockedMode ? '#contact' : '/#contact'} className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px] w-full md:w-auto">
            <h4 className="text-white text-lg mb-5 font-heading font-semibold">Location</h4>
            <p className="text-[#999] text-sm leading-[1.8] font-body mb-2">Third Floor, Sapphire Mall, Block S, Uppal Southend, Opposite Orchid Petal,</p>
            <p className="text-[#999] text-sm leading-[1.8] font-body">Sector 49, Gurugram, haryana - 122018</p>
          </div>

          <div className="flex-1 min-w-[200px] w-full md:w-auto">
            <h4 className="text-white text-lg mb-5 font-heading font-semibold">Connect With Us</h4>
            <div className="flex gap-[15px]">
              <a href="https://www.facebook.com/share/1CzsfUbPqV/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#1877F2] hover:-translate-y-[3px]" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/vlcc_schoolof_beautyggn49?igsh=a3RqNDUyZDV2eWQy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#bc1888] hover:-translate-y-[3px]" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#0077b5] hover:-translate-y-[3px]" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=917428238777&text=" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#25D366] hover:-translate-y-[3px]" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="22" width="22"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-[#666] text-[13px] font-body">&copy; {new Date().getFullYear()} VLCC School of Beauty. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

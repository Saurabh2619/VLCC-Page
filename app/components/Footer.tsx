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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <img src="/vlcc-logo.png" alt="VLCC Logo" className="h-[55px] object-contain mb-6 bg-white p-2 rounded-lg shadow-sm" />
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
              <li className="mb-3"><Link href="#" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Courses */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-[2px] after:bg-vlcc-orange">Our Courses</h4>
            <ul>
              <li className="mb-3"><Link href="/best-makeup-academy-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Makeup Artistry</Link></li>
              <li className="mb-3"><Link href="/best-hair-course-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Hair Dressing</Link></li>
              <li className="mb-3"><Link href="/skin-care-course-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Skin Care</Link></li>
              <li className="mb-3"><Link href="/best-nail-extension-course-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Nail Artistry</Link></li>
              <li className="mb-3"><Link href="/best-aesthetic-laser-treatment-course-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Aesthetic Laser</Link></li>
              <li className="mb-3"><Link href="/best-nutrition-course-in-gurgaon" className="text-[#999] text-sm transition-colors duration-300 hover:text-vlcc-orange font-body">Nutrition</Link></li>
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
                <svg viewBox="0 0 24 24" fill="currentColor" height="22" width="22">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
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

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLandingContext } from '@/app/context/LandingContext';
import { courses } from '../data/courses';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { isLockedMode } = useLandingContext();
  
  const isHomePage = pathname === '/';
  const isCoursePage = pathname.includes('best-') || pathname.includes('courses');

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background changes early
      setIsScrolled(window.scrollY > 50);
      
      // Top bar hides only after scrolling past the Hero section
      const heroSection = document.getElementById('hero') || document.getElementById('contact');
      if (heroSection) {
        // Hide top bar if scrolled past the hero section's height (minus some offset)
        setIsTopBarHidden(window.scrollY > heroSection.offsetHeight - 50);
      } else {
        setIsTopBarHidden(window.scrollY > window.innerHeight * 0.7);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const textColor = (isScrolled || isMobileMenuOpen || !isHomePage) ? 'text-[#333]' : 'text-white drop-shadow-md';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out flex flex-col ${isScrolled || isMobileMenuOpen || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      
      {/* Eyebrow Top Bar */}
      <div className={`hidden md:flex w-full bg-[#111] text-[#ccc] transition-all duration-500 ease-in-out overflow-hidden items-center ${isTopBarHidden || isMobileMenuOpen ? 'h-0 opacity-0' : 'h-[36px] opacity-100'}`}>
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 flex justify-between items-center text-[12px] font-body tracking-wide">
          <div className="flex gap-4">
            <a href="tel:+917428238777" className="hover:text-vlcc-orange text-white transition-colors flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 74282 38777
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-white">Follow Us:</span>
            <div className="flex gap-3 text-white">
              <a href="https://www.facebook.com/share/1CzsfUbPqV/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="https://www.instagram.com/vlcc_schoolof_beautyggn49?igsh=a3RqNDUyZDV2eWQy" target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1888] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="https://api.whatsapp.com/send?phone=917428238777&text=" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-[1200px] w-full mx-auto px-6 md:px-10 transition-all duration-400 flex justify-between items-center ${isScrolled || isMobileMenuOpen || !isHomePage ? 'h-[70px]' : 'h-[80px]'}`}>
        {isLockedMode ? (
          <div className="transition-transform duration-300 cursor-default">
            <Image src="/vlcc-logo.png" alt="VLCC Logo" width={140} height={50} priority className="h-auto max-h-[50px] w-auto" />
          </div>
        ) : (
          <Link href="/" className="transition-transform duration-300 hover:scale-105" onClick={closeMenu}>
            <Image src="/vlcc-logo.png" alt="VLCC Logo" width={140} height={50} priority className="h-auto max-h-[50px] w-auto" />
          </Link>
        )}
        
        {!isLockedMode && (
          <div className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-[60]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[9px] rotate-45 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
            <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
            <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[9px] -rotate-45 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
          </div>
        )}

        {!isLockedMode && (
          <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={closeMenu}
          ></div>
        )}

        {!isLockedMode && (
          <ul className={`flex flex-col md:flex-row md:items-center gap-0 md:gap-5 lg:gap-[30px] fixed md:relative top-0 right-0 w-[80%] max-w-[340px] md:w-auto h-[100dvh] md:h-auto bg-white md:bg-transparent pt-[80px] md:pt-0 md:mr-10 lg:mr-16 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[-30px_0_60px_rgba(0,0,0,0.15)] md:shadow-none z-[50] overflow-y-auto md:overflow-visible ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%] md:translate-x-0'}`}>
            <li className="w-full border-b border-gray-100 md:border-none md:w-auto"><Link href={isLockedMode || isHomePage || isCoursePage ? '#about' : '/#about'} onClick={closeMenu} className={`block px-8 py-5 md:p-0 font-heading font-semibold text-[19px] md:font-medium md:text-sm lg:text-base relative whitespace-nowrap transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:bottom-[-5px] md:after:left-0 md:after:bg-vlcc-orange md:after:transition-all md:after:duration-300 md:hover:after:w-full ${textColor} hover:text-vlcc-orange md:hover:text-inherit`}>About Us</Link></li>
            
            <li 
              className="w-full border-b border-gray-100 md:border-none md:w-auto relative"
              onMouseEnter={() => window.innerWidth >= 768 && setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth >= 768 && setIsCoursesDropdownOpen(false)}
            >
              <button 
                onClick={() => window.innerWidth < 768 && setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className={`block px-8 py-5 md:p-0 font-heading font-semibold text-[19px] md:font-medium md:text-sm lg:text-base flex justify-between md:justify-start items-center gap-1 w-full md:w-auto relative whitespace-nowrap transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:bottom-[-5px] md:after:left-0 md:after:bg-vlcc-orange md:after:transition-all md:after:duration-300 md:hover:after:w-full ${textColor} hover:text-vlcc-orange md:hover:text-inherit`}
              >
                Our Courses
                <svg className={`w-5 h-5 md:w-4 md:h-4 text-gray-400 md:text-inherit transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <div 
                className={`md:absolute md:top-full md:left-0 w-full md:w-[250px] bg-[#f8f9fa] md:bg-white md:rounded-xl md:shadow-[0_10px_40px_rgba(0,0,0,0.1)] md:border md:border-gray-100 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                  isCoursesDropdownOpen 
                    ? 'opacity-100 visible translate-y-0 max-h-[500px] md:mt-2' 
                    : 'opacity-0 invisible max-h-0 md:max-h-[500px] md:-translate-y-4'
                }`}
              >
                <div className="py-2">
                  <ul className="flex flex-col">
                    {courses.map((course) => (
                      <li key={course.id}>
                        <Link 
                          href={`/${course.id}`} 
                          onClick={closeMenu}
                          className="block px-10 md:px-6 py-3.5 md:py-2.5 text-[15px] md:text-sm font-body text-gray-600 hover:bg-orange-50 hover:text-vlcc-orange transition-colors border-l-2 border-transparent hover:border-vlcc-orange"
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li className="w-full border-b border-gray-100 md:border-none md:w-auto"><Link href={isLockedMode || isHomePage || isCoursePage ? '#apply' : '/#apply'} onClick={closeMenu} className={`block px-8 py-5 md:p-0 font-heading font-semibold text-[19px] md:font-medium md:text-sm lg:text-base relative whitespace-nowrap transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:bottom-[-5px] md:after:left-0 md:after:bg-vlcc-orange md:after:transition-all md:after:duration-300 md:hover:after:w-full ${textColor} hover:text-vlcc-orange md:hover:text-inherit`}>How to Apply</Link></li>
            <li className="w-full border-b border-gray-100 md:border-none md:w-auto"><Link href="#" onClick={closeMenu} className={`block px-8 py-5 md:p-0 font-heading font-semibold text-[19px] md:font-medium md:text-sm lg:text-base relative whitespace-nowrap transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:bottom-[-5px] md:after:left-0 md:after:bg-vlcc-orange md:after:transition-all md:after:duration-300 md:hover:after:w-full ${textColor} hover:text-vlcc-orange md:hover:text-inherit`}>Blogs</Link></li>
            <li className="w-full border-b border-gray-100 md:border-none md:w-auto"><Link href={isLockedMode || isHomePage || isCoursePage ? '#contact' : '/#contact'} onClick={closeMenu} className={`block px-8 py-5 md:p-0 font-heading font-semibold text-[19px] md:font-medium md:text-sm lg:text-base relative whitespace-nowrap transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:w-0 md:after:h-[2px] md:after:bottom-[-5px] md:after:left-0 md:after:bg-vlcc-orange md:after:transition-all md:after:duration-300 md:hover:after:w-full ${textColor} hover:text-vlcc-orange md:hover:text-inherit`}>Contact Us</Link></li>
            
            {/* Mobile Social Icons */}
            <li className="md:hidden mt-6 pt-10 pb-8 px-8 w-full bg-[#f8f9fa] border-t border-gray-100 flex flex-col items-start gap-5">
              <p className="text-[#888] text-[13px] font-heading font-semibold tracking-widest uppercase">Connect with us</p>
              <div className="flex gap-6 text-[#444]">
                <a href="https://www.facebook.com/share/1CzsfUbPqV/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="https://www.instagram.com/vlcc_schoolof_beautyggn49?igsh=a3RqNDUyZDV2eWQy" target="_blank" rel="noopener noreferrer" className="hover:text-[#bc1888] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://api.whatsapp.com/send?phone=917428238777&text=" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

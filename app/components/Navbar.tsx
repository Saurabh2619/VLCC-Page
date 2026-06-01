'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${isScrolled ? 'bg-white shadow-md h-[70px]' : 'bg-transparent h-[80px]'}`}>
      <div className="max-w-[1200px] mx-auto px-5 h-full flex justify-between items-center">
        <a href="#hero" className="transition-transform duration-300 hover:scale-105" onClick={closeMenu}>
          <Image src="/vlcc-logo.png" alt="VLCC Logo" width={140} height={50} priority className="h-auto max-h-[50px] w-auto" />
        </a>
        
        <div className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-[60]" onClick={toggleMenu}>
          <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[9px] rotate-45 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
          <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
          <div className={`h-[3px] w-full rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[9px] -rotate-45 bg-[#333]' : 'bg-vlcc-orange'}`}></div>
        </div>

        {/* Mobile Menu Backdrop Overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={closeMenu}
        ></div>

        {/* Navigation Links (Sidebar on Mobile) */}
        <ul className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-[30px] fixed md:relative top-0 right-0 w-[75%] max-w-[300px] md:w-auto h-[100dvh] md:h-auto bg-white/95 backdrop-blur-xl md:bg-transparent pt-[100px] px-10 md:pt-0 md:px-0 transition-transform duration-400 ease-out shadow-2xl md:shadow-none z-[50] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%] md:translate-x-0'}`}>
          <li><a href="#about" onClick={closeMenu} className={`font-heading font-semibold text-2xl md:font-medium md:text-base relative whitespace-nowrap transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>About Us</a></li>
          <li><a href="#apply" onClick={closeMenu} className={`font-heading font-semibold text-2xl md:font-medium md:text-base relative whitespace-nowrap transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>How to Apply</a></li>
          <li><a href="#contact" onClick={closeMenu} className={`font-heading font-semibold text-2xl md:font-medium md:text-base relative whitespace-nowrap transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

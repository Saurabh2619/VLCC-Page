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
        
        <div className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-[1001]" onClick={toggleMenu}>
          <div className={`h-[3px] w-full bg-vlcc-orange rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`}></div>
          <div className={`h-[3px] w-full bg-vlcc-orange rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-[3px] w-full bg-vlcc-orange rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}></div>
        </div>

        <ul className={`flex flex-col md:flex-row md:items-center gap-5 md:gap-[30px] fixed md:relative top-0 md:right-0 w-[70%] md:w-auto h-screen md:h-auto bg-white md:bg-transparent justify-center md:justify-end transition-all duration-400 ease-in-out shadow-[-5px_0_15px_rgba(0,0,0,0.1)] md:shadow-none z-50 ${isMobileMenuOpen ? 'right-0' : 'right-[-100%]'}`}>
          <li className="md:my-0 my-5"><a href="#about" onClick={closeMenu} className={`font-heading font-medium text-xl md:text-base relative transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>About Us</a></li>
          <li className="md:my-0 my-5"><a href="#apply" onClick={closeMenu} className={`font-heading font-medium text-xl md:text-base relative transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>How to Apply</a></li>
          <li className="md:my-0 my-5"><a href="#contact" onClick={closeMenu} className={`font-heading font-medium text-xl md:text-base relative transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-vlcc-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled || isMobileMenuOpen ? 'text-[#333]' : 'text-white drop-shadow-md'}`}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

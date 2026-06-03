'use client';
import { useState } from 'react';

export default function FloatingSocials() {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vlcc_schoolof_beautyggn49?igsh=a3RqNDUyZDV2eWQy',
      color: 'from-[#f09433] via-[#dc2743] to-[#bc1888]', // Instagram gradient
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61558740757328',
      color: 'from-[#1877F2] to-[#1877F2]', // Facebook blue
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      color: 'from-[#0077b5] to-[#0077b5]', // LinkedIn blue
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=917428238777&text=',
      color: 'from-[#25D366] to-[#128C7E]', // WhatsApp green
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      )
    }
  ];

  return (
    <div className="fixed right-0 bottom-[15%] md:bottom-[10%] z-[100] flex flex-col gap-1">
      {socials.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-gradient-to-tr ${social.color} rounded-l-xl shadow-lg transition-transform duration-300 hover:-translate-x-2 cursor-pointer border-y border-l border-white/20`}
        >
          <div className="text-white">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}

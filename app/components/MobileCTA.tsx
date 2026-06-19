'use client';
import { useLandingContext } from '../context/LandingContext';

export default function MobileCTA() {
  const { isLockedMode } = useLandingContext();
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.15)] bg-vlcc-orange pt-2 pb-2 px-2">
      <a 
        href="tel:+917428238777" 
        className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white font-heading font-medium text-[13px] active:opacity-70 transition-opacity"
      >
        <div className="w-11 h-11 bg-white rounded-[14px] flex items-center justify-center text-vlcc-orange shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        Call
      </a>
      
      {!isLockedMode && (
        <a 
          href="https://maps.app.goo.gl/jyLfZgQWZxhPdjLc7" 
          target="_blank" rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white font-heading font-medium text-[13px] active:opacity-70 transition-opacity"
        >
          <div className="w-11 h-11 bg-white rounded-[14px] flex items-center justify-center text-vlcc-orange shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
          </div>
          Direction
        </a>
      )}
      
      <a 
        href="#enquiry-form" 
        className="flex-1 flex flex-col items-center justify-center gap-1.5 text-white font-heading font-medium text-[13px] active:opacity-70 transition-opacity"
      >
        <div className="w-11 h-11 bg-white rounded-[14px] flex items-center justify-center text-vlcc-orange shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10.5 17.5L9 18l.5-1.5L14 12l1.5 1.5L10.5 17.5z"/></svg>
        </div>
        Enquiry
      </a>
    </div>
  );
}

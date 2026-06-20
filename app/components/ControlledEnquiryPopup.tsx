'use client';
import EnquiryForm from './EnquiryForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ControlledEnquiryPopup({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 md:p-5 animate-fade-in overflow-y-auto">
      <div className="bg-[#141414] rounded-2xl w-full max-w-[450px] relative animate-slide-up border border-white/10 shadow-2xl p-6 md:p-8 my-auto max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <h3 className="text-[28px] md:text-[32px] leading-tight font-heading font-bold text-center mb-6 mt-2">
          <span className="text-vlcc-orange block">Book a Free</span>
          <span className="text-[#e0e0e0] block">Demo Class Now!</span>
        </h3>
        
        <EnquiryForm />
      </div>
    </div>
  );
}

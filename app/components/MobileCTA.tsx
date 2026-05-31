export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-5px_20px_rgba(0,0,0,0.15)] bg-white">
      <a 
        href="tel:+919560554693" 
        className="flex-1 py-4 flex items-center justify-center gap-2 bg-white text-vlcc-orange font-heading font-bold text-[15px] active:bg-gray-50 transition-colors"
      >
        <span className="text-xl">📞</span> Call Now
      </a>
      <a 
        href="#hero" 
        className="flex-1 py-4 flex items-center justify-center gap-2 bg-vlcc-orange text-white font-heading font-bold text-[15px] active:bg-orange-600 transition-colors"
      >
        <span className="text-xl">✉️</span> Enquire
      </a>
    </div>
  );
}

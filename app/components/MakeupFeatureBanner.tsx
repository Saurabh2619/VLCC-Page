import Image from 'next/image';

export default function MakeupFeatureBanner({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Soft Pink Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white/50"></div>
        
        {/* Elegant Swooshes */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-pink-100/40 rounded-[100%] blur-3xl transform rotate-12"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-[#FFB6C1]/20 rounded-[100%] blur-3xl transform -rotate-12"></div>
        
        {/* Sparkles / Stars (SVG) */}
        <svg className="absolute top-10 left-[10%] w-6 h-6 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
        </svg>
        <svg className="absolute bottom-20 left-[45%] w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
        </svg>
        <svg className="absolute top-1/4 right-[40%] w-5 h-5 text-[#FFB6C1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col justify-center relative items-center lg:items-start text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#1a1a1a] leading-[1.1] mb-2 tracking-tight">
              Specialized
              <br />
              <span className="font-brush text-5xl md:text-6xl lg:text-7xl text-[#d8587d] font-normal tracking-wide block mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Makeup Modules
              </span>
            </h2>
            
            <div className="flex items-center gap-3 my-6">
              <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
              </svg>
              <h3 className="text-[#d8587d] text-lg md:text-xl font-body italic font-medium">Everything You Need to Become a Makeup Artist</h3>
              <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" />
              </svg>
            </div>

            <p className="text-gray-600 text-base md:text-lg font-body leading-relaxed max-w-[450px] mb-10">
              From bridal and HD makeup to airbrush techniques, get hands-on training from industry experts.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-pink-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#d8587d]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 font-heading">Expert Training</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-pink-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#d8587d]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 font-heading">Hands-on Practice</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-pink-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#d8587d]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 font-heading">Industry Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-pink-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#d8587d]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 font-heading">Certification Provided</span>
              </div>
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <img 
                src={imageSrc} 
                alt="Makeup Palette and Products" 
                className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

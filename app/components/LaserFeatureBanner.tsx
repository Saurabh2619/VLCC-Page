'use client';

export default function LaserFeatureBanner({ 
  imageSrc = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop" 
}: { 
  imageSrc?: string 
}) {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Laser-like glowing background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-vlcc-orange/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col justify-center text-center lg:text-left h-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-vlcc-orange animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Advanced Aesthetics</span>
            </div>
            
            <h2 className="text-3xl md:text-[2.75rem] font-heading font-bold text-white mb-10 leading-[1.15]">
              Elevate Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-vlcc-orange to-amber-300">Advanced Laser Technology</span>
            </h2>
            
            {/* Replaced stats/numbers with key highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-10">
              
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-vlcc-orange/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-vlcc-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[15px] font-bold text-white">FDA Approved Tech</p>
                  <p className="text-xs text-gray-400 mt-0.5">Learn on global standard machines</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[15px] font-bold text-white">Live Model Practice</p>
                  <p className="text-xs text-gray-400 mt-0.5">100% practical hands-on training</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 group hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[15px] font-bold text-white">Doctor Led Classes</p>
                  <p className="text-xs text-gray-400 mt-0.5">Guidance from industry experts</p>
                </div>
              </div>

            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-vlcc-orange to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={imageSrc} 
                alt="Laser Aesthetics Training" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

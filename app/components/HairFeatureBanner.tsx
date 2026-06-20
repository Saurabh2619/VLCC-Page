import React from 'react';

interface HairFeatureBannerProps {
  imageSrc: string;
}

export default function HairFeatureBanner({ imageSrc }: HairFeatureBannerProps) {
  const features = [
    { text: "Industry Expert Trainers", icon: "👑" },
    { text: "Practical Hands-on Training", icon: "✂️" },
    { text: "Professional Certification", icon: "📜" },
    { text: "Latest Styling Techniques", icon: "✨" }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#2b1612] to-[#140a08] relative overflow-hidden">
      {/* Decorative copper glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] rounded-full bg-[#d97743]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] rounded-full bg-[#a84420]/10 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Image - Different Layout from the other 3 pages! */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d97743] to-[#a84420] translate-x-4 translate-y-4 rounded-tl-[4rem] rounded-br-[4rem] opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src={imageSrc} 
              alt="Hair Styling Training" 
              className="relative w-full h-[400px] md:h-[500px] object-cover rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl z-10 border border-[#d97743]/20"
            />
            {/* Elegant Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a0d0a] border border-[#d97743]/30 p-5 rounded-xl shadow-2xl z-20 hidden md:flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d97743] to-[#a84420] rounded-full flex items-center justify-center text-white text-xl">
                ✂️
              </div>
              <div>
                <p className="font-bold text-white leading-tight font-heading">Mastery</p>
                <p className="text-sm text-[#d97743]">In Hair Art</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#d97743] font-bold uppercase tracking-[3px] text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#d97743]"></span> Professional Growth
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-bold text-white leading-[1.15] mb-10 tracking-tight">
              Transforming Passion <br className="hidden md:block" /> into a Professional Career
            </h2>
            
            {/* Features - Dark Copper Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-3 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#d97743]/50 hover:shadow-[0_0_20px_rgba(217,119,67,0.15)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d97743]/10 border border-[#d97743]/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#d97743]/20 transition-all duration-300">
                    <span className="text-xl drop-shadow-md">{feature.icon}</span>
                  </div>
                  <span className="text-white font-heading font-medium tracking-wide text-[15px] md:text-base leading-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

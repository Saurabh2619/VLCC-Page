import React from 'react';

interface SkinFeatureBannerProps {
  imageSrc: string;
}

export default function SkinFeatureBanner({ imageSrc }: SkinFeatureBannerProps) {
  const skinFeatures = [
    { text: "Advanced Clinical Expertise", sticker: "🌿" },
    { text: "Modern Laser Tech Practice", sticker: "✨" },
    { text: "Professional Skin Certification", sticker: "🏅" },
    { text: "Expert Career Guidance", sticker: "💎" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] relative overflow-hidden">
      {/* Decorative stickers/sparkles in background */}
      <div className="absolute top-10 left-10 text-emerald-300 text-3xl opacity-60 rotate-12">✦</div>
      <div className="absolute bottom-20 right-[55%] text-emerald-300 text-4xl opacity-50 -rotate-12">✧</div>
      <div className="absolute top-1/2 left-[45%] text-emerald-400 text-2xl opacity-40">✦</div>
      
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-emerald-700 font-bold uppercase tracking-[2px] text-sm mb-4 block">
              Skin & Aesthetics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#1a1a1a] leading-tight tracking-tight">
              Transforming Passion into a
              <span className="font-brush text-5xl md:text-6xl lg:text-7xl text-emerald-600 font-normal tracking-wide block mt-1 md:mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Professional Career
              </span>
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg font-body leading-relaxed max-w-[450px] mb-10 mt-6">
              Master advanced dermal therapies, laser treatments, and professional aesthetics with hands-on clinical practice.
            </p>
            
            {/* New Pattern: Stickers and text instead of boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {skinFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="text-2xl md:text-3xl drop-shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {feature.sticker}
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-800 font-heading">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-2 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-sm shadow-[0_20px_50px_rgb(0,0,0,0.05)]">
              <img 
                src={imageSrc} 
                alt="Skin Aesthetics Training" 
                className="w-full h-[350px] md:h-[450px] object-cover rounded-[1.5rem]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

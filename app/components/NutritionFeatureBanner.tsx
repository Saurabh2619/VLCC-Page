import React from 'react';

interface NutritionFeatureBannerProps {
  imageSrc: string;
}

export default function NutritionFeatureBanner({ imageSrc }: NutritionFeatureBannerProps) {
  const nutritionFeatures = [
    { text: "Advanced Clinical Nutrition", sticker: "🩺" },
    { text: "Holistic Wellness Coaching", sticker: "🧘‍♀️" },
    { text: "Professional Diet Certification", sticker: "🎓" },
    { text: "Expert Career Placement", sticker: "💼" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff1eb] to-[#ffecd2] relative overflow-hidden">
      {/* Decorative stickers/sparkles in background */}
      <div className="absolute top-10 left-10 text-orange-300 text-3xl opacity-60 rotate-12">✦</div>
      <div className="absolute bottom-20 right-[55%] text-orange-300 text-4xl opacity-50 -rotate-12">✧</div>
      <div className="absolute top-1/2 left-[45%] text-orange-400 text-2xl opacity-40">✦</div>
      
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
          
          {/* Right Content (Now on right side for layout variation) */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#e65c00] font-bold uppercase tracking-[2px] text-sm mb-4 block">
              Nutrition & Dietetics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#1a1a1a] leading-tight tracking-tight">
              Transform Your Passion into a
              <span className="font-brush text-5xl md:text-6xl lg:text-7xl text-[#e65c00] font-normal tracking-wide block mt-1 md:mt-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Successful Career
              </span>
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg font-body leading-relaxed max-w-[450px] mb-10 mt-6">
              Master clinical nutrition, sports dietetics, and holistic wellness coaching with practical, case-study based learning.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {nutritionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="text-2xl md:text-3xl drop-shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    {feature.sticker}
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-800 font-heading">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Left Image (Now on left side) */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-2 rounded-[2rem] bg-white/50 border border-white/70 backdrop-blur-sm shadow-[0_20px_50px_rgb(230,92,0,0.1)]">
              <img 
                src={imageSrc} 
                alt="Nutrition and Wellness Training" 
                className="w-full h-auto aspect-[4/3] object-cover rounded-[1.5rem] shadow-inner"
                loading="lazy"
              />
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  🥗
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Expert Trainers</div>
                  <div className="font-bold text-gray-900">100% Guidance</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

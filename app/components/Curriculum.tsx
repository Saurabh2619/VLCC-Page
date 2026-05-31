'use client';
import { useState } from 'react';

export default function Curriculum() {
  const modules = [
    {
      id: '01',
      title: 'Fundamentals of Makeup',
      content: 'Learn about skin types, skin care routines, color theory, product knowledge, and hygiene practices essential for professional makeup artistry.'
    },
    {
      id: '02',
      title: 'Base Makeup & Contouring',
      content: 'Master the art of flawless foundation application, concealing, highlighting, and advanced contouring techniques for different face shapes.'
    },
    {
      id: '03',
      title: 'Eye Makeup Techniques',
      content: 'Explore various eye looks including classic smokey eyes, cut crease, halo eyes, winged eyeliner, and false lash application.'
    },
    {
      id: '04',
      title: 'Bridal Makeup (Advanced)',
      content: 'Specialized training in creating stunning bridal looks for different cultures, handling heavy jewelry, and ensuring long-lasting makeup.'
    },
    {
      id: '05',
      title: 'Airbrush & HD Makeup',
      content: 'Hands-on practice with airbrush machines and HD products to create seamless, camera-ready finishes for fashion and film.'
    },
    {
      id: '06',
      title: 'Hair Styling Basics',
      content: 'Introduction to hair tools, blow-drying techniques, basic braids, and classic updos to complement makeup looks.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="curriculum" className="py-[100px] md:py-[70px] bg-white/60 backdrop-blur-xl relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[60px]">
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">What You Will Learn</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Course Curriculum</h2>
          <p className="text-[#666] text-base max-w-[600px] mx-auto font-body">Our comprehensive curriculum is designed by industry experts to take you from a beginner to a professional makeup artist.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">
          
          {/* Left Side: Interactive Module List */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4 relative z-10">
            {/* Vertical Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute left-[31px] top-8 bottom-8 w-1 bg-gray-200 rounded-full -z-10"></div>
            
            {modules.map((mod, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center text-left gap-5 p-4 rounded-xl transition-all duration-300 focus:outline-none ${isActive ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] scale-[1.02]' : 'hover:bg-white/50'}`}
                >
                  <div className={`w-[60px] h-[60px] shrink-0 rounded-full flex items-center justify-center font-heading font-bold text-xl transition-all duration-300 ${isActive ? 'bg-vlcc-orange text-white shadow-[0_0_20px_rgba(242,101,34,0.4)] ring-4 ring-vlcc-orange/20' : 'bg-white text-gray-400 border border-gray-200 group-hover:border-vlcc-orange group-hover:text-vlcc-orange'}`}>
                    {mod.id}
                  </div>
                  <div>
                    <h3 className={`font-heading font-bold transition-colors duration-300 ${isActive ? 'text-[1.15rem] text-vlcc-orange' : 'text-lg text-gray-600 group-hover:text-gray-900'}`}>
                      {mod.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Content Display */}
          <div className="w-full lg:w-7/12 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-vlcc-orange/20 to-transparent rounded-[30px] blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            <div 
              key={activeIndex} 
              className="bg-white p-10 md:p-14 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden animate-slide-up"
            >
              {/* Decorative Background Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-vlcc-orange/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vlcc-orange/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1.5 px-4 rounded-full bg-vlcc-orange/10 text-vlcc-orange font-semibold tracking-wider text-sm mb-6 uppercase">
                  Module {(modules[activeIndex] || modules[0]).id}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1a1a1a] leading-tight">
                  {(modules[activeIndex] || modules[0]).title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-body">
                  {(modules[activeIndex] || modules[0]).content}
                </p>
                
                <div className="mt-10 flex gap-4 items-center">
                  <div className="w-12 h-1 bg-vlcc-orange rounded-full"></div>
                  <div className="w-4 h-1 bg-vlcc-orange/50 rounded-full"></div>
                  <div className="w-2 h-1 bg-vlcc-orange/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

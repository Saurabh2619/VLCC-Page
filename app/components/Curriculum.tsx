'use client';
import { useState, useRef, useEffect } from 'react';

export default function Curriculum() {
  const modules = [
    {
      id: "01",
      title: "Base Makeup & Contouring",
      description: "Master the art of flawless foundation application, concealing, highlighting, and advanced contouring techniques for different face shapes.",
      image: "/images/curr-base.png"
    },
    {
      id: "02",
      title: "Eye Makeup",
      description: "From classic smokey eyes to creative cut-crease and glitter application. Learn color theory and blending techniques.",
      image: "/images/curr-eye.png"
    },
    {
      id: "03",
      title: "Bridal Makeup",
      description: "Specialized training in traditional Indian and contemporary bridal looks, including long-lasting makeup techniques.",
      image: "/images/curr-bridal.png"
    },
    {
      id: "04",
      title: "Airbrush & Fantasy Makeup",
      description: "Advanced skills in high-definition airbrush techniques for film, television, and high-fashion fantasy looks.",
      image: "/images/curr-airbrush.png"
    }
  ];

  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-switch for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => {
        const currentIndex = modules.findIndex(m => m.id === prev);
        const nextIndex = (currentIndex + 1) % modules.length;
        return modules[nextIndex].id;
      });
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [modules]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setMobileActiveIndex((prev) => (prev + 1) % modules.length);
    }
    if (isRightSwipe) {
      setMobileActiveIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = mobileActiveIndex * scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [mobileActiveIndex]);

  return (
    <section id="curriculum" className="py-10 md:py-[70px] bg-white/60 backdrop-blur-xl relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">What You Will Learn</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Course Curriculum</h2>
          <p className="text-[#666] text-base max-w-[600px] mx-auto font-body">Our comprehensive curriculum is designed by industry experts to take you from a beginner to a professional makeup artist.</p>
        </div>

        {/* Mobile View - Horizontal Swiper */}
        <div className="block md:hidden">
          <div 
            className="overflow-hidden relative cursor-grab active:cursor-grabbing w-full min-h-[330px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-out ${
                  index === mobileActiveIndex 
                    ? 'opacity-100 translate-x-0 pointer-events-auto z-10' 
                    : index < mobileActiveIndex
                      ? 'opacity-0 -translate-x-full pointer-events-none z-0'
                      : 'opacity-0 translate-x-full pointer-events-none z-0'
                }`}
              >
                <div className="bg-[#fcfaf8] rounded-2xl p-[30px] shadow-sm border border-[#eaeaea] w-full relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-[0.05] mix-blend-multiply z-0 pointer-events-none"
                    style={{ backgroundImage: `url('${module.image}')` }}
                  />
                  <div className="relative z-10">
                    <span className="inline-block bg-vlcc-orange/10 text-vlcc-orange px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-[20px]">
                      MODULE {module.id}
                    </span>
                    <h3 className="text-2xl text-[#1a1a1a] mb-[15px] font-heading font-bold leading-tight">{module.title}</h3>
                    <p className="text-[#666] text-[15px] leading-relaxed font-body">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === mobileActiveIndex ? 'w-4 bg-vlcc-orange' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Tabs and Box */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px] min-h-[400px]">
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`text-left p-[20px_25px] rounded-xl transition-all duration-300 border-l-4 ${
                  activeModule === module.id
                    ? 'bg-white shadow-md border-vlcc-orange scale-[1.02]'
                    : 'bg-transparent border-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex items-center gap-[20px]">
                  <span className={`font-heading font-bold text-lg ${
                    activeModule === module.id ? 'text-vlcc-orange' : 'text-[#888]'
                  }`}>
                    {module.id}
                  </span>
                  <span className={`font-heading font-semibold text-lg transition-colors ${
                    activeModule === module.id ? 'text-[#1a1a1a]' : 'text-[#555]'
                  }`}>
                    {module.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 relative">
            {modules.map((module) => (
              <div
                key={`content-${module.id}`}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
                  activeModule === module.id
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="bg-[#fcfaf8] rounded-2xl p-[40px] lg:p-[60px] shadow-sm border border-[#eaeaea] h-full flex flex-col justify-center relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-[0.05] mix-blend-multiply z-0 pointer-events-none transition-opacity duration-700"
                    style={{ backgroundImage: `url('${module.image}')` }}
                  />
                  <div className="relative z-10">
                    <span className="inline-block bg-vlcc-orange/10 text-vlcc-orange px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-[30px]">
                      MODULE {module.id}
                    </span>
                    <h3 className="text-3xl lg:text-4xl text-[#1a1a1a] mb-[20px] font-heading font-bold">{module.title}</h3>
                    <p className="text-[#666] text-lg leading-relaxed font-body">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const images = [
    { src: '/images/curr-bridal.png', alt: 'Bridal Makeup' },
    { src: '/images/course-eye.png', alt: 'Eye Makeup' },
    { src: '/images/curr-base.png', alt: 'Airbrush Makeup' },
    { src: '/images/course-hair.png', alt: 'Hair Styling' },
    { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1999&auto=format&fit=crop', alt: 'Editorial Makeup' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50; 

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveIndex((current) => (current + 1) % images.length);
    }
    if (isRightSwipe) {
      setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000); // loop every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-[70px] bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="text-center mb-[50px]">
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Portfolio</span>
          <h2 className="text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Be Beautiful</h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden py-4 cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex -mx-3 px-3">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)`, width: `${(images.length * 100) / 3}%` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group">
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-heading font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index ? 'w-6 bg-vlcc-orange' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS to handle mobile and tablet responsive widths for the carousel logic */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1023px) and (min-width: 768px) {
          .flex[style*="transform"] {
            transform: translateX(calc(-${activeIndex * 50}% - ${activeIndex * 12}px)) !important;
          }
        }
        @media (max-width: 767px) {
          .flex[style*="transform"] {
            transform: translateX(calc(-${activeIndex * 100}% - ${activeIndex * 24}px)) !important;
          }
        }
      `}} />
    </section>
  );
}

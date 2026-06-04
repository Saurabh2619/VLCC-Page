'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface InfiniteSliderProps {
  images: string[];
  visibleDesktop?: number;
  visibleMobile?: number;
  aspectRatio?: string;
  autoPlayInterval?: number;
  imageClassName?: string;
  imageContainerClassName?: string;
  useDots?: boolean;
}

export default function InfiniteSlider({ 
  images, 
  visibleDesktop = 3, 
  visibleMobile = 1, 
  aspectRatio = "aspect-square",
  autoPlayInterval = 3000,
  imageClassName,
  imageContainerClassName,
  useDots = true
}: InfiniteSliderProps) {
  // Duplicate array 3 times to allow seamless infinite scroll without rewind
  const extendedImages = [...images, ...images, ...images];
  
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(visibleDesktop);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle responsive visible count
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? visibleMobile : visibleDesktop);
    };
    handleResize(); // set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleDesktop, visibleMobile]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  const [isDragging, setIsDragging] = useState(false);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval, isDragging]);

  // Handle infinite loop reset after transition
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // If we scrolled past the middle set, silently jump back to the middle
    if (currentIndex >= images.length * 2) {
      setCurrentIndex(currentIndex - images.length);
    } else if (currentIndex <= 0) {
      setCurrentIndex(currentIndex + images.length);
    }
  };

  // Unified drag handlers for touch & mouse
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setIsTransitioning(false); // Stop transition to follow finger immediately
    setTouchStart(clientX);
    setTouchEnd(null);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging && touchStart === null) return;
    setTouchEnd(clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    // Threshold for snapping to next/prev
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    } else {
      // Snap back to current if drag was too short
      setIsTransitioning(true); 
    }
    
    // Reset after swipe calculation
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Touch handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => handleDragStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleDragMove(e.targetTouches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  // Mouse handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleDragMove(e.clientX);
  };
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => handleDragEnd();

  const slideWidthPercent = 100 / visibleCount;
  
  // Calculate raw pixel offset during dragging for smooth follow
  const dragOffset = isDragging && touchStart !== null && touchEnd !== null ? touchStart - touchEnd : 0;

  return (
    <div 
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing py-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="flex"
        style={{
          transform: `translateX(calc(-${currentIndex * slideWidthPercent}% - ${dragOffset}px))`,
          transition: isTransitioning && !isDragging ? 'transform 0.5s ease-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((src, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 px-1 md:px-2"
            style={{ width: `${slideWidthPercent}%` }}
          >
            <div className={`group ${imageContainerClassName || `relative w-full ${aspectRatio} rounded-xl overflow-hidden`}`}>
              <Image 
                src={src} 
                alt={`Slide ${idx}`} 
                fill 
                className={`transition-transform duration-500 group-hover:scale-105 ${imageClassName || "object-cover object-top"}`}
                draggable={false} // Prevent default image drag to allow custom swipe
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots Navigation */}
      {useDots && (
        <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-8">
          {images.map((_, idx) => {
            const activeDotIdx = currentIndex % images.length;
            const isActive = idx === activeDotIdx;
            return (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  // Calculate shortest path to dot
                  const delta = idx - activeDotIdx;
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(currentIndex + delta);
                  }
                }}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-vlcc-orange scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      )}
      
      {/* Arrow Navigation */}
      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white text-vlcc-orange rounded-full items-center justify-center shadow-lg transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white text-vlcc-orange rounded-full items-center justify-center shadow-lg transition-colors z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

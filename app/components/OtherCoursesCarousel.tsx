'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLandingContext } from '@/app/context/LandingContext';

interface OtherCoursesCarouselProps {
  currentCourseSlug?: string;
}

export default function OtherCoursesCarousel({ currentCourseSlug }: OtherCoursesCarouselProps) {
  const { isLockedMode } = useLandingContext();
  const courses = [
    {
      id: 1,
      slug: "best-makeup-academy-in-gurgaon",
      title: "Makeup Artistry",
      description: "Comprehensive training from basics to advanced airbrush and bridal makeup.",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508533/WhatsApp_Image_2026-06-02_at_22.30.08_uklh0e.jpg"
    },
    {
      id: 2,
      slug: "best-hair-course-in-gurgaon",
      title: "Hair Dressing",
      description: "Master modern haircuts, coloring techniques, and advanced styling.",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508689/WhatsApp_Image_2026-06-02_at_22.37.09_iakueq.jpg"
    },
    {
      id: 3,
      slug: "skin-care-course-in-gurgaon",
      title: "Skin Care",
      description: "In-depth training in skin analysis, facial treatments, and modern aesthetics.",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587793/WhatsApp_Image_2026-06-04_at_12.41.15_sl4olz.jpg"
    },
    {
      id: 4,
      slug: "best-aesthetic-laser-treatment-course-in-gurgaon",
      title: "Aesthetic Laser Treatments",
      description: "Advanced cosmetic procedures and non-invasive aesthetic treatments.",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587755/WhatsApp_Image_2026-06-04_at_12.40.19_yhwssy.jpg"
    },
    {
      id: 5,
      slug: "best-nutrition-course-in-gurgaon",
      title: "Nutrition",
      description: "Learn holistic wellness, meal planning, and clinical nutrition.",
      image: "/images/course-nutrition.png"
    },
    {
      id: 6,
      slug: "best-nail-extension-course-in-gurgaon",
      title: "Nail Extension & Art",
      description: "Master professional nail extensions, gel polish, and creative nail art designs.",
      image: "https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const displayedCourses = currentCourseSlug 
    ? courses.filter(course => {
        if (currentCourseSlug.includes('nail') && course.slug.includes('nail')) return false;
        if (currentCourseSlug.includes('makeup') && course.slug.includes('makeup')) return false;
        if (currentCourseSlug.includes('hair') && course.slug.includes('hair')) return false;
        if (currentCourseSlug.includes('skin-care') && course.slug.includes('skin-care')) return false;
        if (currentCourseSlug.includes('laser') && course.slug.includes('laser')) return false;
        if (currentCourseSlug.includes('nutrition') && course.slug.includes('nutrition')) return false;
        return true;
      })
    : courses;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;
    
    // Calculate position to center the child or just scroll to its offset
    // Since snap-mandatory is on, we just need to scroll near it and the browser snaps
    container.scrollTo({ left: child.offsetLeft - container.offsetLeft - 16, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const scrollNext = () => {
    const nextIndex = (activeIndex + 1) % displayedCourses.length;
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = activeIndex === 0 ? displayedCourses.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Find the center of the container's visible area
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    // Check which child's center is closest to the container's visible center
    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      // Child's center relative to the container's scrollable content
      const childCenter = childElement.offsetLeft - container.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-16 md:py-[70px] bg-[#111] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 relative">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5 font-heading">Explore More</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-white font-heading font-bold">Our Other Courses</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-vlcc-orange text-white rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all duration-300"
            aria-label="Previous Course"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-vlcc-orange text-white rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all duration-300"
            aria-label="Next Course"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-[30px] pb-12 pt-4 px-4 -mx-4 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedCourses.map((course) => {
              const CardWrapper = isLockedMode ? 'div' : Link;
              const cardProps = isLockedMode ? {
                onClick: () => window.dispatchEvent(new Event('openEnquiryPopup')),
                className: "cursor-pointer group relative w-[280px] sm:w-[320px] md:w-[380px] shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eaeaea] border-b-[4px] border-b-transparent hover:border-b-vlcc-orange transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,122,89,0.25)] hover:-translate-y-2 flex flex-col"
              } : {
                href: `/${course.slug}`,
                className: "group relative w-[280px] sm:w-[320px] md:w-[380px] shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eaeaea] border-b-[4px] border-b-transparent hover:border-b-vlcc-orange transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,122,89,0.25)] hover:-translate-y-2 flex flex-col"
              };

              return (
              <CardWrapper key={course.id} {...(cardProps as any)}>
                
                {/* Top Photo Section */}
                <div className="relative h-[220px] md:h-[260px] overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-vlcc-orange/0 group-hover:bg-vlcc-orange/10 mix-blend-overlay transition-colors duration-500 z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Text Section (Pure White) */}
                <div className="p-5 md:p-7 flex-1 flex flex-col relative bg-white overflow-hidden">
                  {/* Ambient Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vlcc-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-[1.4rem] text-[#1a1a1a] group-hover:text-vlcc-orange transition-colors duration-300 font-heading font-bold mb-3 flex justify-between items-center">
                      {course.title}
                      <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-vlcc-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </h3>
                    
                    {/* Elegant Glowing Divider Line */}
                    <div className="w-[40px] h-[3px] bg-vlcc-orange mb-3 transition-all duration-500 group-hover:w-[70px] group-hover:shadow-[0_0_12px_rgba(255,122,89,0.8)] rounded-full"></div>

                    {/* Description */}
                    <p className="text-[#666] text-[14px] leading-relaxed font-body relative z-10">{course.description}</p>
                  </div>
                </div>
              </CardWrapper>
            )})}
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center items-center gap-3 mt-2">
            {displayedCourses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? 'w-8 h-2 bg-vlcc-orange' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

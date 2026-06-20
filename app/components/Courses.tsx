'use client';
import Link from 'next/link';
import MagneticButton from './MagneticButton';
import { useLandingContext } from '@/app/context/LandingContext';

export default function Courses() {
  const allCourses = [
    {
      id: 1,
      slug: "best-makeup-academy-in-gurgaon",
      title: "Makeup Artistry",
      duration: "6 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508533/WhatsApp_Image_2026-06-02_at_22.30.08_uklh0e.jpg",
      description: "Comprehensive training from basics to advanced airbrush and bridal makeup."
    },
    {
      id: 2,
      slug: "best-hair-course-in-gurgaon",
      title: "Hair Dressing",
      duration: "4 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508689/WhatsApp_Image_2026-06-02_at_22.37.09_iakueq.jpg",
      description: "Master modern haircuts, coloring techniques, and advanced styling."
    },
    {
      id: 3,
      slug: "skin-care-course-in-gurgaon",
      title: "Skin Care",
      duration: "3 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587793/WhatsApp_Image_2026-06-04_at_12.41.15_sl4olz.jpg",
      description: "In-depth training in skin analysis, facial treatments, and modern aesthetics."
    },
    {
      id: 4,
      slug: "best-nail-extension-course-in-gurgaon",
      title: "Nail Artistry",
      duration: "2 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508538/WhatsApp_Image_2026-06-02_at_22.40.31_sfaboy.jpg",
      description: "Learn acrylic extensions, gel polish, and intricate 3D nail art designs."
    },
    {
      id: 5,
      slug: "best-aesthetic-laser-treatment-course-in-gurgaon",
      title: "Aesthetic Laser Treatments",
      duration: "5 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587755/WhatsApp_Image_2026-06-04_at_12.40.19_yhwssy.jpg",
      description: "Advanced cosmetic procedures and non-invasive aesthetic treatments."
    },
    {
      id: 6,
      slug: "best-nutrition-course-in-gurgaon",
      title: "Nutrition",
      duration: "3 Months",
      image: "/images/course-nutrition.png",
      description: "Learn holistic wellness, meal planning, and clinical nutrition."
    }
  ];

  const { isLockedMode } = useLandingContext();

  return (
    <section id="courses" className="py-10 md:py-[70px] bg-white/40 backdrop-blur-md relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Courses</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">We Offer</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {allCourses.map((course) => {
            const CardWrapper = isLockedMode ? 'div' : Link;
            const cardProps = isLockedMode ? {
              onClick: () => {
                window.dispatchEvent(new Event('openEnquiryPopup'));
              },
              className: "group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eaeaea] border-b-[4px] border-b-transparent hover:border-b-vlcc-orange transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,122,89,0.25)] hover:-translate-y-2 flex flex-col cursor-pointer"
            } : {
              href: `/${course.slug}`,
              className: "group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eaeaea] border-b-[4px] border-b-transparent hover:border-b-vlcc-orange transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,122,89,0.25)] hover:-translate-y-2 flex flex-col"
            };

            return (
              <CardWrapper key={course.id} {...cardProps as any}>
                
                {/* Top Photo Section */}
                <div className="relative h-[240px] overflow-hidden shrink-0">
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
                    
                    {/* Title (Turns Orange on Hover) */}
                    <h3 className="text-[1.4rem] text-[#1a1a1a] group-hover:text-vlcc-orange transition-colors duration-300 font-heading font-bold mb-3 flex justify-between items-center">
                      {course.title}
                      {!isLockedMode && (
                        <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-vlcc-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      )}
                    </h3>
                    
                    {/* Elegant Glowing Divider Line */}
                    <div className="w-[40px] h-[3px] bg-vlcc-orange mb-3 transition-all duration-500 group-hover:w-[70px] group-hover:shadow-[0_0_12px_rgba(255,122,89,0.8)] rounded-full"></div>

                    {/* Description */}
                    <p className="text-[#666] text-[14px] leading-relaxed font-body mb-1 relative z-10">{course.description}</p>
                    
                  </div>

                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

export default function Courses() {
  const allCourses = [
    {
      id: 1,
      title: "Makeup Artistry",
      duration: "6 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508533/WhatsApp_Image_2026-06-02_at_22.30.08_uklh0e.jpg",
      description: "Comprehensive training from basics to advanced airbrush and bridal makeup."
    },
    {
      id: 2,
      title: "Hair Dressing",
      duration: "4 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508689/WhatsApp_Image_2026-06-02_at_22.37.09_iakueq.jpg",
      description: "Master modern haircuts, coloring techniques, and advanced styling."
    },
    {
      id: 3,
      title: "Esthiology",
      duration: "3 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587793/WhatsApp_Image_2026-06-04_at_12.41.15_sl4olz.jpg",
      description: "In-depth training in skin analysis, facial treatments, and modern aesthetics."
    },
    {
      id: 4,
      title: "Nail Artistry",
      duration: "2 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780508538/WhatsApp_Image_2026-06-02_at_22.40.31_sfaboy.jpg",
      description: "Learn acrylic extensions, gel polish, and intricate 3D nail art designs."
    },
    {
      id: 5,
      title: "Aesthetic Laser Treatments",
      duration: "5 Months",
      image: "https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780587755/WhatsApp_Image_2026-06-04_at_12.40.19_yhwssy.jpg",
      description: "Advanced cosmetic procedures and non-invasive aesthetic treatments."
    },
    {
      id: 6,
      title: "Nutrition",
      duration: "3 Months",
      image: "/images/course-nutrition.png",
      description: "Learn holistic wellness, meal planning, and clinical nutrition."
    }
  ];

  return (
    <section id="courses" className="py-10 md:py-[70px] bg-white/40 backdrop-blur-md relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Courses</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">We Offer</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {allCourses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eaeaea] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <div className="relative h-[240px] overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-[30px] flex-1 flex flex-col relative bg-white overflow-hidden">
                {/* Orange Gradient Sweep on Hover (Text Section) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-vlcc-orange/70 via-vlcc-orange/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                
                <h3 className="text-2xl text-[#1a1a1a] font-heading font-bold mb-3 relative z-10">{course.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed mb-6 font-body flex-1 relative z-10">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

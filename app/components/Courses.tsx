'use client';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

export default function Courses() {
  const allCourses = [
    {
      id: 1,
      title: "Makeup Artistry",
      duration: "6 Months",
      image: "/images/curr-base.png",
      description: "Comprehensive training from basics to advanced airbrush and bridal makeup."
    },
    {
      id: 2,
      title: "Hair Dressing",
      duration: "4 Months",
      image: "/images/course-hair.png",
      description: "Master modern haircuts, coloring techniques, and advanced styling."
    },
    {
      id: 3,
      title: "Esthiology",
      duration: "3 Months",
      image: "/images/course-skin.png",
      description: "In-depth training in skin analysis, facial treatments, and modern aesthetics."
    },
    {
      id: 4,
      title: "Nail Artistry",
      duration: "2 Months",
      image: "/images/course-nails.png",
      description: "Learn acrylic extensions, gel polish, and intricate 3D nail art designs."
    },
    {
      id: 5,
      title: "Aesthetics",
      duration: "5 Months",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
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
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Courses</span>
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
              <div className="p-[30px] flex-1 flex flex-col relative bg-white">
                <h3 className="text-2xl text-[#1a1a1a] font-heading font-bold mb-3">{course.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed mb-6 font-body flex-1">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

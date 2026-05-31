'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Courses() {
  const courses = [
    {
      title: 'Professional Makeup Classes',
      image: '/makeup-class.png',
      desc: 'Master the art of bridal, fashion, and HD makeup with hands-on training from industry experts.',
      link: '#'
    },
    {
      title: 'Advanced Hair Styling Classes',
      image: '/hair-class.png',
      desc: 'Learn everything from classic cuts to complex braided updos and chemical treatments in our premium salons.',
      link: '#'
    },
    {
      title: 'Skincare & Esthetics Classes',
      image: '/skin-class.png',
      desc: 'Become a certified esthetician. Learn facial treatments, dermatology basics, and advanced skin therapies.',
      link: '#'
    }
  ];

  return (
    <section id="courses" className="py-[100px] md:py-[70px] bg-white/40 backdrop-blur-md relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[60px]">
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Our Programs</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Discover Our Classes</h2>
          <p className="text-[#666] text-base max-w-[600px] mx-auto font-body">Choose from our specialized programs designed to build your expertise and launch your career in the beauty industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] group/grid">
          {courses.map((course, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useRef<HTMLDivElement>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }
            };

            return (
              <Link href={course.link} key={index} className="block h-full outline-none">
                <div 
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  className="relative bg-[#f9f9fa] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full group"
                >
                  {/* Spotlight Background overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                    style={{
                      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(242,101,34,0.08), transparent 40%)`
                    }}
                  />
                  
                  <div className="relative w-full h-[250px] overflow-hidden z-0">
                    <Image 
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <h3 className="text-xl font-heading font-semibold text-[#1a1a1a] mb-3 group-hover:text-vlcc-orange transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed font-body flex-1">
                      {course.desc}
                    </p>
                    
                    <div className="mt-6 flex items-center text-vlcc-orange font-heading font-semibold text-sm tracking-wide">
                      EXPLORE COURSE <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

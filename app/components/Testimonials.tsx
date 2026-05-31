'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bridal Makeup Artist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
      quote: 'The hands-on training at VLCC completely transformed my skills. The faculty is incredibly supportive, and I landed my first big bridal gig within a month of graduating!'
    },
    {
      name: 'Aisha Khan',
      role: 'Freelance Stylist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
      quote: 'I loved the comprehensive curriculum. It covers everything from basic hygiene to advanced airbrushing. The certification holds a lot of weight in the industry.'
    },
    {
      name: 'Neha Gupta',
      role: 'Makeup Trainer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
      quote: 'Enrolling in VLCC was the best career decision I ever made. The placement assistance is genuine, and the network you build is invaluable.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-[100px] md:py-[70px] bg-white/50 backdrop-blur-md relative">
      <div className="max-w-[1000px] mx-auto px-5 text-center">
        <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Success Stories</span>
        <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[50px] font-heading font-bold">What Our Students Say</h2>
        
        <div className="relative bg-white/50 backdrop-blur-md rounded-2xl p-10 md:p-14 shadow-lg border border-gray-100 max-w-[800px] mx-auto overflow-hidden">
          <div className="text-5xl text-vlcc-orange/20 absolute top-5 left-10 font-heading">"</div>
          
          <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
            {testimonials.map((test, index) => (
              <div 
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
              >
                <p className="text-[#444] text-lg md:text-xl italic font-body mb-8 leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-vlcc-orange">
                    <Image src={test.image} alt={test.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-[#1a1a1a]">{test.name}</h4>
                    <p className="text-sm text-[#666] font-body">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-vlcc-orange' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

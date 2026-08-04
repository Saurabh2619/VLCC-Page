'use client';
import InfiniteSlider from './InfiniteSlider';

export default function Testimonials() {
  const visualTestimonials = [
    // Placements
    '/testimonials/WhatsApp Image 2026-06-02 at 22.22.42.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.22.27.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.23.06.jpeg',
    // Testimonials
    '/testimonials/WhatsApp Image 2026-06-02 at 22.39.33.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.39.09.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.39.15.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.39.00.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.38.47.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.38.53.jpeg',
    '/testimonials/WhatsApp Image 2026-06-02 at 22.40.12.jpeg'
  ];

  return (
    <section id="testimonials" className="py-10 md:py-[70px] bg-white/50 backdrop-blur-md relative">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Success Stories</span>
        <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[50px] font-heading font-bold">Placements & <span className="text-vlcc-orange">Testimonials</span></h2>
        
        <div className="mx-auto w-full max-w-[1000px]">
          <InfiniteSlider 
            images={visualTestimonials} 
            visibleDesktop={3} 
            visibleMobile={1} 
            aspectRatio="aspect-square" 
            autoPlayInterval={4000} 
          />
        </div>
      </div>
    </section>
  );
}

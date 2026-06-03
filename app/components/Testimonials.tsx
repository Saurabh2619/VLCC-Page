'use client';
import InfiniteSlider from './InfiniteSlider';

export default function Testimonials() {
  const visualTestimonials = [
    // Placements
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496337/WhatsApp_Image_2026-06-02_at_22.22.42_pnpnuc.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496336/WhatsApp_Image_2026-06-02_at_22.22.27_jvo1hk.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496331/WhatsApp_Image_2026-06-02_at_22.23.06_qlucuw.jpg',
    // Testimonials
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496335/WhatsApp_Image_2026-06-02_at_22.39.33_rqhcmt.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496334/WhatsApp_Image_2026-06-02_at_22.39.09_ywonua.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496334/WhatsApp_Image_2026-06-02_at_22.39.15_apukzf.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496333/WhatsApp_Image_2026-06-02_at_22.39.00_ulsjbc.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496332/WhatsApp_Image_2026-06-02_at_22.38.47_c5m1vn.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496333/WhatsApp_Image_2026-06-02_at_22.38.53_xncqtw.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496332/WhatsApp_Image_2026-06-02_at_22.40.12_tpqhub.jpg'
  ];

  return (
    <section id="testimonials" className="py-10 md:py-[70px] bg-white/50 backdrop-blur-md relative">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Success Stories</span>
        <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[50px] font-heading font-bold">Placements & Testimonials</h2>
        
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

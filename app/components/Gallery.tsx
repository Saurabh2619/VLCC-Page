import InfiniteSlider from './InfiniteSlider';

interface GalleryProps {
  images?: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const defaultImages = [
    // Before/Afters
    '/gallery/WhatsApp Image 2026-06-02 at 22.31.08.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.30.58.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.31.04.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.30.52.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.31.13.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.31.55.jpeg',
    // Models
    '/gallery/WhatsApp Image 2026-06-02 at 22.30.40.jpeg',
    '/WhatsApp Image 2026-06-02 at 22.24.20.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.31.49.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.33.19.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.30.18.jpeg',
    '/gallery/WhatsApp Image 2026-06-02 at 22.33.40.jpeg'
  ];

  return (
    <section id="gallery" className="py-10 md:py-[70px] bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="text-center mb-[40px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Transformations</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Student Portfolio</h2>
        </div>

        <div className="max-w-[1200px] mx-auto pb-10">
          <InfiniteSlider 
            images={images || defaultImages} 
            visibleDesktop={4} 
            visibleMobile={1} 
            aspectRatio="aspect-[3/4]" 
            autoPlayInterval={2500} 
          />
        </div>
      </div>
    </section>
  );
}

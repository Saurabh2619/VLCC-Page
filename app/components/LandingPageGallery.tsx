import MixedMediaSlider, { MediaItem } from './MixedMediaSlider';

interface LandingPageGalleryProps {
  media?: MediaItem[];
}

export default function LandingPageGallery({ media }: LandingPageGalleryProps) {
  // Fallback to default makeup images if no media provided
  const defaultMedia: MediaItem[] = [
    { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496582/WhatsApp_Image_2026-06-02_at_22.31.08_zw7ywr.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496581/WhatsApp_Image_2026-06-02_at_22.30.58_wznec6.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496581/WhatsApp_Image_2026-06-02_at_22.31.04_ux7t9r.jpg' },
    { type: 'image', src: 'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496580/WhatsApp_Image_2026-06-02_at_22.30.52_qxsf0s.jpg' }
  ];

  const portfolioMedia = media && media.length > 0 ? media : defaultMedia;

  return (
    <section id="gallery" className="py-10 md:py-[70px] bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="text-center mb-[40px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Transformations</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Student Portfolio</h2>
        </div>

        <div className="max-w-[1200px] mx-auto pb-10">
          <MixedMediaSlider 
            media={portfolioMedia} 
            visibleDesktop={4} 
            visibleMobile={1} 
            aspectRatio="aspect-[3/4]" 
            autoPlayInterval={3000} 
          />
        </div>
      </div>
    </section>
  );
}

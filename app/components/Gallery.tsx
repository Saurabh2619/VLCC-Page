import InfiniteSlider from './InfiniteSlider';

interface GalleryProps {
  images?: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const defaultImages = [
    // Before/Afters
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496582/WhatsApp_Image_2026-06-02_at_22.31.08_zw7ywr.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496581/WhatsApp_Image_2026-06-02_at_22.30.58_wznec6.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496581/WhatsApp_Image_2026-06-02_at_22.31.04_ux7t9r.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496580/WhatsApp_Image_2026-06-02_at_22.30.52_qxsf0s.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496579/WhatsApp_Image_2026-06-02_at_22.31.13_bd5bm4.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496580/WhatsApp_Image_2026-06-02_at_22.31.55_ibmxp1.jpg',
    // Models
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496054/WhatsApp_Image_2026-06-02_at_22.30.40_pbx33y.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496054/WhatsApp_Image_2026-06-02_at_22.24.20_bvf5cd.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496053/WhatsApp_Image_2026-06-02_at_22.31.49_xnnrol.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496054/WhatsApp_Image_2026-06-02_at_22.33.19_ktmsou.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496060/WhatsApp_Image_2026-06-02_at_22.30.18_kikdgr.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496053/WhatsApp_Image_2026-06-02_at_22.33.40_qlmfcs.jpg'
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

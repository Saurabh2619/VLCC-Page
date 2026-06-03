'use client';

import InfiniteSlider from './InfiniteSlider';

export default function Recruiters() {
  const logos = [
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780505927/rich_fgsa2d.png',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780505926/tog_fglrcp.png',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780505926/loreal_pytgd8.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780505926/uc_e3rkxo.png',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780505925/lakme_skztcw.jpg'
  ];

  return (
    <section className="py-10 md:py-[60px] bg-white/40 backdrop-blur-md relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 text-center mb-[40px]">
        <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">
          Our Partners
        </span>
        <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[10px] font-heading font-bold">
          Placement Partners
        </h2>
        <h3 className="text-[1.2rem] md:text-[1.5rem] text-[#666] font-heading font-semibold">
          200+ Organizations And Still Counting
        </h3>
      </div>

      <div className="max-w-[1200px] mx-auto pb-10">
        <InfiniteSlider 
          images={logos} 
          visibleDesktop={5} 
          visibleMobile={2} 
          aspectRatio="aspect-[2/1]" 
          autoPlayInterval={2500} 
          imageContainerClassName="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-[#d4af37] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_5px_15px_rgba(212,175,55,0.2)] transition-shadow duration-300"
          imageClassName="object-contain p-4"
          useDots={true}
        />
      </div>
    </section>
  );
}

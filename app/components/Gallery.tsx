'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1999&auto=format&fit=crop', alt: 'Makeup Artistry 1' },
    { src: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2070&auto=format&fit=crop', alt: 'Makeup Class' },
    { src: 'https://images.unsplash.com/photo-1512496015851-a90890f588c2?q=80&w=2070&auto=format&fit=crop', alt: 'Bridal Makeup' },
    { src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=2069&auto=format&fit=crop', alt: 'Eye Makeup' },
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop', alt: 'Fashion Makeup' },
    { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop', alt: 'Hair Styling' }
  ];

  return (
    <section id="gallery" className="py-[100px] md:py-[70px] bg-[#121212] text-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[60px]">
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Portfolio</span>
          <h2 className="text-[2rem] md:text-[2.5rem] mb-[15px] font-heading font-bold text-white">Student Work & Campus</h2>
          <p className="text-[#bbb] text-base max-w-[600px] mx-auto font-body">Explore the exceptional artistry of our students and the world-class facilities at VLCC.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {images.map((img, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useRef<HTMLDivElement>(null);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [transform, setTransform] = useState('');

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              const rotateX = ((y - centerY) / centerY) * -10;
              const rotateY = ((x - centerX) / centerX) * 10;
              
              setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
            };

            const handleMouseLeave = () => {
              setTransform('rotateX(0) rotateY(0) scale3d(1, 1, 1)');
            };

            return (
              <div 
                key={index} 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-xl group aspect-square"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform,
                  transition: transform === 'rotateX(0) rotateY(0) scale3d(1, 1, 1)' ? 'transform 0.5s ease-out' : 'transform 0.1s linear'
                }}
              >
                {/* Image scales slightly but main transform is on parent */}
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill
                  className="object-cover transition-transform duration-700"
                />
                
                {/* Glare effect */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 25%, transparent 30%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: transform !== 'rotateX(0) rotateY(0) scale3d(1, 1, 1)' ? '0% 0%' : '100% 100%'
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-10">
                  <h4 
                    className="text-white font-heading font-semibold text-xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    {img.alt}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

export default function YoutubeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'k6X-dNuezn4',
      title: 'Flawless Base Makeup Tutorial'
    },
    {
      id: 'jVYXxSWGv24',
      title: 'Bridal Eye Makeup Magic'
    },
    {
      id: 'n1SkC24VmTg',
      title: 'Quick Hairstyling Hacks'
    },
    {
      id: 'Dn9JpqBa9hc',
      title: 'Advanced Contouring Tips'
    }
  ];

  return (
    <section className="py-10 md:py-[80px] bg-[#fcfaf8] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#dc2626"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              <span className="text-red-600 font-semibold uppercase tracking-[1.5px] text-sm">VLCC on YouTube</span>
            </div>
            <h2 className="text-[2rem] md:text-[2.5rem] font-heading font-bold text-[#1a1a1a] text-center md:text-left leading-tight">
              Watch Our Student Transformations
            </h2>
          </div>
          
          <div className="hidden md:block">
            <MagneticButton>
              <a 
                href="https://www.youtube.com/@institute2.gurugram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-[1px] uppercase transition-colors flex items-center gap-2"
              >
                Explore Channel
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Video Grid / Mobile Slider */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative flex-shrink-0 w-[280px] md:w-auto snap-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 bg-black"
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-black flex items-center justify-center">
                {activeVideo === video.id ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0`} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div 
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <img 
                      src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title} 
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[60px] h-[60px] bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <MagneticButton>
            <a 
              href="https://www.youtube.com/@institute2.gurugram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-sm tracking-[1px] uppercase transition-colors shadow-lg shadow-red-600/30 w-full text-center"
            >
              Explore Our Channel
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}

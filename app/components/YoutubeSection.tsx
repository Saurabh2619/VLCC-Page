import MagneticButton from './MagneticButton';

export default function YoutubeSection() {
  return (
    <section className="py-10 md:py-[80px] bg-[#fcfaf8] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Centered Heading at the top */}
        <div className="text-center mb-[40px] md:mb-[50px]">
          <div className="flex items-center gap-3 justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#dc2626"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            <span className="text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px]">Experience VLCC</span>
          </div>
          <h2 className="text-[2rem] md:text-[2.5rem] font-heading font-bold text-[#1a1a1a] leading-tight">
            Take A Tour Of Our Campus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Side: Video */}
          <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-black group">
            <video 
              src="https://res.cloudinary.com/dkzpgmd4a/video/upload/v1780497744/WhatsApp_Video_2026-06-02_at_22.25.44_woruox.mp4" 
              controls 
              controlsList="nodownload"
              playsInline
              className="w-full h-full object-cover"
              poster="https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496222/WhatsApp_Image_2026-06-02_at_22.27.31_ujjbk1.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Right Side: Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-[#666] text-[1.1rem] leading-relaxed mb-8 font-body">
              Step inside the VLCC School of Beauty and experience our world-class training facilities firsthand. From advanced clinical setups to professional makeup studios, see exactly where the next generation of top beauty experts is trained. Our vibrant campus provides the perfect immersive environment for hands-on, practical learning.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <MagneticButton>
                <a 
                  href="https://www.youtube.com/@institute2.gurugram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-3.5 rounded-xl font-bold text-sm tracking-[1px] uppercase transition-colors shadow-lg shadow-red-600/30 flex items-center gap-2"
                >
                  Explore Our Channel
                </a>
              </MagneticButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

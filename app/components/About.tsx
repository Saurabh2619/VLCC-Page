import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-[100px] md:py-[70px] bg-white/70 backdrop-blur-xl relative overflow-hidden z-0">
      {/* Giant Live Moving Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden -z-10 pointer-events-none opacity-[0.08]">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-[15rem] font-heading font-extrabold text-[#1a1a1a]">
            MAKEUP • HAIR • AESTHETICS • STYLING • 
          </span>
          <span className="text-[15rem] font-heading font-extrabold text-[#1a1a1a]">
            MAKEUP • HAIR • AESTHETICS • STYLING • 
          </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[80px]">
          
          <div className="w-full lg:w-1/2">
            <div className="relative text-center lg:text-left">
              <div className="relative inline-block w-full lg:w-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop"
                  alt="Makeup Artistry"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-[1] w-full max-w-[500px] h-auto object-cover"
                />
                <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-vlcc-orange rounded-2xl z-0 hidden lg:block"></div>
                
                {/* 100% Placement Floating Badge */}
                <div className="absolute -bottom-8 lg:bottom-10 -left-4 lg:-left-12 bg-white p-5 rounded-xl shadow-lg z-10 animate-float flex items-center gap-4">
                  <div className="w-12 h-12 bg-vlcc-orange/10 rounded-full flex items-center justify-center text-vlcc-orange">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-xl text-[#1a1a1a]">100%</p>
                    <p className="text-sm text-gray-500 font-body uppercase tracking-wide">Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-[40px] lg:mt-0 text-center lg:text-left">
            <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">About VLCC Institute</span>
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#1a1a1a] mb-5 leading-[1.2] font-heading font-bold">
              Empowering Your <span className="text-vlcc-orange">Beauty Career</span>
            </h2>
            <p className="text-[#666] text-lg leading-relaxed mb-6 font-body">
              With over 20 years of excellence in beauty and wellness education, VLCC School of Beauty is Asia's largest chain of vocational education academies.
            </p>
            <p className="text-[#666] text-lg leading-relaxed mb-10 font-body">
              Our NSDC-approved diploma courses are meticulously designed by industry experts to provide you with the most advanced, hands-on training, ensuring you are industry-ready from day one.
            </p>
            
            <a href="#courses" className="btn-primary">
              Explore Courses
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

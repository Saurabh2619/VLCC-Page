import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-10 md:py-[70px] bg-white/70 backdrop-blur-xl relative overflow-hidden z-0">
      {/* Background Moving Text (Slower) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] flex whitespace-nowrap z-0">
        <span className="text-[15vw] font-heading font-black tracking-tighter uppercase inline-block animate-[marquee_40s_linear_infinite]">
          VLCC INSTITUTE • VLCC INSTITUTE • VLCC INSTITUTE • 
        </span>
        <span className="text-[15vw] font-heading font-black tracking-tighter uppercase inline-block animate-[marquee_40s_linear_infinite]">
          VLCC INSTITUTE • VLCC INSTITUTE • VLCC INSTITUTE • 
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[80px]">
          
          <div className="w-full lg:w-1/2">
            <div className="relative text-center lg:text-left">
              <div className="relative inline-block w-full lg:w-auto">
                <Image 
                  src="https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496054/WhatsApp_Image_2026-06-02_at_22.24.20_bvf5cd.jpg"
                  alt="Makeup Artistry"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-[1] w-auto max-w-full h-auto max-h-[450px] md:max-h-[550px] object-contain mx-auto"
                />
                <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-vlcc-orange rounded-2xl z-0 hidden lg:block"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-[40px] lg:mt-0 text-center lg:text-left">
            <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">About VLCC Institute</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] text-[#1a1a1a] mb-6 font-heading font-bold leading-[1.1] tracking-tight">
              30+ Years of Shaping <span className="text-vlcc-orange">Beauty Professionals</span> Across India
            </h2>
            
            <p className="text-[#666] text-[15px] md:text-base leading-relaxed mb-5 font-body">
              Founded under the legacy of the VLCC Group, VLCC School of Beauty is one of India's most recognised beauty training institutes, dedicated to building the next generation of skilled beauty and wellness professionals.
            </p>
            <p className="text-[#666] text-[15px] md:text-base leading-relaxed mb-5 font-body">
              With over 30 years of industry expertise behind every program, we offer a powerful combination of scientific learning, practical training, and career-focused outcomes. Our beauty and wellness courses span makeup artistry, hair dressing, skincare, aesthetics, cosmetology, nutrition, spa therapies, nail artistry, and more. Each course is designed to meet the demands of a fast-growing global industry.
            </p>
            <p className="text-[#666] text-[15px] md:text-base leading-relaxed mb-10 font-body">
              What sets us apart is not just the breadth of courses we offer, but the depth of training our students receive. Every program at our certified beauty academy is built around hands-on learning, expert-led instruction, and real-world industry exposure, so graduates are job-ready from day one.
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

'use client';

export default function Recruiters() {
  const brands = [
    'MAC Cosmetics',
    'Lakmé',
    'L\'Oréal',
    'Sephora',
    'Nykaa',
    'Kaya Clinic',
    'Colorbar',
    'Sugar Cosmetics'
  ];

  return (
    <section className="py-10 md:py-[60px] bg-white/40 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-5 text-center mb-[40px]">
        <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Our Top Placement Partners</h2>
        <p className="text-[#666] text-base font-body">Launch your career with the world's leading beauty brands.</p>
      </div>

      <div className="relative w-full overflow-hidden flex py-5 bg-white/50 border-y border-gray-100">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-[#fdfaf7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-[#fdfaf7] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex animate-[marquee_30s_linear_infinite] md:animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {/* Double the list to make infinite scroll seamless */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="mx-4 md:mx-8 shrink-0 group cursor-pointer">
              <div className="bg-white px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(242,101,34,0.15)] group-hover:border-vlcc-orange/30">
                <span className="text-xl md:text-2xl font-heading font-extrabold text-gray-400 group-hover:text-vlcc-orange transition-colors duration-300 uppercase tracking-widest">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

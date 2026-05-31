export default function Recruiters() {
  const brands = [
    'MAC Cosmetics', 'Lakmé', 'L\'Oréal Paris', 'Colorbar', 'Kryolan',
    'Nykaa', 'Sephora', 'Bobbi Brown', 'Maybelline', 'Estée Lauder'
  ];

  return (
    <section id="recruiters" className="py-[60px] bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 mb-10 text-center">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-[#1a1a1a]">Our Top Placement Partners</h3>
        <p className="text-[#666] text-sm mt-2 font-body">Launch your career with the world's leading beauty brands.</p>
      </div>
      
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
          {/* Double the list to make infinite scroll seamless */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="inline-flex items-center justify-center px-8 py-4 mx-4 bg-[#f9f9fa] rounded-lg border border-gray-100 min-w-[200px]"
            >
              <span className="text-lg font-heading font-bold text-gray-400 uppercase tracking-widest">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <img src="/nsdc_logo.png" alt="NSDC Logo" className="w-10 h-10 object-contain" />,
      title: "NSDC Approved",
      description: "Our certifications are government-recognized, adding massive value to your professional portfolio."
    },
    {
      id: 2,
      icon: "💼",
      title: "100% Placement Assistance",
      description: "We help you land jobs at top-tier beauty brands, salons, and wellness centers globally."
    },
    {
      id: 3,
      icon: "🌟",
      title: "Industry Expert Faculty",
      description: "Learn directly from seasoned professionals who have shaped the modern beauty industry."
    },
    {
      id: 4,
      icon: "🏢",
      title: "20+ Years Legacy",
      description: "Join a prestigious academy with a proven track record of creating thousands of successful careers."
    }
  ];

  return (
    <section className="py-10 md:py-[80px] bg-[#121212] relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212]/80 z-10"></div>
        <img 
          src="/images/why-us.png" 
          alt="VLCC Academy Campus" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-20">
        <div className="text-center mb-[50px] md:mb-[70px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Brilliance Starts Here</span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-heading font-bold mb-[15px]">Why Choose VLCC School of Beauty</h2>
          <p className="text-[#bbb] text-base max-w-[700px] mx-auto font-body">
            Equip yourself with world-class education, hands-on training, and the industry connections needed to thrive in the beauty and wellness sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 group"
            >
              {feature.id === 1 ? (
                <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center mb-6 border border-vlcc-orange/30 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <img src="/nsdc_logo.png" alt="NSDC Logo" className="w-[75%] h-[75%] object-contain" />
                </div>
              ) : (
                <div className="w-[60px] h-[60px] bg-vlcc-orange/20 rounded-full flex items-center justify-center text-3xl mb-6 border border-vlcc-orange/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#aaa] text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

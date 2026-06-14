import React from 'react';

export default function NailJobOpportunities() {
  const opportunities = [
    { title: "Professional Nail Technician", icon: "💅" },
    { title: "Freelance Nail Artist", icon: "🎨" },
    { title: "Educator at Nail Academies", icon: "🎓" },
    { title: "Nail Salon Manager", icon: "🏢" },
    { title: "Editorial & Runway Nail Stylist", icon: "✨" },
    { title: "Brand Ambassador for Nail Products", icon: "🌟" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[15px] mb-3">Career Paths</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a]">
            Job Opportunities after Nail Artistry
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {opportunities.map((opp, index) => (
            <div key={index} className="group flex items-center p-6 md:p-8 bg-[#fcfcfc] rounded-2xl border border-gray-100 hover:border-vlcc-orange transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 shrink-0 bg-orange-50 text-2xl flex items-center justify-center rounded-full mr-5 group-hover:bg-vlcc-orange group-hover:text-white transition-colors duration-300">
                {opp.icon}
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-[#222] group-hover:text-vlcc-orange transition-colors">
                {opp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

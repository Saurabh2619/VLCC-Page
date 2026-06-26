import React from 'react';

export default function SkinJobOpportunities() {
  const opportunities = [
    { title: "Skin Therapist", icon: "💆‍♀️" },
    { title: "Beauty Therapist", icon: "✨" },
    { title: "Facial Expert", icon: "🌸" },
    { title: "Aesthetic Therapist", icon: "🔬" },
    { title: "Spa Therapist", icon: "🌿" },
    { title: "Beauty Consultant", icon: "💬" },
    { title: "Clinic Executive", icon: "🏥" },
    { title: "Freelance Skin Expert", icon: "💼" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[15px] mb-3">Career Paths</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
            Career Opportunities After Skin Care Course
          </h2>
          <p className="text-gray-600 font-body text-base md:text-lg">
            The demand for skilled skin and aesthetics professionals is growing rapidly. After completing this course, students can explore exciting career opportunities in beauty, wellness, and healthcare industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {opportunities.map((opp, index) => (
            <div key={index} className="group flex flex-col items-center p-6 md:p-8 bg-[#fcfcfc] rounded-2xl border border-gray-100 hover:border-vlcc-orange transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
              <div className="w-16 h-16 shrink-0 bg-orange-50 text-3xl flex items-center justify-center rounded-full mb-5 group-hover:bg-vlcc-orange group-hover:text-white transition-colors duration-300">
                {opp.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-[#222] group-hover:text-vlcc-orange transition-colors">
                {opp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

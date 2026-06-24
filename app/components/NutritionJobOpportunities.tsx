import React from 'react';

export default function NutritionJobOpportunities() {
  const opportunities = [
    { title: "Dietitian", icon: "🍎" },
    { title: "Clinical Nutritionist", icon: "🩺" },
    { title: "Sports Nutritionist", icon: "🏋️‍♂️" },
    { title: "Diabetes Educator", icon: "🩸" },
    { title: "Wellness Coach", icon: "🧘‍♀️" },
    { title: "Weight Management Consultant", icon: "⚖️" },
    { title: "Health & Lifestyle Counselor", icon: "🌿" },
    { title: "Freelance Nutritionist", icon: "💼" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="block text-[#e65c00] font-bold uppercase tracking-[2px] text-[15px] mb-3">Career Paths</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
            Career Opportunities After Nutrition Course
          </h2>
          <p className="text-gray-600 font-body text-base md:text-lg">
            The wellness and preventive healthcare industry is booming. After completing this course, you can explore exciting career opportunities as a certified nutrition and dietetics professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {opportunities.map((opp, index) => (
            <div key={index} className="group flex flex-col items-center p-6 md:p-8 bg-[#fffcf5] rounded-2xl border border-gray-100 hover:border-[#e65c00] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
              <div className="w-16 h-16 shrink-0 bg-orange-100 text-3xl flex items-center justify-center rounded-full mb-5 group-hover:bg-[#e65c00] group-hover:text-white transition-colors duration-300">
                {opp.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-[#222] group-hover:text-[#e65c00] transition-colors">
                {opp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

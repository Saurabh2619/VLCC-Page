'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is the duration of the makeup courses?',
      answer: 'Course durations vary depending on the level. A short-term certificate course can take 1-2 months, while a comprehensive professional diploma can take up to 6 months to complete.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We offer 100% placement assistance. Our dedicated placement cell regularly organizes interviews with top beauty brands, salons, and media houses.'
    },
    {
      question: 'Is the certification recognized?',
      answer: 'Absolutely. Our courses are NSDC (National Skill Development Corporation) approved, making the certification highly recognized both in India and internationally.'
    },
    {
      question: 'Do I need prior experience to join?',
      answer: 'No prior experience is necessary for our beginner and diploma courses. We teach everything from the absolute basics to advanced professional techniques.'
    },
    {
      question: 'Are makeup products provided during training?',
      answer: 'Yes, we provide professional, high-quality makeup products and tools for all in-class practical sessions. Students do not need to buy their own kits for classroom practice.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[100px] md:py-[70px] bg-transparent">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center mb-[50px]">
          <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-2.5">Got Questions?</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] font-heading font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b transition-all duration-300 ${activeIndex === index ? 'border-vlcc-orange pb-2' : 'border-gray-200'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none group"
              >
                <h3 className={`text-[17px] font-heading font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-vlcc-orange' : 'text-[#333] group-hover:text-vlcc-orange'}`}>
                  {faq.question}
                </h3>
                <span className={`text-xl transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-vlcc-orange' : 'text-gray-400 group-hover:text-vlcc-orange'}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[200px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#666] font-body text-[15px] leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

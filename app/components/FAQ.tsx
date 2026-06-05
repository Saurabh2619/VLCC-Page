'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Q: What beauty and wellness courses does VLCC School of Beauty offer?',
      answer: 'VLCC offers 100+ professional beauty courses covering makeup artistry, hair dressing, cosmetology, aesthetics, skincare, spa therapies, nutrition, and nail artistry. Courses are available at beginner, professional, and advanced levels.'
    },
    {
      question: 'Q: Are VLCC beauty courses certified?',
      answer: 'Yes. All VLCC programs are certified beauty courses recognised by national and international bodies including NSDC. Many courses offer the option of internationally recognised certifications accepted in 30+ countries.'
    },
    {
      question: 'Q: Does VLCC provide placement assistance after completing a course?',
      answer: 'Yes. VLCC provides 100% placement assistance through a dedicated placement cell and a network of 200+ hiring partners across India and internationally.'
    },
    {
      question: 'Q: What is the duration of beauty courses at VLCC?',
      answer: 'Course duration varies from short certificate programs of 1 to 3 months to comprehensive diploma and advanced programs running 6 to 12 months. Specific duration details are available on each course page.'
    },
    {
      question: 'Q: How do I book a free demo class?',
      answer: 'Fill out the enquiry form on this page or call our admissions helpline. Our team will connect with you to schedule a free demo session, where you can interact with expert trainers, explore course modules, and understand the learning experience before enrollment.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-[70px] bg-transparent">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center mb-[50px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Got Questions?</span>
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

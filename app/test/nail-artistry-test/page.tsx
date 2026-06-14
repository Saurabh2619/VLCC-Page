'use client';
import React, { useState } from 'react';
import EnquiryForm from '@/app/components/EnquiryForm';
import Facilities from '@/app/components/Facilities';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import GoogleReviews from '@/app/components/GoogleReviews';
import Gallery from '@/app/components/Gallery';
import Recruiters from '@/app/components/Recruiters';
import Testimonials from '@/app/components/Testimonials';
import YoutubeSection from '@/app/components/YoutubeSection';
import Contact from '@/app/components/Contact';
import ControlledEnquiryPopup from '@/app/components/ControlledEnquiryPopup';
import StatisticsBanner from '@/app/components/StatisticsBanner';
import NailJobOpportunities from '@/app/components/NailJobOpportunities';
import OtherCoursesCarousel from '@/app/components/OtherCoursesCarousel';

import ScrollReveal from '../../components/ScrollReveal';

export default function NailArtistryLandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nailFaqs = [
    {
      question: 'Q: What will I learn in the Nail Artistry course?',
      answer: 'You will learn a wide range of techniques including gel polish, acrylic extensions, 3D nail art, french manicures, and proper sanitation practices.'
    },
    {
      question: 'Q: Are VLCC beauty courses certified?',
      answer: 'Yes. All VLCC programs are certified beauty courses recognised by national and international bodies including NSDC. Many courses offer the option of internationally recognised certifications accepted in 30+ countries.'
    },
    {
      question: 'Q: Do I need prior experience to join the Nail Artistry course?',
      answer: 'No prior experience is required. Our beginner program covers all the basics from scratch, while advanced modules cater to those looking to upgrade their skills.'
    },
    {
      question: 'Q: Do you provide the products and tools for practice?',
      answer: 'Yes, we provide a professional nail kit during the course which includes all necessary tools, acrylics, gels, and UV lamps for hands-on practice in the classroom.'
    },
    {
      question: 'Q: How do I book a free demo class?',
      answer: 'Fill out the enquiry form on this page or call our admissions helpline. Our team will connect with you to schedule a free demo session, where you can interact with expert trainers, explore course modules, and understand the learning experience before enrollment.'
    }
  ];

  const services = [
    {
      title: 'Manicure',
      desc: 'Experience the perfect blend of care and style with our luxurious manicures. From classic to trendy, we ensure your hands look and feel their absolute best.',
      img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nail Polish',
      desc: 'Enhance your nails with our high-quality nail polish range. Stunning colors and lasting shine for a flawless finish every time.',
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Pedicure',
      desc: 'Treat your feet to a luxurious pedicure experience. Relax, refresh, and leave with soft, smooth feet and perfectly polished toes.',
      img: 'https://images.pexels.com/photos/8533355/pexels-photo-8533355.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Nail Extension',
      desc: 'Achieve flawless, longer nails with our expert nail extension services. Strong, durable, and beautifully shaped nails to suit your style.',
      img: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Nail Removal',
      desc: 'Our gentle nail removal service ensures your nails are safely treated, leaving them healthy and free from damage.',
      img: 'https://images.pexels.com/photos/4154199/pexels-photo-4154199.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Nail Art & Accessories',
      desc: 'Express your unique style with our creative nail art and accessories. From intricate designs to sparkling embellishments, we bring your nail vision to life.',
      img: 'https://images.pexels.com/photos/4038676/pexels-photo-4038676.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <main className="min-h-screen font-body bg-white">
      {/* Standalone Header (No Navigation) */}
      <header className="w-full bg-white py-2 px-6 md:px-10 shadow-md sticky top-0 z-50 flex items-center justify-center md:justify-start">
        <img 
          src="/vlcc-logo.png" 
          alt="VLCC Logo" 
          className="h-10 md:h-12 object-contain"
        />
      </header>

      {/* Hero Section with Form */}
      <section className="relative min-h-[80vh] flex items-center pt-10 pb-20 md:py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-black/10"></div>

        <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Hero Text */}
            <div className="text-white text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-vlcc-orange/20 text-vlcc-orange border border-vlcc-orange/30 font-bold tracking-wider uppercase text-sm mb-5">
                Professional Certification
              </span>
              <p className="text-xl md:text-2xl font-bold text-vlcc-orange mb-2 uppercase tracking-wide font-heading">
                Best Nail Artistry Course in Gurgaon
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Master the Art of <span className="text-vlcc-orange">Nail Artistry</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-[600px] font-body mx-auto md:mx-0 drop-shadow-md">
                Turn your passion into a lucrative career. Learn acrylics, gel extensions, 3D nail art, and more from industry experts with 100% placement assistance.
              </p>
              
              <div className="mt-8">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-vlcc-orange text-white px-8 py-4 rounded-md uppercase font-bold text-sm md:text-base tracking-widest hover:bg-[#e0651c] transition-colors shadow-lg hover:shadow-xl font-heading cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>

            {/* Hero Form */}
            <div className="w-full max-w-[500px] mx-auto lg:ml-auto" id="enquiry-form">
              <div className="glass-panel p-6 md:p-8 bg-[#141414]/80 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 left-0 w-full h-2 bg-vlcc-orange"></div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-2 text-[#e0e0e0]">
                  Book a Free <span className="text-vlcc-orange">Demo Class</span>
                </h3>
                <p className="text-center text-[#ccc] mb-6 font-body text-sm">
                  Fill out the form below and our career counselor will call you shortly.
                </p>
                <div className="text-left">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us (Reference Layout) */}
      <section className="py-16 md:py-24 bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Collage */}
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] bg-[#f2f2f2] rounded-xl overflow-hidden shadow-inner">
              {/* Using a simplified layout that gives a similar collage effect to the reference */}
              <div className="grid grid-cols-2 gap-2 h-full p-2 rotate-[-5deg] scale-110">
                <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover shadow-lg" alt="Nails 1" />
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover shadow-lg translate-y-8" alt="Nails 2" />
                <img src="https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover shadow-lg -translate-y-8" alt="Nails 3" />
                <img src="https://images.pexels.com/photos/4038676/pexels-photo-4038676.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover shadow-lg" alt="Nails 4" />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-[#333]">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1a1a1a]">About VLCC Nail Artistry</h2>
              <p className="mb-4 text-gray-600 leading-relaxed text-sm md:text-base font-body">
                VLCC School of Beauty offers a luxurious and modern learning ambiance with the latest nail trends. Our highly skilled and friendly staff ensure top-notch training in a relaxing atmosphere.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed text-sm md:text-base font-body">
                Founded with a commitment to world-class service, our institute reflects passion and dedication towards empowering aspiring nail technicians to reach their full potential.
              </p>
              
              <h3 className="text-xl font-bold mb-5 text-[#1a1a1a] font-heading">VLCC ensures fabulous nails through:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vlcc-orange mt-2 shrink-0"></span>
                  <span className="text-gray-600 text-sm md:text-base font-body"><strong>Customization :</strong> Tailoring services and training to individual preferences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vlcc-orange mt-2 shrink-0"></span>
                  <span className="text-gray-600 text-sm md:text-base font-body"><strong>Trained Technicians :</strong> Employing only those who pass a stringent recruitment process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vlcc-orange mt-2 shrink-0"></span>
                  <span className="text-gray-600 text-sm md:text-base font-body"><strong>Hygiene :</strong> Adhering to strict sanitation protocols.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vlcc-orange mt-2 shrink-0"></span>
                  <span className="text-gray-600 text-sm md:text-base font-body"><strong>Trendy Art Designs :</strong> Staying ahead with fresh and stylish designs.</span>
                </li>
              </ul>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="inline-block bg-vlcc-orange text-white px-8 py-3 rounded-md uppercase font-bold text-sm tracking-widest hover:bg-[#e0651c] transition-colors shadow-lg hover:shadow-xl font-heading cursor-pointer"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-[#fafafa] relative z-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1a1a1a] max-w-[600px] leading-tight text-center lg:text-left">
              Explore Our Specialized Nail Artistry Modules
            </h2>
            <img 
              src="/landing-page/fallen_nail.jpg" 
              alt="Nail Artistry Polish" 
              className="w-full lg:w-[400px] h-[250px] object-cover rounded-xl"
            />
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl flex flex-col items-center text-center group border border-gray-100 transition-all duration-300 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
              >
                <div className="overflow-hidden rounded-xl mb-6 w-full h-[200px]">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-bold font-heading text-[#1a1a1a] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow font-body">{service.desc}</p>
                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-block mx-auto mt-auto text-sm text-white bg-[#111] px-8 py-2.5 rounded-full hover:bg-vlcc-orange transition-all duration-500 ease-out hover:-translate-y-1 font-medium cursor-pointer shadow-md hover:shadow-xl"
                  >
                    Lets Connect
                  </button>
                </div>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <NailJobOpportunities />
      <Facilities />
      <StatisticsBanner />
      <WhyChooseUs />
      <OtherCoursesCarousel />
      <Gallery /> {/* "Our Campus" */}
      <GoogleReviews />
      <Recruiters />
      <Testimonials />
      
      {/* Custom Nail FAQ Section */}
      <section id="faq" className="py-10 md:py-[70px] bg-transparent">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="text-center mb-[50px]">
            <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5 font-heading">Got Questions?</span>
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] font-heading font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {nailFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b transition-all duration-300 ${activeFaq === index ? 'border-vlcc-orange pb-2' : 'border-gray-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none group"
                >
                  <h3 className={`text-[17px] font-heading font-semibold transition-colors duration-300 ${activeFaq === index ? 'text-vlcc-orange' : 'text-[#333] group-hover:text-vlcc-orange'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-xl transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-vlcc-orange' : 'text-gray-400 group-hover:text-vlcc-orange'}`}>
                    ▼
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? 'max-h-[200px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
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

      <YoutubeSection />
      <Contact />

      {/* Standalone Simple Footer */}
      <footer className="bg-[#121212] text-white py-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <img 
            src="/vlcc-logo.png" 
            alt="VLCC Logo" 
            className="h-16 object-contain mx-auto mb-6 bg-white p-2 rounded-lg"
          />
          <p className="text-gray-400 font-body mb-6 max-w-[600px] mx-auto text-sm">
            Empowering individuals with top-tier beauty and wellness education. Join VLCC School of Beauty and transform your future.
          </p>
          <div className="flex justify-center gap-6 mb-8 text-gray-500 text-sm">
            <span>© {new Date().getFullYear()} VLCC Ltd. All Rights Reserved.</span>
            <span>|</span>
            <span>Terms & Conditions Apply</span>
          </div>
        </div>
      </footer>

      {/* Global popup for extra conversion chances */}
      <ControlledEnquiryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}

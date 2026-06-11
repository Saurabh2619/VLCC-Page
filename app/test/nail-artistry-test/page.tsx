import React from 'react';
import EnquiryForm from '@/app/components/EnquiryForm';
import Facilities from '@/app/components/Facilities';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import GoogleReviews from '@/app/components/GoogleReviews';
import HowToApply from '@/app/components/HowToApply';
import Gallery from '@/app/components/Gallery';
import Recruiters from '@/app/components/Recruiters';
import Testimonials from '@/app/components/Testimonials';
import FAQ from '@/app/components/FAQ';
import YoutubeSection from '@/app/components/YoutubeSection';
import Contact from '@/app/components/Contact';
import EnquiryPopup from '@/app/components/EnquiryPopup';

export const metadata = {
  title: 'Nail Artistry Course | VLCC School of Beauty',
  description: 'Join the premier Nail Artistry course at VLCC School of Beauty.',
};

export default function NailArtistryLandingPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:to-black/10"></div>

        <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Hero Text */}
            <div className="text-white text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-vlcc-orange/20 text-vlcc-orange border border-vlcc-orange/30 font-bold tracking-wider uppercase text-sm mb-5">
                Professional Certification
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Master the Art of <span className="text-vlcc-orange">Nail Artistry</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-[600px] font-body mx-auto md:mx-0 drop-shadow-md">
                Turn your passion into a lucrative career. Learn acrylics, gel extensions, 3D nail art, and more from industry experts with 100% placement assistance.
              </p>
              
              <div className="flex gap-4 md:gap-[30px] justify-center md:justify-start flex-wrap mt-8">
                <a href="https://maps.app.goo.gl/jyLfZgQWZxhPdjLc7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-[15px] group cursor-pointer">
                  <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white/10 rounded-full flex items-center justify-center text-xl md:text-2xl border border-white/20 shadow-sm group-hover:bg-white/20 transition-colors">📍</div>
                  <div className="text-left">
                    <h4 className="text-sm md:text-base font-semibold font-heading mb-0 md:mb-1 group-hover:text-vlcc-orange transition-colors">On-Campus</h4>
                    <p className="text-[11px] md:text-sm text-[#ccc] font-body transition-colors group-hover:text-white">Sector 49, Gurugram</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 md:gap-[15px]">
                  <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm p-2 shrink-0 border border-white/20">
                    <img src="/nsdc_logo.png" alt="NSDC Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[11px] md:text-sm text-[#ccc] font-body mb-0">Approved by</h4>
                    <p className="text-sm md:text-base font-semibold font-heading text-white">NSDC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <div className="w-full max-w-[500px] mx-auto lg:ml-auto">
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

      {/* Why Train With Us (Alternative Content Block) */}
      <section className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#333]">
            Why Train With <span className="text-vlcc-orange">VLCC</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-body mb-10">
            At VLCC School of Beauty, we don't just teach techniques; we build careers. Our Nail Artistry program is meticulously crafted to meet international standards. From mastering foundational hygiene to executing intricate 3D designs, you get hands-on experience under the direct supervision of veteran nail technicians.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Industry Recognized</h3>
              <p className="text-gray-600 text-sm">Certifications that hold value across top salons and beauty clinics nationwide.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-bold mb-3">Hands-On Practice</h3>
              <p className="text-gray-600 text-sm">Extensive practical sessions using premium products and modern tools.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-gray-600 text-sm">Start your own nail bar or work as a highly-paid freelance artist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Components mapped as requested */}
      <Facilities />
      <WhyChooseUs />
      <GoogleReviews />
      <HowToApply />
      <Gallery />
      <Recruiters />
      <Testimonials />
      <FAQ />
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
      <EnquiryPopup />
    </main>
  );
}

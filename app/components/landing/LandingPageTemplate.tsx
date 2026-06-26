'use client';
import React, { useState } from 'react';
import EnquiryForm from '@/app/components/EnquiryForm';
import Facilities from '@/app/components/Facilities';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import GoogleReviews from '@/app/components/GoogleReviews';
import LandingPageGallery from '@/app/components/LandingPageGallery';
import Recruiters from '@/app/components/Recruiters';
import Testimonials from '@/app/components/Testimonials';
import YoutubeSection from '@/app/components/YoutubeSection';
import Contact from '../Contact';
import Footer from '../Footer';
import ControlledEnquiryPopup from '../ControlledEnquiryPopup';
import MobileCTA from '../MobileCTA';
import StatisticsBanner from '@/app/components/StatisticsBanner';
import SkinFeatureBanner from '@/app/components/SkinFeatureBanner';
import HairFeatureBanner from '@/app/components/HairFeatureBanner';
import LaserFeatureBanner from '@/app/components/LaserFeatureBanner';
import NailJobOpportunities from '@/app/components/NailJobOpportunities';
import SkinJobOpportunities from '@/app/components/SkinJobOpportunities';
import NutritionJobOpportunities from '@/app/components/NutritionJobOpportunities';
import NutritionFeatureBanner from '@/app/components/NutritionFeatureBanner';
import OtherCoursesCarousel from '@/app/components/OtherCoursesCarousel';
import ScrollReveal from '@/app/components/ScrollReveal';
import MakeupFeatureBanner from '@/app/components/MakeupFeatureBanner';
import { LandingPageData } from '@/app/data/landingPagesData';
import Navbar from '@/app/components/Navbar';
import GlobalSpotlight from '@/app/components/GlobalSpotlight';
import HowToApply from '@/app/components/HowToApply';
import { LandingProvider } from '@/app/context/LandingContext';

export default function LandingPageTemplate({ data, isWebsiteMode = false }: { data: LandingPageData, isWebsiteMode?: boolean }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isLockedMode = data.slug.endsWith('-49');

  React.useEffect(() => {
    const handleOpenPopup = () => setIsPopupOpen(true);
    window.addEventListener('openEnquiryPopup', handleOpenPopup);
    return () => window.removeEventListener('openEnquiryPopup', handleOpenPopup);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <LandingProvider isLockedMode={isLockedMode}>
      <main className="min-h-screen font-body bg-white">
      {/* Header Handling */}
      {isWebsiteMode ? (
        <>
          <Navbar />
          <GlobalSpotlight />
        </>
      ) : (
        <header className="w-full bg-white py-2 px-6 md:px-10 shadow-md sticky top-0 z-50 flex items-center justify-center md:justify-start">
          <img 
            src="/vlcc-logo.png" 
            alt="VLCC Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </header>
      )}

      {/* Hero Section with Form */}
      <section id="contact" className={`relative min-h-[80vh] flex flex-col justify-center pb-32 md:pb-24 ${isWebsiteMode ? 'pt-[100px] md:pt-[120px]' : 'pt-[120px] md:pt-20'}`}>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[position:40%_center] md:bg-center"
          style={{ 
            backgroundImage: `url('${data.hero.bgImage}')`,
            filter: 'grayscale(70%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-black/10"></div>

        <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Hero Text */}
            <div className="text-white text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-vlcc-orange/20 text-vlcc-orange border border-vlcc-orange/30 font-bold tracking-wider uppercase text-sm mb-5">
                Professional Certification
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 text-white drop-shadow-lg uppercase"
                dangerouslySetInnerHTML={{ __html: data.hero.preHeading }}
              />
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide font-heading">
                {data.hero.headingPrefix} <span className="text-vlcc-orange">{data.hero.headingHighlight}</span>
              </h4>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-[600px] font-body mx-auto md:mx-0 drop-shadow-md">
                {data.hero.paragraph}
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

      {/* About Us */}
      <section id="about" className="py-16 md:py-24 bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Collage */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center p-2 md:p-6">
              <div className="grid grid-cols-2 gap-3 md:gap-5 w-full max-w-[550px]">
                {/* Column 1 (Shifted Down) */}
                <div className="flex flex-col gap-3 md:gap-5 translate-y-4 md:translate-y-8">
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-[4px] md:border-[6px] border-white group relative">
                    <div className="absolute inset-0 bg-vlcc-orange/0 group-hover:bg-vlcc-orange/10 transition-colors z-10"></div>
                    <img src={data.aboutImages?.[0] || data.modules.services[0]?.img || data.hero.bgImage} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${data.aboutImagePositions?.[0] || ''}`} alt="About 1" />
                  </div>
                  <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-[4px] md:border-[6px] border-white group relative">
                    <div className="absolute inset-0 bg-vlcc-orange/0 group-hover:bg-vlcc-orange/10 transition-colors z-10"></div>
                    <img src={data.aboutImages?.[1] || data.modules.services[1]?.img || data.hero.bgImage} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${data.aboutImagePositions?.[1] || ''}`} alt="About 2" />
                  </div>
                </div>
                {/* Column 2 (Shifted Up) */}
                <div className="flex flex-col gap-3 md:gap-5 -translate-y-4 md:-translate-y-8">
                  <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-[4px] md:border-[6px] border-white group relative">
                    <div className="absolute inset-0 bg-vlcc-orange/0 group-hover:bg-vlcc-orange/10 transition-colors z-10"></div>
                    <img src={data.aboutImages?.[2] || data.modules.services[2]?.img || data.hero.bgImage} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${data.aboutImagePositions?.[2] || ''}`} alt="About 3" />
                  </div>
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-[4px] md:border-[6px] border-white group relative">
                    <div className="absolute inset-0 bg-vlcc-orange/0 group-hover:bg-vlcc-orange/10 transition-colors z-10"></div>
                    <img src={data.aboutImages?.[3] || data.modules.services[3]?.img || data.hero.bgImage} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${data.aboutImagePositions?.[3] || ''}`} alt="About 4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-[#333]">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#1a1a1a]">{data.about.heading}</h2>
              <p className="mb-4 text-gray-600 leading-relaxed text-sm md:text-base font-body">{data.about.paragraph1}</p>
              <p className="mb-8 text-gray-600 leading-relaxed text-sm md:text-base font-body">{data.about.paragraph2}</p>
              
              <h3 className="text-xl font-bold mb-5 text-[#1a1a1a] font-heading">{data.about.whyChooseTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {data.about.whyChooseList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm md:text-[15px] font-body font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              
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
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1a1a1a] max-w-[600px] lg:max-w-[700px] leading-tight text-center lg:text-left">
                {data.modules.heading}
              </h2>
              {data.modules.subheading && (
                <p className="mt-4 text-gray-600 font-body text-base md:text-lg max-w-[600px] text-center lg:text-left whitespace-pre-line">
                  {data.modules.subheading}
                </p>
              )}
            </div>
            <img 
              src={data.modules.sideImage} 
              alt="Course Modules" 
              className="w-full lg:w-[400px] h-[250px] object-cover rounded-xl"
            />
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.modules.services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl flex flex-col items-center text-center group border border-gray-100 transition-all duration-300 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
              >
                <div className="overflow-hidden rounded-xl mb-6 w-full h-[200px] flex items-center justify-center bg-gray-50">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className={`w-full h-full ${(service as any).fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    style={{ 
                      objectPosition: (service as any).objectPosition || 'center',
                      transform: (service as any).transform || 'none'
                    }}
                  />
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

      {/* For Job Opportunities, maybe we should keep NailJobOpportunities for nail and generic for others? 
          Or maybe use NailJobOpportunities only if slug is nail, otherwise hide or make generic.
          For now, keep it conditionally. */}
      {data.slug.includes('nail') && <NailJobOpportunities />}
      {data.slug.includes('skin-care') && <SkinJobOpportunities />}
      {data.slug.includes('nutrition') && <NutritionJobOpportunities />}
      
      <Facilities />
      
      {data.slug.includes('makeup') ? (
        <MakeupFeatureBanner imageSrc="https://res.cloudinary.com/dkzpgmd4a/image/upload/v1781680810/makeup_section_a19yre.png" />
      ) : data.slug.includes('skin-care') ? (
        <SkinFeatureBanner imageSrc={data.statisticsImage || data.hero.bgImage} />
      ) : data.slug.includes('hair') ? (
        <HairFeatureBanner imageSrc={data.statisticsImage || data.hero.bgImage} />
      ) : data.slug.includes('laser') ? (
        <LaserFeatureBanner imageSrc={data.statisticsImage || data.hero.bgImage} />
      ) : data.slug.includes('nutrition') ? (
        <NutritionFeatureBanner imageSrc={data.statisticsImage || data.hero.bgImage} />
      ) : (
        <StatisticsBanner imageSrc={data.statisticsImage || data.hero.bgImage} />
      )}
      
      <WhyChooseUs />
      
      {/* Pass the slug to carousel so it knows what to exclude */}
      <OtherCoursesCarousel currentCourseSlug={data.slug} />
      
      {/* Hide Student Portfolio exclusively on Laser, Skin Care, and Nutrition pages as requested */}
      {!data.slug.includes('laser') && !data.slug.includes('skin-care') && !data.slug.includes('nutrition') && (
        <LandingPageGallery media={data.portfolioMedia} />
      )}
      <GoogleReviews />
      <Recruiters />
      <Testimonials />
      
      {/* Dynamic FAQ Section */}
      <section id="faq" className="py-10 md:py-[70px] bg-transparent">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="text-center mb-[50px]">
            <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5 font-heading">Got Questions?</span>
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] font-heading font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {data.faqs.map((faq, index) => (
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

      <ScrollReveal><HowToApply /></ScrollReveal>
      <YoutubeSection />
      <Contact />

      <Footer />

      <MobileCTA />
      <ControlledEnquiryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
    </LandingProvider>
  );
}

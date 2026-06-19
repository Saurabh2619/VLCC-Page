'use client';
import MagneticButton from './MagneticButton';

export default function CareerCTA() {
  return (
    <section className="py-10 md:py-[80px] bg-[#fcfaf8] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="bg-vlcc-orange rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-vlcc-orange via-vlcc-orange/90 to-transparent z-10"></div>
            <img 
              src="/images/career-cta.png" 
              alt="Successful Beauty Career" 
              className="w-full h-full object-cover object-right opacity-80 mix-blend-multiply"
            />
          </div>

          <div className="relative z-20 p-[40px] md:p-[60px] lg:p-[80px] max-w-[700px] text-white">
            <span className="block text-white/90 font-semibold uppercase tracking-[1.5px] text-sm mb-4">Take The First Step</span>
            <h2 className="text-[2.2rem] md:text-[3.5rem] font-heading font-bold mb-6 leading-[1.1]">
              Your Beauty Career Starts Here
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 font-body max-w-[500px]">
              Turn your passion into a high-paying profession. Get guaranteed placement assistance for roles such as:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 max-w-[600px]">
              {['Beauty Therapist', 'Hair Stylist', 'Aesthetic Skin Therapist', 'Salon Manager', 'Clinical Nutritionist', 'Spa Therapist', 'Nail Artist', 'Beauty Educator'].map((role, idx) => (
                <span key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors hover:bg-white/20 cursor-default">
                  {role}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-[40px]">
              <MagneticButton>
                <button onClick={() => window.dispatchEvent(new Event('openEnquiryPopup'))} className="bg-white text-vlcc-orange hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold text-sm tracking-[1px] uppercase transition-colors shadow-lg">
                  ENROLL NOW
                </button>
              </MagneticButton>
              <MagneticButton>
                <a href="tel:+917428238777" className="px-8 py-3.5 rounded-xl border border-white text-white font-bold text-sm tracking-[1px] hover:bg-white/10 transition-all flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call Us
                </a>
              </MagneticButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { notFound } from 'next/navigation';
import { getCourseById } from '../../data/courses';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import GoogleReviews from '../../components/GoogleReviews';
import Testimonials from '../../components/Testimonials';
import FloatingSocials from '../../components/FloatingSocials';
import ScrollToTop from '../../components/ScrollToTop';
import EnquiryPopup from '../../components/EnquiryPopup';
import MobileCTA from '../../components/MobileCTA';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.slug);
  if (!course) return { title: 'Course Not Found' };
  
  return {
    title: `${course.title} | VLCC Institute`,
    description: course.shortDescription,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Course Hero Section */}
      <section className="relative pt-[120px] pb-16 md:pt-[150px] md:pb-[80px] bg-[#121212] text-white">
        {/* Subtle background image */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: `url(${course.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]"></div>
        
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-vlcc-orange/20 border border-vlcc-orange/40 text-vlcc-orange font-semibold text-sm mb-6 uppercase tracking-wider">
              {course.duration}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-300 font-body mb-8 leading-relaxed">
              {course.shortDescription}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="btn-primary text-base px-8 py-3.5 inline-block">
                Enquire Now
              </a>
              <span className="text-sm text-gray-400 font-medium">
                Certification: {course.certification}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 md:py-[80px] bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-[60px]">
            
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">Course Overview</h2>
                <p className="text-gray-600 font-body leading-relaxed text-[16px] md:text-[17px]">
                  {course.fullDescription}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-8">What You Will Learn</h2>
                <div className="grid grid-cols-1 gap-6">
                  {course.modules.map((module, index) => (
                    <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-vlcc-orange transition-shadow hover:shadow-md">
                      <h3 className="text-xl font-heading font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-vlcc-orange text-sm font-bold">
                          {index + 1}
                        </span>
                        {module.title}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-[44px]">
                        {module.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 font-body text-[15px]">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[100px]">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-xl font-heading font-bold text-[#1a1a1a] mb-5 border-b border-gray-100 pb-4">Career Opportunities</h3>
                  <ul className="flex flex-col gap-3">
                    {course.careerOpportunities.map((career, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600 font-body text-[15px]">
                        <span className="w-2 h-2 rounded-full bg-vlcc-orange shrink-0"></span>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#121212] p-8 rounded-2xl shadow-lg text-white text-center">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-vlcc-orange">Start Today</h3>
                  <p className="text-gray-300 font-body text-sm mb-6 leading-relaxed">
                    Take the first step towards a rewarding career in beauty and styling.
                  </p>
                  <a href="#contact" className="btn-primary w-full block text-center py-3.5">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reused Sections */}
      <GoogleReviews />
      <Testimonials />
      
      {/* Required Contact Section just before Footer */}
      <Contact />

      <Footer />
      
      <FloatingSocials />
      <ScrollToTop />
      <EnquiryPopup />
      <MobileCTA />
    </main>
  );
}

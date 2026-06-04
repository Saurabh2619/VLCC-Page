import InfiniteSlider from './InfiniteSlider';

export default function Facilities() {
  const facilities = [
    {
      title: 'Soft skills training',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      title: 'World Class Environment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      )
    },
    {
      title: 'Industry Relevant Curriculum',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      )
    },
    {
      title: 'International Certifications to choose',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
      )
    },
    {
      title: 'State-of-the-Art Infrastructure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
      )
    },
    {
      title: 'Well Qualified and Trained Faculty',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      )
    },
    {
      title: 'Latest Training Equipments',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
      )
    },
    {
      title: 'Hands-on Internships & Dedicated Placement Cell',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      )
    }
  ];

  const campusImages = [
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496221/WhatsApp_Image_2026-06-02_at_22.27.57_k5sipg.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496221/WhatsApp_Image_2026-06-02_at_22.28.29_mbpcgo.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/v1780496458/WhatsApp_Image_2026-06-02_at_22.29.33_jvwast.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496221/WhatsApp_Image_2026-06-02_at_22.27.39_e7j3f3.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496222/WhatsApp_Image_2026-06-02_at_22.26.52_ysqecv.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496221/WhatsApp_Image_2026-06-02_at_22.28.42_rzarcv.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496222/WhatsApp_Image_2026-06-02_at_22.27.31_ujjbk1.jpg',
    'https://res.cloudinary.com/dkzpgmd4a/image/upload/q_auto/f_auto/v1780496222/WhatsApp_Image_2026-06-02_at_22.27.50_qilsov.jpg'
  ];

  return (
    <section className="py-10 md:py-[70px] bg-[#fdfaf7] relative overflow-hidden border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-[40px] md:mb-[60px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">Why Train With Us</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Centre Facilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-50 rounded-full flex items-center justify-center text-vlcc-orange mb-3 md:mb-4 group-hover:bg-vlcc-orange group-hover:text-white transition-colors duration-300">
                <div className="scale-75 md:scale-100 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-[#1a1a1a] text-base md:text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Campus Tour Slider */}
        <div className="text-center mb-[30px]">
          <h3 className="text-[1.8rem] md:text-[2.2rem] text-[#1a1a1a] font-heading font-bold">Our Campus</h3>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <InfiniteSlider 
            images={campusImages} 
            visibleDesktop={4} 
            visibleMobile={1} 
            aspectRatio="aspect-[4/3]" 
            autoPlayInterval={3500} 
          />
        </div>
      </div>
    </section>
  );
}

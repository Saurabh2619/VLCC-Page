'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-[70px] bg-[#121212] text-white relative bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="absolute top-0 left-0 w-full h-full bg-[#121212]/90 z-[1]"></div>
      <div className="max-w-[1200px] mx-auto px-5 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[60px] align-items-center">
          <div>
            <span className="block text-vlcc-orange font-semibold uppercase tracking-[1.5px] text-sm mb-[15px]">Get in Touch</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] mb-[25px] text-white font-heading font-bold">Let's Start Your Journey</h2>
            <p className="text-[#bbb] text-base leading-[1.6] mb-[40px] font-body">Have questions about the courses? Our experts are here to help you navigate your career path in beauty and styling.</p>
            
            <div className="flex flex-col gap-[25px]">
              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-[20px] border border-white/20 shrink-0">📞</div>
                <div>
                  <h4 className="text-[16px] text-vlcc-orange mb-1 font-heading font-semibold">Phone</h4>
                  <p className="text-[#ddd] text-[15px] font-body">+91 74282 38777</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-[20px] border border-white/20 shrink-0">✉️</div>
                <div>
                  <h4 className="text-[16px] text-vlcc-orange mb-1 font-heading font-semibold">Email</h4>
                  <p className="text-[#ddd] text-[15px] font-body">institute2.gurugram@vlcceducation.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-[50px] h-[50px] bg-white/10 rounded-full flex items-center justify-center text-[20px] border border-white/20 shrink-0">📍</div>
                <div>
                  <h4 className="text-[16px] text-vlcc-orange mb-1 font-heading font-semibold">Location</h4>
                  <p className="text-[#ddd] text-[15px] font-body">Third Floor, Sapphire Mall, Block S, Uppal Southend, Opposite Orchid Petal, Sector 49, Gurugram, haryana - 122018</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-2.5 md:p-0">
            <div className="glass-panel bg-[#141414]/60 p-[30px] md:p-[40px] rounded-[20px]">
              <h3 className="text-2xl mb-[25px] text-center font-heading font-semibold">Send us a Message</h3>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/15 rounded-lg p-[15px_20px] text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/15 rounded-lg p-[15px_20px] text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <div>
                  <input type="tel" placeholder="Your Phone Number" required className="w-full bg-white/5 border border-white/15 rounded-lg p-[15px_20px] text-white font-body text-[15px] transition-all duration-300 focus:outline-none focus:border-vlcc-orange focus:bg-white/10 placeholder:text-gray-300 placeholder:opacity-100" />
                </div>
                <button type="submit" className="btn-primary w-full mt-2.5">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

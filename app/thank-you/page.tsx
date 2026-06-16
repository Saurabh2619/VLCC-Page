import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingSocials from '../components/FloatingSocials';
import MobileCTA from '../components/MobileCTA';

export const metadata = {
  title: 'Thank You | VLCC School of Beauty',
  description: 'Thank you for your enquiry. We will connect with you soon.',
};

export default function ThankYou() {
  return (
    <main className="min-h-screen font-body flex flex-col pb-[50px] md:pb-0 bg-[#f5f5f5]">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-[80px] md:h-[95px] bg-[#141414]"></div>

      <div className="flex-1 flex items-start md:items-center justify-center p-5 py-[30px] md:py-[40px] relative">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-vlcc-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-vlcc-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Thank You Card */}
        <div className="bg-white max-w-[550px] w-full rounded-2xl p-6 md:p-8 text-center shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-gray-200 border-t-[5px] border-t-vlcc-orange relative z-10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,122,89,0.15)] group mt-2 md:mt-0">
          
          <div className="w-[50px] h-[50px] mx-auto bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className="text-[1.8rem] md:text-[2.2rem] leading-[1.1] font-heading font-black text-[#1a1a1a] mb-2">
            Thank <span className="text-vlcc-orange">You!</span>
          </h1>
          
          <p className="text-gray-600 text-[14px] md:text-[15px] mb-5 font-body max-w-[400px] mx-auto">
            Your enquiry has been successfully submitted. Our career experts will connect with you very soon.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Our Location</h3>
            <p className="text-[13px] text-gray-600 font-body mb-2">
              Third Floor, Sapphire Mall, Sector 49, Gurugram
            </p>
            <a 
              href="https://maps.app.goo.gl/jyLfZgQWZxhPdjLc7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] text-vlcc-orange font-semibold hover:text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
              Get Directions
            </a>
          </div>

          {/* Social Links & Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-3 pt-5 border-t border-gray-100">
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1CzsfUbPqV/" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-gradient-to-tr from-[#1877F2] to-[#0A5BC4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/vlcc_schoolof_beautyggn49?igsh=a3RqNDUyZDV2eWQy" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=917428238777&text=" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-gradient-to-tr from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>

            <Link href="/" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-vlcc-orange to-[#ff5e33] text-white hover:from-[#e66a4d] hover:to-vlcc-orange font-bold uppercase tracking-wider rounded-xl px-7 py-3 transition-all duration-300 text-[13px] shadow-[0_8px_20px_rgba(255,122,89,0.3)] hover:shadow-[0_12px_25px_rgba(255,122,89,0.4)] w-full sm:w-auto hover:-translate-y-0.5">
              Back to Home
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingSocials />
      <MobileCTA />
    </main>
  );
}

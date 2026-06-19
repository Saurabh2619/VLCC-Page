import Image from 'next/image';

export default function GoogleReviews({ hideWriteReview = false }: { hideWriteReview?: boolean }) {
  const reviews = [
    {
      name: 'Ravinder Kaur',
      date: '21-05-2026',
      text: 'Ms. Monika has a very positive and welcoming aura that instantly makes you feel at ease. She guided me honestly and did not rush the consult...'
    },
    {
      name: 'Kusum Gupta',
      date: '27-04-2026',
      text: 'Environment is refreshing, highlighting the quality of instruction, faculty support, and the learning support. Very supportive VICc School ...'
    },
    {
      name: 'Nakul Poniya',
      date: '24-04-2026',
      text: 'Best Institute, VLCC School of Beauty Sec 49 Gurgaon'
    },
    {
      name: 'Shivani Singh',
      date: '23-04-2026',
      text: 'Very good teachers and environment'
    },
    {
      name: 'Institute',
      date: '18-04-2026',
      text: '5 star rating'
    },
    {
      name: 'Abhi Shukla',
      date: '18-04-2026',
      text: 'Very nice institute and teacher is expert and knowledgeful. Very nice teaching.'
    },
    {
      name: 'Aarzoo Rohilla',
      date: '14-04-2026',
      text: 'Great experience and amazing faculty.'
    }
  ];

  const StarRating = ({ count = 5, size = "w-5 h-5" }) => (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC107" className={size}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-10 md:py-[70px] bg-[#f5f5f5] relative border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="text-center mb-[40px]">
          <span className="block text-vlcc-orange font-bold uppercase tracking-[2px] text-[17px] mb-2.5">What People Say</span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-[#1a1a1a] mb-[15px] font-heading font-bold">Google Reviews</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          
          {/* Left Panel - Overall Rating */}
          <div className="w-full md:w-[350px] shrink-0 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center text-center h-fit md:sticky md:top-24">
            <Image 
              src="/googlelogo.png" 
              alt="Google Logo" 
              width={160} 
              height={60} 
              className="mb-4 object-contain"
            />
            <p className="text-xl text-gray-700 font-medium mt-2">Average rating</p>
            <h3 className="text-[5.5rem] font-bold text-gray-900 leading-none my-2 font-heading tracking-tight">4.9</h3>
            
            <div className="my-2">
              <StarRating size="w-8 h-8" />
            </div>
            
            <p className="text-gray-500 font-medium mt-2 text-sm">Based on 151 Reviews</p>
            
            {!hideWriteReview && (
              <a 
                href="https://www.google.com/search?hl=en-IN&gl=in&q=Third+Floor,+VLCC+School+of+Beauty+Gurgaon+Sector+49,+Sapphire+Mall,+opposite+Orchid+Petal,+Orchid+Petals,+Block+S,+Uppal+Southend,+Sector+49,+Gurugram,+Haryana+122018&ludocid=11179806053362896601&lsig=AB86z5Xit0qaNaRbtjOdll4_ghyI#lrd="
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 border-2 border-[#ff7a59] text-[#ff7a59] font-bold rounded-lg px-6 py-3 w-full hover:bg-orange-50 transition-colors text-lg"
              >
                Write Reviews
              </a>
            )}
          </div>

          {/* Right Panel - Scrollable Reviews */}
          <div className="flex-1 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 md:pr-4 custom-scrollbar">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-1">
                  {/* Google G Logo SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 shrink-0">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.14 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                  
                  <span className="font-semibold text-gray-800 text-[16px] md:text-lg">{review.name}</span>
                  
                  <div className="ml-2">
                    <StarRating size="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 mb-3 pl-8">{review.date}</p>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">{review.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Global Style for Custom Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4d4d4; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c0c0c0; 
        }
      `}} />
    </section>
  );
}

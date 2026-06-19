import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Courses from '@/app/components/Courses';
import Facilities from '@/app/components/Facilities';
import HowToApply from '@/app/components/HowToApply';
import Gallery from '@/app/components/Gallery';
import Recruiters from '@/app/components/Recruiters';
import Testimonials from '@/app/components/Testimonials';
import FAQ from '@/app/components/FAQ';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import MobileCTA from '@/app/components/MobileCTA';
import ScrollReveal from '@/app/components/ScrollReveal';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import GoogleReviews from '@/app/components/GoogleReviews';
import CareerCTA from '@/app/components/CareerCTA';
import YoutubeSection from '@/app/components/YoutubeSection';
import GlobalSpotlight from '@/app/components/GlobalSpotlight';
import EnquiryPopup from '@/app/components/EnquiryPopup';
import { LandingProvider } from '@/app/context/LandingContext';

export const metadata = {
  title: 'VLCC School of Beauty | Makeup Academy',
  description: 'Join VLCC Makeup Academy, the leader in Makeup education. Enroll now for our NSDC approved diploma courses and get 100% placement assistance.',
};

export default function MakeupAcademy() {
  return (
    <LandingProvider isLockedMode={true}>
      <main className="min-h-screen font-body pb-[50px] md:pb-0 relative">
        <Navbar />
        
        {/* Global Cursor Tracking Spotlight */}
        <GlobalSpotlight />

        <Hero />
        
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Courses /></ScrollReveal>
        <ScrollReveal><Facilities /></ScrollReveal>
        <ScrollReveal><WhyChooseUs /></ScrollReveal>
        <ScrollReveal><GoogleReviews hideWriteReview={true} /></ScrollReveal>
        <ScrollReveal><HowToApply /></ScrollReveal>
        <ScrollReveal><Gallery /></ScrollReveal>
        <ScrollReveal><Recruiters /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><YoutubeSection /></ScrollReveal>
        <ScrollReveal><CareerCTA /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
        
        <MobileCTA />
        <EnquiryPopup />
      </main>
    </LandingProvider>
  );
}

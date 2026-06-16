import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import HowToApply from './components/HowToApply';
import Gallery from './components/Gallery';
import Recruiters from './components/Recruiters';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollReveal from './components/ScrollReveal';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleReviews from './components/GoogleReviews';
import CareerCTA from './components/CareerCTA';
import YoutubeSection from './components/YoutubeSection';

export const metadata = {
  title: 'VLCC School of Beauty | Diploma in Makeup & Styling',
  description: 'Join VLCC School of Beauty, the leader in Makeup, Skin, and Hair education. Enroll now for our NSDC approved diploma courses and get 100% placement assistance.',
};

import GlobalSpotlight from './components/GlobalSpotlight';

import EnquiryPopup from './components/EnquiryPopup';

export default function Home() {
  return (
    <main className="min-h-screen font-body pb-[50px] md:pb-0 relative">
      <Navbar />
      
      {/* Global Cursor Tracking Spotlight */}
      <GlobalSpotlight />

      <Hero />
      
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Courses /></ScrollReveal>
      <ScrollReveal><Facilities /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><GoogleReviews /></ScrollReveal>
      <ScrollReveal><HowToApply /></ScrollReveal>
      <ScrollReveal><Gallery /></ScrollReveal>
      <ScrollReveal><Recruiters /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><YoutubeSection /></ScrollReveal>
      <ScrollReveal><CareerCTA /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
      
      <MobileCTA />
      <EnquiryPopup />
    </main>
  );
}


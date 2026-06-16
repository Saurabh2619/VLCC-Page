import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Esthiology Course in Gurgaon | Skin Care Training",
  description: "Learn advanced skin care, facial therapies, and dermal aesthetics. Turn your passion for beauty into a professional skincare career with VLCC."
};

export default function EsthiologyLandingPage() {
  const data = landingPagesData['best-esthilogy-course-in-gurgaon'];
  return <LandingPageTemplate data={data} />;
}

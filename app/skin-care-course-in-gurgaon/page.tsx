import { Metadata } from 'next';
import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: "Best Skin Care Course in Gurgaon | Skincare Training",
  description: "Enroll in the best skin care course in Gurgaon. Master facials, skincare therapies, advanced beauty treatments & earn industry-recognized certification.",
};

export default function SkinCareLandingPage() {
  const data = landingPagesData['skin-care-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

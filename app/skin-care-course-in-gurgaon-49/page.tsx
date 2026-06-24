import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Skin Care Course in Gurgaon | VLCC Institute",
  description: "Join VLCC Institute for the best skin care and aesthetics course in Gurgaon. Learn advanced facial therapies and skin treatments."
};

export default function SkinCareLandingPage49() {
  const data = landingPagesData['skin-care-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

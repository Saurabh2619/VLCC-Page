import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Best Skin Care Course in Gurgaon | VLCC Institute",
  description: "Join VLCC Institute for the best skin care and aesthetics course in Gurgaon. Learn advanced facial therapies and skin treatments."
};

export default function SkinCareLandingPage49() {
  notFound(); // Remove this line to make the -49 page accessible again (Future Scope)
  const data = landingPagesData['skin-care-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

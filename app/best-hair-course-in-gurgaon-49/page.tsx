import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Hair Course in Gurgaon | VLCC Institute",
  description: "Become a certified hair stylist with hands-on training in hair cutting, coloring, chemical treatments, and creative up-styles."
};

export default function HairCourseLandingPage() {
  const data = landingPagesData['best-hair-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

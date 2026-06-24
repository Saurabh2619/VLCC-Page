import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Best Hair Course in Gurgaon | VLCC Institute",
  description: "Become a certified hair stylist with hands-on training in hair cutting, coloring, chemical treatments, and creative up-styles."
};

export default function HairCourseLandingPage() {
  notFound(); // Remove this line to make the -49 page accessible again (Future Scope)
  const data = landingPagesData['best-hair-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Hair Course in Gurgaon | Hair Training Academy | VLCC",
  description: "Join the best hair course in Gurgaon at the best hair training academy. Learn hair cutting, styling, coloring & treatments with placement support.",
};

export default function CoursePage() {
  const data = landingPagesData['best-hair-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

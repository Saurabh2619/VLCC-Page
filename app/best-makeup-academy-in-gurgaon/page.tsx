import { Metadata } from 'next';
import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: "Best Makeup Academy in Gurgaon | Makeup Course | VLCC",
  description: "Join the best makeup academy in Gurgaon for professional makeup, bridal makeup & certification courses. Get expert training and placement support at VLCC.",
};

export default function CoursePage() {
  const data = landingPagesData['best-makeup-academy-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

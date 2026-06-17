import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Makeup Course in Gurgaon | Professional Makeup Artist Training",
  description: "Kickstart your career as a professional makeup artist. Learn bridal, party, and HD makeup techniques from industry veterans with 100% placement assistance."
};

export default function MakeupLandingPage() {
  const data = landingPagesData['best-makeup-academy-in-gurgaon'];
  return <LandingPageTemplate data={data} />;
}

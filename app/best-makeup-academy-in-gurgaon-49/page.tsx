import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Best Makeup Course in Gurgaon | Professional Makeup Artist Training",
  description: "Kickstart your career as a professional makeup artist. Learn bridal, party, and HD makeup techniques from industry veterans with 100% placement assistance."
};

export default function MakeupLandingPage() {
  notFound(); // Remove this line to make the -49 page accessible again (Future Scope)
  const data = landingPagesData['best-makeup-academy-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

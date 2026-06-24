import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Best Nail Extension Course in Gurgaon | VLCC Institute",
  description: "Become a certified nail artist with hands-on training in nail extensions, gel nails, acrylic nails, and creative nail art techniques."
};

export default function NailArtistryLandingPage() {
  notFound(); // Remove this line to make the -49 page accessible again (Future Scope)
  const data = landingPagesData['best-nail-extension-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

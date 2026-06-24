import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Aesthetic Laser Treatment Course in Gurgaon | VLCC Institute",
  description: "Join VLCC Institute for the best aesthetic laser treatment course in Gurgaon. Learn advanced laser technologies, skin science, and clinical treatments."
};

export default function LaserLandingPage49() {
  const data = landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Aesthetic Laser Treatment Course in Gurgaon | Clinical Aesthetics",
  description: "Upgrade your skills with advanced clinical aesthetics. Learn Laser Hair Reduction, Chemical Peels, and Medispa treatments from clinical experts."
};

export default function AestheticLaserLandingPage() {
  const data = landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'];
  return <LandingPageTemplate data={data} />;
}

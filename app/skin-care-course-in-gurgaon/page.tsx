import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: 'VLCC Institute - skin-care-course-in-gurgaon',
  description: 'Join VLCC Institute for skin care and wellness training with industry-focused certification programs.',
};

export default function SkinCareLandingPage() {
  const data = landingPagesData['skin-care-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

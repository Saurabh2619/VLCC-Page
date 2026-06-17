import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: 'VLCC Institute - best-makeup-academy-in-gurgaon',
  description: 'Join VLCC Institute for the best courses in Gurgaon.',
};

export default function CoursePage() {
  const data = landingPagesData['best-makeup-academy-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

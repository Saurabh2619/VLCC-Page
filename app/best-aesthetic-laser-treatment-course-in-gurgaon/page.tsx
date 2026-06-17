import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: 'VLCC Institute - best-aesthetic-laser-treatment-course-in-gurgaon',
  description: 'Join VLCC Institute for the best courses in Gurgaon.',
};

export default function CoursePage() {
  const data = landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

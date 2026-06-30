import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: "Best Nail Extension Course in Gurgaon | Nail Art | VLCC",
  description: "Master nail extensions, nail art, gel, acrylic & manicure techniques with the best nail extension course in Gurgaon. Get certified at VLCC.",
};

export default function CoursePage() {
  const data = landingPagesData['best-nail-extension-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

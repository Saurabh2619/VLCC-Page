import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: "Nutrition Training Academy in Gurgaon | Nutrition Certification",
  description: "Build a career in nutrition with Gurgaon’s leading nutrition training academy. Get practical learning, expert guidance & certification at VLCC.",
};

export default function CoursePage() {
  const data = landingPagesData['best-nutrition-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

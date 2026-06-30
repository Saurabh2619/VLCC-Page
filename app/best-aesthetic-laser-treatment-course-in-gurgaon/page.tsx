import { landingPagesData } from '@/app/data/landingPagesData';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';

export const metadata = {
  title: "Best Laser Aesthetics Training Academy | VLCC Gurgaon",
  description: "Join the best laser aesthetics training academy in Gurgaon. Learn advanced laser treatments, skin aesthetics & earn certification with VLCC.",
};

export default function CoursePage() {
  const data = landingPagesData['best-aesthetic-laser-treatment-course-in-gurgaon'];
  return <LandingPageTemplate data={data} isWebsiteMode={true} />;
}

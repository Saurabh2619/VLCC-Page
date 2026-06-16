import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Nutrition Course in Gurgaon | Dietetics Training",
  description: "Promote health and wellness globally. Learn clinical nutrition, weight management, and diet planning from certified dietitians."
};

export default function NutritionLandingPage() {
  const data = landingPagesData['best-nutrition-course-in-gurgaon'];
  return <LandingPageTemplate data={data} />;
}

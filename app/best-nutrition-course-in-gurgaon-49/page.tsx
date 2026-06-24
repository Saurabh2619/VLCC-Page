import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Nutrition Course in Gurgaon | Dietetics Training Academy",
  description: "Join VLCC Institute for the best nutrition and dietetics course in Gurgaon. Learn clinical nutrition, sports nutrition, and weight management."
};

export default function NutritionLandingPage49() {
  const data = landingPagesData['best-nutrition-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

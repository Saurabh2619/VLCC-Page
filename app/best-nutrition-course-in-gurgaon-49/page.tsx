import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Best Nutrition Course in Gurgaon | Dietetics Training Academy",
  description: "Join VLCC Institute for the best nutrition and dietetics course in Gurgaon. Learn clinical nutrition, sports nutrition, and weight management."
};

export default function NutritionLandingPage49() {
  notFound(); // Remove this line to make the -49 page accessible again (Future Scope)
  const data = landingPagesData['best-nutrition-course-in-gurgaon-49'];
  return <LandingPageTemplate data={data} />;
}

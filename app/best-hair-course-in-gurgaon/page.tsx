import { Metadata } from 'next';
import LandingPageTemplate from '@/app/components/landing/LandingPageTemplate';
import { landingPagesData } from '@/app/data/landingPagesData';

export const metadata: Metadata = {
  title: "Best Hair Styling Course in Gurgaon | Advanced Hair Design",
  description: "Transform your passion for hair into a rewarding career. Learn advanced haircuts, coloring, keratin treatments, and styling from industry experts."
};

export default function HairLandingPage() {
  const data = landingPagesData['best-hair-course-in-gurgaon'];
  return <LandingPageTemplate data={data} />;
}

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-06-23T08:54:55+00:00';
  
  return [
    {
      url: 'https://www.vlcceducation.com/',
      lastModified: new Date(lastModified),
      priority: 1.00,
    },
    {
      url: 'https://www.vlcceducation.com/best-makeup-academy-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
    {
      url: 'https://www.vlcceducation.com/best-hair-course-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
    {
      url: 'https://www.vlcceducation.com/skin-care-course-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
    {
      url: 'https://www.vlcceducation.com/best-nail-extension-course-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
    {
      url: 'https://www.vlcceducation.com/best-aesthetic-laser-treatment-course-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
    {
      url: 'https://www.vlcceducation.com/best-nutrition-course-in-gurgaon',
      lastModified: new Date(lastModified),
      priority: 0.80,
    },
  ];
}

import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

// Always generate fresh sitemap on request so added/deleted blogs reflect immediately
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.vlcceducation.com';
  const lastModified = '2026-06-23T08:54:55+00:00';

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.00,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/best-makeup-academy-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/best-hair-course-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/skin-care-course-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/best-nail-extension-course-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/best-aesthetic-laser-treatment-course-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/best-nutrition-course-in-gurgaon`,
      lastModified: new Date(lastModified),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
  ];

  // 2. Dynamic Blog Pages from Supabase
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug, created_at')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (blogs && blogs.length > 0) {
      blogUrls = blogs.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.created_at || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.80,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [...staticPages, ...blogUrls];
}

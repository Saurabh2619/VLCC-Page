import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'VLCC Beauty & Wellness Blog | Expert Tips & Industry Insights',
  description: 'Read the latest beauty tips, makeup tutorials, hair care guides, and industry trends from VLCC School of Beauty experts.',
};

// Revalidate this page every 1 hour (ISR)
export const revalidate = 3600;

export default async function BlogsIndex() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('title, slug, excerpt, cover_image, created_at')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 font-body">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-vlcc-orange text-white py-20 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Beauty & Wellness Blog</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Expert advice, industry trends, and student success stories from VLCC School of Beauty.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {error ? (
            <div className="text-center py-20 text-red-500">Failed to load blogs. Please try again later.</div>
          ) : !blogs || blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg">No blogs published yet. Check back soon!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  {blog.cover_image ? (
                    <div className="w-full h-56 relative overflow-hidden bg-gray-100">
                      <img 
                        src={blog.cover_image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                      <img src="/vlcc-logo.png" alt="VLCC" className="h-12 opacity-50 grayscale" />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-bold text-vlcc-orange uppercase tracking-wider mb-2">
                      {new Date(blog.created_at).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-vlcc-orange transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="font-bold text-sm text-gray-900 group-hover:text-vlcc-orange flex items-center gap-2 mt-auto">
                      Read Full Article <span className="text-lg leading-none">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

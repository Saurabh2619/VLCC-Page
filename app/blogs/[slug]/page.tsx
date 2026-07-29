import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import BlogSidebar from '@/app/components/BlogSidebar';

// Force the page to always fetch fresh data instantly
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate SEO Metadata dynamically based on the blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, meta_description, keywords, cover_image')
    .eq('slug', slug)
    .single();

  if (!blog) {
    return {
      title: 'Blog Not Found | VLCC',
    };
  }

  return {
    title: `${blog.title} | VLCC Beauty Blog`,
    description: blog.meta_description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.meta_description,
      images: blog.cover_image ? [blog.cover_image] : [],
    },
  };
}

const cleanBlogContentHtml = (html: string, title: string) => {
  if (!html) return '';
  let cleaned = html
    .replace(/<p>\s*(?:<br\s*\/?>|&nbsp;|\s)*\s*<\/p>/gi, '')
    .replace(
      /<p>\s*(?:<strong>|<b>)(.*?)(?:<\/strong>|<\/b>)\s*<\/p>/gi,
      (match: string, p1: string) => {
        const textLength = p1.replace(/<[^>]*>?/gm, '').trim().length;
        if (textLength > 0 && textLength <= 120) {
          return `<h2>${p1}</h2>`;
        }
        return match;
      }
    )
    .replace(/<\/table>\s*<table[^>]*>/gi, '')
    .replace(/<\/tbody>\s*<tbody[^>]*>/gi, '')
    .replace(
      /<table/gi,
      '<div class="w-full overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm"><table'
    )
    .replace(/<\/table>/gi, '</table></div>');

  if (title) {
    const normalizedTitle = title.trim().toLowerCase().replace(/\s+/g, ' ');
    cleaned = cleaned.replace(
      /^\s*(?:<h[1-6][^>]*>|<p>[^<]*(?:<strong>|<b>)?)(\s*[^<]+?\s*)(?:<\/h[1-6]>|(?:<\/strong>|<\/b>)?[^<]*<\/p>)/i,
      (match, textContent) => {
        const normalizedText = textContent.replace(/<[^>]*>/g, '').trim().toLowerCase().replace(/\s+/g, ' ');
        if (normalizedText === normalizedTitle) {
          return '';
        }
        return match;
      }
    );
  }
  return cleaned;
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-body">
      <Navbar />
      
      <article className="pt-28 pb-16 px-4 max-w-7xl mx-auto">
        {/* 1. Cover Image at the very top - Exactly 1200x750 */}
        {blog.cover_image && (
          <div className="mb-12 w-full max-w-[1200px] aspect-[1200/750] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
            <img 
              src={blog.cover_image} 
              alt={blog.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
        )}

        {/* 2. Main 2-Column Layout: Left (Title -> Meta -> Content) | Right (Table of Contents / Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (Span 8) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Title at left */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 leading-tight mb-5 text-left">
              {blog.title}
            </h1>

            {/* Breadcrumb under title */}
            <nav className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 mb-5 font-medium w-full gap-x-2 gap-y-1">
              <Link href="/" className="hover:text-vlcc-orange transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/blogs" className="hover:text-vlcc-orange transition-colors">Blogs</Link>
              {(blog.category || blog.sub_category) && (
                <>
                  <span className="text-gray-300">/</span>
                  <span className="text-vlcc-orange font-semibold">
                    {blog.category}{blog.category && blog.sub_category ? ' / ' : ''}{blog.sub_category}
                  </span>
                </>
              )}
            </nav>

            {/* Author & Date under breadcrumb */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wider mb-5">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-vlcc-orange text-white flex items-center justify-center text-xs font-black shadow-sm">
                  V
                </span>
                <span className="text-gray-900 font-heading">VLCC Experts</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span className="text-gray-500 font-normal">
                Published: {new Date(blog.created_at).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            {/* Keywords / Tags under Author & Date */}
            {blog.keywords && (
              <div className="flex flex-wrap gap-2 w-full mb-8 pb-6 border-b border-gray-200">
                {blog.keywords.split(',').map((tag: string, index: number) => (
                  <span key={index} className="px-3.5 py-1 bg-orange-50/80 text-vlcc-orange border border-orange-200/60 text-xs font-semibold rounded-full tracking-wide shadow-xs hover:bg-orange-100/80 transition-colors">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Blog Content (without repeating title) */}
            <div 
              className="prose prose-base md:prose-lg max-w-none break-words prose-p:mb-4 prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-vlcc-orange hover:prose-a:text-[#e0651c] prose-img:rounded-2xl prose-img:shadow-lg prose-table:border-collapse prose-table:w-full prose-table:m-0 prose-td:border prose-td:border-gray-200 prose-td:p-3 md:prose-td:p-4 prose-td:text-gray-700 prose-td:min-w-[150px] prose-th:border prose-th:border-gray-200 prose-th:p-3 md:prose-th:p-4 prose-th:bg-orange-50 prose-th:text-left prose-th:font-heading prose-th:font-bold prose-th:text-gray-900 prose-th:min-w-[150px] [&_tr:first-child_td]:bg-orange-50 [&_tr:first-child_td]:font-bold [&_tr:first-child_td]:text-gray-900 [&_tr:first-child_td]:border-b-2 [&_tr:first-child_td]:border-orange-200 [&_tbody_tr:nth-child(even)]:bg-gray-50/50"
              dangerouslySetInnerHTML={{ 
                __html: cleanBlogContentHtml(blog.content, blog.title)
              }}
            />
          </div>

          {/* Right Side Table of Contents & Sidebar Column (Span 4) */}
          <aside className="lg:col-span-4">
            <BlogSidebar title={blog.title} />
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}

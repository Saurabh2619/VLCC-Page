import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import BlogSidebar from '@/app/components/BlogSidebar';

// Force the page to always fetch fresh data instantly
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
      
      <article className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Option 3: Minimalist Elegance Hero */}
        <header className="mb-12 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex justify-center text-sm text-gray-500 mb-8 font-semibold w-full">
            <Link href="/" className="hover:text-vlcc-orange transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blogs" className="hover:text-vlcc-orange transition-colors">Blogs</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 truncate max-w-[200px] md:max-w-none">{blog.title}</span>
          </nav>

          {/* Tags/Keywords */}
          {blog.keywords && (
            <div className="mb-6 flex flex-wrap justify-center gap-2 w-full">
              {blog.keywords.split(',').map((tag: string, index: number) => (
                <span key={index} className="px-4 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 text-xs font-bold rounded-full uppercase tracking-widest shadow-sm hover:border-vlcc-orange transition-colors">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 leading-tight mb-8">
            {blog.title}
          </h1>
          
          {/* Author & Date */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-bold text-gray-600 uppercase tracking-widest w-full">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-vlcc-orange text-white flex items-center justify-center text-sm">
                V
              </span>
              <span className="text-gray-900">VLCC Experts</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>
              {new Date(blog.created_at).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </header>

        {/* Cover Image */}
        {blog.cover_image && (
          <div className="mb-16 w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
            <img 
              src={blog.cover_image} 
              alt={blog.title} 
              className="w-full h-auto max-h-[600px] object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 min-w-0">

            {/* Blog Content */}
            <div 
              className="prose prose-base md:prose-lg max-w-none break-words prose-p:mb-4 prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-vlcc-orange hover:prose-a:text-[#e0651c] prose-img:rounded-2xl prose-img:shadow-lg prose-table:border-collapse prose-table:w-full prose-table:m-0 prose-td:border prose-td:border-gray-200 prose-td:p-3 md:prose-td:p-4 prose-td:text-gray-700 prose-td:min-w-[150px] prose-th:border prose-th:border-gray-200 prose-th:p-3 md:prose-th:p-4 prose-th:bg-orange-50 prose-th:text-left prose-th:font-heading prose-th:font-bold prose-th:text-gray-900 prose-th:min-w-[150px] [&_tr:first-child_td]:bg-orange-50 [&_tr:first-child_td]:font-bold [&_tr:first-child_td]:text-gray-900 [&_tr:first-child_td]:border-b-2 [&_tr:first-child_td]:border-orange-200 [&_tbody_tr:nth-child(even)]:bg-gray-50/50 mx-auto"
              dangerouslySetInnerHTML={{ 
                __html: blog.content
                  // 1. Remove useless empty paragraphs (e.g. <p><br></p>) created by pressing Enter too many times
                  .replace(/<p>\s*(?:<br\s*\/?>|&nbsp;|\s)*\s*<\/p>/gi, '')
                  // 2. Convert bold paragraphs to H2 for SEO
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
                  // 3. Merge consecutive tables (often caused by pasting from Word where headers separate from body)
                  .replace(/<\/table>\s*<table[^>]*>/gi, '')
                  .replace(/<\/tbody>\s*<tbody[^>]*>/gi, '')
                  // 4. Wrap tables in a responsive scrolling div!
                  .replace(
                    /<table/gi,
                    '<div class="w-full overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm"><table'
                  )
                  .replace(/<\/table>/gi, '</table></div>')
              }}
            />
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4">
            <BlogSidebar title={blog.title} />
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}

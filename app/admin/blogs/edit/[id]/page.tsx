'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/app/components/admin/RichTextEditor'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-50 animate-pulse rounded-lg border border-gray-200 flex items-center justify-center">Loading Editor...</div>
});

export default function EditBlog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
  };

  const [keywords, setKeywords] = useState('');
  
  // Editor mode
  const [htmlContent, setHtmlContent] = useState('');
  const [editorImageIds, setEditorImageIds] = useState<string[]>([]);

  const handleImageUpload = (fileId: string) => {
    setEditorImageIds(prev => [...prev, fileId]);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch('/api/admin/blogs', { cache: 'no-store' });
        const data = await res.json();
        if (data.success) {
          const blog = data.blogs.find((b: any) => b.id === id);
          if (blog) {
            setTitle(blog.title);
            setSlug(blog.slug || slugify(blog.title));
            setCategory(blog.category || '');
            setSubCategory(blog.sub_category || '');
            setMetaDesc(blog.meta_description || '');
            if (blog.keywords) setKeywords(blog.keywords);
            setIsPublished(blog.is_published);
            setHtmlContent(blog.content || '');
          } else {
            setError("Blog not found");
          }
        }
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setIsFetching(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required.');
      return;
    }
    
    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug || slugify(title));
    formData.append('meta_description', metaDesc);
    formData.append('is_published', isPublished.toString());
    formData.append('keywords', keywords);
    formData.append('category', category);
    formData.append('sub_category', subCategory);
    
    if (coverImage) {
      formData.append('cover_image', coverImage);
    }

    let finalHtml = htmlContent;
      const finalImageIds = [...editorImageIds];
      
      const regex = /src="(data:image\/([^;]+);base64,([^"]+))"/g;
      const matches = [...htmlContent.matchAll(regex)];
      
      for (const match of matches) {
        const dataUrl = match[1];
        const mimeType = match[2];
        try {
          const fetchedData = await fetch(dataUrl);
          const blob = await fetchedData.blob();
          const file = new File([blob], `pasted-${Date.now()}.${mimeType}`, { type: `image/${mimeType}` });
          
          const imgFormData = new FormData();
          imgFormData.append('image', file);
          
          const uploadRes = await fetch('/api/admin/upload-image', { method: 'POST', body: imgFormData });
          const data = await uploadRes.json();
          
          if (data.success) {
            finalHtml = finalHtml.replace(dataUrl, data.url);
            finalImageIds.push(data.fileId);
          }
        } catch (e) {
          console.error("Failed to upload pasted image", e);
        }
      }

      formData.append('html_content', finalHtml);
      formData.append('editor_image_ids', JSON.stringify(finalImageIds));

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PUT',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        router.push('/admin/blogs');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to update blog. Check connection.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-vlcc-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/blogs" className="text-gray-500 hover:text-gray-900">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-heading font-bold text-gray-900">Edit Blog</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-body">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-heading">
              Blog Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vlcc-orange focus:border-vlcc-orange outline-none font-body"
              placeholder="e.g. 5 Best Makeup Tips for Summer"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-gray-700 font-heading">
                Blog Slug (URL Link) *
              </label>
              <button
                type="button"
                onClick={() => setSlug(slugify(title))}
                className="text-xs font-semibold text-vlcc-orange hover:underline font-body bg-orange-50 px-2.5 py-1 rounded border border-vlcc-orange/20"
              >
                make slug from title
              </button>
            </div>
            <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-vlcc-orange focus-within:border-vlcc-orange">
              <span className="bg-gray-100 px-3 py-3 text-gray-500 text-sm font-body border-r border-gray-300 select-none">
                /blogs/
              </span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-3 outline-none font-body text-sm"
                placeholder="e.g. 5-best-makeup-tips"
                required
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5 font-body">
              Enter a custom URL slug or click &apos;make slug from title&apos; to generate from the title.
            </p>
          </div>

          {/* Optional Category & Sub Category Section */}
          <div className="bg-orange-50/60 p-5 rounded-xl border border-orange-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-gray-700 font-heading">
                Blog Category &amp; Sub Category <span className="text-gray-400 font-normal text-xs">(Optional - Editor Choice)</span>
              </label>
              {(category || subCategory) && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-vlcc-orange text-white shadow-sm">
                  {category || '...'}{subCategory ? ` > ${subCategory}` : ''}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vlcc-orange focus:border-vlcc-orange outline-none font-body text-sm bg-white"
                  placeholder="Main category (e.g. Nails)"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vlcc-orange focus:border-vlcc-orange outline-none font-body text-sm bg-white"
                  placeholder="Sub category (e.g. Nail Extension)"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 font-body">
              Example &rarr; Main: <strong>Nails</strong>, Sub: <strong>Nail Extension</strong>. Displays as <strong>Nails &gt; Nail Extension</strong>. Not mandatory.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-heading">
              Blog Content *
            </label>
            <RichTextEditor 
              value={htmlContent} 
              onChange={setHtmlContent} 
              onImageUpload={handleImageUpload}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-heading">
              Replace Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 transition-colors font-body border border-gray-300 rounded-lg"
            />
             <p className="mt-2 text-xs text-gray-500 font-body">
              Leave this empty to keep the current cover image.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-heading">
              SEO Meta Description
            </label>
            <textarea
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vlcc-orange focus:border-vlcc-orange outline-none font-body min-h-[100px]"
              placeholder="A short description for Google search results..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-heading">
              SEO Keywords
            </label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vlcc-orange focus:border-vlcc-orange outline-none font-body"
              placeholder="e.g. VLCC, makeup course, summer skincare, beauty tips (comma separated)"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="publish"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="w-5 h-5 text-vlcc-orange rounded border-gray-300 focus:ring-vlcc-orange"
            />
            <label htmlFor="publish" className="text-sm font-bold text-gray-700 font-heading cursor-pointer">
              Published
            </label>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
            <Link 
              href="/admin/blogs"
              className="px-6 py-3 rounded-lg font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors font-heading"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-vlcc-orange hover:bg-[#e0651c] text-white px-8 py-3 rounded-lg font-bold font-heading transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? 'Updating...' : 'Update Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

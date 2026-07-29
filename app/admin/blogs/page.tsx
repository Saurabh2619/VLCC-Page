'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Blog = {
  id: string;
  title: string;
  slug: string;
  is_published: boolean;
  created_at: string;
  updated_at?: string;
  category?: string;
  sub_category?: string;
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blogs', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_published: !currentStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.map(b => b.id === id ? {
          ...b,
          is_published: !currentStatus,
          updated_at: new Date().toISOString()
        } : b));
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This will also delete all associated images from ImageKit.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert("Failed to delete: " + data.message);
      }
    } catch (error) {
      alert("Error deleting blog.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Blogs</h1>
          <p className="text-gray-500 font-body mt-1">Manage your website's blog posts.</p>
        </div>
        <Link 
          href="/admin/blogs/create" 
          className="bg-vlcc-orange hover:bg-[#e0651c] text-white px-6 py-2.5 rounded-lg font-bold font-heading transition-colors shadow-sm flex items-center gap-2"
        >
          <span>+</span> Create New Blog
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500 font-body">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center">
            <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">No blogs found</h3>
            <p className="text-gray-500 font-body mb-6">You haven't published any blogs yet.</p>
            <Link 
              href="/admin/blogs/create" 
              className="text-vlcc-orange font-bold hover:underline"
            >
              Create your first blog
            </Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-sm font-semibold font-body uppercase tracking-wider">
                <th className="p-4">Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-gray-900 font-heading">{blog.title}</p>
                    <Link href={`/blogs/${blog.slug}`} target="_blank" className="text-sm text-gray-500 hover:text-vlcc-orange font-body truncate max-w-[200px] block">
                      /{blog.slug}
                    </Link>
                    {(blog.category || blog.sub_category) && (
                      <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-orange-50 text-vlcc-orange border border-vlcc-orange/20">
                        {blog.category}{blog.category && blog.sub_category ? ' > ' : ''}{blog.sub_category}
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold font-body border ${
                      blog.is_published 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                    }`}>
                      {blog.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold font-body border ${
                      blog.is_published 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-yellow-50 text-yellow-800 border-yellow-200'
                    }`}>
                      {new Date(blog.updated_at || blog.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-3">
                    <button
                      onClick={() => handleTogglePublish(blog.id, blog.is_published)}
                      className={`font-semibold font-body text-sm hover:underline ${
                        blog.is_published ? 'text-yellow-700 hover:text-yellow-900' : 'text-green-600 hover:text-green-800'
                      }`}
                    >
                      {blog.is_published ? 'Draft' : 'Publish'}
                    </button>
                    <Link 
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold font-body text-sm hover:underline"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(blog.id, blog.title)}
                      className="text-red-600 hover:text-red-800 font-semibold font-body text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

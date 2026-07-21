'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex justify-center">
          <img src="/vlcc-logo.png" alt="VLCC" className="h-10 object-contain" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/admin/blogs" 
            className={`block px-4 py-3 rounded-lg font-body text-sm font-semibold transition-colors ${
              pathname.includes('/admin/blogs') 
                ? 'bg-orange-50 text-vlcc-orange' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Manage Blogs
          </Link>
          <Link 
            href="/" 
            target="_blank"
            className="block px-4 py-3 rounded-lg font-body text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            View Live Website
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-body"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <h2 className="text-xl font-heading font-bold text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-vlcc-orange text-white flex items-center justify-center font-bold text-sm">
              A
            </span>
            <span className="text-sm font-body font-semibold text-gray-700">Admin User</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

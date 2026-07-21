'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogSidebar({ title }: { title: string }) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);

    // Find all headings inside the .prose container
    const article = document.querySelector('.prose');
    if (!article) return;

    const rawNodes = Array.from(article.querySelectorAll('h1, h2, h3, p'));
    
    // Filter to get actual headings AND pseudo-headings (bolded paragraphs)
    const headings = rawNodes.filter(node => {
      if (node.tagName.match(/^H[1-3]$/)) return true;
      
      // If it's a P tag, check if it acts like a heading for non-tech users
      if (node.tagName === 'P') {
        const text = node.textContent?.trim() || '';
        if (text.length === 0 || text.length > 120) return false; // Too long to be a heading
        
        // Check if the entire paragraph is wrapped in bold
        const strong = node.querySelector('strong, b');
        if (strong && strong.textContent?.trim() === text) {
          return true; // Treat this as a heading!
        }
      }
      return false;
    });
    
    const items: TOCItem[] = headings.map((heading, index) => {
      // Create a slug for the ID if it doesn't have one
      if (!heading.id) {
        heading.id = heading.textContent
          ? heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || `heading-${index}`
          : `heading-${index}`;
      }
      
      // Determine level: H1=1, H2=2, H3=3, P(Bold)=2
      let level = 2;
      if (heading.tagName.match(/^H[1-3]$/)) {
        level = Number(heading.tagName.replace('H', ''));
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: level,
      };
    });

    setToc(items);

    // Intersection Observer for highlighting active TOC item
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const handleShare = (platform: 'whatsapp' | 'facebook') => {
    const text = `Read this amazing article: ${title}`;
    let url = '';

    if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + currentUrl)}`;
    } else if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    }

    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="sticky top-24 space-y-8 font-body">
      {/* Table of Contents */}
      {toc.length > 0 && (
        <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
          <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 border-b border-orange-200 pb-2">
            Table of Contents
          </h3>
          <ul className="space-y-3 text-sm">
            {toc.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                className={`transition-colors duration-200 ${
                  activeId === item.id
                    ? 'text-vlcc-orange font-semibold'
                    : 'text-gray-600 hover:text-vlcc-orange'
                }`}
              >
                <a href={`#${item.id}`} className="block leading-tight break-words whitespace-normal">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share Section */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-heading font-bold text-base text-gray-900 mb-4 text-center">
          Share this article
        </h3>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleShare('facebook')}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
            aria-label="Share on Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={() => handleShare('whatsapp')}
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20b858] transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
            aria-label="Share on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

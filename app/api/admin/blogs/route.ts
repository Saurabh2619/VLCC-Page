import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { processWordDoc } from '@/lib/wordParser';
import { imagekit } from '@/lib/imagekit';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json({ success: true, blogs: data });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const meta_description = formData.get('meta_description') as string;
    const is_published = formData.get('is_published') === 'true';
    const keywords = formData.get('keywords') as string || '';
    
    const htmlContent = formData.get('html_content') as string | null;
    const editorImageIds = formData.get('editor_image_ids') as string | null;
    
    const coverImageFile = formData.get('cover_image') as File | null;

    if (!title) {
      return NextResponse.json({ success: false, message: 'Title is required' }, { status: 400 });
    }
    
    if (!htmlContent) {
       return NextResponse.json({ success: false, message: 'Content is required' }, { status: 400 });
    }

    // 1. Generate Slug
    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // Check if slug exists
    const { data: existing } = await supabase.from('blogs').select('id').eq('slug', slug);
    if (existing && existing.length > 0) {
      slug = `${slug}-${Date.now()}`; // Make unique
    }

    // 2. Upload Cover Image (if provided)
    let cover_image_url = '';
    let cover_image_id = '';
    const allImageIds: string[] = [];

    if (coverImageFile) {
      const buffer = Buffer.from(await coverImageFile.arrayBuffer());
      const uploadRes: any = await new Promise((resolve, reject) => {
        imagekit.upload({
          file: buffer,
          fileName: `cover-${Date.now()}`,
          useUniqueFileName: true,
          folder: '/vlcc-blogs/covers',
        }, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
      cover_image_url = uploadRes.url;
      cover_image_id = uploadRes.fileId;
      allImageIds.push(cover_image_id);
    }

    // 3. Process Content
    let finalHtml = htmlContent || '';
    let excerpt = '';
    
    if (editorImageIds) {
      try {
         const parsedIds = JSON.parse(editorImageIds);
         if (Array.isArray(parsedIds)) {
           allImageIds.push(...parsedIds);
         }
      } catch (e) {
        console.error("Failed to parse editorImageIds");
      }
    }

    // Create excerpt from HTML (strip tags, take first 150 chars)
    excerpt = finalHtml.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

    // 4. Save to Supabase
    const { data, error } = await supabase.from('blogs').insert([
      {
        title,
        slug,
        excerpt,
        content: finalHtml,
        keywords: keywords,
        cover_image: cover_image_url,
        meta_description: meta_description || excerpt,
        images: allImageIds, // Save all imageKit fileIds for future deletion
        is_published,
      }
    ]).select();

    if (error) throw error;

    return NextResponse.json({ success: true, blog: data[0] });
  } catch (error: any) {
    console.error("POST /api/admin/blogs Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

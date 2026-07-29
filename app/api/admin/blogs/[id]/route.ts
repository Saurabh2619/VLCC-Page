import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { processWordDoc } from '@/lib/wordParser';
import { imagekit } from '@/lib/imagekit';

const cleanExcerptText = (html: string) => {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&rsquo;/gi, "'")
    .replace(/&lsquo;/gi, "'")
    .replace(/&ldquo;/gi, '"')
    .replace(/&rdquo;/gi, '"')
    .replace(/&mdash;/gi, '—')
    .replace(/&ndash;/gi, '–')
    .replace(/&#[0-9]+;/gi, ' ')
    .replace(/&#x[a-f0-9]+;/gi, ' ')
    .replace(/&[a-z0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 150) + '...';
};

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // 1. Fetch the blog to get image IDs
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('images')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Delete images from ImageKit
    if (blog && blog.images && Array.isArray(blog.images)) {
      for (const fileId of blog.images) {
        try {
          await new Promise((resolve, reject) => {
            imagekit.deleteFile(fileId, (err, result) => {
              if (err) reject(err);
              else resolve(result);
            });
          });
        } catch (imgError) {
          console.error(`Failed to delete image ${fileId} from ImageKit`, imgError);
          // Continue deleting other images even if one fails
        }
      }
    }

    // 3. Delete from Supabase
    const { error: deleteError } = await supabase.from('blogs').delete().eq('id', id);
    if (deleteError) throw deleteError;

    return NextResponse.json({ success: true, message: 'Blog and associated images deleted successfully' });
  } catch (error: any) {
    console.error("DELETE /api/admin/blogs/[id] Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const meta_description = formData.get('meta_description') as string;
    const is_published = formData.get('is_published') === 'true';
    const keywords = formData.get('keywords') as string || '';
    const category = formData.get('category') as string || null;
    const sub_category = formData.get('sub_category') as string || null;
    
    const htmlContent = formData.get('html_content') as string | null;
    const editorImageIds = formData.get('editor_image_ids') as string | null;
    const coverImageFile = formData.get('cover_image') as File | null;

    // 1. Fetch existing blog
    const { data: existingBlog, error: fetchError } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !existingBlog) throw new Error("Blog not found");

    let allImageIds: string[] = existingBlog.images ? [...existingBlog.images] : [];
    let newImageIds: string[] = [];
    let finalHtml = htmlContent || existingBlog.content;
    let final_cover_url = existingBlog.cover_image;

    const customSlug = formData.get('slug') as string | null;
    let newSlug = existingBlog.slug;
    if (customSlug && customSlug.trim() !== '') {
      newSlug = customSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      // Check collision with other blogs
      if (newSlug !== existingBlog.slug) {
        const { data: existing } = await supabase
          .from('blogs')
          .select('id')
          .eq('slug', newSlug)
          .neq('id', id);
        if (existing && existing.length > 0) {
          newSlug = `${newSlug}-${Date.now()}`;
        }
      }
    }

    const updateData: any = {
      title,
      slug: newSlug,
      category,
      sub_category,
      meta_description,
      keywords,
      is_published,
      content: finalHtml,
      excerpt: cleanExcerptText(finalHtml),
      updated_at: new Date().toISOString()
    };

    // 4. Process Content
    if (editorImageIds) {
      try {
         const parsedIds = JSON.parse(editorImageIds);
         if (Array.isArray(parsedIds)) {
           newImageIds.push(...parsedIds);
         }
      } catch (e) {
        console.error("Failed to parse editorImageIds");
      }
    }

    // 3. If new cover image uploaded
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
      
      updateData.cover_image = uploadRes.url;
      allImageIds.push(uploadRes.fileId);
    }

    updateData.images = [...allImageIds, ...newImageIds];

    // 4. Update Supabase
    const { data, error: updateError } = await supabase
      .from('blogs')
      .update(updateData)
      .eq('id', id)
      .select();

    if (updateError) throw updateError;

    return NextResponse.json({ success: true, blog: data[0] });
  } catch (error: any) {
    console.error("PUT /api/admin/blogs/[id] Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updateData: any = {
      is_published: body.is_published,
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('blogs')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, blog: data[0] });
  } catch (error: any) {
    console.error("PATCH /api/admin/blogs/[id] Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { imagekit } from '@/lib/imagekit';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;

    if (!imageFile) {
      return NextResponse.json({ success: false, message: 'No image provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const uploadRes: any = await new Promise((resolve, reject) => {
      imagekit.upload(
        {
          file: buffer,
          fileName: `editor-img-${Date.now()}`,
          useUniqueFileName: true,
          folder: '/vlcc-blogs/editor',
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });

    return NextResponse.json({ 
      success: true, 
      url: uploadRes.url,
      fileId: uploadRes.fileId
    });
  } catch (error: any) {
    console.error("POST /api/admin/upload-image Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

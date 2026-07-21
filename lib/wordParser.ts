import mammoth from 'mammoth';
import { imagekit } from './imagekit';

export async function processWordDoc(buffer: Buffer): Promise<{ html: string; imageIds: string[] }> {
  const uploadedImageIds: string[] = [];

  const options = {
    convertImage: (mammoth.images as any).inline(function(element: any) {
      return element.read("nodebuffer").then(async (imageBuffer: Buffer) => {
        try {
          // Upload the image buffer to ImageKit
          const uploadResponse: any = await new Promise((resolve, reject) => {
            imagekit.upload(
              {
                file: imageBuffer.toString('base64'),
                fileName: `blog-img-${Date.now()}`,
                useUniqueFileName: true,
                folder: '/vlcc-blogs',
              },
              (err, result) => {
                if (err) reject(err);
                else resolve(result);
              }
            );
          });

          // Store the fileId so we can delete it later if the blog is deleted
          uploadedImageIds.push(uploadResponse.fileId);

          return {
            src: uploadResponse.url,
          };
        } catch (error) {
          console.error("Failed to upload image from docx to ImageKit", error);
          // Fallback to empty if fails
          return { src: "" };
        }
      });
    }),
  };

  const result = await mammoth.convertToHtml({ buffer }, options);
  
  return {
    html: result.value, // The generated HTML
    imageIds: uploadedImageIds,
  };
}

'use client';

import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

if (typeof window !== 'undefined' && Quill) {
  const BaseImage: any = Quill.import('formats/image');

  class CustomImage extends (BaseImage as any) {
    static create(value: any) {
      const node = super.create(typeof value === 'string' ? value : value?.src || '');
      if (typeof value === 'object' && value !== null) {
        if (value.style) node.setAttribute('style', value.style);
        if (value.width) node.setAttribute('width', value.width);
        if (value.height) node.setAttribute('height', value.height);
        if (value.alt) node.setAttribute('alt', value.alt);
        if (value.class) node.setAttribute('class', value.class);
      }
      return node;
    }

    static value(domNode: HTMLElement) {
      return {
        src: domNode.getAttribute('src') || '',
        style: domNode.getAttribute('style') || '',
        width: domNode.getAttribute('width') || '',
        height: domNode.getAttribute('height') || '',
        alt: domNode.getAttribute('alt') || '',
        class: domNode.getAttribute('class') || '',
      };
    }
  }

  Quill.register('formats/image', CustomImage, true);
}

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  onImageUpload: (fileId: string) => void;
}

interface ImgRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function RichTextEditor({ value, onChange, onImageUpload }: RichTextEditorProps) {
  const quillRef = useRef<ReactQuill>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedImg, setSelectedImg] = useState<HTMLImageElement | null>(null);
  const [imgRect, setImgRect] = useState<ImgRect | null>(null);

  const updateOverlayPosition = useCallback(() => {
    if (!selectedImg || !containerRef.current) {
      setImgRect(null);
      return;
    }
    const container = containerRef.current.getBoundingClientRect();
    const qlContainer = selectedImg.closest('.ql-container')?.getBoundingClientRect() || container;
    const rect = selectedImg.getBoundingClientRect();

    // Hide if scrolled completely out of view of the editor container
    if (rect.bottom < qlContainer.top + 5 || rect.top > qlContainer.bottom - 5) {
      setImgRect(null);
      return;
    }

    setImgRect({
      top: rect.top - container.top,
      left: rect.left - container.left,
      width: rect.width,
      height: rect.height,
    });
  }, [selectedImg]);

  useEffect(() => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    const editorRoot = quill.root;
    const qlContainer = editorRoot.parentNode as HTMLElement | null;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        setSelectedImg(target as HTMLImageElement);
      } else {
        setSelectedImg(null);
      }
    };

    editorRoot.addEventListener('click', handleClick);
    if (qlContainer) {
      qlContainer.addEventListener('scroll', updateOverlayPosition, { passive: true });
    }
    editorRoot.addEventListener('scroll', updateOverlayPosition, { passive: true });
    window.addEventListener('scroll', updateOverlayPosition, { passive: true });
    window.addEventListener('resize', updateOverlayPosition);

    return () => {
      editorRoot.removeEventListener('click', handleClick);
      if (qlContainer) {
        qlContainer.removeEventListener('scroll', updateOverlayPosition);
      }
      editorRoot.removeEventListener('scroll', updateOverlayPosition);
      window.removeEventListener('scroll', updateOverlayPosition);
      window.removeEventListener('resize', updateOverlayPosition);
    };
  }, [updateOverlayPosition]);

  useEffect(() => {
    updateOverlayPosition();
  }, [selectedImg, value, updateOverlayPosition]);

  const startResize = (e: React.MouseEvent, dir: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedImg) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const rect = selectedImg.getBoundingClientRect();
    const startWidth = rect.width || 300;
    const startHeight = rect.height || 200;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newW = startWidth;
      let newH = startHeight;

      // Calculate new width for E / W directions
      if (dir.includes('e')) {
        newW = Math.max(50, startWidth + deltaX);
      } else if (dir.includes('w')) {
        newW = Math.max(50, startWidth - deltaX);
      }

      // Calculate new height for S / N directions
      if (dir.includes('s')) {
        newH = Math.max(50, startHeight + deltaY);
      } else if (dir.includes('n')) {
        newH = Math.max(50, startHeight - deltaY);
      }

      // Apply based on handle type
      if (dir === 'e' || dir === 'w') {
        // Horizontal ONLY
        selectedImg.style.width = `${Math.round(newW)}px`;
        selectedImg.setAttribute('width', `${Math.round(newW)}`);
      } else if (dir === 'n' || dir === 's') {
        // Vertical ONLY
        selectedImg.style.height = `${Math.round(newH)}px`;
        selectedImg.setAttribute('height', `${Math.round(newH)}`);
      } else {
        // Corner resizing (proportional or free)
        selectedImg.style.width = `${Math.round(newW)}px`;
        selectedImg.style.height = `${Math.round(newH)}px`;
        selectedImg.setAttribute('width', `${Math.round(newW)}`);
        selectedImg.setAttribute('height', `${Math.round(newH)}`);
      }

      updateOverlayPosition();
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      const quill = quillRef.current?.getEditor();
      if (quill) {
        onChange(quill.root.innerHTML);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (!file) return;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const res = await fetch('/api/admin/upload-image', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();

        if (data.success) {
          const quill = quillRef.current?.getEditor();
          if (quill) {
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, 'image', data.url);
            onImageUpload(data.fileId);
          }
        } else {
          alert('Failed to upload image');
        }
      } catch (err) {
        console.error(err);
        alert('Error uploading image');
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  const handles = [
    { dir: 'nw', className: 'top-[-5px] left-[-5px] cursor-nwse-resize' },
    { dir: 'n', className: 'top-[-5px] left-1/2 -translate-x-1/2 cursor-ns-resize' },
    { dir: 'ne', className: 'top-[-5px] right-[-5px] cursor-nesw-resize' },
    { dir: 'w', className: 'top-1/2 left-[-5px] -translate-y-1/2 cursor-ew-resize' },
    { dir: 'e', className: 'top-1/2 right-[-5px] -translate-y-1/2 cursor-ew-resize' },
    { dir: 'sw', className: 'bottom-[-5px] left-[-5px] cursor-nesw-resize' },
    { dir: 's', className: 'bottom-[-5px] left-1/2 -translate-x-1/2 cursor-ns-resize' },
    { dir: 'se', className: 'bottom-[-5px] right-[-5px] cursor-nwse-resize' },
  ];

  return (
    <div ref={containerRef} className="relative bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden mb-6">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="font-body"
      />

      {/* Custom 8-Handle Interactive Image Resizer Overlay */}
      {imgRect && selectedImg && (
        <div
          style={{
            top: `${imgRect.top}px`,
            left: `${imgRect.left}px`,
            width: `${imgRect.width}px`,
            height: `${imgRect.height}px`,
          }}
          className="absolute border-2 border-vlcc-orange bg-vlcc-orange/5 pointer-events-none z-20"
        >
          {/* 8 Drag Handles */}
          {handles.map((h) => (
            <div
              key={h.dir}
              onMouseDown={(e) => startResize(e, h.dir)}
              className={`absolute w-3 h-3 bg-vlcc-orange border border-white rounded-xs shadow-md pointer-events-auto hover:scale-125 transition-transform ${h.className}`}
              title={`Resize (${h.dir.toUpperCase()})`}
            />
          ))}

          {/* Live Dimension Badge */}
          <div className="absolute bottom-1 right-1 bg-gray-900/85 text-white text-[10px] px-2 py-0.5 rounded font-mono shadow">
            {Math.round(imgRect.width)} × {Math.round(imgRect.height)}px
          </div>
        </div>
      )}
    </div>
  );
}

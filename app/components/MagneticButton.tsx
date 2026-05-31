'use client';
import { useRef, useState, useEffect } from 'react';

export default function MagneticButton({ 
  children, 
  className = "",
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-block transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x * 0.2}px, ${position.y * 0.2}px)`
      }}
    >
      <div 
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`
        }}
      >
        {children}
      </div>
    </button>
  );
}

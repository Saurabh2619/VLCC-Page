'use client';
import { useEffect, useState } from 'react';

export default function GlobalSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Center it initially
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50 pointer-events-none bg-[#fdfaf7]" />;

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50 pointer-events-none bg-[#fdfaf7]">
      <div 
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[150px] opacity-15 transition-transform duration-[50ms] ease-out will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(243,112,33,1) 0%, rgba(255,155,102,0.6) 40%, transparent 70%)',
          transform: `translate3d(${mousePosition.x - 500}px, ${mousePosition.y - 500}px, 0)`,
        }}
      />
    </div>
  );
}

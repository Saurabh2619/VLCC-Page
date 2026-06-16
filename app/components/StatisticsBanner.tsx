'use client';
import { useState, useEffect, useRef } from 'react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-2">{count.toLocaleString()}{suffix}</div>;
}

export default function StatisticsBanner({ imageSrc = "https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=800" }: { imageSrc?: string }) {
  return (
    <section className="py-16 md:py-24 bg-[#eaddce] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left h-full">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-12 leading-[1.2] max-w-[500px] mx-auto lg:mx-0">
              Transforming Passion into a Professional Career
            </h2>
            <div className="flex flex-row justify-center lg:justify-start gap-8 md:gap-14">
              <div className="flex flex-col items-center lg:items-start">
                <Counter end={17} suffix="+" />
                <p className="text-sm md:text-base text-gray-600 font-body uppercase tracking-wider font-semibold">Trainer's Experience</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Counter end={2000} />
                <p className="text-sm md:text-base text-gray-600 font-body uppercase tracking-wider font-semibold">Students Trained</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Counter end={500} />
                <p className="text-sm md:text-base text-gray-600 font-body uppercase tracking-wider font-semibold">Trainings Conducted</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img 
              src={imageSrc} 
              alt="Beautiful Nail Artistry" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

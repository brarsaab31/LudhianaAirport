import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

const ScrollingPlane = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show plane after scrolling 100px
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate plane position based on scroll
  const planeProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
  const planeY = planeProgress * (window.innerHeight - 100);

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 z-40 pointer-events-none">
      <div
        className="transition-all duration-300 ease-out"
        style={{
          transform: `translateY(${planeY}px)`,
        }}
      >
        <div className="bg-blue-600 p-3 rounded-full shadow-lg animate-pulse">
          <Plane className="h-6 w-6 text-white transform rotate-45" />
        </div>
        {/* Plane trail */}
        <div className="absolute top-1/2 right-full w-16 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-60"></div>
      </div>
    </div>
  );
};

export default ScrollingPlane;
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

  // Calculate plane position based on scroll (moves down as you scroll down)
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(scrollY / documentHeight, 1);
  const planeY = 100 + (scrollProgress * (window.innerHeight - 200)); // Start at 100px from top

  if (!isVisible) return null;

  return (
    <>
      {/* Scroll track behind the plane */}
      <div className="fixed right-6 top-0 bottom-0 w-1 bg-gray-200 z-30 opacity-60">
        <div 
          className="w-full bg-blue-500 transition-all duration-100 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Plane */}
      <div className="fixed right-4 z-40 pointer-events-none">
        <div
          className="transition-all duration-100 ease-out"
          style={{
            transform: `translateY(${planeY}px)`,
          }}
        >
          <div className="relative">
            {/* Plane icon - solid filled, rotated to point down */}
            <Plane 
              className="h-8 w-8 text-blue-600 transform rotate-180" 
              fill="currentColor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingPlane;
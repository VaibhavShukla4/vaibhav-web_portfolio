/** @format */
'use client';

import React, { useState, MouseEvent as ReactMouseEvent, useEffect } from 'react';
import Pages from '@/app/pages/Index';

// Custom throttle function
const throttle = (func: (e: ReactMouseEvent<HTMLDivElement>) => void, delay: number) => {
  let lastCall = 0;
  return (e: ReactMouseEvent<HTMLDivElement>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(e);
  };
};

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  // Check screen width on initial load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = throttle((e: ReactMouseEvent<HTMLDivElement>) => {
    if (isLargeScreen) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  }, 50); // Delay of 50ms

  const handleMouseClick = () => {
    if (isLargeScreen) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    }
  };

  return (
    <div
      className={`relative`} // Apply cursor-none only for large screens
      onMouseMove={isLargeScreen ? handleMouseMove : undefined}
      onClick={isLargeScreen ? handleMouseClick : undefined}
    >
      <Pages />
      {isLargeScreen && (
        <div
          className={`cursor-follower ${isClicked ? 'clicked' : ''}`}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'left 0.2s ease-out, top 0.1s ease-out',
          }}
        >
          <div className="ball"></div>
          <div className="shadow"></div>
        </div>
      )}
    </div>
  );
};

export default CursorFollower;

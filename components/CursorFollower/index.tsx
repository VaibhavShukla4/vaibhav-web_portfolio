/** @format */
'use client';

import React, { useState, MouseEvent as ReactMouseEvent } from 'react';
import Pages from '@/app/pages/Index';

// Custom throttle function with specific type
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
  // Typing the position state as an object with x and y properties
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // Throttled version of handleMouseMove
  const handleMouseMove = throttle((e: ReactMouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, 50); // Delay of 50ms

  const handleMouseClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
    >
      <Pages />
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
    </div>
  );
};

export default CursorFollower;

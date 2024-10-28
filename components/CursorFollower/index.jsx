/** @format */
'use client';
import React, { useState } from 'react';
import Pages from '@/app/pages/Index';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  // Updates the position state with the current mouse position
  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX, // Mouse X position relative to the viewport
      y: e.clientY, // Mouse Y position relative to the viewport
    });
  };

  // Trigger click effect animation
  const handleMouseClick = () => {
    setIsClicked(true); // Set the click state to true to trigger the animation
    setTimeout(() => {
      setIsClicked(false); // Reset the click state after the animation
    }, 300); // Duration of the click animation (e.g., 300ms)
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
      // Tracks the mouse movement
    >
      <Pages /> {/* Main content of your page */}
      {/* Cursor follower */}
      <div
        className={`cursor-follower ${isClicked ? 'clicked' : ''}`}
        style={{
          position: 'fixed', // Fixed so that it follows the cursor within the viewport
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          pointerEvents: 'none', // Avoids blocking interactions with other elements
          zIndex: 9999, // Ensures the follower stays on top of other elements
          pointerEvents: 'none', // Avoid blocking interactions
          transition: 'left 0.2s ease-out, top 0.1s ease-out', // Smooth transition for movement
        }}
      >
        <div className={`ball ${isClicked ? 'clicked' : ''}`}></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default CursorFollower;

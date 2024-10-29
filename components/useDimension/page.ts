/** @format */

import { useState, useEffect } from 'react';

// Type the ref and the return value of the hook
export function useDimension(ref: React.RefObject<HTMLElement>) {
  // Typing dimensions as an object with width and height both as numbers
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
    function updateDimensions() {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    }

    updateDimensions(); // Initial measurement

    window.addEventListener('resize', updateDimensions); // Update on window resize
    return () => {
      window.removeEventListener('resize', updateDimensions); // Clean up on unmount
    };
  }, [ref]); // Effect depends on ref

  return dimensions; // Returning the dimensions (width and height)
}

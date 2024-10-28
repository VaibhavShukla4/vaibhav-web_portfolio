/** @format */

import { useState, useEffect } from 'react';

export function useDimension(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
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
  }, [ref]);

  return dimensions;
}

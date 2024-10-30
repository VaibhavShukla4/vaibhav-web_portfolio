/** @format */

import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

// Define the types for Path props
const Path: React.FC<SVGMotionProps<SVGPathElement>> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

// Define the type for MenuToggle props
interface MenuToggleProps {
  toggle: () => void; // Function to handle toggle
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  const handleToggle = (e: React.KeyboardEvent | React.MouseEvent) => {
    // Check if the event is a keyboard event and the key is Enter or Space
    if ((e as React.KeyboardEvent).key === 'Enter' || (e as React.KeyboardEvent).key === ' ') {
      toggle();
    } else if (!(e as React.KeyboardEvent).key) {
      // For mouse click events
      toggle();
    }
  };

  return (
    <button
      onClick={handleToggle}
      onKeyPress={handleToggle}
      className="flex justify-center items-center absolute top-[30px] left-[29px]"
      tabIndex={0} // Ensure the button is focusable for keyboard events
    >
      <span>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </span>
    </button>
  );
};

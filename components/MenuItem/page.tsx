/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { poppins } from './../../app/constant';

// Animation variants for menu item transitions
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      opacity: { duration: 0.3 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      opacity: { duration: 0.3 },
    },
  },
};

interface MenuItemProps {
  index: number;  // The index of the menu item
  name: string;   // The actual menu item name (like 'Contact', 'Experience', etc.)
}

export const MenuItem: React.FC<MenuItemProps> = ({  name }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative list-none"
    >
      <span
        className={`background_Image mx-auto inline-block transition-transform duration-300 ease-in-out hover:uppercase ${poppins.className}`}
      >
        {name}
      </span>
    </motion.li>
  );
};

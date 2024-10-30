/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { poppins } from '@/app/constant';

// Define the prop types
interface MenuItemProps {
  i: number; // The index number passed as a prop
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
 
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <span
        className={`background_Image w-[fit-content] transition delay-150 duration-300 ease-in-out hover:uppercase ${poppins.className}`}
      >
        {i}
      </span>
    </motion.li>
  );
};

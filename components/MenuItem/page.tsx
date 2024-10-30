/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { poppins } from './../../app/constant';



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

interface MenuItemProps {
  index: number;  // The index
  name: string;   // The actual menu item name (like 'Contact', 'Experience', etc.)
}
export const MenuItem: React.FC<MenuItemProps> = ({  name}) => {
 
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
        {name}
      </span>
    </motion.li>
  );
};

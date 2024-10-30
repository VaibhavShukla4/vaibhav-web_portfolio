/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './../MenuItem/page';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Define the type for menu items (string array)
const menuItems: string[] = ['Contact', 'Experience', 'About', 'Certificate', 'Projects'];

// Type the component as React.FC
export const Navigation: React.FC = () => (
  <motion.ul variants={variants}>
    {menuItems.map((item, index) => (
      <MenuItem key={index} index={index} name={item} /> 
    ))}
  </motion.ul>
);

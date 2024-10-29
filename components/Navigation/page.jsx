/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '@/components/MenuItem/page';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = ['Contact', 'Experience', 'About', 'Certificate', 'Projects'];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {menuItems.map((i, index) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

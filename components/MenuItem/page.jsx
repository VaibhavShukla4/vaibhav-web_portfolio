/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { poppins } from '@/app/constant';
import Avenger from '@/public/assets/download.gif';
import Image from 'next/image';
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

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i }) => {
  const style = {
    border: `2px solid ${colors[i]}`,
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <span className="icon-placeholder " style={style}></span>
      {
        <span
          className={`background_Image w-[fit-content] transition delay-150 duration-300 ease-in-out  hover:uppercase  ${poppins.className}`}
          style={style}
        >
          {i}
        </span>
      }
    </motion.li>
  );
};

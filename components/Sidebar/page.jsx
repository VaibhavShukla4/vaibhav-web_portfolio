/** @format */
'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDimension } from '@/components/useDimension/page';
import { MenuToggle } from '@/components/MenuToggle/page';
import { Navigation } from '@/components/Navigation/page';
const Sidebar = ({ isOpen, toggle }) => {
  const containerRef = useRef(null);

  // Initialize state with default values that will work server-side
  const [sidebarSize, setSidebarSize] = useState({
    radius: 30, // default radius
    posX: '90%', // default position X
    posY: '65px', // default position Y
  });

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const { height } = useDimension(containerRef);

  return (
    <motion.nav
      className="absolute top-0 right-0"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="background bg-slate-900"
        variants={sidebarVariants}
      >
        <MenuToggle toggle={toggle} />
        <Navigation />
      </motion.div>
    </motion.nav>
  );
};

export default Sidebar;

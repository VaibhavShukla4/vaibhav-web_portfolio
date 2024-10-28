/** @format */
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDimension } from '@/components/useDimension/page';
import { MenuToggle } from '../MenuToggle/page';
import { Navigation } from '../Navigation/page';
const Sidebar = ({ isOpen, toggle }) => {
  const containerRef = useRef(null);

  // Initialize state with default values that will work server-side
  const [sidebarSize, setSidebarSize] = useState({
    radius: 30, // default radius
    posX: '90%', // default position X
    posY: '65px', // default position Y
  });

  const updateDimensions = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    const radius = width < 768 ? 20 : 30;
    const posX = width < 768 ? '85%' : '90%';
    setSidebarSize({ radius, posX, posY: '65px' });
  };

  // Effect hook for handling resize events with cleanup
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('resize', updateDimensions);
  //     updateDimensions(); // Also set initial size correctly after mounting
  //     return () => window.removeEventListener('resize', updateDimensions);
  //   }
  // }, []);

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

/** @format */
'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useDimension } from './../useDimension/page';
import { MenuToggle } from './../MenuToggle/page';
import { Navigation } from './../Navigation/page';

// Define the prop types for Sidebar
interface SidebarProps {
  isOpen: boolean;
  toggle: () => void; // Function to handle the toggle
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const containerRef = useRef<HTMLElement | null>(null); // Typing useRef for HTMLElement

  // Define the type for sidebarSize state
 
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

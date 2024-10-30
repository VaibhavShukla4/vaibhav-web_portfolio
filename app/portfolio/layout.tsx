/** @format */
'use client';
import React, { useRef, MutableRefObject, ReactNode, ReactElement } from 'react';
import Header from './../../components/Header/page';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Typing the refs to point to HTMLElement or null (more generic than HTMLDivElement)
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);
  const section5Ref = useRef<HTMLElement | null>(null);

  // Typing handleScroll to take a MutableRefObject of HTMLElement or null
  const handleScroll = (ref: MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only apply `cloneElement` if the child is a valid React element (React component)
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element before cloning it
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      // If child is a React component, clone it and pass the props
      return React.cloneElement(child as ReactElement, {
        handleScroll,
        section2Ref,
        section1Ref,
        section3Ref,
        section4Ref,
        section5Ref,
      });
    }
    // If it's an HTML element or plain text, return the child as-is
    return child;
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#24272C]">
      <div className="w-[96%] bg-[#232732] rounded-3xl outer-shadow">
        <Header
          handleScroll={handleScroll}
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
          section5Ref={section5Ref}
        />
        <div>{childrenWithProps}</div>
      </div>
    </div>
  );
};

export default Layout;


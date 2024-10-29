/** @format */
'use client';
import React, { useRef } from 'react';
import Header from '@/components/Header/page';

const Layout = ({ children }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      handleScroll,
      section2Ref,
      section1Ref,
      section3Ref,
      section4Ref,
      section5Ref,
    }),
  );
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#24272C]">
      <div className=" w-[96%] bg-[#232732] rounded-3xl outer-shadow">
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

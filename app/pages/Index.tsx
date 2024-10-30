/** @format */

import React, { useRef, MutableRefObject } from 'react';
import Layout from './../../app/portfolio/layout';
import Profile from './../../app/portfolio/profile/page';

const Index: React.FC = () => {
  // Create refs for sections
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);

  // Handle scrolling
  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout
      handleScroll={handleScroll}
      section1Ref={section1Ref}
      section2Ref={section2Ref}
      section3Ref={section3Ref}
      section4Ref={section4Ref}
      section5Ref={section5Ref}
    >
      <Profile
        handleScroll={handleScroll}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        section5Ref={section5Ref}
      />
    </Layout>
  );
};

export default Index;

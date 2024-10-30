/** @format */
import React, { MutableRefObject } from 'react';
import Sidebar from './../Sidebar/page';
import { useCycle } from 'framer-motion';
import Link from 'next/link';

// Define the type for props
interface HeaderProps {
  handleScroll: (ref: MutableRefObject<HTMLElement | null>) => void;
  section1Ref: MutableRefObject<HTMLElement | null>;
  section2Ref: MutableRefObject<HTMLElement | null>;
  section3Ref: MutableRefObject<HTMLElement | null>;
  section4Ref: MutableRefObject<HTMLElement | null>;
  section5Ref: MutableRefObject<HTMLElement | null>;
}

const Header: React.FC<HeaderProps> = ({
  handleScroll,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex justify-center pt-[40px] relative">
      <div className="flex justify-between items-center flex-wrap gap-x-[40px] gap-y-[40px] max-[991px]:hidden">
        <Link href="#section1" passHref scroll={false} className="shadow-btn ">
          <span onClick={() => handleScroll(section1Ref)}>Contact</span>
        </Link>
        <Link href="#section2" passHref scroll={false} className="shadow-btn ">
          <span onClick={() => handleScroll(section2Ref)}>Experience</span>
        </Link>
        <Link href="#section5" passHref scroll={false} className="shadow-btn ">
          <span onClick={() => handleScroll(section5Ref)}>About</span>
        </Link>
        <Link href="#section4" passHref scroll={false} className="shadow-btn ">
          <span onClick={() => handleScroll(section4Ref)}>Certificate</span>
        </Link>
        <Link href="#section3" passHref scroll={false} className="shadow-btn ">
          <span onClick={() => handleScroll(section3Ref)}>Projects</span>
        </Link>
      </div>
      <div className="w-full pr-[20px] hidden max-[991px]:flex max-[991px]:justify-end"></div>
      <div className="hidden max-[991px]:block ">
        <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      </div>
    </div>
  );
};

export default React.memo(Header);

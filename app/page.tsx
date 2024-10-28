/** @format */

import Image from 'next/image';

import Sidebar from './../components/Sidebar/page';
import CursorFollower from './../components/CursorFollower/index';

export default function Home() {
  return (
    <main className="relative h-[100%] w-[100%]">
      <CursorFollower />

      {/* <Sidebar /> */}
    </main>
  );
}

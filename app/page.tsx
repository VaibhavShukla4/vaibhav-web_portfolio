/** @format */
'use client';

import { FC } from 'react';

// Dynamically import the CursorFollower component and disable SSR for it
import CursorFollower from '@/components/CursorFollower/index';


const Home: FC = () => {
  return (
    <main className="relative h-full w-full">
      <CursorFollower />
    </main>
  );
};

export default Home;

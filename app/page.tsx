/** @format */
'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

// Dynamically import the CursorFollower component and disable SSR for it
const CursorFollower = dynamic(() => import('@/components/CursorFollower'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div>Loading...</div>, // Optional loading state while the component is loading
});

const Home: FC = () => {
  return (
    <main className="relative h-full w-full">
      <CursorFollower />
    </main>
  );
};

export default Home;

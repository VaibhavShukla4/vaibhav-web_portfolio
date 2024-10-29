/** @format */
'use client'
import dynamic from 'next/dynamic';

// Dynamically import the CursorFollower component and disable SSR for it
const CursorFollower = dynamic(() => import('@/components/CursorFollower/index'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div>Loading...</div>, // Optional loading state while the component is loading
});

export default function Home() {
  return (
    <main className="relative h-[100%] w-[100%]">
      <CursorFollower />
    </main>
  );
}

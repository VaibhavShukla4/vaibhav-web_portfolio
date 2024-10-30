/** @format */

import React from 'react'; // Remove useRef if it's not used
import Layout from './../../app/portfolio/layout';
import Profile from './../../app/portfolio/profile/page';

const Index: React.FC = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default Index;

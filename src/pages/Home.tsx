import React from 'react';
import Navbar from '../common/Navbar';
import TopBanner from '../components/TopBanner';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar></Navbar>
        <TopBanner></TopBanner>
      
    </main>
  );
};

export default Home;

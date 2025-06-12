import React from 'react';
import Navbar from '../common/Navbar';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar></Navbar>
      <h1 className="text-5xl font-bold text-gray-800" >
        Welcome to Our Website
      </h1>
    </main>
  );
};

export default Home;

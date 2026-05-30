'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import HeaderSlider from '@/components/HeaderSlider';
import Footer from '@/components/Footer';
import HomeProducts from '@/components/HomeProducts';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;

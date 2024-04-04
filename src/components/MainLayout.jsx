import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <div className='bg-image'></div>
      <div className='bg-gradient'></div>
      <div className='light-container'>
        <div className='blurred-lighting top-left'></div>
        <div className='blurred-lighting top-right'></div>
        <div className='blurred-lighting bottom-left'></div>
        <div className='blurred-lighting bottom-right'></div>
      </div>
    </>
  );
};

export default MainLayout;

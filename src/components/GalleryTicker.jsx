'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const GalleryTicker = () => {
  return (
    <div className='relative main-event skew-y-2 scale-110  border-spacing-4 border-separate'>
      <span className='text-6xl w-full md:text-[10rem] absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-mirtha  text-center text-transparent bg-gradient-purple  bg-clip-text'>
        Last Time at Swayam
      </span>

      <Marquee gradient gradientColor='#47007a' speed={200}>
        <img src='/images/gallery/2.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/3.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/4.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/5.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/1.jpg' className='max-h-64 brightness-50' />
      </Marquee>
      <Marquee direction='right' gradient gradientColor='#47007a' speed={200}>
        <img src='/images/gallery/1.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/2.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/3.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/4.jpg' className='max-h-64 brightness-50' />
        <img src='/images/gallery/5.jpg' className='max-h-64 brightness-50' />
      </Marquee>
    </div>
  );
};

export default GalleryTicker;

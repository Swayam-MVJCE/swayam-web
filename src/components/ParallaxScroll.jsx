'use client';
import React from 'react';
import { StickyScroll } from '../components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'Presenting Swayam',
    description:
      "Embark on a journey of cultural exploration at Swayam 2024, MVJCE Bengaluru's premier cultural fest. Immerse yourself in a diverse array of events that honor tradition while embracing the spirit of innovation. From captivating dance performances to soul-stirring musical showcases, Swayam offers a platform where heritage meets contemporary expression.",
    content: (
      <div className='w-[450px] h-full relative flex items-center justify-center text-white group'>
        <img
          src='/images/dancer-transparent.png'
          className='z-10 filter brightness-110 group-hover:scale-110 transition duration-200'
        />
        {/* <img
          src='/images/glass-bg.png'
          className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  animate-pulse'
        /> */}
      </div>
    ),
  },
  {
    title: 'Unleash Your Talent',
    description:
      "Swayam is your canvas, your stage to shine. Whether you're an aspiring artist, a passionate performer, or simply someone with a creative spark, we welcome you to showcase your talents. Engage in a variety of competitions, workshops, and exhibitions tailored to bring out the best in you. With participants from all corners of the nation, Swayam is your opportunity to thrive, learn, and excel.",
    content: (
      <div className='w-[450px] h-full relative flex items-center justify-center text-white group'>
        <img
          src='/images/dancer-transparent.png'
          className='z-10 filter brightness-110 group-hover:scale-110 transition duration-200'
        />
        {/* <img
          src='/images/glass-bg.png'
          className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  animate-pulse'
        /> */}
      </div>
    ),
  },
  {
    title: 'Last Time at Swayam',
    description:
      'The previous edition of Swayam marked a high point for MVJCE Bengaluru, showcasing the diverse talents and cultural heritage of our student community. With participation from over 5,000 attendees, the festival featured more than 50 events, spanning music, dance, literature, and fine arts.',
    content: (
      <div className='w-[450px] h-full relative flex items-center justify-center text-white group'>
        <img
          src='/images/dancer-transparent.png'
          className='z-10 filter brightness-110 group-hover:scale-110 transition duration-200'
        />
        {/* <img
          src='/images/glass-bg.png'
          className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  animate-pulse'
        /> */}
      </div>
    ),
  },
];
const ParallaxScroll = () => {
  return (
    <div className=' p-2 md:p-10 min-h-screen'>
      <StickyScroll content={content} />
    </div>
  );
};

export default ParallaxScroll;

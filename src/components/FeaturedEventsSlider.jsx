'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { PinContainer } from './ui/Card3D';
import FeaturedEventCard from './FeaturedEventCard';
import MainEventCard from './MainEventCard';

const slides = [
  {
    image: '/images/featured-events/depiction.png',
    title: 'Depiction - Water Colour Painting',
    organizer: 'Fine Arts',
  },
  {
    image: '/images/featured-events/doodling.png',
    title: 'Doodling',
    organizer: 'Fine Arts',
  },
  {
    image: '/images/featured-events/le-panga.png',
    title: 'Le Panga - Dance Battle',
    organizer: 'Dance',
  },
  {
    image: '/images/featured-events/short-film.png',
    title: 'Short Film Making',
    organizer: 'Theatre and Production',
  },
  {
    image: '/images/featured-events/mime.png',
    title: 'Mime Group',
    organizer: 'Theatre and Production',
  },
  {
    image: '/images/featured-events/sangeet-samrat.png',
    title: 'Sangeet Samrat',
    organizer: 'Music',
  },
  {
    image: '/images/featured-events/battle-of-bands.png',
    title: 'Battle of Bands',
    organizer: 'Music',
  },
  {
    image: '/images/featured-events/jam.png',
    title: 'JAM',
    organizer: 'Literature',
  },
  {
    image: '/images/featured-events/slam-poetry.png',
    title: 'Slam Poetry',
    organizer: 'Literature',
  },
];

function FeaturedEventsSlider() {
  const [isMobile, setIsMobile] = useState(false); // Initialize without a specific value

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth < 768;
    setIsMobile(checkIfMobile());
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full'>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        effect='coverflow'
        coverflowEffect={{
          slideShadows: false,
          depth: 60,
          rotate: 35,
        }}
        slidesPerView={isMobile ? 1 : 3}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container h-[550px] overflow-visible w-full !pt-20'
      >
        <SwiperSlide>
          <MainEventCard
            image='/images/featured-events/kalakshetra.png'
            title='KALAkshetra'
            organizer='MEGA EVENT'
          ></MainEventCard>
        </SwiperSlide>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <FeaturedEventCard
              image={slide.image}
              title={slide.title}
              organizer={slide.organizer}
            />
          </SwiperSlide>
        ))}

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
}

export default FeaturedEventsSlider;

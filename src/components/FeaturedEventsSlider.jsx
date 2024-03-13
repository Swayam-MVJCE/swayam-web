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
        className='swiper_container h-[550px] w-full  pt-20'
      >
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedEventCard
            image={'/images/featured-poster.png'}
            title={'Short Film Making'}
            organizer={'Raagabhinaya'}
            date={'12th March 2024'}
            href={'/events/short-film-making'}
          />
        </SwiperSlide>

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

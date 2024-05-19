'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import FeaturedEventCard from './FeaturedEventCard';

const slides = [
  {
    image: '/images/beat-gurus-long.jpg',
    title: 'Beat Gurus',
    organizer: 'Mainstage - 24th May 2024 | 5pm onwards',
    link: '/pro-shows/beat-gurus',
  },
  {
    image: '/images/vortex-long.jpg',
    title: 'Vortex',
    organizer: 'Mainstage - 25th May 2024 | 5pm onwards',
    link: '/pro-shows/vortex',
  },
];

function ProShowsSlider() {
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
    <div className="w-full">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          slideShadows: false,
        }}
        slidesPerView={isMobile ? 1 : 2}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        centeredSlidesBounds={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container h-[550px] overflow-visible w-full !pt-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <FeaturedEventCard
              image={slide.image}
              title={slide.title}
              organizer={slide.organizer}
              href={slide.link}
            />
          </SwiperSlide>
        ))}

        <div className="slider-controler md:hidden">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProShowsSlider;

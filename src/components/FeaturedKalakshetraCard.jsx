import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedKalakshetraCard = ({ eventData, featured }) => {
  return (
    <Link
      href={'/events/' + eventData.slug}
      className="flex md:basis-full cursor-pointer flex-col md:flex-row items-center rounded-xl w-[20rem] md:w-full hover:scale-105 transition duration-500   p-2 md:p-6 backdrop-blur-sm shadow-purple-800 shadow-2xl
      bg-opacity-30 bg-gray-800 border-2 border-opacity-65 border-[rgba(177,125,236,1)] md:h-96 md:gap-16"
    >
      <div className="w-full md:h-full md:w-auto aspect-square rounded-lg overflow-hidden relative object-contain">
        <Image src={eventData.poster_url} className="w-full rounded-md" fill />
      </div>

      <div className="flex flex-col justify-center md:basis-2/3 items-center md:items-start gap-2">
        <h3 className="text-center leading-none tracking-wide md:text-transparent md:bg-gradient-purple md:bg-clip-text text-[#F8C3F9] hover:text-purple-400 text-2xl md:text-9xl mt-3 text-wrap font-chamisty md:font-mirtha main-event">
          {eventData.title}
        </h3>
        <h3 className="font-satoshi md:font-chamisty md:-mt-5  text-[#e196ff] text-base md:text-2xl">
          {eventData.category}
        </h3>
        <h3 className="font-satoshi hidden md:block  text-[#f4d7ff] text-base md:text-lg">
          {eventData.description.slice(0, 180) + '...'}
        </h3>
        <h3 className="font-satoshi hidden md:block  text-[#e196ff] text-base md:text-2xl">
          {new Date(eventData.date).toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          {' | '}
          {eventData.time}
        </h3>
      </div>
    </Link>
  );
};

export default FeaturedKalakshetraCard;

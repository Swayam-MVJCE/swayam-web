import Link from 'next/link';
import React from 'react';

const EventCard = ({ eventData, featured }) => {
  return (
    <Link
      href={'/events/' + eventData.slug}
      className={`flex cursor-pointer flex-col items-center rounded-xl w-[20rem] hover:scale-105 transition duration-500 bg-gray-400  p-2 backdrop-blur-sm hover:shadow-purple-600 shadow-xl ${
        featured
          ? 'main-event bg-opacity-35 bg-gray-700 border-2 border-opacity-65 border-[rgba(177,125,236,1)]'
          : 'bg-opacity-10 border-2 border-opacity-65 border-gray-600  hover:border-[rgba(177,125,236,1)]'
      }`}
    >
      <img src={eventData.poster_url} className='w-full rounded-md' />
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-chamisty text-center leading-none tracking-wide text-[#F8C3F9] hover:text-purple-400 text-2xl mt-3 text-wrap'>
          {eventData.title}
        </h3>
        <h3 className='font-satoshi  text-gray-400 text-base'>
          {eventData.category}
        </h3>
      </div>
    </Link>
  );
};

export default EventCard;

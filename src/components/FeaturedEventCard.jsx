import React from 'react';
import { PinContainer } from './ui/Card3D';

const FeaturedEventCard = ({ date, title, organizer, image, href }) => {
  return (
    <PinContainer className='' title={organizer} href={href}>
      <div className='flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-52 md:min-w-64'>
        <img src={image} className='w-72 rounded-md' />
        <h3 className='font-chamisty text-center tracking-wide text-[#F8C3F9] text-2xl mt-3'>
          {title}
        </h3>
        {/* <h3 className='font-satoshi text-gray-400 text-sm'>{date}</h3> */}
      </div>
    </PinContainer>
  );
};

export default FeaturedEventCard;

import React from 'react';
import { MainPinContainer } from './ui/Main3DCard';

const MainEventCard = ({ date, title, organizer, image, href }) => {
  return (
    <MainPinContainer className='' title={organizer} href={href}>
      <div className='flex relative basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-52 md:min-w-72'>
        <img src={image} className='w-full rounded-md' />
        <h3 className='font-chamisty  bg-gradient-purple text-transparent bg-clip-text text-center text-3xl mt-3'>
          {title}
        </h3>
        <h3 className='font-satoshi text-center text-gray-300 text-lg'>
          Mega Event
        </h3>
      </div>
    </MainPinContainer>
  );
};

export default MainEventCard;

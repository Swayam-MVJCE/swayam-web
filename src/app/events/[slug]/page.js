import Image from 'next/image';
import React from 'react';

const EventPage = () => {
  return (
    <main className='px-24 py-12 flex flex-row items-start justify-center gap-8'>
      <div className='flex flex-row h-full justify-start items-start w-[80%] gap-16 '>
        <div className='h-[400px] w-[400px] aspect-square rounded-lg overflow-hidden relative hover:scale-105 transition duration-200'>
          <Image src='/images/poster-sample.png' fill />
        </div>
        <div className='flex flex-col basis-1/3 min-h-[400px] justify-between items-start'>
          <div className='flex-col justify-start items-start'>
            <h1 className='text-[7.5rem] leading-none font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide'>
              Monoacting
            </h1>
            <h3 className='text-rose-300 font-satoshi text-xl'>Raagabhinaya</h3>
            <p className='text-gray-500 font-satoshi text-lg leading-tight'>
              Mono acting is the perfect art form for an actor to showcase their
              talent, creativity and acting skills in front of a live audience.
            </p>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-row gap-1 items-center mt-1'>
              <img src='/images/time-icon.svg' alt='calendar' />
              <span className='text-gray-300 font-satoshi text-md'>
                12th Dec 2021
              </span>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src='/images/trophy-icon.svg' alt='prize' />
              <span className='text-gray-300 font-satoshi text-md'>
                Total Prizepool : &#8377;2000
              </span>
            </div>
            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_30px_30px_30px_40px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:decoration-2 hover:text-rose-300 relative bg-transparent h-12 w-full border-opacity-60 border-gray-500 border text-center p-3 text-gray-50 text-base font-satoshi rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventPage;

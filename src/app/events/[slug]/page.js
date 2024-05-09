import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import React from 'react';
import prisma from '@/utils/client';
import getBase64BlurUrl from '@/utils/plaiceholder';
import Link from 'next/link';
import RegisterButton from '@/components/RegisterButton';

export async function generateMetadata({ params }) {
  const { slug } = params;
  let eventData;
  try {
    eventData = await prisma.event.findUnique({
      where: {
        slug,
      },
    });
  } catch (error) {
    console.error(error);
  }
  if (!eventData) {
    return {
      title: '404 - Event not found',
    };
  }
  return {
    title: eventData.title,
    description: eventData.description,
    images: [
      {
        url: eventData.poster_url
          ? eventData.poster_url
          : '/images/poster-sample.png',
        width: 1000,
        height: 1000,
        alt: 'Event Poster',
      },
    ],
  };
}

const EventPage = async ({ params }) => {
  const { slug } = params;
  let eventData;
  try {
    eventData = await prisma.event.findUnique({
      where: {
        slug: slug,
      },
      cache: {
        ttl: 3600,
        key: `event-${slug}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
  if (!eventData) {
    return <div>Event not found</div>;
  }

  const posterBlurData = await getBase64BlurUrl(eventData.poster_url);
  return (
    <MainLayout>
      <main className="px-4 md:px-24 py-12 flex-col flex gap-6 items-center justify-center">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="flex flex-col md:flex-row h-full justify-center items-start w-full gap-6 md:gap-16 ">
            <div className="w-full md:h-[400px] md:w-[400px] aspect-square rounded-lg overflow-hidden relative hover:scale-105 transition duration-200">
              <Image
                src={
                  eventData.poster_url
                    ? eventData.poster_url
                    : '/images/poster-sample.png'
                }
                placeholder="blur"
                blurDataURL={posterBlurData}
                fill
              />
            </div>
            <div className="flex  flex-col basis-1/2 md:min-h-[400px] justify-between items-start">
              <div className="flex-col justify-start items-start">
                <h1 className=" text-6xl md:text-[5.5rem] leading-[0.8] font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide">
                  {eventData.title}
                </h1>
                <h3 className="text-rose-300 font-satoshi text-lg md:text-xl mb-4">
                  {eventData.category}

                  <span className="text-gray-300 font-satoshi text-md">
                    {' | '}
                    {new Date(eventData.date).toLocaleDateString('en', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      timeZone: 'Asia/Kolkata',
                    })}{' '}
                    - {eventData.time}
                  </span>
                </h3>
                <p className="text-gray-300 font-satoshi text-lg leading-tight md:w-[60%]">
                  {eventData.description}
                </p>
                <div className="flex flex-row gap-1 items-center md:mt-1"></div>
              </div>
              <div className="w-full md:w-[60%] mt-4 flex flex-col items-start">
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row gap-1 items-center text-white">
                    <img src="/images/location-icon.svg" alt="venue" />
                    <span className="text-gray-400 font-satoshi text-md">
                      Venue : {eventData.venue}
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <img src="/images/trophy-icon.svg" alt="prize" />
                    <span className="text-gray-400 font-satoshi text-md">
                      1st Prize :{' '}
                      <span className="text-lg text-white font-semibold">
                        {eventData.firstPrize}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <img src="/images/trophy-icon.svg" alt="prize" />
                    <span className="text-gray-400 font-satoshi text-md">
                      2nd Prize :{' '}
                      <span className="text-lg text-white font-semibold">
                        {eventData.secondPrize}
                      </span>
                    </span>
                  </div>
                  <RegisterButton
                    slug={eventData.slug}
                    registrationFee={eventData.registrationFee}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[90%] flex flex-col items-start overflow-hidden flex-wrap  px-2 md:p-8 rounded-lg">
          <h1 className="font-mirtha text-center text-5xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500">
            Event Rules
          </h1>
          <p className="whitespace-pre font-satoshi text-wrap text-gray-300 leading-relaxed text-lg">{`${eventData.rules}`}</p>
          <h1 className="font-mirtha text-center text-5xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500">
            Judging Criteria
          </h1>
          <p className="whitespace-pre font-satoshi text-gray-300 leading-relaxed text-lg">{`${eventData.judgingCriteria}
          `}</p>
          {eventData.eventCoordinatorInfo && (
            <>
              <h1 className="font-mirtha text-center text-5xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500">
                Event Coordinators
              </h1>
              <p className="whitespace-pre font-satoshi text-gray-300 leading-relaxed text-lg">{`${eventData.eventCoordinatorInfo}
          `}</p>
            </>
          )}
        </div>
      </main>
    </MainLayout>
  );
};

export default EventPage;

import EventCard from '@/components/EventCard';
import FeaturedEventCard from '@/components/FeaturedEventCard';
import FeaturedKalakshetraCard from '@/components/FeaturedKalakshetraCard';
import MainEventCard from '@/components/MainEventCard';
import MainLayout from '@/components/MainLayout';
import prisma from '@/utils/client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const categories = [
  'All Events',
  'Theatre and Production',
  'Literature',
  'Musical',
  'Dance',
  'Fine Arts',
];

export const revalidate = 1;

export const metadata = {
  title: 'Events - Swayam 2024',
  description: 'Explore the latest events of Swayam 2024',
  images: [
    {
      url: '/images/featured-events/kalakshetra.png',
      width: 1000,
      height: 1000,
      alt: 'Events Poster',
    },
  ],
};

export default async function EventsPage({ searchParams }) {
  let selectedCategory;
  let eventsData;
  if (searchParams.category == undefined) {
    selectedCategory = 'All Events';
    redirect(`/events?category=${selectedCategory}`);
  } else if (categories.includes(searchParams.category)) {
    selectedCategory = searchParams.category;
    console.log(selectedCategory);
  }

  try {
    eventsData = await prisma.event.findMany({
      where: {
        category:
          selectedCategory === 'All Events' ? undefined : selectedCategory,
      },
      cache: true,
    });
    eventsData.sort((a, b) => {
      // If 'a' is 'Main', it should come before 'b'
      if (a.category === 'Mega Event' && b.category !== 'Mega Event') {
        return -1;
      } else if (a.category !== 'Mega Event' && b.category === 'Mega Event') {
        return 1;
      } else {
        return 0; // Maintain the order for other categories
      }
    });
  } catch (error) {
    console.error(error);
  }
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <h1
          style={{
            backgroundSize: '70%',
          }}
          className="font-mirtha text-center text-7xl md:text-8xl mt-4 tracking-wide leading-none bg-white text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500"
        >
          EXPLORE EVENTS
        </h1>
        <div className="flex flex-row w-screen px-4 py-2 justify-start md:justify-center flex-nowrap overflow-x-scroll md:overflow-x-hidden">
          {categories &&
            categories.map((category) => (
              <Link
                href={`/events?category=${category}`}
                key={category}
                className={`px-4 py-1 text-white bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl m-2 hover:bg-gradient-purple transition-all duration-500 hover:scale-105 ${
                  category === selectedCategory ? 'bg-gradient-purple' : ''
                }`}
              >
                {category}
              </Link>
            ))}
        </div>
        <div className="flex flex-row flex-wrap py-5 px-4 md:px-40 grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full justify-center">
          {eventsData &&
            eventsData.map((event) =>
              event.category === 'Mega Event' ? (
                <FeaturedKalakshetraCard
                  key={event.id}
                  eventData={event}
                  featured={true}
                />
              ) : (
                <EventCard key={event.id} eventData={event} />
              )
            )}
        </div>
      </div>
    </MainLayout>
  );
}

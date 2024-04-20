import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import prisma from '@/utils/client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaUser } from 'react-icons/fa6';
import { HiTicket } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';

const MyEventsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }

  const myRegistrations = await prisma.registration.findMany({
    where: {
      userId: session.userId,
    },
    include: {
      event: true,
    },
  });

  console.log(myRegistrations);

  return (
    <MainLayout>
      <div className="flex flex-row flex-wrap font-satoshi gap-10 p-6 md:p-10 w-screen justify-center items-start ">
        <h2 className="text-8xl text-center font-mirtha md:ml-10 md:text-start basis-full">
          My Events
        </h2>
        {myRegistrations.length > 0 ? (
          myRegistrations.map((registration) => (
            <div
              key={registration.id}
              className="flex cursor-pointer flex-col items-center rounded-xl min-w-[20rem] md:max-w-[20rem] w-full hover:scale-105 transition duration-500 bg-gray-400  p-2 backdrop-blur-sm hover:shadow-purple-600 shadow-xl bg-opacity-10 border-2 border-opacity-65 border-gray-600  hover:border-[rgba(177,125,236,1)]"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src={registration.event.poster_url}
                  className="w-full rounded-md"
                  fill
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-chamisty text-center leading-none tracking-wide text-[#F8C3F9] hover:text-purple-400 text-2xl mt-3 text-wrap">
                  {registration.event.title}
                </h3>
                <div className="flex flex-row w-full items-center justify-evenly gap-2 mt-4">
                  <Link
                    className="px-4 flex items-center justify-center gap-2 py-2 w-full bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl hover:bg-gradient-purple transition-all duration-500 hover:scale-105 text-white"
                    href="/events"
                  >
                    <IoDocumentTextOutline />
                    Event Rules
                  </Link>
                  <Link
                    className="px-4 flex items-center justify-center gap-2 py-2 w-full bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl hover:bg-gradient-purple transition-all duration-500 hover:scale-105"
                    href="/events"
                  >
                    <HiTicket size={22} />
                    View E-Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-fit flex flex-col gap-2 max-w-lg transform overflow-hidden rounded-xl bg-gray-500 bg-opacity-40 backdrop-blur-md p-6 text-center items-center justify-center align-middle shadow-xl transition-all">
            <IoDocumentTextOutline size={60} color="#ff2200" />
            <h3 className="text-lg font-medium leading-6 text-gray-100">
              No events found.
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-300">
                You have not registered for any events yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default MyEventsPage;

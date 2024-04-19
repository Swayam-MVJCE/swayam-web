import React from 'react';
import prisma from '@/utils/client';
import QRCode from 'react-qr-code';
import Image from 'next/image';
import { mirthaDisplay } from '@/app/layout';

const Ticket = async ({ id }) => {
  let registration;
  let event;
  try {
    registration = await prisma.registration.findFirst({
      where: {
        id,
      },
    });

    event = await prisma.event.findUnique({
      where: {
        id: registration.eventId,
      },
    });
    console.log(registration);
    console.log(event);
  } catch (error) {
    console.log(error);
  }

  function linebreaksToCommas(text) {
    // Replace line breaks with commas
    var commaSeparated = text.replace(/\n/g, '- ');
    return commaSeparated;
  }

  const readableDate = event.date.toDateString();

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center font-satoshi">
      <div className=" bg-gradient-to-br from-fuchsia-700 to-violet-600 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] rounded-md text-white border border-fuchsia-400">
        <div className="flex flex-col justify-between w-full h-full p-4">
          <div className="w-full flex items-center justify-between">
            <Image src="/images/swayam-logo.svg" width={90} height={90} />

            <div className="flex flex-col items-start">
              <h1 className="font-bold text-sm md:text-md">
                {registration.name}
              </h1>
              <h1 className="text-xs">{registration.email}</h1>
            </div>
          </div>

          <div className="flex flex-col items-start mt-11">
            <h1
              className={`text-5xl sm:text-7xl tracking-wider ${mirthaDisplay.className}`}
            >
              {event.title}
            </h1>
            <h1 className="font-semibold text-sm">{readableDate}</h1>

            <div className="flex items-center w-full justify-between mt-7">
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-xs md:text-md italic">Venue</h1>
                <h1 className="text-xs md:text-sm">{event.venue}</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-xs md:text-md italic">Time</h1>
                <h1 className="text-xs md:text-sm">{event.time}</h1>
              </div>
              {event.isGroup && (
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-xs md:text-md italic">
                    No of Participants
                  </h1>
                  <h1 className="text-xs md:text-sm">
                    {registration.noOfParticipants}
                  </h1>
                </div>
              )}
            </div>
          </div>

          <hr className="w-full border-dotted my-2" />

          <div className="flex items-end w-full justify-between -mt-4">
            {event.isGroup && (
              <div className="flex flex-col items-start mt-5">
                <h1 className="font-bold text-xs md:text-md italic">
                  Participants
                </h1>
                <h1 className="text-xs md:text-sm whitespace-pre-wrap">
                  {registration.participants}
                </h1>
              </div>
            )}

            {event.isGroup ? (
              <QRCode value={registration.id} size={80} />
            ) : (
              <QRCode
                value={registration.id}
                size={80}
                className="flex w-full items-center mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ticket;

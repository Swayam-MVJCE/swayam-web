'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import QRCode from 'react-qr-code';
import Image from 'next/image';
import Barcode from 'react-barcode';

const TicketCard = ({ event, registration }) => {
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const readableDate = event?.date.toLocaleDateString('en-US', options);
  return (
    <Tilt gyroscope>
      <div
        style={{
          fontFamily: 'Satoshi, sans-serif',
        }}
        className="purple-card-gradient w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] rounded-md text-white border border-fuchsia-400 shadow-lg shadow-purple-600"
      >
        <div className="flex flex-col justify-between w-full h-full p-4">
          <div className="w-full flex items-center justify-between">
            <Image src="/images/swayam-logo.svg" width={90} height={90} />

            <div className="flex flex-col items-start">
              <h1 className="font-bold text-sm md:text-md">
                {registration?.name}
              </h1>
              <h1 className="text-xs">{registration?.email}</h1>
            </div>
          </div>

          <div className="flex flex-col items-start mt-11">
            <h1
              style={{
                fontFamily: 'Mirtha Display, sans-serif',
              }}
              className={`text-5xl sm:text-7xl tracking-wider font-mirtha`}
            >
              {event?.title}
            </h1>
            <h1 className="font-semibold text-sm">{readableDate}</h1>

            <div className="flex items-center w-full justify-between mt-7">
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-xs md:text-md italic">Venue</h1>
                <h1 className="text-xs md:text-sm">{event?.venue}</h1>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-xs md:text-md italic">Time</h1>
                <h1 className="text-xs md:text-sm">{event?.time}</h1>
              </div>
            </div>
          </div>

          <hr className="w-full border border-gray-50 border-opacity-30 my-2" />

          <div className="flex flex-row overflow-x-hidden items-end justify-between">
            {event.isGroup && (
              <div className="flex flex-col items-start mt-5">
                <h1 className="font-bold text-xs md:text-md italic">
                  Participants
                </h1>
                <p className="text-xs md:text-sm whitespace-pre-wrap">
                  {registration.participants.map(
                    (participant, index) =>
                      `${participant.name}` +
                      (index === registration.participants.length - 1
                        ? ''
                        : ', ')
                  )}
                </p>
              </div>
            )}

            {event.isGroup ? (
              <QRCode level="Q" value={registration.id} size={80} />
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
    </Tilt>
  );
};

export default TicketCard;

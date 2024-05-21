'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import QRCode from 'react-qr-code';
import Image from 'next/image';

const TicketCard = ({ event, registration }) => {
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  };
  // const readableDate = event?.date.toLocaleDateString('en-US', options);
  const readableDate = new Date(event?.date).toLocaleDateString(
    'en-US',
    options
  );
  return (
    // <Tilt gyroscope>
    <div
      style={{
        fontFamily: 'Satoshi, sans-serif',
      }}
      className="purple-card-gradient w-[300px] sm:w-[400px] h-fit rounded-md text-white border border-fuchsia-400 shadow-lg shadow-purple-600"
    >
      <div className="flex flex-col justify-between w-full h-full p-4">
        <div className="w-full flex items-center justify-between text-right">
          <Image src="/images/swayam-logo.svg" width={90} height={90} />

          <div className="flex flex-col items-start">
            <h1 className="font-bold text-sm md:text-md">
              {registration?.name}
            </h1>
            {/* <h1 className="text-xs">{registration?.email}</h1> */}
          </div>
        </div>

        <div className="flex flex-col items-start mt-11 w-full text-wrap">
          <p
            className={`text-5xl sm:text-5xl tracking-wider font-mirtha flex-wrap`}
          >
            {event?.title}
          </p>
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
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xs md:text-md italic">
                Payment Status
              </h1>
              <h1 className="text-xs md:text-sm">
                {registration.paymentVerification}
              </h1>
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
                    (index === registration.participants.length - 1 ? '' : ', ')
                )}
              </p>
            </div>
          )}

          <QRCode
            bgColor="#fff"
            enableBackground={true}
            value={registration.id}
            size={120}
            className="p-1 bg-white min-h-[120px] min-w-[120px] max-h-[120px] max-w-[120px]"
          />
        </div>
      </div>
    </div>
    // </Tilt>
  );
};

export default TicketCard;

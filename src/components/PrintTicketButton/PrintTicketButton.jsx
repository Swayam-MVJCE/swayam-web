'use client';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './style.css';
import { LuDownload } from 'react-icons/lu';

const PrintTicketButton = ({ ticketComponent, event }) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="bg-gradient-to-br flex flex-row gap-2 items-center from-fuchsia-700 to-violet-600 text-white py-2 px-4 rounded-md hover:bg-gradient-to-br hover:from-fuchsia-400 hover:to-violet-500 transition">
            <LuDownload />
            Download Ticket
          </button>
        )}
        copyStyles={true}
        documentTitle={`Ticket - ${event.title} - Swayam 2024`}
        fonts={[
          {
            src: '/fonts/mirtha-display.woff2',
            fontWeight: 'bold',
            fontStyle: 'normal',
          },
          {
            src: '/fonts/satoshi-variable.woff2',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            src: '/fonts/chamisty.ttf',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        ]}
        content={() => componentRef.current}
      />
      <div ref={componentRef} className="printable">
        {ticketComponent}
      </div>
    </div>
  );
};

export default PrintTicketButton;

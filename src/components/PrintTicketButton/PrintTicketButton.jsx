'use client';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './style.css';

const PrintTicketButton = ({ ticketComponent }) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="bg-gradient-to-br from-fuchsia-700 to-violet-600 text-white py-2 px-4 rounded-md hover:bg-gradient-to-br hover:from-fuchsia-400 hover:to-violet-500 transition">
            Download Ticket
          </button>
        )}
        content={() => componentRef.current}
      />
      <div ref={componentRef} className="printable">
        {ticketComponent}
      </div>
    </div>
  );
};

export default PrintTicketButton;

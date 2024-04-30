import React from 'react';

import TicketCard from './TicketCard';

const Ticket = ({ event, registration }) => {
  return (
    <main className="w-screen flex flex-col items-center justify-start py-8 font-satoshi ">
      <TicketCard event={event} registration={registration} />
    </main>
  );
};

export default Ticket;

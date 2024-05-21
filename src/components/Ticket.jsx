import React from 'react';

import TicketCard from './TicketCard';

const Ticket = ({ event, registration }) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center py-8 font-satoshi ">
      <TicketCard event={event} registration={registration} />
    </main>
  );
};

export default Ticket;

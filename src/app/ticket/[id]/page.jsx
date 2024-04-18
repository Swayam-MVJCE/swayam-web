import MainLayout from '@/components/MainLayout';
import React from 'react';
import Ticket from '@/components/Ticket';

const TicketPage = ({ params }) => {
  const { id } = params;

  return (
    <MainLayout>
      <Ticket id={id} />
    </MainLayout>
  );
};

export default TicketPage;

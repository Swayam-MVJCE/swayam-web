import React from 'react';
import prisma from '@/utils/client';

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

  return <div></div>;
};

export default Ticket;

'use server';

import prisma from '@/utils/client';
import { json2csv } from 'json-2-csv';

export async function downloadCSVAction(eventId) {
  const registrations = await prisma.registration.findMany({
    where: {
      eventId,
    },
    select: {
      id: true,
      email: true,
      name: true,
      phone: true,
      collegeName: true,
      noOfParticipants: true,
      participants: {
        select: {
          name: true,
          phone: true,
        },
      },
      paymentVerification: true,
      paymentAmount: true,
      paymentId: true,
      screenshotUrl: true,
      createdAt: true,
    },
  });
  const csv = json2csv(registrations, {
    arrayIndexesAsKeys: true,
    expandNestedObjects: true,
  });
  return csv;
}

'use server';

import prisma from '@/utils/client';
import { json2csv } from 'json-2-csv';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export async function downloadCSVAction(eventId) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user || !user.role || user.role !== 'ADMIN') {
    return {
      error: 'Access Denied',
    };
  }
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

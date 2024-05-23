'use server';

import prisma from '@/utils/client';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function participantCheckin(registrationId, participantId) {
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

  if (!registrationId || !participantId) {
    throw new Error('Invalid registrationId or participantId');
  }

  try {
    const newData = await prisma.participant.update({
      where: {
        id: participantId,
      },
      data: {
        isCheckedIn: true,
        checkedInAt: new Date(),
      },
    });
    revalidatePath(`/verify/${registrationId}`, 'page');
    return {
      data: newData,
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong',
    };
  }
}

export async function singleParticipantCheckin(registrationId) {
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

  if (!registrationId) {
    throw new Error('Invalid registrationId');
  }

  try {
    const newData = await prisma.registration.update({
      where: {
        id: registrationId,
      },
      data: {
        isCheckedIn: true,
        checkedInAt: new Date(),
      },
    });
    revalidatePath(`/verify/${registrationId}`, 'page');
    return {
      data: newData,
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong',
    };
  }
}

export async function allParticipantCheckin(registrationId, participants) {
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

  if (!registrationId || !participants) {
    throw new Error('Invalid registrationId or participants');
  }

  const participantIds = participants.map((participant) => participant.id);
  try {
    const newData = await prisma.participant.updateMany({
      where: {
        id: {
          in: participantIds,
        },
      },
      data: {
        isCheckedIn: true,
        checkedInAt: new Date(),
      },
    });
    revalidatePath(`/verify/${registrationId}`, 'page');
    return {
      data: newData,
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong',
    };
  }
}

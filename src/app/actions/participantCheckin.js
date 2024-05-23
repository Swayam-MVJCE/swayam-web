'use server';

import prisma from '@/utils/client';
import { revalidatePath } from 'next/cache';

export async function participantCheckin(registrationId, participantId) {
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

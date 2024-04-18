'use server';

import { formSchema } from '@/lib/formSchema';
import prisma from '@/utils/client';
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: 'global',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

export async function registrationSubmit(metadata, data) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect(`/login?redirect=/register/${slug}`);
  }
  const registration = await prisma.registration.findFirst({
    where: {
      eventId: metadata.event.id,
      userId: session.user.id,
    },
  });

  if (registration) {
    return {
      status: 'error',
      message: 'You have already registered for this event',
    };
  }

  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  if (!parsed.success) {
    console.log(parsed.error);
    return {
      status: 'error',
      message: 'Invalid data',
    };
  }

  try {
    console.log('Try');
    const screenshotFile = await data.get('screenshot');
    console.log(screenshotFile);
    const s3ObjectKey = crypto.randomUUID();

    const upload_data = await s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: s3ObjectKey,
        Body: Buffer.from(await formData.screenshot.arrayBuffer()),
        ContentType: formData.screenshot.type,
      })
    );
    console.log(upload_data);

    const newRegistration = await prisma.registration.create({
      data: {
        eventId: metadata.event.id,
        userId: session.user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        collegeName: formData.college,
        paymentId: formData.utrNumber,
        noOfParticipants: parseInt(formData.noOfParticipants),
        participants: formData.participants,
        paymentAmount: metadata.event.registrationFee,
        screenshotUrl: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET_NAME}/${s3ObjectKey}`,
      },
    });
    console.log(newRegistration);
    return {
      status: 'success',
      message: 'Registration submitted successfully',
      data: newRegistration,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Error while submitting registration',
    };
  }
}

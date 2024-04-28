'use server';

import prisma from '@/utils/client';
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { createFormSchema } from '@/lib/formSchema';

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { RegistrationEmail } from '../../../emails/RegistrationEmail';

const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
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

  const event = await prisma.event.findUnique({
    where: {
      id: metadata.event.id,
    },
  });

  if (!event) {
    return {
      status: 'error',
      message: 'You are trying to register for an invalid event',
    };
  }

  console.log(data);
  const formData = Object.fromEntries(data);
  if (event.isGroup) {
    formData.participants = JSON.parse(formData.participants);
  }
  const formSchema = createFormSchema(event);
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
        eventId: event.id,
        userId: session.user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        collegeName: formData.college,
        paymentId: formData.utrNumber,
        noOfParticipants: event.isGroup ? formData.participants.length : 0,
        participants: event.isGroup
          ? {
              create: formData.participants,
            }
          : undefined,
        paymentAmount: event.registrationFee,
        screenshotUrl: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET_NAME}/${s3ObjectKey}`,
      },
      include: {
        participants: true,
        event: true,
      },
    });
    console.log(newRegistration);
    // if (newRegistration) {
    //   try {
    //     const transporter = nodemailer.createTransport({
    //       host: process.env.EMAIL_HOST,
    //       port: process.env.EMAIL_PORT,
    //       secure: false,
    //       auth: {
    //         user: process.env.EMAIL_USER,
    //         pass: process.env.EMAIL_PASS,
    //       },
    //     });

    //     const emailHtml = render(
    //       RegistrationEmail({ registration: newRegistration })
    //     );

    //     const options = {
    //       from: process.env.EMAIL_USER,
    //       to: newRegistration.email,
    //       subject: 'Swayam 2024 Registration for ' + event.title,
    //       html: emailHtml,
    //     };

    //     await transporter.sendMail(options);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
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

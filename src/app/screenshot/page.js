'use server';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import prisma from '@/utils/client';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { redirect } from 'next/navigation';

const ScreenshotPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  if (!session || !searchParams.url) {
    return redirect('/login');
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user || !user.role || user.role !== 'ADMIN' || !searchParams.url) {
    return (
      <div className="w-screen h-screen text-2xl flex flex-col items-center justify-center text-black">
        <h1>Access Denied</h1>
        <p>You need to be an admin to access this page.</p>
        <Link href="/" className="underline text-blue-400">
          Go back to home
        </Link>
      </div>
    );
  }

  if (searchParams.url) {
    const parts = searchParams.url.split('/');
    const keyIndex = parts.indexOf('payment-screenshots') + 1;
    const key = parts.slice(keyIndex).join('/');
    const s3 = new S3Client({
      endpoint: process.env.S3_ENDPOINT,
      region: 'global',
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    });

    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    redirect(signedUrl);
  }

  return <div>404</div>;
};

export default ScreenshotPage;

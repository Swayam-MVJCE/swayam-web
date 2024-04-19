import React from 'react';
import prisma from '@/utils/client';
import { MainLayout } from '@premieroctet/next-admin';
import { getMainLayoutProps } from '@premieroctet/next-admin/dist/utils/props';
import { options } from '@/app/admin/[[...nextadmin]]/page';
import { DownloadButton } from '@/components/DownloadCSVButton';
import { downloadCSVAction } from '@/app/actions/downloadCSVAction';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const CSVDownload = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user || !user.role || user.role !== 'ADMIN') {
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
  const mainLayoutProps = getMainLayoutProps({ options, isAppDir: true });
  const events = await prisma.event.findMany({
    include: {
      _count: {
        select: { registrations: true },
      },
    },
  });

  return (
    <MainLayout {...mainLayoutProps}>
      <div className="flex flex-col w-full p-10 text-black font-satoshi">
        <h2 className="text-2xl font-semibold">
          Download CSV for Registrations of Events
        </h2>
        <div className="grid grid-cols-3 max-w-full gap-4">
          {events.map((event) => {
            return (
              // Make it as cards
              <div
                key={event.id}
                className="flex w-full flex-col gap-4 p-4 my-4 bg-white shadow-md rounded-md"
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-xl text-purple-700 font-bold">
                    {event._count.registrations}
                  </p>
                </div>
                {event._count.registrations > 0 && (
                  <DownloadButton event={event} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default CSVDownload;

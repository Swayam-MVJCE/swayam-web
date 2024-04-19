import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import MainLayout from '@/components/MainLayout';
import Image from 'next/image';

const MyEventsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  return (
    <MainLayout>
      <div className="flex flex-row px-28 w-full min-h-52 font-satoshi gap-10 py-10"></div>
    </MainLayout>
  );
};

export default MyEventsPage;

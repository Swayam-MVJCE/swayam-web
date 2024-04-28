import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/utils/client';
import Link from 'next/link';
import TicketScanner from '@/components/TicketScanner';

const TickerScannerPage = async () => {
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
  return (
    <div>
      <TicketScanner />
    </div>
  );
};

export default TickerScannerPage;

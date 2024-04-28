import React from 'react';
import prisma from '@/utils/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const TicketVerificationPage = async ({ params }) => {
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
  const { id } = params;
  let registration;
  try {
    registration = await prisma.registration.findFirst({
      where: {
        id,
      },
      include: {
        participants: true,
      },
    });
  } catch (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  const registrationSample = {
    id: 'clvgvats900051lczyn7hho9i',
    eventId: 'c5374df6-c56a-4c25-bdd7-24c6a524b38d',
    userId: 'cluk12nhu0000c05dzgh8othe',
    email: 'sidhsreejil@gmail.com',
    name: 'Sidharth Sreejil',
    phone: '7560877023',
    collegeName: 'MVJ College of Engineering',
    noOfParticipants: 2,
    paymentVerification: 'PENDING',
    paymentAmount: 1500,
    paymentId: 'sad1231321dawd',
    screenshotUrl:
      'https://e8g7.bn.idrivee2-70.com/payment-screenshots/c34359ee-6e12-4493-b83c-84f73562d929',
    createdAt: '2024-04-26T16:08:50.505Z',
    updatedAt: '2024-04-26T16:08:50.505Z',
    participants: [
      {
        id: 'clvgvats900061lczajmlczvt',
        registrationId: 'clvgvats900051lczyn7hho9i',
        name: 'Virat Kohli',
        phone: '7560877023',
      },
      {
        id: 'clvgvats900071lcza6t9ibeq',
        registrationId: 'clvgvats900051lczyn7hho9i',
        name: 'Ishan Kishan',
        phone: '7560877023',
      },
    ],
  };
  if (!registration) return <div>Registration not found</div>;

  return (
    <div className="purple-card-gradient min-h-dvh w-screen overflow-x-hidden flex flex-col gap-2 font-satoshi px-4 py-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-center text-white py-4">
          Ticket Verification
        </h1>
        <h1 className="text-xl font-semibold  text-white">Ticket ID: {id}</h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-xl font-semibold  text-white">
          Name: {registrationSample.name}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Email: {registrationSample.email}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Phone: {registrationSample.phone}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          College: {registrationSample.collegeName}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          No of Participants: {registrationSample.noOfParticipants}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Payment Verification: {registrationSample.paymentVerification}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Payment Amount: {registrationSample.paymentAmount}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Payment ID: {registrationSample.paymentId}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Created At: {new Date(registrationSample.createdAt).toLocaleString()}
        </h1>
        <h1 className="text-xl font-semibold  text-white">
          Updated At: {new Date(registrationSample.updatedAt).toLocaleString()}
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-xl font-semibold  text-white">Participants:</h1>
        <h1 className="text-xl font-semibold  text-white">
          {registrationSample.participants.map(
            (participant, index) =>
              `${participant.name}` +
              (index === registrationSample.participants.length - 1 ? '' : ', ')
          )}
        </h1>
      </div>
    </div>
  );
};

export default TicketVerificationPage;

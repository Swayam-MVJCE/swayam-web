import React from 'react';
import prisma from '@/utils/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ParticipantCheckInButton from '@/components/ParticipantCheckInButton';

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
        event: true,
      },
      cache: false,
    });
  } catch (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  if (!registration) return <div>Registration not found</div>;

  return (
    <div className="purple-card-gradient min-h-screen w-full overflow-x-hidden flex flex-col items-center gap-4 font-satoshi px-6 py-8">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-3xl font-bold text-center text-white py-2">
          Ticket Verification
        </h1>
        <h2 className="text-sm font-semibold text-white/60">Ticket ID: {id}</h2>
        <h2 className="text-xl font-semibold text-white">
          Event: {registration.event.title}
        </h2>
      </div>

      <div className="flex flex-col items-start justify-center gap-1 w-full max-w-lg">
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">Name: </span>
          {registration.name}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">Email: </span>
          {registration.email}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">Phone: </span>
          {registration.phone}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">College: </span>
          {registration.collegeName}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            No of Participants:{' '}
          </span>
          {registration.noOfParticipants}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            Payment Verification:{' '}
          </span>
          {registration.paymentVerification}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            Payment Amount:{' '}
          </span>
          {registration.paymentAmount}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            Payment ID:{' '}
          </span>
          {registration.paymentId}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            Created At:{' '}
          </span>
          {new Date(registration.createdAt).toLocaleString()}
        </div>
        <div className="text-xl text-white">
          <span className="text-sm text-gray-100 font-semibold">
            Updated At:{' '}
          </span>
          {new Date(registration.updatedAt).toLocaleString()}
        </div>
      </div>
      {registration.event.isGroup && (
        <div className="flex flex-col items-start justify-center gap-2 w-full max-w-lg">
          <h2 className="text-xl font-semibold text-white">Participants</h2>
          <div className="flex flex-col gap-2 w-full md:max-w-3xl">
            {registration.participants.map((participant, index) => (
              <div
                key={participant.id}
                className="flex flex-row gap-2 items-center justify-between rounded-lg bg-white/20 px-4 py-4 w-full"
              >
                <span className="text-sm text-gray-100 font-semibold">
                  {index + 1}{' '}
                </span>
                <span className="text-lg w-full text-left text-wrap font-semibold text-white">
                  {participant.name}
                </span>
                {participant.isCheckedIn ? (
                  <span className="text-xs text-green-600 font-semibold w-max flex flex-col">
                    <span>Checked-In</span>
                    <span>
                      {new Date(participant.checkedInAt).toLocaleString()}
                    </span>
                  </span>
                ) : (
                  <ParticipantCheckInButton
                    className="self-end w-full"
                    registration={registration}
                    participant={participant}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!registration.event.isGroup &&
        (!registration.isCheckedIn ? (
          <ParticipantCheckInButton
            className="w-full"
            registration={registration}
            singleCheckIn={true}
          />
        ) : (
          <span className="text-lg text-green-600 font-semiboldflex flex-row">
            <span>Checked-In at </span>
            <span>{new Date(registration.checkedInAt).toLocaleString()}</span>
          </span>
        ))}
    </div>
  );
};

export default TicketVerificationPage;

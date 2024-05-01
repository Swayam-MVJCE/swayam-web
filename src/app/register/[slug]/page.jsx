import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import EventRegistrationForm from '@/components/EventRegistrationForm';
import MainLayout from '@/components/MainLayout';
import { redirect } from 'next/navigation';
import prisma from '@/utils/client';
import { getServerSession } from 'next-auth';
import upiqr from 'upiqr';
import Link from 'next/link';
import { createFormSchema } from '@/lib/formSchema';

export const dynamic = 'force-dynamic';

const RegistrationPage = async ({ params }) => {
  const { slug } = params;
  let event;
  try {
    event = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (!event) {
      return <div>Event not found</div>;
    }
  } catch (error) {
    console.log(error);
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect(
      `/login?callbackUrl=${encodeURIComponent('/register/' + slug)}`
    );
  }

  const registration = await prisma.registration.findFirst({
    where: {
      eventId: event.id,
      userId: session.user.id,
    },
  });

  if (registration) {
    return (
      <MainLayout>
        <div className="w-screen h-screen p-8 font-satoshi flex flex-col items-center justify-start text-white">
          <h1 className="text-3xl font-bold">
            You have already registered for this event.
          </h1>
          <p>
            Unfortunately, you cannot register for the same event more than
            once.
          </p>
          <Link
            href="/"
            className="px-4 py-1 bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl m-2 hover:bg-gradient-purple transition-all duration-500 hover:scale-105"
          >
            Go back to home
          </Link>
        </div>
      </MainLayout>
    );
  }

  const qr = await upiqr({
    payeeVPA: 'EzE0046709@CUB',
    payeeName: 'THE PRINCIPAL MVJ COLLEGE',
    amount: event.registrationFee,
    transactionNote: `Registration for ${event.title} by ${session.user.email}`,
    transactionRef: `Registration for ${event.title}`,
    transactionId: `Registration-${event.id},${session.user.email}`,
  });

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="container px-6 md:px-60 mx-auto flex flex-col gap-2 justify-start">
          <h1 className="text-xxl md:text-2xl leading-[0.8] font-chamisty bg-gradient-purple bg-clip-text text-transparent tracking-wide">
            Register For
          </h1>
          <h1 className="text-4xl md:text-[5.5rem] leading-[0.8] font-chamisty md:font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide">
            {event.title}
          </h1>

          <EventRegistrationForm event={event} session={session} qr={qr} />
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;

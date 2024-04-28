import MainLayout from '@/components/MainLayout';
import PrintTicketButton from '@/components/PrintTicketButton/PrintTicketButton';
import Ticket from '@/components/Ticket';
import prisma from '@/utils/client';

const TicketPage = async ({ params }) => {
  const { id } = params;
  let registration;
  let event;
  try {
    registration = await prisma.registration.findFirst({
      where: {
        id,
      },
      include: {
        participants: true,
        event: true,
      },
    });

    event = await prisma.event.findUnique({
      where: {
        id: registration.eventId,
      },
    });
    console.log(registration);
    console.log(event);
  } catch (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <MainLayout>
      <Ticket event={event} registration={registration} />
      <div className="flex w-full justify-center items-center py-6 font-satoshi">
        <PrintTicketButton
          event={event}
          ticketComponent={<Ticket event={event} registration={registration} />}
        />
      </div>
    </MainLayout>
  );
};

export default TicketPage;

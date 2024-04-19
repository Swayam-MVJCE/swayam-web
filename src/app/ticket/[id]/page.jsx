import MainLayout from '@/components/MainLayout';
import PrintTicketButton from '@/components/PrintTicketButton/PrintTicketButton';
import Ticket from '@/components/Ticket';

const TicketPage = ({ params }) => {
  const { id } = params;
  const TicketComponent = <Ticket id={id} />;
  return (
    <MainLayout>
      {TicketComponent}

      <div className="flex w-full justify-center mt- md:-mt-16 mb-10">
        <PrintTicketButton ticketComponent={TicketComponent} />
      </div>
    </MainLayout>
  );
};

export default TicketPage;

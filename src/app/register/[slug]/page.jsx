import EventRegistrationForm from '@/components/EventRegistrationForm';
import MainLayout from '@/components/MainLayout';
import prisma from '@/utils/client';

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

  return (
    <MainLayout>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col flex-gap justify-start">
          <h1 className="text-3xl md:text-[5.5rem] leading-[0.8] font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide">
            {event.title}
          </h1>

          <div className="w-full flex mt-10">
            {/* Left Div */}
            <div className="w-2/5 flex flex-col items-center justify-start">
              <EventRegistrationForm event={event} />
            </div>

            {/* Right Div */}
            <div className="w-3/5 flex flex-col items-center justify-center">
              PLACEHOLDER
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegistrationPage;

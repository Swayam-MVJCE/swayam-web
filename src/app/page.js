import FeaturedEventsSlider from '@/components/FeaturedEventsSlider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParallaxScroll from '@/components/ParallaxScroll';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <div className='min-h-screen flex flex-col items-center justify-center -mt-20'>
        <p className='font-mirtha w-fit md:w-full text-9xl text-center md:text-[160px] text-transparent swayam-text-animation tracking-wide leading-none bg-gradient-purple select-none hover:tracking-wider transition-all duration-500 swayam-text'>
          YOUR STAGE AWAITS
        </p>

        <p className='max-w-4xl text-xs px-10 md:text-base font-satoshi text-center text-gray-400'>
          Dive into the heart of MVJCE&apos;s cultural vibrancy at Swayam 2024,
          where your talents illuminate the stage. Celebrate, compete, and
          connect in our annual fest, showcasing the spirit and creativity of
          our college community.
        </p>
      </div>
      <div className='min-h-screen w-full flex flex-col items-center gap-10 justify-center'>
        <h1 className='font-mirtha text-6xl text-center md:text-8xl mt-4 tracking-wide leading-none px-4 bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text'>
          GET READY FOR SWAYAM 2024!
        </h1>
        <div className='w-full px-4 md:w-3/5 overflow-hidden '>
          <video
            autoPlay
            muted
            controls
            playsInline
            className='w-full rounded-xl'
            loop
          >
            <source
              src='https://res.cloudinary.com/dthmnj96x/video/upload/v1710348215/teaser_woja4e.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <div className='flex min-h-screen flex-row items-center justify-center'>
        <ParallaxScroll />
      </div>

      <div
        id='featured'
        className='min-h-screen w-full flex flex-col items-center justify-center'
      >
        <h1 className='font-mirtha text-center text-8xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text'>
          FEATURED EVENTS
        </h1>

        <FeaturedEventsSlider />
      </div>
      <Footer />
      <div className='bg-image'></div>
      <div className='bg-gradient'></div>
      <div className='light-container'>
        <div className='blurred-lighting top-left'></div>
        <div className='blurred-lighting top-right'></div>
        <div className='blurred-lighting bottom-left'></div>
        <div className='blurred-lighting bottom-right'></div>
      </div>
    </main>
  );
}

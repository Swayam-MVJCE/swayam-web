import FeaturedEventsSlider from '@/components/FeaturedEventsSlider';
import Footer from '@/components/Footer';
import GalleryTicker from '@/components/GalleryTicker';
import Navbar from '@/components/Navbar';
import ParallaxScroll from '@/components/ParallaxScroll';
import ProShowsSlider from '@/components/ProShowsSlider';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center -mt-20">
        <p className="text-white font-mirtha w-fit md:w-full text-9xl text-center md:text-[160px]  tracking-wide leading-none select-none hover:tracking-wider transition-all duration-500 swayam-text">
          YOUR STAGE AWAITS
        </p>

        <p className="max-w-4xl text-xs px-10 md:text-base font-satoshi text-center text-gray-400">
          Dive into the heart of MVJCE&apos;s cultural vibrancy at Swayam 2024,
          where your talents illuminate the stage. Celebrate, compete, and
          connect in our annual fest, showcasing the spirit and creativity of
          our college community.
        </p>
      </div>
      <div className="min-h-screen w-full flex flex-col items-center gap-10 justify-center">
        <h1 className="font-mirtha text-6xl text-center md:text-8xl mt-4 tracking-wide leading-none px-4 bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text">
          GET READY FOR SWAYAM 2024!
        </h1>
        <div className="w-full px-4 md:w-3/5 overflow-hidden ">
          <video
            autoPlay
            muted
            controls
            playsInline
            className="w-full rounded-xl"
            loop
          >
            <source
              src="https://res.cloudinary.com/dthmnj96x/video/upload/v1713616219/videos/swayam-promo_jql7b7.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        id="featured"
        className="min-h-screen relative w-full flex flex-col items-center justify-center"
      >
        <h1 className="font-mirtha text-center text-8xl relative  md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 tracking-wide leading-none bg-white text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text">
          PRO SHOWS
        </h1>

        <ProShowsSlider />
      </div>
      <div className="flex min-h-screen flex-row items-center justify-center">
        <ParallaxScroll />
      </div>

      <div className="flex min-h-screen flex-row items-center justify-center">
        <GalleryTicker />
      </div>
      <div
        id="featured"
        className="min-h-screen w-full flex flex-col items-center justify-center"
      >
        <h1 className="font-mirtha text-center text-8xl mt-4 tracking-wide leading-none bg-white text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text">
          FEATURED EVENTS
        </h1>

        <FeaturedEventsSlider />
        <Link
          href={'/events'}
          className="font-satoshi font-semibold text-center flex flex-row gap-2 items-center text-2xl py-8 tracking-normal leading-none bg-white text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500 swayam-text"
        >
          <span>Explore All Events</span>{' '}
          <IoIosArrowRoundForward color="#FFF" />
        </Link>
      </div>
      <Footer />
      <div className="bg-image"></div>
      <div className="bg-gradient"></div>
      <div className="light-container">
        <div className="blurred-lighting top-left"></div>
        <div className="blurred-lighting top-right"></div>
        <div className="blurred-lighting bottom-left"></div>
        <div className="blurred-lighting bottom-right"></div>
      </div>
    </main>
  );
}

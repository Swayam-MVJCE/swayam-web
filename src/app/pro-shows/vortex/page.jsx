import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import React from 'react';

const VortexPage = async () => {
  return (
    <MainLayout>
      <main className="px-4 md:px-24 py-12 flex-col flex gap-6 items-center justify-center md:h-screen">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="flex flex-col md:flex-row h-full justify-center items-start w-full gap-6 md:gap-16 ">
            <div className="w-full md:h-[400px] md:w-[400px] aspect-square rounded-lg overflow-hidden relative hover:scale-105 transition duration-200">
              <Image src="/images/vortex.jpg" fill />
            </div>
            <div className="flex  flex-col basis-1/2 md:min-h-[400px] justify-between items-start">
              <div className="flex-col justify-start items-start">
                <h1 className=" text-6xl md:text-[5.5rem] leading-[0.8] font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide">
                  Vortex
                </h1>
                <h3 className="text-rose-300 font-satoshi text-lg md:text-xl mb-4">
                  Mainstage -{' '}
                  <span className="text-gray-300 font-satoshi text-md">
                    25th May 2023 | 5pm onwards
                  </span>
                </h3>
                <p className="text-gray-300 font-satoshi  text-lg leading-tight md:w-[60%]">
                  {`Get ready to groove to the beats of pop! 🎊 We are thrilled to announce that our headline band for Swayam 2024⚡️, Vortex, who will immerse you in a world of rhythm 🎵. Circle the dates on calender for May 25th for this incredible event 🎸. Swayam 2024 is set to deliver an unforgettable musical extravaganza with spectacular performances and electrifying energy. Don't miss out on two days of pop music, enchanting melodies, and an captivating festival atmosphere. Join us and experience the magic of Vortex as they take you on a remarkable musical journey!✨`}
                </p>
                <div className="flex flex-row gap-1 items-center md:mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default VortexPage;

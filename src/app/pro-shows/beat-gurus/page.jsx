import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import React from 'react';

const BeatGurusPage = async () => {
  return (
    <MainLayout>
      <main className="px-4 md:px-24 py-12 flex-col flex gap-6 items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          <div className="flex flex-col md:flex-row h-full justify-center items-start w-full gap-6 md:gap-16 ">
            <div className="w-full md:h-[400px] md:w-[400px] aspect-square rounded-lg overflow-hidden relative hover:scale-105 transition duration-200">
              <Image src="/images/beat-gurus.jpg" fill />
            </div>
            <div className="flex  flex-col basis-1/2 md:min-h-[400px] justify-between items-start">
              <div className="flex-col justify-start items-start">
                <h1 className=" text-6xl md:text-[5.5rem] leading-[0.8] font-mirtha bg-gradient-purple bg-clip-text text-transparent tracking-wide">
                  Beat Gurus
                </h1>
                <h3 className="text-rose-300 font-satoshi text-lg md:text-xl mb-4">
                  Mainstage -{' '}
                  <span className="text-gray-300 font-satoshi text-md">
                    24th May 2024 | 5pm onwards
                  </span>
                </h3>
                <p className="text-gray-300 font-satoshi  text-lg leading-tight md:w-[60%]">
                  {`
                    Get ready to rock! 🎸 Announcing Beat Gurus as the blockbuster band for Swayam 2024⚡️! Prepare yourseld for the exciting musical experience like never before 🎤.  Mark the date on May 24th 🪩 for this fabulous event that will be held. With electrifying performances and unforgettable moments, Swayam 2024🪇 promises to be the ultimate music festival. So don't miss out on this celebration of sound and rhythm. Come and join us for the two incredible days filled with the best beats, vibrant energy, and an atmosphere that will leave you wanting more. Get ready for an extraordinary musical journey! 🎼
                  `}
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

export default BeatGurusPage;

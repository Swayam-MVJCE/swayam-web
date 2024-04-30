import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import React from 'react';

const AboutSwayamPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 px-4 md:px-16 md:py-10 pb-6">
        <div className="flex min-h-[60vh] flex-col md:flex-row items-center gap-4 justify-center md:justify-evenly md: px-16">
          <div className="flex w-full basis-3/5 flex-col gap-2 justify-center md:justify-start">
            <h1 className="font-mirtha w-full text-6xl md:text-8xl tracking-wide leading-none select-none hover:tracking-wider transition-all duration-500 swayam-text mt-2 text-center md:text-left">
              Swayam 2024
            </h1>
            <p className="font-satoshi text-lg text-gray-300 max-w-xl">
              {`
            SWAYAM, the dynamic and culturally enriching inter-college festival by MVJ College of Engineering. Returning after a three-year hiatus, this vibrant celebration unveils the unique talents within our diverse student community through various creative expressions, including music and dance. The upcoming 11th edition promises a grand and spectacular experience. SWAYAM unites theater, literature, dance, music, and art clubs for an enthralling showcase of talent and creativity. Get ready for an unforgettable cultural celebration!
           `}{' '}
            </p>
          </div>
          <Image src={'/images/swayam-logo.svg'} width={500} height={500} />
        </div>
        <div className="flex min-h-[60vh] flex-col gap-4 md:flex-row items-center justify-center md:justify-around w-full">
          <Image
            className="rounded-xl main-event"
            src={'/images/mvj-image.jpg'}
            width={500}
            height={500}
          />
          <div className="flex basis-3/5 flex-col gap-4 justify-start">
            <h1 className="font-mirtha w-fit md:w-full text-6xl md:text-8xl tracking-wide leading-none select-none hover:tracking-wider transition-all duration-500 swayam-text mt-2 text-center md:text-left">
              MVJ College of Engineering
            </h1>
            <p className="font-satoshi text-lg text-gray-300">
              {`
            Established in 1982 as part of the Venkatesha Education Society, MVJ College of Engineering is a distinguished institution offering a broad spectrum of undergraduate and graduate programs. Renowned for its modern amenities, seasoned faculty, and innovative pedagogy, MVJCE places a strong emphasis on experiential learning through industry-centric projects. Consistently ranked among India's top engineering schools, it forges enduring partnerships with leading companies, ensuring robust graduate placements. Beyond academic pursuits, MVJCE nurtures a community of scholars and innovators, exemplified by the impactful contributions of its graduates to both professional realms and society.
           `}{' '}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutSwayamPage;

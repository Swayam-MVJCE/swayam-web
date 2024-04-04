import MainLayout from '@/components/MainLayout';
import React from 'react';

const GuidelinesPage = () => {
  return (
    <MainLayout>
      <div className='flex px-10 py-6 md:px-40 flex-col md:flex-row md:justify-between items-start md:items-center overflow-hidden flex-wrap md:p-8 rounded-lg'>
        <div>
          <h1 className='font-mirtha w-full md:mb-40 text-6xl md:text-[10rem] mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none  transition-all duration-500'>
            General <br className='hidden md:inline' /> Guidelines
          </h1>
        </div>
        <div>
          <h1 className='font-mirtha text-4xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500'>
            Do's
          </h1>
          <p className='whitespace-pre text-wrap font-satoshi text-gray-300 leading-relaxed text-lg'>
            <ul className='list-inside list-disc'>
              <li>Carry your ID Cards.</li>
              <li>Be appropriately dressed. Modest Clothing is required.</li>
              <li>Report 30 minutes in prior to your event.</li>
            </ul>
          </p>
          <br />
          <br />
          <h1 className='font-mirtha text-4xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500'>
            Don't's
          </h1>
          <p className='whitespace-pre text-wrap font-satoshi text-gray-300 leading-relaxed text-lg'>
            <ul className='list-inside list-disc'>
              <li>Do not misbehave on the campus.</li>
              <li>Do not consume alcohol or other illicit substances.</li>
              <li>Do not carry restricted items.</li>
              <li>Do not forget to have fun {':)'}</li>
            </ul>
          </p>
          <br />
          <br />
          <h1 className='font-mirtha text-4xl md:text-6xl mt-4 tracking-wide leading-none bg-gradient-purple text-transparent bg-clip-text select-none hover:tracking-wider transition-all duration-500'>
            Restricted Items
          </h1>
          <p className='whitespace-pre text-wrap font-satoshi text-gray-300 leading-relaxed text-lg'>
            <ul className='list-inside list-disc'>
              <li>Do not misbehave on the campus.</li>
              <li>Do not consume alcohol or other illicit substances.</li>
              <li>Do not carry restricted items.</li>
              <li>Do not forget to have fun {':)'}</li>
            </ul>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default GuidelinesPage;

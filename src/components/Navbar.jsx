import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row items-center justify-between md:px-24 px-5 py-8 absolute top-0 z-10'>
      <Link href='/'>
        <img src='/swayam-logo.png' className='h-16 object-fit' />
      </Link>
      <div className='flex flex-row items-center justify-evenly w-full max-w-lg gap-28 text-md font-satoshi text-[#D6D6D6]'>
        <Link
          href='#'
          className='transition hover:text-rose-300 hover:scale-105 duration-300'
        >
          Home
        </Link>
        <Link
          href='#'
          className='transition hover:text-rose-300 hover:scale-105 duration-300'
        >
          Events
        </Link>
        <Link
          href='#'
          className='transition hover:text-rose-300 hover:scale-105 duration-300'
        >
          Contact
        </Link>
      </div>
      <div>
        {/* Glassmorphism button below */}
        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:decoration-2 hover:text-rose-300 relative bg-transparent h-12 w-52 border-transparent border-gray-700 border text-center p-3 text-gray-50 text-base font-satoshi rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-screen relative flex flex-row items-center justify-between md:px-14 px-4 py-4 z-10'>
      <Link href='/'>
        <img
          src='/images/mvj-logo.png'
          className=' h-10 md:h-20 object-fit hover:scale-105 transition duration-200 '
        />
      </Link>
      <Link href='/'>
        <img
          src='/images/swayam-logo.svg'
          className=' h-10 md:h-14 object-fit hover:scale-105 transition duration-200 '
        />
      </Link>
      <div className='hidden md:flex flex-row items-center justify-evenly gap-6 text-md font-satoshi text-[#D6D6D6]'>
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
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className='md:hidden absolute flex flex-col gap-3 font-satoshi top-20 left-0 bg-black bg-opacity-35 w-full py-6 px-8 rounded-md shadow-md'>
          <Link href='#'>Home</Link>
          <Link href='#'>Events</Link>
          <Link href='#'>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

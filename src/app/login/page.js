'use client';

import Navbar from '@/components/Navbar';
import React from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  return (
    <div className="h-screen w-screen font-satoshi">
      <Navbar />
      <div className="fixed grid place-items-center top-0 right-0 left-0 inset-0  justify-center items-center">
        <div className="relative container m-auto px-6">
          <div className="m-auto md:w-7/12">
            <div className="rounded-xl  bg-gray-500 bg-opacity-25 backdrop-blur-sm shadow-xl">
              <div className="p-8">
                <div className="space-y-4">
                  <img
                    src="/images/swayam-logo.svg"
                    loading="lazy"
                    className="w-32 text-purple-500"
                    alt="logo"
                  />
                  <h2 className="mb-8 text-2xl text-white font-bold">
                    Login to get started with Swayam 2024
                  </h2>
                </div>
                <div className="mt-10 grid space-y-4">
                  <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="group h-12 px-6 border-2 border-gray-500 rounded-full transition duration-300 hover:border-purple-600 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-purple-600-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
                <div className="mt-6 space-y-2 py-3 text-gray-400 text-center">
                  <p className="text-xs">
                    By proceeding, you agree to our{' '}
                    <a href="/privacy-policy/" className="underline">
                      Terms of Use
                    </a>{' '}
                    and confirm you have read our{' '}
                    <a href="/privacy-policy/" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image"></div>
      <div className="bg-gradient"></div>
      <div className="light-container">
        <div className="blurred-lighting top-left"></div>
        <div className="blurred-lighting top-right"></div>
        <div className="blurred-lighting bottom-left"></div>
        <div className="blurred-lighting bottom-right"></div>
      </div>
    </div>
  );
};

export default LoginPage;

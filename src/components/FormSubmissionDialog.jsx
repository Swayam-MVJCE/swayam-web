'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { BiErrorCircle } from 'react-icons/bi';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { HiTicket } from 'react-icons/hi2';

import Link from 'next/link';
export default function FormSubmissionDialog({
  isOpen,
  closeModal,
  status,
  message,
  data,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 text-white"
          onClose={() => {
            return;
          }}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center font-satoshi">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {status === 'loading' && (
                  <Dialog.Panel
                    as="div"
                    className="w-full flex flex-col gap-2 max-w-lg transform overflow-hidden rounded-xl bg-gray-500 bg-opacity-40 backdrop-blur-md p-6 text-center items-center justify-center align-middle shadow-xl transition-all"
                  >
                    <ThreeDots
                      visible={true}
                      height="80"
                      width="80"
                      color="#a811ff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                    />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-white"
                    >
                      Processing your Registration
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        Please wait while we process your registration and do
                        not close this page.
                      </p>
                    </div>
                  </Dialog.Panel>
                )}
                {status === 'error' && (
                  <Dialog.Panel
                    as="div"
                    className="w-full flex flex-col gap-2 max-w-lg transform overflow-hidden rounded-xl bg-gray-500 bg-opacity-40 backdrop-blur-md p-6 text-center items-center justify-center align-middle shadow-xl transition-all"
                  >
                    <BiErrorCircle size={60} color="#ff2200" />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-100"
                    >
                      Sorry, there was an error.
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        There was an error while submitting your registration.
                        Please try again later. (You will be redirected to the
                        event page in 5 seconds...)
                      </p>
                      <p>{message && message}</p>
                    </div>
                  </Dialog.Panel>
                )}

                {status == 'success' && (
                  <Dialog.Panel
                    as="div"
                    className="w-full flex flex-col max-w-md transform overflow-hidden rounded-xl bg-gray-500 bg-opacity-40 backdrop-blur-md p-6 text-center items-center justify-center align-middle shadow-xl transition-all"
                  >
                    <FaRegCircleCheck size={60} color="#22FF44" />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium text-gray-100 mt-4"
                    >
                      Registration Successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-base text-gray-300 text-center">
                        Thanks for registering for the event. You will receive
                        an email with your e-ticket shortly. <br />
                        <br />
                        <p className="text-sm text-gray-400 text-center">
                          You can also view the event details and your e-ticket
                          from &lsquo;My Events&rsquo; section of your account.
                        </p>
                      </p>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between mt-4 gap-2">
                      <Link
                        className="px-4 flex items-center justify-center gap-2 py-2 w-full bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl m-2 hover:bg-gradient-purple transition-all duration-500 hover:scale-105"
                        href="/my-events"
                      >
                        <FaUser />
                        My Events
                      </Link>
                      <Link
                        className="px-4 flex items-center justify-center gap-2 py-2 w-full bg-gray-400 bg-opacity-15 text-nowrap border-gray-400 border border-opacity-40 cursor-pointer font-satoshi backdrop-blur-sm rounded-xl m-2 hover:bg-gradient-purple transition-all duration-500 hover:scale-105"
                        href={`/ticket/${data.id}`}
                      >
                        <HiTicket size={22} />
                        View E-Ticket
                      </Link>
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

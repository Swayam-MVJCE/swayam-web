'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { registrationSubmit } from '@/app/actions/registrationSubmit';
import { formSchema } from '@/lib/formSchema';
import FormSubmissionDialog from './FormSubmissionDialog';
import { useClientMediaQuery } from '@/lib/useClientMediaQuery';

import { useRouter } from 'next/navigation';

const EventRegistrationForm = ({ event, session, qr }) => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useClientMediaQuery('(max-width: 600px)');

  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: session?.user?.name || '',
      email: session?.user?.email || '',
      contact: '',
      college: '',
      utrNumber: '',
      screenshot: null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'participants',
  });

  const registrationSubmitWithMeta = registrationSubmit.bind(null, {
    event: event,
    session,
  });

  async function onSubmit(data) {
    setStatus('loading');
    setModalOpen(true);
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('college', data.college);
    formData.append('utrNumber', data.utrNumber);
    formData.append('noOfParticipants', data.noOfParticipants);
    formData.append('participants', data.participants);
    formData.append('screenshot', data.screenshot);

    const res = await registrationSubmitWithMeta(formData);
    if (res.message) {
      setMessage(res.message);
    }
    if (res.status === 'error') {
      setStatus('error');
      setTimeout(() => {
        router.push('/events');
      }, 3000);
    }
    if (res.status === 'success') {
      setStatus('success');
    }
  }

  return (
    <Form {...form}>
      <FormSubmissionDialog isOpen={modalOpen} status={status} />
      <form
        action={registrationSubmit}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  font-satoshi"
      >
        <div className="w-full flex flex-col md:flex-row mt-4 gap-20">
          {/* Left Div */}
          <div className="basis-3/5 w-full gap-4 flex flex-col items-stretch justify-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" required className="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="w-full flex gap-3"> */}
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Contact Number (WhatsApp)</FormLabel>
                  <FormControl>
                    <Input type="tel" required className="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>College Name</FormLabel>
                  <FormControl>
                    <Input className="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* </div> */}
            {event.isGroup && (
              <>
                <FormField
                  control={form.control}
                  name="noOfParticipants"
                  rules={{
                    required: true,
                    validate: (value) =>
                      (value >= event.minParticipants &&
                        value <= event.maxParticipants) ||
                      'Number of participants must be within the specified range.',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem>
                      <FormLabel>
                        No of team members (Min: {event.minParticipants}, Max:{' '}
                        {event.maxParticipants})
                      </FormLabel>
                      <FormControl>
                        <Input type="number" required className="" {...field} />
                      </FormControl>

                      {error && <FormMessage error={error.message} />}
                    </FormItem>
                  )}
                />

                {event.isGroup && (
                  <>
                    <FormLabel>Team Members</FormLabel>
                    {fields.map((item, index) => (
                      <div key={item.id}>
                        <FormField
                          control={form.control}
                          name={`participants[${index}].name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className=""
                                  {...field}
                                  placeholder={`Participant ${
                                    index + 1
                                  } - Contact Number`}
                                />
                              </FormControl>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Remove Participant
                              </button>
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => append({ name: '' })}
                      disabled={
                        !form.watch('noOfParticipants') ||
                        fields.length >= form.watch('noOfParticipants')
                      }
                    >
                      Add Participant
                    </button>
                  </>
                )}
              </>
            )}{' '}
            {!event.isGroup && !isMobile && (
              <>
                <FormField
                  control={form.control}
                  name="utrNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        UTR Number {`(Payment Transaction ID)`}
                      </FormLabel>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="screenshot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Screenshot of Payment {`(Proof of Payment)`}
                      </FormLabel>
                      <FormControl></FormControl>
                      <FileInput control={form.control} name="screenshot" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <div className="basis-2/5 w-full items-stretch flex flex-col h-fit  gap-4 md:gap-2 py-4 px-8 font-satoshi justify-start rounded-lg bg-gray-400 bg-opacity-20 backdrop-blur-sm">
            <h2 className="text-lg font-semibold  text-center w-full  text-gray-200">
              Payment of Registration Fee
            </h2>
            <p className="font-thin text-sm text-center">
              Scan the QR to complete the payment of registration through UPI
              fee and enter the transaction details.
            </p>
            <img
              src={qr.qr}
              alt="QR Code"
              className="w-full rounded-lg self-center mx-auto"
            />

            <span className="text-xs text-center text-gray-400">
              EzE0046709@CUB
            </span>

            <p className="text-lg text-center -mt-2 font-semibold text-purple-300">
              &#8377;{event.registrationFee}
            </p>
            <Link
              href={qr.intent}
              className="md:hidden flex flex-row w-full justify-center bg-gray-500 bg-opacity-50 border border-purple-400 px-4 py-2 rounded-lg font-semibold text-gray-200"
            >
              Pay using UPI App
              <img
                src="/images/phonpe-logo.png"
                alt="UPI"
                className="h-6 ml-2"
              />
              <img src="/images/gpay-logo.png" alt="UPI" className="h-6 ml-2" />
            </Link>
            {(event.isGroup || isMobile) && (
              <>
                <FormField
                  control={form.control}
                  name="utrNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        UTR Number {`(Payment Transaction ID)`}
                      </FormLabel>
                      <FormControl>
                        <Input className="w-full" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="screenshot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Screenshot of Payment {`(Proof of Payment)`}
                      </FormLabel>
                      <FormControl></FormControl>
                      <FileInput control={form.control} name="screenshot" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-400 my-6">
          By clicking on the register button, you agree to the terms and
          conditions of the event and adhere to the{' '}
          <Link className="text-purple-400 font-semibold" href="/guidelines">
            General Guidelines and Rules
          </Link>{' '}
          of the event.
          <br /> Please review our{' '}
          <Link
            className="text-purple-400 font-semibold"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>{' '}
          for information on how we handle your data.
        </p>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="text-white w-full font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  rounded-lg px-5 py-3 text-center me-2 mb-2"
        >
          {status === 'loading' ? (
            <span className="animate-pulse">Registering...</span>
          ) : (
            <>
              <span className="group-hover:decoration-2">
                COMPLETE REGISTRATION &nbsp;
              </span>
            </>
          )}
        </button>
      </form>
    </Form>
  );
};

const FileInput = ({ control, name }) => {
  const { field } = useController({ control, name });
  const [value, setValue] = useState('');
  return (
    <div className="overflow-hidden relative mt-4 mb-4">
      <button
        type="button"
        className={`${
          field.value == null
            ? 'bg-purple-500 bg-opacity-75'
            : 'bg-green-500 bg-opacity-75'
        }  w-full flex flex-row justify-center gap-2 px-4 py-2 rounded-lg items-center border border-gray-400 text-gray-100`}
      >
        <svg
          fill="#FFF"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </svg>
        <span>
          {value.length == 0
            ? 'Upload Screenshot'
            : `Uploaded -${field.value.name}`}
        </span>
      </button>
      <input
        className="cursor-pointer absolute top-0 z-10 block py-2 px-4 w-full opacity-0 pin-r pin-t"
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          field.onChange(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default EventRegistrationForm;

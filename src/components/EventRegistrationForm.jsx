'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { MdCancel, MdOutlineCancel } from 'react-icons/md';

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
import { useState, useEffect } from 'react';
import { registrationSubmit } from '@/app/actions/registrationSubmit';
import { createFormSchema } from '@/lib/formSchema';
import FormSubmissionDialog from './FormSubmissionDialog';
import { useClientMediaQuery } from '@/lib/useClientMediaQuery';
import { useRouter } from 'next/navigation';
import { IoPersonRemove, IoPersonRemoveOutline } from 'react-icons/io5';

const EventRegistrationForm = ({ event, session, qr }) => {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [resData, setResData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useClientMediaQuery('(max-width: 600px)');
  const formSchema = createFormSchema(event);
  console.log(formSchema);
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
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [form.watch]);

  useEffect(() => {
    if (form.formState.errors) {
      console.log(form.formState.errors);
    }
  }, [form.formState.errors]);

  async function onSubmit(data) {
    console.log(data);
    setStatus('loading');
    setModalOpen(true);
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('college', data.college);
    formData.append('utrNumber', data.utrNumber);
    if (event.isGroup) {
      formData.append('participants', JSON.stringify(data.participants));
    }
    formData.append('screenshot', data.screenshot);

    console.log(formData);
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
      setResData(res.data);
    }
  }

  return (
    <Form {...form}>
      <FormSubmissionDialog isOpen={modalOpen} status={status} data={resData} />
      <form
        action={registrationSubmit}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  font-satoshi"
      >
        <div className="w-full flex flex-col md:flex-row mt-4 gap-20 text-white">
          {/* Left Div */}
          <div className="basis-3/5 w-full gap-4 flex flex-col items-stretch justify-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full Name {event.isGroup && '(Group Leader)'}
                  </FormLabel>
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
                  <FormLabel>Contact Number (WhatsApp) </FormLabel>
                  <FormControl>
                    <Input type="tel" className="" {...field} />
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
                    <Input type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* </div> */}
            {event.isGroup && (
              <>
                {/* <FormField
                  control={form.control}
                  name="noOfParticipants"
                  render={({ field, fieldState: { error } }) => (
                    <FormItem>
                      <FormLabel>
                        No of team members (Min: {event.minParticipants}, Max:{' '}
                        {event.maxParticipants})
                      </FormLabel>
                      <FormControl>
                        <Input type="number" required className="" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {event.isGroup && (
                  <>
                    <FormLabel>
                      Group Members (Min:{event.minParticipants} & Max:{' '}
                      {event.maxParticipants})
                    </FormLabel>
                    <FormLabel>
                      <span className="text-blue-300 text-xs">
                        Note: Please include only group members here, excluding
                        the Group Leader.
                      </span>
                    </FormLabel>
                    {fields.map((item, index) => (
                      <div
                        className="flex flex-col gap-2 border border-white rounded-lg p-3 relative bg-gray-400 bg-opacity-10 backdrop-blur-lg"
                        key={item.id}
                      >
                        <FormLabel className="text-lg font-bold">
                          Participant {index + 1}
                        </FormLabel>
                        <FormField
                          control={form.control}
                          name={`participants[${index}].name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  className=""
                                  {...field}
                                  placeholder={`Participant ${
                                    index + 1
                                  } - Name`}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`participants[${index}].phone`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Number (Whatsapp)</FormLabel>
                              <FormControl>
                                <Input
                                  className=""
                                  {...field}
                                  placeholder={`Participant ${
                                    index + 1
                                  } - Contact Number`}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <button
                          type="button"
                          className="text-rose-500 text-sm absolute top-3 right-3"
                          onClick={() => remove(index)}
                        >
                          <MdOutlineCancel size={28} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="flex flex-row items-center justify-center gap-2 bg-gray-500 bg-opacity-50 border border-white text-gray-100 px-4 py-2 rounded-lg"
                      onClick={() => append({ name: '', phone: '' })}
                      disabled={
                        fields.length >= event.maxParticipants ||
                        status === 'loading'
                      }
                    >
                      {fields.length >= event.maxParticipants ? (
                        <span>Max Participants Reached</span>
                      ) : (
                        <>
                          <CiCirclePlus />
                          <span>Add Participant</span>
                        </>
                      )}
                    </button>
                    <FormMessage>
                      {console.log(form.formState.errors)}
                      {form.formState.errors.participants &&
                        form.formState.errors.participants.message}
                    </FormMessage>
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
            {/* <Link
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
            </Link> */}
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
          className="text-white w-full font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg px-5 py-3 text-center me-2 mb-2"
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

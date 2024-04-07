'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  contact: z
    .number()
    .min(1, { message: 'Contact is required' })
    .max(10, { message: 'Contact should be 10 digits' }),
  college: z.string().min(1, { message: 'College is required' }),
  teamCount: z.number().optional(),
  memberNames: z.string({}).optional(),
});

const EventRegistrationForm = ({ event }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      college: '',
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
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
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} />
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
                <Input className="text-black" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* </div> */}

        {/* {event.isGroup && ( */}
        <>
          <FormField
            control={form.control}
            name="teamCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  No of team members (Min: {event.minParticipants}, Max:{' '}
                  {event.maxParticipants})
                </FormLabel>
                <FormControl>
                  <Input className="text-black" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="memberNames"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-3">
                  <FormLabel>Member Names</FormLabel>
                  <FormControl>
                    <textarea
                      className="text-black rounded-md p-2"
                      placeholder="Participant 1 Name - Phone Number
"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormDescription className="">
                  Enter the names of all team members sepearted by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
        {/* )} */}

        <button
          type="submit"
          className="group mt-4 flex gap-2 justify-center group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_30px_30px_30px_40px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:decoration-2 hover:text-rose-300 relative bg-transparent h-12 w-full border-opacity-60 border-gray-500 border text-center p-3 text-gray-50 text-base rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg font-satoshi"
        >
          <span className="group-hover:decoration-2">REGISTER</span>
          <span className="group-hover:decoration-2">
            &#8377;
            {event.registrationFee}
          </span>
        </button>
      </form>
    </Form>
  );
};

export default EventRegistrationForm;

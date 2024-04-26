import { z } from 'zod';

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const createFormSchema = (event) => {
  let schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email' }),
    contact: z
      .string()
      .regex(/^[0-9]{10}$/, {
        message: 'Contact number should be 10 digits and only contain numbers',
      })
      .min(1, { message: 'Contact is required' })
      .max(10, { message: 'Contact should be 10 digits' }),
    college: z.string().min(1, { message: 'College is required' }),
    utrNumber: z.string().min(1, { message: 'UTR Number is required' }),
    participants: z
      .array(
        z.object({
          name: z.string().min(1, { message: 'Name is required' }),
          phone: z
            .string()
            .regex(/^[0-9]{10}$/, {
              message:
                'Contact number should be 10 digits and only contain numbers',
            })
            .min(1, { message: 'Contact is required' })
            .max(10, { message: 'Contact should be 10 digits' }),
        })
      )
      .min(event.minParticipants, {
        message: `Minimum ${event.minParticipants} participants are required`,
      })
      .max(event.maxParticipants, {
        message: `Maximum ${event.maxParticipants} participants are allowed`,
      }),
    screenshot: z
      .any()
      // To not allow empty files
      .refine((file) => file != null, { message: 'Image is required.' }),
  });

  if (event && !event.isGroup) {
    schema = schema.extend({
      participants: z.string().optional(),
    });
  }
  return schema;
};

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  contact: z
    .string()
    .min(1, { message: 'Contact is required' })
    .max(10, { message: 'Contact should be 10 digits' }),
  college: z.string().min(1, { message: 'College is required' }),
  utrNumber: z.string().min(1, { message: 'UTR Number is required' }),
  noOfParticipants: z.string().optional(),
  participants: z.string().optional(),
  screenshot: z
    .any()
    .refine((file) => file != null, { message: 'Image is required.' }),
});

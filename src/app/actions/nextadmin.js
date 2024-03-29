'use server';
import { ActionParams } from '@premieroctet/next-admin';
import { submitForm } from '@premieroctet/next-admin/dist/actions';
import prisma from '../../utils/client';

export const submitFormAction = async (params, formData) => {
  return submitForm({ ...params, options: {}, prisma }, formData);
};

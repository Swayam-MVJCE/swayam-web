'use server';
import { ActionParams } from '@premieroctet/next-admin';
import {
  deleteResourceItems,
  searchPaginatedResource,
  submitForm,
} from '@premieroctet/next-admin/dist/actions';
import prisma from '../../utils/client';

export const submitFormAction = async (params, formData) => {
  return submitForm({ ...params, options: {}, prisma }, formData);
};

export const deleteItem = async (model, ids) => {
  return deleteResourceItems(prisma, model, ids);
};

export const searchResource = async (actionParams, params) => {
  return searchPaginatedResource(
    { ...actionParams, options: {}, prisma },
    params
  );
};

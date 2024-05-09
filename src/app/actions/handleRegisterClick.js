'use server';

import { redis } from '@/utils/client';

export async function handleRegisterClick(slug) {
  console.log('Register button clicked');
  try {
    redis.incr(`registration-clicks:${slug}`);
  } catch (error) {
    console.error(error);
  }
}

import { PrismaClient } from '@prisma/client';
import { createCache } from 'async-cache-dedupe';
import { Redis } from 'ioredis';
import prismaCache from '@yxx4c/prisma-redis-cache';

const redis = new Redis(process.env.REDIS_URL);

const cache = createCache({
  ttl: 3600, // Cache TTL in seconds
  stale: 3600, // Stale TTL in seconds
  storage: {
    type: 'redis',
    options: {
      client: redis,
      invalidation: { referencesTTL: 60 }, // Invalidation settings
      log: console, // Logger for cache events
    },
  },
});

const prismaClientSingleton = () => {
  const prisma = new PrismaClient();
  const prismaWithCache = prisma.$extends(prismaCache({ redis, cache }));
  return prismaWithCache;
};

if (typeof global.prismaGlobal === 'undefined') {
  global.prismaGlobal = prismaClientSingleton();
}

const prisma = global.prismaGlobal || prismaClientSingleton();

module.exports = prisma;

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

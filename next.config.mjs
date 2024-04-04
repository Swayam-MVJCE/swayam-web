/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    swcPlugins: [
      [
        'next-superjson-plugin',
        {
          excluded: [],
        },
      ],
    ],
  },
};

export default withPlaiceholder(nextConfig);

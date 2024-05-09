import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './provider';
import { ToastContainer, toast } from 'react-toastify';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const mirthaDisplay = localFont({
  src: '../../public/fonts/mirtha-display.woff2',
  display: 'swap',
  variable: '--font-mirtha',
  preload: true,
});

const satoshi = localFont({
  src: '../../public/fonts/satoshi-variable.woff2',
  display: 'swap',
  variable: '--font-satoshi',
});

const chamisty = localFont({
  src: '../../public/fonts/chamisty.ttf',
  display: 'swap',
  variable: '--font-chamisty',
});

export const metadata = {
  title: 'Swayam 2024 - MVJCE',
  description:
    'MVJCE Swayam 2024 - Annual Cultural Fest of MVJ College of Engineering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${mirthaDisplay.variable} ${satoshi.variable} ${chamisty.variable} overflow-x-hidden overflow-y-scroll`}
      >
        <NextTopLoader color="#c800ff" />
        <Providers>{children}</Providers>
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}

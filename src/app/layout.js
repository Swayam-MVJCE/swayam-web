import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './provider';
import { ToastContainer, toast } from 'react-toastify';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const mirthaDisplay = localFont({
  src: '../../public/fonts/mirtha-display.woff2',
  display: 'swap',
  variable: '--font-mirtha',
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
      <body
        className={`${inter.variable} ${mirthaDisplay.variable} ${satoshi.variable} ${chamisty.variable} overflow-x-hidden`}
      >
        <NextTopLoader color="#c800ff" />
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}

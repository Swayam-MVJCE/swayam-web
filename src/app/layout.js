import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

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

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${mirthaDisplay.variable} ${satoshi.variable}`}
      >
        <Navbar />
        {children}
        <div className='bg-image'></div>
        <div className='bg-gradient'></div>
      </body>
    </html>
  );
}

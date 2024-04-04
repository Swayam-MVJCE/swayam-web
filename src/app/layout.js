import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const mirthaDisplay = localFont({
  src: "../../public/fonts/mirtha-display.woff2",
  display: "swap",
  variable: "--font-mirtha",
});

const satoshi = localFont({
  src: "../../public/fonts/satoshi-variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const chamisty = localFont({
  src: "../../public/fonts/chamisty.ttf",
  display: "swap",
  variable: "--font-chamisty",
});

export const metadata = {
  title: "Swayam 2024 - MVJCE",
  description:
    "MVJCE Swayam 2024 - Annual Cultural Fest of MVJ College of Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${inter.variable} ${mirthaDisplay.variable} ${satoshi.variable} ${chamisty.variable} overflow-hidden`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}

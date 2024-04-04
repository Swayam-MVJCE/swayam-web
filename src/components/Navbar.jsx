"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-screen relative flex flex-row items-center justify-between md:px-14 px-4 py-4 z-10">
      <Link href="/">
        <img
          src="/images/mvj-logo.png"
          className=" h-8 md:h-20 object-fit hover:scale-105 transition duration-200 "
        />
      </Link>
      <Link href="/">
        <img
          src="/images/swayam-logo.svg"
          className="h-8 md:h-14 object-fit -ml-5 md:ml-0 hover:scale-105 transition duration-200 "
        />
      </Link>
      <div className="hidden md:flex flex-row items-center justify-evenly gap-6 text-md font-satoshi text-[#D6D6D6]">
        {session ? (
          <>
            <Link
              href="/"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Events
            </Link>
            <Link
              href="/guidelines"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Guidelines
            </Link>
            <Link
              href="#"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Contact
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-4 hover:bg-gray-500 p-3 rounded-md transition">
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {/* <p className="font-bold">{session.user.name}</p> */}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-medium">
                <DropdownMenuItem>
                  <Link href="/events">My Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button onClick={() => signOut({ callbackUrl: "/" })}>
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Events
            </Link>
            <Link
              href="/guidelines"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Guidelines
            </Link>
            <Link
              href="#"
              className="transition hover:text-rose-300 hover:scale-105 duration-300"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="transition hover:text-rose-300 hover:scale-105 duration-300 font-extrabold"
            >
              Login
            </Link>
          </>
        )}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute flex flex-col gap-3 font-satoshi top-20 left-0 bg-black bg-opacity-35 w-full py-6 px-8 rounded-md shadow-md">
          {session ? (
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/guidelines">Guidelines</Link>
              <Link href="#">Contact</Link>
              <button
                className="text-start"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/guidelines">Guidelines</Link>
              <Link href="#">Contact</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

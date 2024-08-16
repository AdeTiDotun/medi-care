import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  // State to manage hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar Session */}
      <div className="bg-green-000 py-6 px-8 md:px-12 text-gray-800 flex flex-wrap items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold italic text-green-800 font-fancy">
            MediCare
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-green-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (Desktop and Mobile) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 right-0 bg-green-300 md:bg-transparent md:static md:flex md:flex-row md:items-center md:gap-6 md:mt-0 mt-4`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-lg md:text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/hospital">Hospitals</Link>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4 md:mt-0">
            <Link href="/sign_in">
              <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                Sign in
              </button>
            </Link>
            <Link href="">
              <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

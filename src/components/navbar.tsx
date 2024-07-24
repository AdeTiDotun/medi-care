import React from "react";
import Link from "next/link";
import SignIn from "@/app/sign_in/page";

const Nav = () => {
  return (
    <>
      {/* Navbar Session */}
      <div className="flex justify-between bg-white py-2 px-10 text-gray-800">
        <div>
          <h1 className="font-bold text-5xl font-bold italic">MediCare</h1>
        </div>

        <div>
          <ul className="flex gap-40 text-xl pt-4  ">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <li>Find Hospitals</li>
            <li>
              <Link href="/sign_in">
                <button className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-5">
                  sign in
                </button>
              </Link>
            </li>
            <Link href="">
              <li>
                <button className="py-2 px-4 bg-green-500 text-white font-bold rounded">
                  Sign Out
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

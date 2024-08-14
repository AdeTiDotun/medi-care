import React from "react";
import Link from "next/link";
import SignIn from "@/app/sign_in/page";
import SearchHospital from "./hospitalsearch";

const Nav = () => {
  return (
    <>
      {/* Navbar Session */}
      <div className="flex justify-between py-2 px-10 text-gray-800">
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
            <Link href="/hospital/hospitalsearch"> <li>Hospitals</li></Link>
           
            <li>
              <Link href="/sign_in">
                <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-5">
                  Sign in
                </button>
              </Link>
            </li>
            <Link href="">
              <li>
                <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mb-5">
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

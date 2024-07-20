import React from "react";
import Link from "next/link";
import SignIn from "@/app/sign_in/page";

const Nav = () => {
  return (
    <>
      <div className="flex gap-60 navbar pt-4 pb-4 text-gray-600 bg-white">
        <div className="pt-3 ml-6">
          <h1 className="text-xl font-bold font-sans">MediCare</h1>
        </div>
        <div>
          <ul className="flex gap-40 pt-4 pb-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>How it works</li>
            <li>Contact us</li>
            <li>Admin Login</li>
          </ul>
        </div>
        <div>
          <ul className="sign_up flex pt-4 pb-4 gap-20 mx-4">
            <li>
            <Link href="/sign_in">Sign In</Link>
            </li>
            <li>
              <button>sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

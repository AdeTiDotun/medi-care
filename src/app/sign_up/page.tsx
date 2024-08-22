'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/config";
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true.toString());
      setEmail("");
      setPassword("");
      router.push('/sign_in');
    } catch (e) {
      console.error(e);
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center my-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome Back!</h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl pt-5">Register an account</h2>
      </div>

      <div>
        <form onSubmit={handleSignUp} className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label htmlFor="Umail" className="text-lg sm:text-xl block">
              Your Email
            </label>
            <input
              type="email"
              id="Umail"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full py-3 px-4 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="Upassword" className="text-lg sm:text-xl block">
              Your Password
            </label>
            <input
              type="password"
              id="Upassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full py-3 px-4 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="mt-4 text-center">
        <p className="text-base">
          Already have an account? <Link href="/sign_in" className="text-green-500 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

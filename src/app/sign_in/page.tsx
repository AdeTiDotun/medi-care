'use client'

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../firebase/config";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true.toString());
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center my-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">Welcome Back!</h1>
        <h2 className="text-xl sm:text-2xl pt-4">Login to your account</h2>
      </div>
      <form>
        <div className="space-y-4">
          <div>
            <label htmlFor="Umail" className="block text-lg">
              Your Email
            </label>
            <input
              type="email"
              id="Umail"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 border-green-500 border-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="Upassword" className="block text-lg">
              Your Password
            </label>
            <input
              type="password"
              id="Upassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 border-green-500 border-2 rounded-md"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
      <div className="text-center mt-6">
        <p>Don&apos;t have an account? <Link href="/sign_up" className="text-green-500 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;

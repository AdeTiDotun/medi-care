'use client'

import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "../../../firebase/config";
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.setItem('user', true.toString())
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };
  return (
    <>
      <div className="w-1/2 mx-auto px-8">
        <div className="text-center mx-9 my-10">
          <h1 className="text-5xl">Welcome Back!</h1>
          <h2 className="text-2xl pt-5">Login to your account</h2>
        </div>
        <div className="mx-9">
          <form>

            <label htmlFor="Umail" className="text-2xl">
              Your Email
            </label>
            <br />
            <input
              type="email"
              id="Umail"
              placeholder="example@gmail.com"
              value={email} 
          onChange={(e) => setEmail(e.target.value)}
              className="my-5 w-96 py-6 px-5 border-green border-2"
            />
            <br />
            <label htmlFor="Upassword" className="text-2xl">
              Your Password
            </label>
            <br />
            <input
              type="password"
              id="Upassword"
              placeholder="Enter your password"
              value={password} 
          onChange={(e) => setPassword(e.target.value)} 
              className="my-5 w-96 py-6 px-5 border-green border-2"
            /> <br />
             <button  onClick={handleSignIn} className="border-green border-2 bg-green-500 rounded w-80 mx-auto py-5 text-center text-white text-2xl hover:bg-white hover:text-black ">
            Log in
          </button><br />
          </form>
        </div>
        <div className="mt-5 text-center">
          < button className="border-2 border-black my-5 w-80 px-5 py-6 text-xl">
            Sign in with Google
          </button>
        </div>
        <div className="text-center">
          <p>Don&apos;t have an account? <Link href="/sign_up">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
